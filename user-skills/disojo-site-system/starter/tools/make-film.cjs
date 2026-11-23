// Make a scroll-film file (.film) for the kernel's data-film player.
// Usage: node make-film.cjs <input video> <out.film> [width=1920] [fps=30] [keyint=12] [crf=23]
// Format (our own, same shape as the one studied in research/tftl-handson/frame-player-code.md):
//   frames back to back (H.264 Annex B access units), then a JSON manifest, then 4 bytes LE uint32 = manifest offset.
//   manifest: { codec, width, height, fps, totalFrames, frames: [{ i, t, o, l, ty: "key"|"delta" }] }
// No B-frames, a key frame every <keyint> frames, so any frame is at most keyint-1 decodes away.
const { execFileSync } = require('child_process');
const fs = require('fs');
const [inp, out, W = '1920', FPS = '30', KEY = '12', CRF = '23'] = process.argv.slice(2);
if (!inp || !out) { console.error('usage: node make-film.cjs <in> <out.film> [width] [fps] [keyint] [crf]'); process.exit(1); }

const raw = execFileSync('ffmpeg', ['-v', 'error', '-i', inp, '-an',
  '-vf', `scale=${W}:-2:flags=lanczos,fps=${FPS},format=yuv420p`,
  '-c:v', 'libx264', '-profile:v', 'high', '-preset', 'slow', '-crf', CRF,
  '-bf', '0', '-g', KEY, '-keyint_min', KEY, '-sc_threshold', '0',
  '-x264-params', 'slices=1:repeat-headers=1:aud=1', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-colorspace', 'bt709',
  '-f', 'h264', 'pipe:1'], { maxBuffer: 1 << 30 });

// split Annex B into NAL units: [start, end, type]
const nals = []; let i = 0, last = -1;
while (i < raw.length - 3) {
  const sc3 = raw[i] === 0 && raw[i + 1] === 0 && raw[i + 2] === 1;
  const sc4 = raw[i] === 0 && raw[i + 1] === 0 && raw[i + 2] === 0 && raw[i + 3] === 1;
  if (sc3 || sc4) { if (last >= 0) nals.push(last); last = i; i += sc4 ? 4 : 3; } else i++;
}
if (last >= 0) nals.push(last);
const typeAt = s => raw[s + (raw[s + 2] === 1 ? 3 : 4)] & 31;

// access units start at each access unit delimiter (type 9), thanks to aud=1
const aus = []; let cur = null;
nals.forEach((s, k) => {
  const t = typeAt(s), e = k + 1 < nals.length ? nals[k + 1] : raw.length;
  if (t === 9 || !cur) { cur = { o: s, l: 0, key: false }; aus.push(cur); }
  cur.l = e - cur.o; if (t === 5) cur.key = true;
  if (t === 7 && !aus.sps) aus.sps = raw.subarray(s + (raw[s + 2] === 1 ? 4 : 5), s + 8);
});
const hex = b => b.toString(16).padStart(2, '0');
const codec = `avc1.${hex(aus.sps[0])}${hex(aus.sps[1])}${hex(aus.sps[2])}`;
const tmp = require('os').tmpdir() + `/film-${process.pid}.h264`; fs.writeFileSync(tmp, raw);
const [w, h] = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', tmp]).toString().trim().split(',').map(Number);
fs.unlinkSync(tmp);

const frames = aus.map((a, n) => ({ i: n, t: Math.round(n * 1e6 / +FPS), o: a.o, l: a.l, ty: a.key ? 'key' : 'delta' }));
if (frames[0].ty !== 'key') throw new Error('first frame is not a key frame');
const manifest = Buffer.from(JSON.stringify({ codec, width: w, height: h, fps: +FPS, totalFrames: frames.length, frames }));
const tail = Buffer.alloc(4); tail.writeUInt32LE(raw.length, 0);
fs.writeFileSync(out, Buffer.concat([raw, manifest, tail]));
console.log(out, codec, `${w}x${h}`, frames.length, 'frames', frames.filter(f => f.ty === 'key').length, 'keys', (fs.statSync(out).size / 1e6).toFixed(2), 'MB');
