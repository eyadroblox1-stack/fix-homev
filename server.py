#!/usr/bin/env python3
"""Local development server with SPA fallback for TM Maintenance site."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os
ROOT = Path(__file__).resolve().parent
class TMHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)
    def do_GET(self):
        requested = self.translate_path(self.path.split('?', 1)[0])
        path = Path(requested)
        # Existing assets and well-known files are served normally; app routes fall back to index.html.
        if not path.exists() and not self.path.split('?', 1)[0].endswith(('.js', '.css', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.woff', '.woff2', '.ico', '.xml', '.txt')):
            self.path = '/index.html'
        return super().do_GET()
if __name__ == '__main__':
    port = int(os.environ.get('PORT', '8080'))
    print(f'TM Maintenance local preview: http://127.0.0.1:{port}')
    ThreadingHTTPServer(('127.0.0.1', port), TMHandler).serve_forever()
