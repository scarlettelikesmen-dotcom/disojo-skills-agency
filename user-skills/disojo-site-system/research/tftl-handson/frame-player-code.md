# The scroll-film player, read in code (2026-11-23)

Seen on Son Daven, Santal, Hilight and Lenval. Read in full on Lenval (`code/lenval-properties/js/ActiveFrame.js`, 6.6 KB, plus `59707.js:1393`) and Hilight (`code/hilight/js/g4UUSNTr.js:19837-20200`). Study only.

## What it is
A film that plays forward and back with the scroll, frame exact, without a pile of JPGs and without a `<video>` element seeking (which stutters). The browser's own video decoder (WebCodecs `VideoDecoder`) decodes only the frame the scroll asks for and draws it to a canvas.

## The file (`.af`)
One binary file per film: the encoded video frames back to back, then a JSON manifest, then 4 bytes (little-endian uint32) giving where the JSON starts.
Manifest: `codec`, `width`, `height`, `description` (base64 decoder config), `totalFrames`, and `frames: [{ i, t (timestamp), o (offset), l (length), ty: "key" | "delta" }]`.
Lenval ships each film twice, H.265 and H.264, 1920 wide, about **4.3 MB** each for a short project film.

## How it plays
- Load: fetch the whole file once (cached per URL), read the manifest, wrap each frame's bytes in a view.
- Decoder config: tries four combinations (hardware + low latency, hardware, low latency, plain) and keeps the first the browser supports. Colour bt709.
- `setFrame(n)`:
  - next frame and it is a delta frame: decode just that one (cheap, the normal case while scrolling forward)
  - any other jump: reset the decoder, find the nearest key frame at or before n, decode from it up to n
  - decoded frames that are not the wanted one are closed straight away; only the wanted one is drawn
- Draw: canvas sized to its box times devicePixelRatio, the frame drawn "cover" (scale = max of the two ratios, centred).

## How scroll drives it
Lenval: `ScrollTrigger` on the wrapper, start `top 25%`, end `bottom 75%`, **scrub 1**, `onUpdate: setFrame(round(progress * (totalFrames - 1)))`. Desktop only (inside a matchMedia on the breakpoint). Codec check: H.265 `hvc1.1.6.L120.90` first, then H.264 `avc1.42c033`; neither supported means the canvas stays empty (a poster sits behind it).
Hilight adds three things worth taking:
1. Only at 1024 px and up and only when `VideoDecoder` exists; otherwise a poster JPG per page (`/posters/<page>.jpg`).
2. Windows and Android get `prefer-software` and H.264 only (hardware H.265 is unreliable there); Mac and iPhone get H.265 first.
3. One sequence per page (home, services, about, career), chosen from the route.
Cleanup on page leave: wait for loading, then `destroy()` (close decoder, drop buffers).

## What we would need to build our own
- The player is small (about 200 lines). Ours: one `data-film` module in the kernel, same shape, cleaned up on page leave.
- The hard part is the file maker: encode with ffmpeg (short key frame interval, for example every 12 to 24 frames, so a jump back is cheap), demux to raw frames with their type and timestamp, write frames + manifest + offset. A Node script, about 100 lines. Built 2026-11-23, see below.
- Phone and unsupported browsers: a poster, or a plain muted video. Never a blank box.
- Only worth it when the client has real film that tells something as you scroll (a building being made, an object turning). A film for its own sake is a trick.

## Honest
Read from shipped code; not run by us. The `.af` maker is TFTL's own and is not public, so the encode settings (key frame interval, bitrate) are not known; we would set our own and measure.

## Pictures
The film itself shows in the Lenval loader strip (`moments/lenval-properties-loader.jpg`, frames after the slit opens) and in `scan/lenval-properties/` scroll frames.

## Built from this (2026-11-23)
- **Maker:** `kernel/tools/make-film.cjs <in> <out.film> [width=1920] [fps=30] [keyint=12] [crf=23]`. ffmpeg + libx264, no B-frames, a key frame every 12, one slice, access-unit delimiters so frames split cleanly; writes frames + manifest + offset (same shape as the studied file, our own name `.film`). H.264 Annex B only (no H.265 yet). Test: 4 s pattern at 1280 = 120 frames, 10 keys, 1.17 MB.
- **Player:** `kernel/src/kernel/film.js`, `data-film="/films/x.film"` with `data-film-poster`, optional `[data-film-track]` parent as the trigger, `data-film-start` / `data-film-end`. Desktop 992+ only, needs `VideoDecoder`, reduced motion and phones keep the poster. Windows and Android prefer software decode. Next frame = one decode; a jump decodes from the nearest key; a forward jump inside the same group continues without a reset. Drawn "cover" at up to 2x. Cleaned up on page leave.
- **Lab:** `/film/` on :4790, a 400svh track with the film sticky. Checked at 1512: decodes, different frames at 10% and 50%, scrolling back shows earlier frames, no console errors (`moments/lab-film-10.jpg`, `lab-film-50.jpg`).
- **Untested:** Safari, Firefox, real phones, a real client film, file size on a long film.
