/* blob:https://challenges.cloudflare.com/c8975182-1e57-476c-a0c5-1b596fad1b9e */
var _p = null;
if (self.trustedTypes) try {
  _p = self.trustedTypes.createPolicy('_8e598e1003a77d025b929abb', {
    createScript: function(s) {
      return s;
    }
  })
} catch (e) {
  self.postMessage({
    '_72dcb9c1e536697e5233ac49': '_ef590ba52d8d43797a535307',
    '_108061a84388833f416d2a60': e.message
  })
}
onmessage = function(e) {
  e.isTrusted && '' === e.origin && null === e.source && eval(_p ? _p.createScript(e.data) : e.data)
}