/* blob:https://challenges.cloudflare.com/9ebfabc0-e416-41c3-93e8-13607ed58b13 */
var _p = null;
if (self.trustedTypes) try {
  _p = self.trustedTypes.createPolicy('_3143087a0e25b60b95e0dbd1', {
    createScript: function(s) {
      return s;
    }
  })
} catch (e) {
  self.postMessage({
    '_454b6274769856d3bd4b0c0a': '_7dca991a5f412aa062bad514',
    '_ba6dc1ac4198e2edd42fc465': e.message
  })
}
onmessage = function(e) {
  e.isTrusted && '' === e.origin && null === e.source && eval(_p ? _p.createScript(e.data) : e.data)
}