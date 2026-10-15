/* Unit test for the booking handler; uses Node built-ins and a minimal DOM double. */
const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const source = fs.readFileSync(require('path').join(__dirname, '..', 'script.js'), 'utf8');
const start = source.indexOf("const bookingForm = document.getElementById('booking-form');");
const end = source.indexOf('// Accessible interaction support for custom cards and accordion controls.', start);
assert(start >= 0 && end > start, 'booking handler block must be present');
const handlerSource = source.slice(start, end);

function makeEnv(phoneValue) {
  const listeners = {};
  const openedUrls = [];
  const status = { className: '', textContent: '' };
  const button = { innerHTML: '', attrs: {}, setAttribute(k, v) { this.attrs[k] = v; } };
  const makeField = (value = '') => ({
    value, validityMessage: '', reported: false,
    setCustomValidity(v) { this.validityMessage = v; },
    reportValidity() { this.reported = true; return !this.validityMessage; },
    addEventListener() {}
  });
  const fields = {
    '#full_name': makeField('Test Customer'),
    '#phone_number': makeField(phoneValue),
    '#device_type': makeField('washing-machine'),
    '#brand_type': makeField('Samsung'),
    '#gov-select': makeField('Cairo'),
    '#area-select': makeField('Nasr City'),
    '#street-input': makeField('Test Street'),
    '#generic-address-input': makeField('Test Building'),
    '#fault-desc': makeField('Washer does not drain')
  };
  const honeypot = makeField('');
  const form = {
    addEventListener(name, fn) { listeners[name] = fn; },
    querySelector(sel) { if (sel === 'input[name="honeypot"]') return honeypot; return fields[sel] || null; },
    reportValidity() { return true; },
    appendChild() {}
  };
  const document = {
    getElementById(id) {
      return id === 'booking-form' ? form : id === 'submit-btn' ? button : id === 'booking-status' ? status : null;
    },
    createElement() { return { className:'', textContent:'', attrs:{}, setAttribute(k,v){this.attrs[k]=v;} }; }
  };
  const window = {
    open(url) {
      if (url !== 'about:blank') openedUrls.push(url);
      const popup = { opener: {}, location: { href: '' } };
      openedUrls.push(popup);
      return popup;
    }
  };
  vm.runInNewContext(handlerSource, { document, window, encodeURIComponent, console });
  return { listeners, openedUrls, status, button, fields };
}

// Valid request opens the correct WhatsApp destination with encoded request details.
const valid = makeEnv('01127893459');
assert.strictEqual(typeof valid.listeners.submit, 'function', 'submit listener should be registered');
let prevented = false;
valid.listeners.submit({ preventDefault() { prevented = true; } });
assert(prevented, 'form default submission should be prevented');
assert(valid.status.textContent.includes('لم يُرسل الطلب تلقائيًا'), 'status must state that the request was not sent automatically');
const popup = valid.openedUrls.find(x => typeof x === 'object');
assert(popup && popup.location.href.startsWith('https://wa.me/201127893459?text='), 'WhatsApp international destination should be correct');
const decoded = decodeURIComponent(popup.location.href.split('?text=')[1]);
assert(decoded.includes('Test Customer') && decoded.includes('01127893459') && decoded.includes('Washer does not drain'), 'message should include supplied request details');
assert.strictEqual(popup.opener, null, 'opened page opener should be severed');

// Invalid Egyptian mobile number must be rejected before opening WhatsApp.
const invalid = makeEnv('123');
invalid.listeners.submit({ preventDefault() {} });
assert.strictEqual(invalid.openedUrls.length, 0, 'invalid number must not open WhatsApp');
assert(invalid.fields['#phone_number'].validityMessage.length > 0, 'invalid phone should get a clear validation message');

console.log('PASS: valid booking builds the expected WhatsApp message and reports no automatic send');
console.log('PASS: invalid Egyptian mobile number is rejected');
