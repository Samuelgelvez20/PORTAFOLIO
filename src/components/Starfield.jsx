import React, { useEffect, useRef } from 'react';

export const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generar campo de estrellas estables con anclaje original
    const starCount = 85;
    const stars = Array.from({ length: starCount }, (_, i) => {
      const isBright = Math.random() > 0.7;
      const ox = Math.random() * width;
      const oy = Math.random() * height;
      return {
        id: i,
        originX: ox,
        originY: oy,
        x: ox,
        y: oy,
        vx: 0,
        vy: 0,
        size: isBright ? 2.0 : Math.random() > 0.4 ? 1.4 : 0.9,
        baseAlpha: isBright ? 0.85 : 0.35 + Math.random() * 0.4,
        alpha: 0.5,
        twinkleSpeed: Math.random() * 0.025 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.65 ? '#bae6fd' : Math.random() > 0.85 ? '#e9d5ff' : '#ffffff',
      };
    });

    // Estrellas fugaces ambientales en segundo plano
    const shootingStars = [];
    let lastShootingSpawn = performance.now();

    const spawnShootingStar = () => {
      const fromTop = Math.random() > 0.4;
      const x = fromTop ? Math.random() * width * 1.2 : width + 20;
      const y = fromTop ? -20 : Math.random() * height * 0.5;
      const speed = Math.random() * 6 + 5;
      const angle = (Math.PI / 180) * (218 + (Math.random() * 12 - 6));

      shootingStars.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: -Math.sin(angle) * speed,
        length: Math.random() * 100 + 60,
        alpha: 1.0,
        decay: Math.random() * 0.012 + 0.008,
        color: Math.random() > 0.5 ? '#38bdf8' : '#818cf8',
      });
    };

    let animId;

    const render = (timestamp) => {
      ctx.clearRect(0, 0, width, height);

      // Estado global del mouse para la interacción
      const mouse = window.__cosmicMouse;
      const isMouseActive = mouse && mouse.active;

      // Generar estrella fugaz periódica (cada 4 - 6 segundos)
      if (timestamp - lastShootingSpawn > 4200) {
        if (Math.random() > 0.3) spawnShootingStar();
        lastShootingSpawn = timestamp;
      }

      // ==========================================
      // 1. DIBUJAR Y ACTUALIZAR ESTRELLAS DE FONDO
      // ==========================================
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Titileo suave natural
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase);
        let currentAlpha = star.baseAlpha + twinkle * 0.25;

        let extraGlow = 0;
        let isConnected = false;

        // ==========================================
        // 2. INTERACCIÓN GRAVITACIONAL CON EL MOUSE
        // ==========================================
        if (isMouseActive) {
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 125; // Radio de interacción magnética

          if (dist < maxDist && dist > 1) {
            const factor = 1 - dist / maxDist;
            extraGlow = factor;
            currentAlpha = Math.min(1.0, currentAlpha + factor * 0.6);
            isConnected = true;

            // Dibujar filamento de constelación hacia el puntero
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${factor * 0.4})`;
            ctx.lineWidth = factor * 1.2;
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 8 * factor;
            ctx.stroke();
            ctx.restore();

            // Gravedad sutil: atracción elástica suave hacia el puntero
            const pullForce = factor * 0.4;
            star.vx -= (dx / dist) * pullForce;
            star.vy -= (dy / dist) * pullForce;
          }
        }

        // Fuerza de retorno suave a su posición de origen (efecto muelle cósmico)
        const homeDx = star.originX - star.x;
        const homeDy = star.originY - star.y;
        star.vx += homeDx * 0.035;
        star.vy += homeDy * 0.035;

        // Fricción / Amortiguación
        star.vx *= 0.88;
        star.vy *= 0.88;

        star.x += star.vx;
        star.y += star.vy;

        // Renderizado del cuerpo de la estrella
        ctx.save();
        ctx.fillStyle = isConnected ? '#ffffff' : star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1.0, currentAlpha));

        if (extraGlow > 0.1 || star.size > 1.8) {
          ctx.shadowColor = isConnected ? '#38bdf8' : star.color;
          ctx.shadowBlur = extraGlow > 0 ? 12 * extraGlow : 4;
        }

        ctx.beginPath();
        const renderSize = star.size + extraGlow * 1.5;
        ctx.arc(star.x, star.y, renderSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ==========================================
      // 3. DIBUJAR ESTRELLAS FUGAces AMBIENTALES
      // ==========================================
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= s.decay;

        if (s.alpha > 0.01) {
          ctx.save();
          const speedMag = Math.hypot(s.vx, s.vy);
          const tailX = s.x - (s.vx / speedMag) * s.length;
          const tailY = s.y - (s.vy / speedMag) * s.length;

          const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
          grad.addColorStop(0, `rgba(56, 189, 248, 0)`);
          grad.addColorStop(0.7, `rgba(56, 189, 248, ${s.alpha * 0.7})`);
          grad.addColorStop(1, '#ffffff');

          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.4 * s.alpha;
          ctx.lineCap = 'round';
          ctx.shadowColor = s.color;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(s.x, s.y);
          ctx.stroke();

          // Cabeza
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(s.x, s.y, 1.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          shootingStars.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    />
  );
};

export default Starfield;
