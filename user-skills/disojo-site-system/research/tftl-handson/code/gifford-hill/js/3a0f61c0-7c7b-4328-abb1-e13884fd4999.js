/* blob:https://challenges.cloudflare.com/3a0f61c0-7c7b-4328-abb1-e13884fd4999 */
var _p = null;
if (self.trustedTypes) try {
  _p = self.trustedTypes.createPolicy('_13af74322d7b203085daba26', {
    createScript: function(s) {
      return s;
    }
  })
} catch (e) {
  self.postMessage({
    '_df387a79cb27ac7ac62ebcb4': '_4c17ee369eb814d3640e2991',
    '_b74f51b76cacd82eb1b09408': e.message
  })
}
onmessage = function(e) {
  e.isTrusted && '' === e.origin && null === e.source && eval(_p ? _p.createScript(e.data) : e.data)
}