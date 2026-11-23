/* blob:https://challenges.cloudflare.com/6fe0ff2f-e439-4f8c-bc28-6f9ae1d96bd4 */
var _p = null;
if (self.trustedTypes) try {
  _p = self.trustedTypes.createPolicy('_70deac258731c5385bd30c63', {
    createScript: function(s) {
      return s;
    }
  })
} catch (e) {
  self.postMessage({
    '_f9bded096fba49b7e86fc36e': '_71bb0dc27ee8b4f7724fc562',
    '_ead29e9de88e873199b370cd': e.message
  })
}
onmessage = function(e) {
  e.isTrusted && '' === e.origin && null === e.source && eval(_p ? _p.createScript(e.data) : e.data)
}