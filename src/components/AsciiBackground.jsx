import React, { useEffect, useRef } from 'react';

// Subtle animated ASCII-code background for the hero section.
// Light gray monospace characters drifting slowly downward on a
// transparent canvas, so the existing light hero background shows through.
const CHARS = ['@', '#', '%', '*', '+', '=', '-', ':', '.', '/', '<', '>', '&', '$', '!', '?', '0', '1', 'x', 'o'];

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function AsciiBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parent = canvas.parentElement;

    let cols = 0;
    let rows = 0;
    let grid = [];
    let cell = 14;
    let dpr = 1;
    let offsetY = 0;
    let raf = 0;
    let last = 0;
    let lastFlicker = 0;
    let running = true;

    function setup() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const isMobile = window.innerWidth <= 640;
      cell = isMobile ? 22 : 14; // mobile: larger cells, less dense
      cols = Math.ceil(rect.width / cell);
      rows = Math.ceil(rect.height / cell) + 2;
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      grid = [];
      for (let c = 0; c < cols; c++) {
        const col = [];
        for (let r = 0; r < rows; r++) col.push(randomChar());
        grid.push(col);
      }
      offsetY = 0;
      draw();
    }

    function draw() {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      ctx.font = cell + 'px monospace';
      ctx.fillStyle = '#e8ecf1';
      ctx.textBaseline = 'top';
      for (let c = 0; c < cols; c++) {
        const x = c * cell;
        for (let r = 0; r < rows; r++) {
          ctx.fillText(grid[c][r], x, r * cell - cell + offsetY);
        }
      }
    }

    function tick(now) {
      if (!running) return;
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      // Slow downward drift: ~5px per second.
      offsetY += dt * 5;
      if (offsetY >= cell && cell > 0) {
        offsetY -= cell;
        for (let c = 0; c < cols; c++) {
          grid[c].pop();
          grid[c].unshift(randomChar());
        }
      }
      // Subtle flicker: a few random cells change every ~400ms.
      if (now - lastFlicker > 400) {
        lastFlicker = now;
        const n = Math.max(1, Math.floor(cols * rows * 0.005));
        for (let i = 0; i < n; i++) {
          const c = Math.floor(Math.random() * cols);
          const r = Math.floor(Math.random() * rows);
          if (grid[c]) grid[c][r] = randomChar();
        }
      }
      draw();
      raf = requestAnimationFrame(tick);
    }

    function onVisibility() {
      if (document.hidden) {
        running = false;
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
      } else if (!reduceMotion && !raf) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    }

    function onResize() {
      setup();
      if (reduceMotion) return;
      // keep the loop running; grid was rebuilt
    }

    setup();
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    if (!reduceMotion) {
      last = performance.now();
      raf = requestAnimationFrame(tick);
    }
    // With prefers-reduced-motion: one static frame only (drawn in setup).

    return () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    />
  );
}
