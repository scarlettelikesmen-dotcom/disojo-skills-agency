/* https://hilight.design/_nuxt/Fjg1XfjS.js */
function s(t) {
  if (!t) return "";
  let e = t.replace(/\s*style\s*=\s*(['"])[\s\S]*?\1/gi, ""),
    r = "";
  for (; e !== r;) r = e, e = e.replace(/<(span|font)\b[^>]*>([^<]*)<\/\1>/gi, "$2");
  return e.trim()
}
export {
  s
};