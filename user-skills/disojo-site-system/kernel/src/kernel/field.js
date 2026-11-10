// A shader field as an accent layer: plain WebGL, one full-screen triangle, no library.
// Colours from CSS (--k-field-a, --k-field-b, --k-field-bg). The pointer bends the field.
// Lazy-loaded after the intro, paused when off screen or the tab is hidden,
// one still frame under reduced motion. Written for Disojo, 2026-11-10.
import { gsap, reduced } from './motion.js';
import { onCleanup, onSuspend } from './life.js';

const VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0., 1.); }`;
const FRAG = `
precision highp float;
uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uReveal;
uniform vec3 uA; uniform vec3 uB; uniform vec3 uBg;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.-2.*f);
  return mix(mix(h(i), h(i+vec2(1,0)), u.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), u.x), u.y); }
float fbm(vec2 p){ float v = 0., a = .5; for(int i=0;i<5;i++){ v += a*n(p); p = p*2.03 + 7.1; a *= .5; } return v; }
void main(){
  vec2 uv = gl_FragCoord.xy / uRes; vec2 q = uv; q.x *= uRes.x / uRes.y;
  vec2 m = uMouse; m.x *= uRes.x / uRes.y;
  float t = uTime * .06;
  vec2 w = vec2(fbm(q*1.6 + t), fbm(q*1.6 - t + 3.7));
  float d = length(q - m);
  w += (q - m) * .35 * exp(-d*3.);              // pointer bends the flow
  float f = fbm(q*2.2 + w*1.8);
  float bands = smoothstep(.35, .75, f);
  vec3 col = mix(uA, uB, bands);
  float grain = (h(gl_FragCoord.xy + fract(uTime)) - .5) * .06;
  float edge = smoothstep(uReveal - .15, uReveal, 1. - uv.y + f*.15);  // reveal sweeps up through the field
  gl_FragColor = vec4(mix(uBg, col + grain, 1. - edge), 1.);
}`;

const rgb = v => {
  const c = document.createElement('canvas').getContext('2d');
  c.fillStyle = v || '#000'; c.fillRect(0, 0, 1, 1);
  const d = c.getImageData(0, 0, 1, 1).data; return [d[0] / 255, d[1] / 255, d[2] / 255];
};

export function startField(canvas) {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl) return;
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) console.warn(gl.getShaderInfoLog(s)); return s; };
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog); gl.useProgram(prog);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = n => gl.getUniformLocation(prog, n);
  const css = getComputedStyle(canvas);
  gl.uniform3fv(U('uA'), rgb(css.getPropertyValue('--k-field-a').trim()));
  gl.uniform3fv(U('uB'), rgb(css.getPropertyValue('--k-field-b').trim()));
  gl.uniform3fv(U('uBg'), rgb(css.getPropertyValue('--k-field-bg').trim()));

  const state = { reveal: 0, mx: .5, my: .5, tx: .5, ty: .5 };
  const size = () => {
    const dpr = Math.min(devicePixelRatio || 1, 1.5), r = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, r.width * dpr); canvas.height = Math.max(1, r.height * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height); gl.uniform2f(U('uRes'), canvas.width, canvas.height);
  };
  size();
  const ro = new ResizeObserver(size); ro.observe(canvas);
  const move = e => { const r = canvas.getBoundingClientRect(); state.tx = (e.clientX - r.left) / r.width; state.ty = 1 - (e.clientY - r.top) / r.height; };
  addEventListener('pointermove', move, { passive: true });

  let raf = 0, visible = true, hidden = false, t0 = performance.now();
  const frame = now => {
    state.mx += (state.tx - state.mx) * .06; state.my += (state.ty - state.my) * .06;
    gl.uniform1f(U('uTime'), (now - t0) / 1000);
    gl.uniform2f(U('uMouse'), state.mx, state.my);
    gl.uniform1f(U('uReveal'), state.reveal * 1.3);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    raf = (visible && !hidden && !reduced.matches) ? requestAnimationFrame(frame) : 0;
  };
  const kick = () => { if (!raf && visible && !hidden) raf = requestAnimationFrame(frame); };
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }); io.observe(canvas);
  onSuspend(h => { hidden = h; kick(); });

  if (reduced.matches) { state.reveal = 1; requestAnimationFrame(frame); }
  else { gsap.to(state, { reveal: 1, duration: 2.2, ease: 'inout', onUpdate: kick }); kick(); }

  onCleanup(() => {
    cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
    removeEventListener('pointermove', move);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  });
}
