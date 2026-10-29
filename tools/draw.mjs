// Draws the isometric illustrations and writes them into index.html.
// Each drawing replaces the markup between <!-- draw:NAME --> and <!-- /draw:NAME -->.
// Run: node tools/draw.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const C = Math.cos(Math.PI / 6), S = 0.5;
const r = (n) => Math.round(n * 10) / 10;
const P = (x, y, z) => [r((x - y) * C), r((x + y) * S - z)];

class Drawing {
  constructor() { this.pts = []; }
  see(...xy) { for (const p of xy) this.pts.push(p); }
  poly(arr, cls) { const q = arr.map((p) => P(...p)); this.see(...q); return `<polygon class="${cls}" points="${q.map((p) => p.join(',')).join(' ')}"/>`; }
  line(a, b, cls, extra = '') { const [x1, y1] = P(...a), [x2, y2] = P(...b); this.see([x1, y1], [x2, y2]); return `<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"${extra}/>`; }
  path(arr, cls, extra = '') { const q = arr.map((p) => P(...p)); this.see(...q); return `<polyline class="${cls}" points="${q.map((p) => p.join(',')).join(' ')}"${extra}/>`; }
  box(x0, x1, y0, y1, z0, z1, cls = '') {
    return this.poly([[x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0]], `f-front ${cls}`)
      + this.poly([[x1, y0, z1], [x1, y1, z1], [x1, y1, z0], [x1, y0, z0]], `f-side ${cls}`)
      + this.poly([[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], `f-top ${cls}`);
  }
  flat(x0, x1, y0, y1, z, cls) { return this.poly([[x0, y0, z], [x1, y0, z], [x1, y1, z], [x0, y1, z]], cls); }
  wall(x0, x1, y, z0, z1, cls) { return this.poly([[x0, y, z1], [x1, y, z1], [x1, y, z0], [x0, y, z0]], cls); }
  disc(cx, cy, z, rad, cls, n = 36) {
    const a = []; for (let i = 0; i < n; i++) { const t = (i / n) * Math.PI * 2; a.push([cx + rad * Math.cos(t), cy + rad * Math.sin(t), z]); }
    return this.poly(a, cls);
  }
  // circle standing on the vertical x-z plane at depth y
  ring(cx, y, cz, rad, cls, n = 36) {
    const a = []; for (let i = 0; i < n; i++) { const t = (i / n) * Math.PI * 2; a.push([cx + rad * Math.cos(t), y, cz + rad * Math.sin(t)]); }
    return this.poly(a, cls);
  }
  // a fan whose blades really turn: the blades live in a flat local frame that the
  // isometric matrix lays onto the floor, so a plain 2D rotation spins them in place
  fan(cx, cy, z, rad, dur) {
    const [ex, ey] = P(cx, cy, z);
    let blades = '';
    for (let i = 0; i < 7; i++) {
      const t = (i / 7) * Math.PI * 2;
      const a = [r(rad * 0.36 * Math.cos(t)), r(rad * 0.36 * Math.sin(t))];
      const b = [r(rad * 0.9 * Math.cos(t + 0.55)), r(rad * 0.9 * Math.sin(t + 0.55))];
      blades += `<line class="blade" vector-effect="non-scaling-stroke" x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}"/>`;
    }
    return this.disc(cx, cy, z - 0.1, rad, 'fan-ring')
      + `<g transform="matrix(${r(C * 1000) / 1000} ${S} ${-r(C * 1000) / 1000} ${S} ${ex} ${ey})"><g>${blades}`
      + `<animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="${dur}" repeatCount="indefinite"/></g></g>`
      + this.disc(cx, cy, z + 0.1, rad * 0.32, 'fan-hub');
  }
  viewBox(pad = 14) {
    const xs = this.pts.map((p) => p[0]), ys = this.pts.map((p) => p[1]);
    const x0 = Math.floor(Math.min(...xs) - pad), y0 = Math.floor(Math.min(...ys) - pad);
    return `${x0} ${y0} ${Math.ceil(Math.max(...xs) + pad - x0)} ${Math.ceil(Math.max(...ys) + pad - y0)}`;
  }
}

const out = {};

// ---------- Fig. 1: the exploded notebook ----------
{
  const d = new Drawing();
  const W = 300, D = 200, layers = [];
  let g = '';
  g += d.box(0, W, 0, D, 0, 16, 'case');
  g += d.flat(10, W - 10, 10, D - 10, 16, 'inner');
  for (let i = 0; i < 9; i++) g += d.line([60 + i * 12, D, 5], [66 + i * 12, D, 11], 'thin');
  g += d.box(150, 280, 118, 186, 16, 24, 'battery');
  g += d.flat(166, 240, 132, 172, 24, 'label');
  g += d.fan(66, 150, 16.6, 30, '1.6s');
  layers.push(['case', g]);

  const Tm = 94; g = '';
  g += d.box(16, W - 16, 14, 170, 90, Tm, 'board');
  for (let i = 0; i < 5; i++) g += d.line([120, 84 + i * 6, Tm], [186, 84 + i * 6, Tm], 'trace');
  for (let i = 0; i < 4; i++) g += d.line([196, 130 + i * 8, Tm], [262, 130 + i * 8, Tm], 'trace');
  for (let i = 0; i < 4; i++) g += d.line([214 + i * 10, 116, Tm], [214 + i * 10, 126, Tm], 'trace');
  g += d.path([[120, 108, Tm], [186, 108, Tm], [186, 96, Tm], [196, 96, Tm]], 'pulse', ' pathLength="1"');
  g += d.box(196, 244, 66, 114, Tm, Tm + 6, 'chip');
  g += d.flat(206, 234, 76, 104, Tm + 6, 'die');
  g += d.box(36, 160, 128, 138, Tm, Tm + 5, 'ram');
  g += d.box(36, 160, 148, 158, Tm, Tm + 5, 'ram');
  g += d.box(40, 64, 88, 108, Tm, Tm + 4, 'chip-s');
  g += d.box(76, 96, 88, 108, Tm, Tm + 4, 'chip-s');
  g += d.box(W - 26, W - 16, 120, 150, Tm, Tm + 8, 'port');
  layers.push(['board', g]);

  const Tk = 220; g = '';
  g += d.box(0, W, 0, D, 210, Tk, 'deck');
  g += d.flat(24, W - 24, 18, 124, Tk, 'well');
  const cols = 13, rows = 5, kx0 = 30, kx1 = W - 30, ky0 = 24, ky1 = 118;
  const kw = (kx1 - kx0) / cols, kh = (ky1 - ky0) / rows;
  for (let rr = 0; rr < rows; rr++) for (let cc = 0; cc < cols; cc++) {
    if (rr === rows - 1 && cc > 3 && cc < 9) { if (cc === 4) g += d.flat(kx0 + cc * kw + 2, kx0 + 9 * kw - 2, ky0 + rr * kh + 2, ky0 + (rr + 1) * kh - 2, Tk + 0.3, 'key'); continue; }
    g += d.flat(kx0 + cc * kw + 2, kx0 + (cc + 1) * kw - 2, ky0 + rr * kh + 2, ky0 + (rr + 1) * kh - 2, Tk + 0.3, 'key');
  }
  g += d.flat(110, 190, 138, 186, Tk + 0.2, 'pad');
  layers.push(['keys', g]);

  const Zl = 240, H = 190, Yp = 46;
  layers.push(['lid', d.box(0, W, -10, 0, Zl, Zl + H, 'lid')]);
  g = '';
  g += d.box(6, W - 6, Yp - 4, Yp, Zl + 8, Zl + H - 8, 'panel');
  g += d.wall(18, W - 18, Yp, Zl + 20, Zl + H - 20, 'glass');
  g += d.line([70, Yp, Zl + 52], [120, Yp, Zl + 92], 'scr-a red', ' pathLength="1"');
  g += d.line([96, Yp, Zl + 50], [170, Yp, Zl + 120], 'scr-a amber', ' pathLength="1"');
  g += d.line([124, Yp, Zl + 48], [222, Yp, Zl + 146], 'scr-a blue', ' pathLength="1"');
  layers.push(['screen', g]);

  out.laptop = layers.map(([id, body]) => `<g class="layer layer-${id}" data-part="${id}"><g class="float">${body}</g></g>`).join('\n');
}

// ---------- Detail sheets for the services list ----------
const detail = (name, draw) => {
  const d = new Drawing();
  const body = draw(d);
  out[name] = `<svg class="iso detail-art" viewBox="${d.viewBox()}" aria-hidden="true">${body}</svg>`;
};

// 1. A cracked display panel; the fix draws the logo arrows back on.
detail('d-screen', (d) => {
  let g = d.box(0, 240, -8, 0, 0, 160, 'panel') + d.wall(12, 228, 0, 12, 148, 'glass');
  g += `<g class="fault">${d.path([[150, 0, 146], [134, 0, 114], [148, 0, 98], [122, 0, 72], [130, 0, 52], [106, 0, 16]], 'crack')}`
    + `${d.path([[134, 0, 114], [178, 0, 102], [204, 0, 122]], 'crack')}${d.path([[122, 0, 72], [84, 0, 82], [60, 0, 64]], 'crack')}</g>`;
  g += `<g class="fix">${d.line([52, 0, 30], [96, 0, 64], 'scr-a red', ' pathLength="1"')}`
    + `${d.line([72, 0, 28], [136, 0, 90], 'scr-a amber', ' pathLength="1"')}`
    + `${d.line([94, 0, 26], [182, 0, 112], 'scr-a blue', ' pathLength="1"')}</g>`;
  return g;
});

// 2. A keyboard deck with one key popped out; the fix seats it.
detail('d-keys', (d) => {
  const T = 10;
  let g = d.box(0, 250, 0, 120, 0, T, 'deck') + d.flat(10, 240, 8, 112, T, 'well');
  const cols = 11, rows = 4, x0 = 18, x1 = 232, y0 = 16, y1 = 104, kw = (x1 - x0) / cols, kh = (y1 - y0) / rows;
  let pop = '';
  for (let rr = 0; rr < rows; rr++) for (let cc = 0; cc < cols; cc++) {
    const a = x0 + cc * kw + 2, b = x0 + (cc + 1) * kw - 2, c = y0 + rr * kh + 2, e = y0 + (rr + 1) * kh - 2;
    if (rr === 1 && cc === 7) { g += d.flat(a, b, c, e, T + 0.2, 'hole'); pop = d.box(a, b, c, e, T + 0.3 + 26, T + 4.3 + 26, 'popkey'); continue; }
    g += d.flat(a, b, c, e, T + 0.3, 'key');
  }
  return g + `<g class="fault-move">${pop}</g>`;
});

// 3. A motherboard with a scorch mark; the fix clears it and current runs again.
detail('d-board', (d) => {
  const T = 6;
  let g = d.box(0, 240, 0, 150, 0, T, 'board');
  for (let i = 0; i < 4; i++) g += d.line([20, 20 + i * 8, T], [110, 20 + i * 8, T], 'trace');
  for (let i = 0; i < 5; i++) g += d.line([190, 30 + i * 9, T], [228, 30 + i * 9, T], 'trace');
  g += d.path([[20, 64, T], [100, 64, T], [100, 50, T], [130, 50, T]], 'pulse', ' pathLength="1"');
  g += d.path([[180, 70, T], [200, 70, T], [200, 120, T], [228, 120, T]], 'pulse pulse-2', ' pathLength="1"');
  g += `<g class="fault">${d.disc(70, 40, T + 0.2, 20, 'scorch')}${d.disc(70, 40, T + 0.3, 9, 'scorch-core')}</g>`;
  g += d.box(130, 180, 30, 80, T, T + 8, 'chip') + d.flat(140, 170, 40, 70, T + 8, 'die');
  g += d.box(20, 120, 96, 104, T, T + 6, 'ram') + d.box(20, 120, 114, 122, T, T + 6, 'ram');
  g += d.box(196, 220, 90, 110, T, T + 5, 'chip-s') + d.box(226, 240, 60, 84, T, T + 9, 'port');
  return g;
});

// 4. Cooling: a spinning fan and heatsink fins, dusty until cleaned.
detail('d-case', (d) => {
  const T = 14;
  let g = d.box(0, 220, 0, 170, 0, T, 'case') + d.flat(8, 212, 8, 162, T, 'inner');
  for (let i = 5; i >= 0; i--) g += d.box(140 + i * 11, 145 + i * 11, 40, 130, T, T + 24, 'fin');
  g += d.fan(72, 86, T + 0.2, 46, '1.2s');
  const specks = [[40, 50], [102, 60], [60, 130], [110, 112], [150, 150], [196, 34], [176, 140], [30, 100], [88, 40], [126, 30]];
  g += `<g class="fault">${specks.map(([x, y]) => d.disc(x, y, T + 0.5, 3.4, 'dust', 10)).join('')}</g>`;
  return g;
});

// 5. Remote support: a monitor with a moving cursor and a pulsing signal.
detail('d-remote', (d) => {
  let g = d.box(70, 150, -40, 30, 0, 8, 'stand') + d.box(100, 120, -18, -8, 8, 44, 'stand');
  g += d.box(0, 220, -8, 0, 40, 176, 'panel') + d.wall(10, 210, 0, 50, 166, 'glass');
  const cur = [[0, 0], [0, -26], [7, -19], [12, -30], [17, -28], [12, -17], [21, -17]];
  g += `<g class="cursor">${d.poly(cur.map(([x, z]) => [96 + x, 0, 120 + z]), 'cursor-shape')}</g>`;
  const [sx, sy] = P(222, 0, 200);
  d.see([sx + 40, sy - 40]);
  g += `<g class="signal" transform="translate(${sx} ${sy})">`
    + [12, 24, 36].map((rad, i) => `<path class="sig sig-${i + 1}" d="M${-rad * 0.7} ${-rad * 0.7}A${rad} ${rad} 0 0 1 ${rad * 0.7} ${-rad * 0.7}" transform="rotate(30)"/>`).join('')
    + '<circle class="sig-dot" r="4"/></g>';
  return g;
});

// 6. A wall-mounted camera that drops into its bracket, with a blinking record light.
detail('d-cam', (d) => {
  let g = '';
  g += d.box(30, 110, -10, 0, 70, 200, 'mount');
  g += `<g class="fault-move">${d.box(60, 80, 0, 50, 140, 156, 'arm')}${d.box(36, 104, 40, 170, 120, 170, 'cam')}`
    + `${d.box(32, 108, 50, 178, 170, 176, 'hood')}${d.ring(70, 170, 145, 18, 'lens')}${d.ring(70, 170.2, 145, 9, 'lens-in')}`
    + `${d.ring(94, 170.2, 160, 3.5, 'rec', 12)}</g>`;
  return g + `<g class="fault-move">${d.poly([[70, 172, 145], [-40, 320, 0], [150, 330, 0]], 'fov-floor')}</g>`;
});

let html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
for (const [name, markup] of Object.entries(out)) {
  const re = new RegExp(`(<!-- draw:${name} -->)[\\s\\S]*?(<!-- /draw:${name} -->)`);
  if (!re.test(html)) { console.warn(`marker draw:${name} not found`); continue; }
  html = html.replace(re, (_, a, b) => `${a}\n${markup}\n${b}`);
}
writeFileSync(new URL('../index.html', import.meta.url), html);
console.log('drew', Object.keys(out).join(', '));
