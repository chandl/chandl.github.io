// Renders public/og.png (1200x630) for social previews. Run: node scripts/og.mjs
import sharp from 'sharp';

const dots = [];
for (let y = 15; y < 630; y += 30) {
  for (let x = 15; x < 1200; x += 30) {
    const d = Math.hypot(x - 930, y - 250);
    const glow = Math.max(0, 1 - d / 260);
    const fill = glow > 0.2 ? '#c6ff4a' : '#ffffff';
    const o = (0.12 + glow * 0.8).toFixed(2);
    const r = (1.2 + glow * 1.8).toFixed(1);
    dots.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" fill-opacity="${o}"/>`);
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="g" x1="0" x2="1">
      <stop offset="0" stop-color="#7c7c86"/><stop offset=".55" stop-color="#b4b4bc"/><stop offset="1" stop-color="#c6ff4a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#09090b"/>
  ${dots.join('')}
  <g font-family="Inter, Helvetica Neue, Arial, sans-serif">
    <text x="80" y="170" font-family="Menlo, monospace" font-size="28" fill="#7c7c86">~/chandl <tspan fill="#c6ff4a">$</tspan> <tspan fill="#ededf0">whoami</tspan></text>
    <text x="72" y="330" font-size="128" font-weight="700" letter-spacing="-6" fill="#ededf0">Chandler</text>
    <text x="72" y="450" font-size="128" font-weight="700" letter-spacing="-6" fill="url(#g)">Severson</text>
    <text x="80" y="540" font-size="34" font-weight="500" fill="#ededf0">Principal Software Engineer <tspan fill="#c6ff4a">/</tspan> <tspan fill="#7c7c86">chandl.io</tspan></text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og.png');
console.log('wrote public/og.png');
