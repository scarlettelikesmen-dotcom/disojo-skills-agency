/* https://13322566869.com/_nuxt/setPhotoFormat.dfb16e11.js */
const o = t => t ? new Date(t).toLocaleString("en-US", {
    month: "short",
    year: "numeric"
  }) : null,
  r = (t, e) => t.replace("/uploads/", `/uploads/${e}_`);
export {
  o as f, r as s
};