import React, { useEffect, useRef } from 'react';

export default function DotBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let dots = [];
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const build = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const small = w <= 640;
      const raw = Math.round((w * h) / 18000);
      const cap = small ? 70 : 160;
      const n = Math.max(30, Math.min(cap, raw));
      dots = Array.from({ length: n }, () => {
        const blue = Math.random() < 0.2;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: 1 + Math.random() * 3,
          blue,
          o: blue ? 0.25 + Math.random() * 0.15 : 0.5 + Math.random() * 0.4,
          vx: (Math.random() - 0.5) * 24,
          vy: (Math.random() - 0.5) * 24,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        ctx.globalAlpha = d.o;
        ctx.fillStyle = d.blue ? '#1d4ed8' : '#dfe5ec';
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      for (const d of dots) {
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        if (d.x < -8) d.x = w + 8;
        if (d.x > w + 8) d.x = -8;
        if (d.y < -8) d.y = h + 8;
        if (d.y > h + 8) d.y = -8;
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!reduced && !raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    build();
    draw();
    if (!reduced) raf = requestAnimationFrame(tick);
    window.addEventListener('resize', build);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', build);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="dot-background-canvas"
    />
  );
}
