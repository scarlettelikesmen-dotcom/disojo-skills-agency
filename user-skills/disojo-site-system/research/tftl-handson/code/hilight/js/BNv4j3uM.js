/* https://hilight.design/_nuxt/BNv4j3uM.js */
import {
  p as s,
  s as t
} from "#entry";

function d(o) {
  const e = n => {
    n.key !== "Escape" || n.repeat || o()
  };
  s(() => window.addEventListener("keydown", e)), t(() => window.removeEventListener("keydown", e))
}
export {
  d as u
};