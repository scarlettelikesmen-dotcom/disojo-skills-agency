#!/usr/bin/env python3
"""Virtual-tripod stabilisation data: per-frame translation (px at 1080x1920) that cancels the fast shake of base.mp4 inside each segment.
Face-filling handheld footage: phase-correlation shift per frame -> path per segment -> subtract a +-8 frame moving average -> negate. Applied in Remotion as translate() + scale(1.10)."""
import subprocess, numpy as np, json
HUB = '/Users/tejjo/Desktop/DISOJO SOLUTIONS/content-hub/'
base = HUB + 'edits/t2257/base.mp4'; offs = json.load(open(HUB + 'edits/t2257/base.json'))['offsets']
W, H = 216, 384
raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', base, '-vf', f'scale={W}:{H},format=gray', '-f', 'rawvideo', '-'], capture_output=True).stdout
f = np.frombuffer(raw, np.uint8).reshape(-1, H, W).astype(float); n = len(f)
win = np.outer(np.hanning(H), np.hanning(W))
def shift(a, b):
    A = np.fft.fft2((a - a.mean()) * win); B = np.fft.fft2((b - b.mean()) * win)
    R = A * np.conj(B); R /= np.abs(R) + 1e-9; r = np.fft.ifft2(R).real
    y, x = np.unravel_index(np.argmax(r), r.shape)
    return (x - W if x > W // 2 else x), (y - H if y > H // 2 else y)
d = np.array([shift(f[i + 1], f[i]) for i in range(n - 1)], float)
cuts = [int(round(o * 30)) for o in offs] + [n]
K = 8; out = np.zeros((n, 2))
def sm(x, k): return np.convolve(np.pad(x, (k, k), mode='edge'), np.ones(2 * k + 1) / (2 * k + 1), mode='valid')
for a, b in zip(cuts[:-1], cuts[1:]):
    seg = np.zeros((b - a, 2))
    for i in range(a + 1, b): seg[i - a] = seg[i - a - 1] + d[i - 1]       # path within the segment only
    for c in range(2):
        out[a:b, c] = -(seg[:, c] - sm(seg[:, c], K)) * 5               # px at 1080 wide (factor 5)
out = np.clip(out, -50, 50)
spec = json.load(open(HUB + 'remotion-lab/src/spec-trade.json'))
spec['stab'] = [[round(x, 1), round(y, 1)] for x, y in out]; spec['stabScale'] = 1.10
json.dump(spec, open(HUB + 'remotion-lab/src/spec-trade.json', 'w'))
print('frames', n, 'max shift', np.abs(out).max().round(1), 'rms', np.sqrt((out ** 2).mean(axis=0)).round(1))
