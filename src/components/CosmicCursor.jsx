import React, { useEffect, useRef } from 'react';

export const CosmicCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Forzar ocultamiento del cursor nativo a nivel DOM para garantizar que no aparezca el puntero negro
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    // Inyectar regla global con máxima prioridad
    const styleTag = document.createElement('style');
    styleTag.id = 'cosmic-cursor-hide-native';
    styleTag.textContent = `
      html, body, #root, *, *::before, *::after {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleTag);

    // Desactivar en pantallas táctiles puras sin mouse
    if (window.matchMedia('(pointer: coarse) and (hover: none)').matches) {
      return () => {
        styleTag.remove();
        document.documentElement.style.cursor = '';
        document.body.style.cursor = '';
      };
    }

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

    // Estado físico del puntero
    const mouse = {
      x: -100,
      y: -100,
      targetX: -100,
      targetY: -100,
      active: false,
      isHovering: false,
      speed: 0,
    };

    // Historial de estela de luz corta (Trail)
    const trail = [];
    const maxTrailLength = 16;

    // Partículas de polvo cósmico (Embers) emitidas por el movimiento
    const embers = [];

    // Ondas de clic cósmicas (Click ripples)
    const ripples = [];

    let lastMouseX = -100;
    let lastMouseY = -100;

    const onMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      // Comunicar coordenadas globales para que el Starfield de fondo interactúe
      window.__cosmicMouse = {
        x: e.clientX,
        y: e.clientY,
        active: true,
        lastTime: performance.now(),
      };

      // Detectar si está sobre elementos interactivos (botones, links, tarjetas clicables)
      const target = e.target;
      mouse.isHovering = !!(
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer'))
      );
    };

    const onMouseLeave = () => {
      mouse.active = false;
      if (window.__cosmicMouse) window.__cosmicMouse.active = false;
    };

    const onMouseDown = (e) => {
      // Crear onda de choque cósmica al hacer clic
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 4,
        maxRadius: 38,
        alpha: 1.0,
        color: mouse.isHovering ? '#a855f7' : '#38bdf8',
      });

      // Ráfaga pequeña de chispas
      for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spd = Math.random() * 3 + 1.5;
        embers.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          alpha: 1.0,
          size: Math.random() * 2 + 1,
          color: Math.random() > 0.5 ? '#38bdf8' : '#a855f7',
          decay: 0.04,
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);

    // Bucle de animación a 60 FPS
    let animId;
    let ringRadius = 12;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mouse.active) {
        // Suavizado e interpolación física (Spring damping)
        const dx = mouse.targetX - mouse.x;
        const dy = mouse.targetY - mouse.y;
        mouse.x += dx * 0.45;
        mouse.y += dy * 0.45;

        // Calcular velocidad instantánea
        const speed = Math.hypot(mouse.x - lastMouseX, mouse.y - lastMouseY);
        mouse.speed = speed;
        lastMouseX = mouse.x;
        lastMouseY = mouse.y;

        // Añadir punto al historial de estela
        trail.unshift({ x: mouse.x, y: mouse.y });
        if (trail.length > maxTrailLength) trail.pop();

        // Emitir estela de polvo cósmico sutil si el ratón se mueve con agilidad
        if (speed > 2.5 && Math.random() > 0.4) {
          embers.push({
            x: mouse.x + (Math.random() * 6 - 3),
            y: mouse.y + (Math.random() * 6 - 3),
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2,
            alpha: 0.85,
            size: Math.random() * 1.8 + 0.8,
            color: mouse.isHovering ? '#c084fc' : '#7dd3fc',
            decay: 0.035,
          });
        }

        // ==========================================
        // 1. DIBUJAR ESTELA DE LUZ CORTA (Comet Trail)
        // ==========================================
        if (trail.length > 2) {
          ctx.save();
          for (let i = 1; i < trail.length; i++) {
            const p1 = trail[i - 1];
            const p2 = trail[i];
            const ratio = 1 - i / trail.length; // 1 en la cabeza, 0 en la cola

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Gradiente cian a violeta idéntico a la web
            ctx.strokeStyle = mouse.isHovering
              ? `rgba(168, 85, 247, ${ratio * 0.7})`
              : `rgba(56, 189, 248, ${ratio * 0.75})`;
            ctx.lineWidth = (mouse.isHovering ? 3.5 : 2.5) * ratio + 0.5;
            ctx.lineCap = 'round';
            ctx.shadowColor = mouse.isHovering ? '#a855f7' : '#38bdf8';
            ctx.shadowBlur = 10 * ratio;
            ctx.stroke();

            // Filamento central blanco de alta energía
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${ratio * 0.85})`;
            ctx.lineWidth = 1 * ratio + 0.2;
            ctx.stroke();
          }
          ctx.restore();
        }

        // ==========================================
        // 2. DIBUJAR ANILLO / AURA CÓSMICA
        // ==========================================
        const targetRadius = mouse.isHovering ? 22 : 12;
        ringRadius += (targetRadius - ringRadius) * 0.22;

        ctx.save();
        // Anillo exterior suave con inercia física
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = mouse.isHovering
          ? 'rgba(168, 85, 247, 0.85)'
          : 'rgba(56, 189, 248, 0.75)';
        ctx.lineWidth = mouse.isHovering ? 2.2 : 1.6;
        ctx.shadowColor = mouse.isHovering ? '#a855f7' : '#38bdf8';
        ctx.shadowBlur = mouse.isHovering ? 16 : 10;
        ctx.stroke();

        // Relleno suave translúcido del anillo
        ctx.fillStyle = mouse.isHovering
          ? 'rgba(168, 85, 247, 0.15)'
          : 'rgba(56, 189, 248, 0.08)';
        ctx.fill();

        // Núcleo central brillante (Posición exacta instantánea del mouse para máxima precisión de clic)
        ctx.beginPath();
        ctx.arc(mouse.targetX, mouse.targetY, mouse.isHovering ? 4.5 : 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = mouse.isHovering ? '#c084fc' : '#38bdf8';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }

      // ==========================================
      // 3. DIBUJAR CHISPAS / EMBERS
      // ==========================================
      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i];
        e.x += e.vx;
        e.y += e.vy;
        e.alpha -= e.decay;

        if (e.alpha > 0.01) {
          ctx.save();
          ctx.fillStyle = e.color;
          ctx.globalAlpha = e.alpha;
          ctx.shadowColor = e.color;
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.arc(e.x, e.y, e.size * e.alpha, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          embers.splice(i, 1);
        }
      }

      // ==========================================
      // 4. DIBUJAR ONDAS DE CLIC
      // ==========================================
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 2.2;
        r.alpha = Math.max(0, 1 - r.radius / r.maxRadius);

        if (r.alpha > 0.01) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = r.color;
          ctx.globalAlpha = r.alpha * 0.8;
          ctx.lineWidth = 1.8 * r.alpha;
          ctx.shadowColor = r.color;
          ctx.shadowBlur = 10;
          ctx.stroke();
          ctx.restore();
        } else {
          ripples.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      styleTag.remove();
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 select-none"
      aria-hidden="true"
    />
  );
};

export default CosmicCursor;
