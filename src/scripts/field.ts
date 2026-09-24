/**
 * Interactive dot field for the hero. Dots ripple away from the cursor and
 * glow in the accent color; when idle, a virtual cursor drifts on its own.
 * Pauses when offscreen / tab hidden; renders a single static frame for
 * reduced-motion users.
 */
export function initField(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SPACING = 26;
  const RADIUS = 180; // cursor influence radius (css px)
  const PUSH = 18;

  let w = 0;
  let h = 0;
  let dpr = 1;
  let dotRgb = '255,255,255';
  let accentRgb = '198,255,74';

  const target = { x: -9999, y: -9999 };
  const pointer = { x: -9999, y: -9999 };
  let lastMove = -Infinity;
  let running = false;
  let visible = true;
  let raf = 0;

  function readColors() {
    const s = getComputedStyle(document.documentElement);
    dotRgb = s.getPropertyValue('--dot').trim().split(/\s+/).join(',') || dotRgb;
    const hex = s.getPropertyValue('--accent').trim();
    const m = /^#?([0-9a-f]{6})$/i.exec(hex);
    if (m) {
      const n = parseInt(m[1], 16);
      accentRgb = `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
    }
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width;
    h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!running) draw(performance.now());
  }

  function draw(now: number) {
    const t = now / 1000;

    // Idle: let a virtual cursor wander so the field is alive on touch devices.
    if (now - lastMove > 2500) {
      target.x = w * (0.62 + 0.25 * Math.sin(t * 0.35));
      target.y = h * (0.45 + 0.28 * Math.sin(t * 0.52 + 1.3));
    }
    pointer.x += (target.x - pointer.x) * 0.08;
    pointer.y += (target.y - pointer.y) * 0.08;

    ctx!.clearRect(0, 0, w, h);
    const r2 = RADIUS * RADIUS;
    const offX = (w % SPACING) / 2;
    const offY = (h % SPACING) / 2;

    for (let y = offY; y < h; y += SPACING) {
      for (let x = offX; x < w; x += SPACING) {
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const d2 = dx * dx + dy * dy;
        const wave = reduceMotion ? 0.5 : 0.5 + 0.5 * Math.sin(x * 0.012 + t * 0.9) * Math.cos(y * 0.015 - t * 0.6);

        let px = x;
        let py = y;
        let size = 1;
        let alpha = 0.12 + wave * 0.16;
        let color = dotRgb;

        if (d2 < r2) {
          const d = Math.sqrt(d2) || 1;
          const f = 1 - d / RADIUS; // 0..1
          const ease = f * f * (3 - 2 * f);
          px += (dx / d) * ease * PUSH;
          py += (dy / d) * ease * PUSH;
          size = 1 + ease * 1.4;
          alpha = Math.min(1, alpha + ease * 0.85);
          if (ease > 0.15) color = accentRgb;
        }

        ctx!.fillStyle = `rgba(${color},${alpha})`;
        ctx!.fillRect(px - size / 2, py - size / 2, size, size);
      }
    }
  }

  function loop(now: number) {
    draw(now);
    raf = requestAnimationFrame(loop);
  }

  function start() {
    if (running || reduceMotion || !visible || document.hidden) return;
    running = true;
    raf = requestAnimationFrame(loop);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  readColors();
  resize();
  new ResizeObserver(resize).observe(canvas);
  new MutationObserver(() => {
    readColors();
    if (!running) draw(performance.now());
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  window.addEventListener(
    'pointermove',
    (e) => {
      const rect = canvas.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      lastMove = performance.now();
    },
    { passive: true },
  );

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    visible ? start() : stop();
  }).observe(canvas);

  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

  canvas.classList.add('ready');
  start();
}

/** Decode text into place, left to right, from random glyphs. */
export function scramble(el: HTMLElement, { duration = 1100, delay = 0 } = {}) {
  const final = el.dataset.text ?? el.textContent ?? '';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const glyphs = '!<>-_\\/[]{}—=+*^?#01ABCDEFabcdef';
  const start = performance.now() + delay;

  function frame(now: number) {
    const p = Math.max(0, Math.min(1, (now - start) / duration));
    const settled = Math.floor(p * final.length);
    let out = '';
    for (let i = 0; i < final.length; i++) {
      const ch = final[i];
      out += i < settled || ch === ' ' ? ch : glyphs[(Math.random() * glyphs.length) | 0];
    }
    el.textContent = out;
    if (p < 1) requestAnimationFrame(frame);
    else el.textContent = final;
  }
  requestAnimationFrame(frame);
}
