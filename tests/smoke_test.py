"""Dependency-free static smoke checks for the TM maintenance website."""
from __future__ import annotations
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import json
import re
import shutil
import subprocess
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]

class MarkupAudit(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.assets = []
        self.phone_links = []
        self.whatsapp_links = []
        self.images = []
        self.labels = []
        self.fields = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'):
            self.ids.append(a['id'])
        for attr in ('src', 'href'):
            value = a.get(attr, '')
            if value.startswith(('assets/', 'script.js', 'style.css', 'server.py')):
                self.assets.append((tag, attr, value))
        if tag == 'a' and a.get('href', '').startswith('tel:'):
            self.phone_links.append(a['href'])
        if tag == 'a' and a.get('href', '').startswith('https://wa.me/'):
            self.whatsapp_links.append(a['href'])
        if tag == 'img':
            self.images.append((a.get('src', ''), a.get('alt', '')))
        if tag == 'label' and a.get('for'):
            self.labels.append(a['for'])
        if tag in ('input', 'select', 'textarea') and a.get('id'):
            self.fields.append((a['id'], 'required' in a, a.get('type', '')))

def fail(message):
    print(f'FAIL: {message}')
    return 1

def main():
    errors = []
    html_path = ROOT / 'index.html'
    js_path = ROOT / 'script.js'
    css_path = ROOT / 'style.css'
    if not all(p.exists() for p in (html_path, js_path, css_path)):
        return fail('One or more main application files are missing.')

    html_text = html_path.read_text(encoding='utf-8')
    js_text = js_path.read_text(encoding='utf-8')
    css_text = css_path.read_text(encoding='utf-8')
    parser = MarkupAudit()
    parser.feed(html_text)
    parser.close()

    duplicates = [key for key, count in Counter(parser.ids).items() if count > 1]
    if duplicates:
        errors.append(f'Duplicate HTML IDs: {duplicates}')
    if not re.search(r'<html[^>]*(?:\blang="ar"[^>]*\bdir="rtl"|\bdir="rtl"[^>]*\blang="ar")', html_text, re.I):
        errors.append('Arabic lang/RTL declaration is missing or not recognizable.')
    if not re.search(r'<title>[^<]+</title>', html_text, re.I):
        errors.append('Page title is missing.')

    # Local asset references must exist inside the project folder.
    for tag, attr, value in parser.assets:
        clean = value.split('?', 1)[0].split('#', 1)[0]
        if clean.startswith('/'):
            clean = clean.lstrip('/')
        if not (ROOT / clean).is_file():
            errors.append(f'Missing local asset reference: <{tag} {attr}="{value}">')

    # All current site images should be bundled rather than hotlinked.
    remote_images = [(src, alt) for src, alt in parser.images if src.startswith(('http://', 'https://'))]
    if remote_images:
        errors.append(f'External image URLs remain: {remote_images}')
    empty_alt = [src for src, alt in parser.images if src and not alt.strip()]
    # Decorative images may have empty alt by design; report, don't fail.
    if empty_alt:
        print(f'WARN: {len(empty_alt)} image(s) use empty alt text; verify whether they are decorative.')

    if set(parser.phone_links) != {'tel:01127893459'}:
        errors.append(f'Phone links differ from the requested number: {sorted(set(parser.phone_links))}')
    wa_numbers = {re.match(r'https://wa\.me/(\d+)', u).group(1) for u in parser.whatsapp_links if re.match(r'https://wa\.me/(\d+)', u)}
    if wa_numbers and wa_numbers != {'201127893459'}:
        errors.append(f'Unexpected WhatsApp target(s): {sorted(wa_numbers)}')
    if re.search(r'01100786152|201100786152', html_text + js_text):
        errors.append('An old center phone number is still present in active HTML/JavaScript.')
    if 'script.google.com/macros' in js_text or 'no-cors' in js_text:
        errors.append('Old opaque external form-submission behavior remains.')
    if "window.open('about:blank', '_blank')" not in js_text or 'https://wa.me/201127893459?text=' not in js_text:
        errors.append('WhatsApp booking hand-off is not present as expected.')
    if 'node.textContent = text' not in js_text:
        errors.append('Chat messages are not assigned using textContent.')
    if re.search(r'https?://(?:i\.postimg\.cc|images\.unsplash\.com)', html_text + js_text + css_text):
        errors.append('Old externally hosted image sources remain.')

    # Label and required-field checks.
    labeled_fields = [field for field, required, typ in parser.fields if field in parser.labels]
    form_required = [field for field, required, typ in parser.fields if required and field in {'full_name','phone_number','device_type','brand_type','gov-select'}]
    for field in ('full_name', 'phone_number', 'device_type', 'brand_type', 'gov-select'):
        if field not in labeled_fields:
            errors.append(f'Booking field {field!r} has no associated label.')
        if field not in form_required:
            errors.append(f'Required booking field {field!r} is missing HTML required validation.')

    # Sitemap XML and URL uniqueness.
    try:
        sitemap = ET.parse(ROOT / 'sitemap.xml').getroot()
        locs = [el.text for el in sitemap.iter() if el.tag.endswith('loc') and el.text]
        if len(locs) != len(set(locs)):
            errors.append('Sitemap has duplicate URLs.')
        if not locs:
            errors.append('Sitemap contains no URLs.')
    except Exception as exc:
        errors.append(f'Sitemap XML parsing failed: {exc}')

    # SVG assets must be valid XML. Raster metadata must be readable if Pillow is installed.
    for svg in (ROOT / 'assets').glob('*.svg'):
        try:
            ET.parse(svg)
        except Exception as exc:
            errors.append(f'Invalid SVG {svg.name}: {exc}')
    png = ROOT / 'assets' / 'hero-appliances.png'
    if not png.is_file() or png.stat().st_size < 1000:
        errors.append('Open Graph PNG is missing or suspiciously small.')
    else:
        try:
            from PIL import Image
            with Image.open(png) as image:
                if image.width < 1000 or image.height < 600:
                    errors.append(f'Open Graph PNG dimensions are unexpectedly small: {image.size}')
        except ImportError:
            print('WARN: Pillow not installed; PNG metadata was not read.')
        except Exception as exc:
            errors.append(f'Open Graph PNG could not be opened: {exc}')

    # Syntax check when Node is present (Node is a test-only tool, not a site dependency).
    node = shutil.which('node')
    if node:
        run = subprocess.run([node, '--check', str(js_path)], capture_output=True, text=True)
        if run.returncode:
            errors.append('Node JavaScript syntax check failed: ' + (run.stderr.strip() or run.stdout.strip()))
        else:
            print('PASS: node --check script.js')
    else:
        print('WARN: Node.js unavailable; JavaScript syntax check skipped.')

    if errors:
        for error in errors:
            print('FAIL:', error)
        return 1

    print('PASS: main files present')
    print(f'PASS: {len(parser.ids)} HTML IDs, no duplicate IDs')
    print(f'PASS: {len(parser.images)} HTML images; all are local and all referenced assets exist')
    print(f'PASS: all phone links target tel:01127893459; WhatsApp links use {sorted(wa_numbers) or ["none"]}')
    print(f'PASS: {len(locs)} unique sitemap URLs and valid XML')
    print(f'PASS: all {len(list((ROOT / "assets").glob("*.svg")))} SVG files parse as XML')
    print('PASS: booking fields have labels and required validation')
    print('PASS: opaque legacy form endpoint and remote stock-image references are absent')
    print('NOTE: this smoke test is static; it does not replace a real browser/WhatsApp end-to-end test.')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
