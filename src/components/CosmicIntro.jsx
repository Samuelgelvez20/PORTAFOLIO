import React, { useEffect, useRef, useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export const CosmicIntro = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const [exiting, setExiting] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const animFrameIdRef = useRef(null);
  const startTimeRef = useRef(null);

  const handleFinish = () => {
    if (exiting) return;
    setExiting(true);
    setTimeout(() => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      onComplete?.();
    }, 700);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [exiting]);

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

    // Fondo estelar tenue acorde a la paleta del portafolio
    const backgroundStars = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.006,
      color: Math.random() > 0.4 ? '#bae6fd' : Math.random() > 0.7 ? '#e9d5ff' : '#ffffff',
    }));

    // Coordenadas del punto de impacto (centro de pantalla)
    const targetX = width * 0.5;
    const targetY = height * 0.44;

    // Origen del meteoro principal (diagonal superior derecha, trayectoria majestuosa)
    const startX = width * 1.05;
    const startY = -40;

    let impactOccurred = false;
    let flashIntensity = 0;
    const shockwaves = [];
    const explosionSparks = [];
    const fallingShootingStars = [];
    const meteorTrailHistory = [];
    const ambientEmbers = [];

    // Función para crear estrellas fugaces de la lluvia continua
    const spawnShootingStar = () => {
      const fromTop = Math.random() > 0.35;
      const x = fromTop ? Math.random() * width * 1.2 : width + 20;
      const y = fromTop ? -20 : Math.random() * height * 0.6;

      // Velocidad cadenciosa, elegante y majestuosa (no acelerada ni brusca)
      const speed = Math.random() * 5 + 4.5;
      const angle = (Math.PI / 180) * (218 + (Math.random() * 14 - 7));
      const length = Math.random() * 120 + 70;

      // Paleta idéntica al portafolio (Celeste #38bdf8, Azul Real #2563eb, Púrpura cósmico #a855f7)
      const palettes = [
        { head: '#ffffff', trail: 'rgba(56, 189, 248, ' },   // Sky/Cyan (#38bdf8)
        { head: '#ffffff', trail: 'rgba(37, 99, 235, ' },    // Royal Blue (#2563eb)
        { head: '#ffffff', trail: 'rgba(168, 85, 247, ' },   // Purple (#a855f7)
        { head: '#e0f2fe', trail: 'rgba(129, 140, 248, ' },  // Indigo (#818cf8)
      ];
      const palette = palettes[Math.floor(Math.random() * palettes.length)];

      fallingShootingStars.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: -Math.sin(angle) * speed,
        length,
        palette,
        life: 1.0,
        decay: Math.random() * 0.009 + 0.006, // Larga duración visible y suave desvanecimiento
        width: Math.random() * 1.8 + 1.2,
      });
    };

    let lastShowerSpawnTime = 0;

    const render = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = (timestamp - startTimeRef.current) / 1000;

      ctx.clearRect(0, 0, width, height);

      // Fondo azul medianoche cósmico (#06080e idéntico al fondo oficial del portafolio)
      const bgGrad = ctx.createRadialGradient(
        targetX,
        targetY,
        40,
        targetX,
        targetY,
        Math.max(width, height) * 0.85
      );
      bgGrad.addColorStop(0, '#0a1024');
      bgGrad.addColorStop(0.5, '#06080e');
      bgGrad.addColorStop(1, '#030408');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Estrellas titilantes de fondo
      backgroundStars.forEach((star) => {
        star.alpha += Math.sin(timestamp * star.twinkleSpeed) * 0.01;
        const a = Math.max(0.1, Math.min(0.9, star.alpha));
        ctx.fillStyle = star.color;
        ctx.globalAlpha = a;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // ==========================================
      // FASE 1: Vuelo majestuoso y fluido del Meteoro (0.0s -> 2.0s)
      // ==========================================
      const impactTime = 2.0; // 2 segundos completos de descenso visible y cadencioso

      if (elapsed < impactTime) {
        const p = Math.min(1, elapsed / impactTime);
        // Aceleración natural por gravedad cósmica (entra visible y acelera con majestuosidad)
        const ease = Math.pow(p, 1.45);

        const currentX = startX + (targetX - startX) * ease;
        const currentY = startY + (targetY - startY) * ease;

        // Historial de estela fluida
        meteorTrailHistory.push({ x: currentX, y: currentY });
        if (meteorTrailHistory.length > 36) meteorTrailHistory.shift();

        // Partículas suaves de polvo cósmico emitidas por el meteoro
        if (Math.random() > 0.25) {
          ambientEmbers.push({
            x: currentX + (Math.random() * 10 - 5),
            y: currentY + (Math.random() * 10 - 5),
            vx: (Math.random() - 0.3) * 1.2,
            vy: (Math.random() - 0.7) * 1.2,
            size: Math.random() * 2 + 1,
            alpha: 0.9,
            color: Math.random() > 0.5 ? '#38bdf8' : '#a855f7',
            decay: 0.018,
          });
        }

        // Dibujar estela de plasma cian y azul
        if (meteorTrailHistory.length > 2) {
          ctx.save();
          for (let i = 1; i < meteorTrailHistory.length; i++) {
            const p1 = meteorTrailHistory[i - 1];
            const p2 = meteorTrailHistory[i];
            const ratio = i / meteorTrailHistory.length;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${ratio * 0.75})`;
            ctx.lineWidth = 1.5 + ratio * 6.5;
            ctx.lineCap = 'round';
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 18 * ratio;
            ctx.stroke();

            // Filamento central blanco de alta energía
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${ratio * 0.9})`;
            ctx.lineWidth = 1 + ratio * 2.2;
            ctx.stroke();
          }
          ctx.restore();
        }

        // Núcleo brillante del meteoro
        ctx.save();
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 32;

        const halo = ctx.createRadialGradient(currentX, currentY, 2, currentX, currentY, 32);
        halo.addColorStop(0, '#ffffff');
        halo.addColorStop(0.3, '#38bdf8');
        halo.addColorStop(0.7, '#2563eb');
        halo.addColorStop(1, 'rgba(37, 99, 235, 0)');
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(currentX, currentY, 34, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(currentX, currentY, 6.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ==========================================
      // FASE 2: Choque Cósmico e Impacto (2.0s)
      // ==========================================
      if (elapsed >= impactTime && !impactOccurred) {
        impactOccurred = true;
        flashIntensity = 0.9;
        setShowLogo(true);

        // Ondas de choque armónicas con los colores de la web
        shockwaves.push({ radius: 10, maxRadius: Math.max(width, height) * 0.75, speed: 9, alpha: 1.0, color: '#ffffff', width: 4 });
        shockwaves.push({ radius: 6, maxRadius: Math.max(width, height) * 0.65, speed: 7.5, alpha: 0.9, color: '#38bdf8', width: 5.5 });
        shockwaves.push({ radius: 2, maxRadius: Math.max(width, height) * 0.55, speed: 5.5, alpha: 0.8, color: '#a855f7', width: 6.5 });

        // Chispas de la detonación (solo en tonos blanco, cian y violeta de la web)
        const colors = ['#ffffff', '#38bdf8', '#60a5fa', '#a855f7', '#c084fc'];
        for (let i = 0; i < 95; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 9 + 2.5;
          explosionSparks.push({
            x: targetX,
            y: targetY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: Math.random() * 3 + 1.2,
            alpha: 1.0,
            decay: Math.random() * 0.014 + 0.009,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }

      // Destello central del impacto
      if (flashIntensity > 0.01) {
        ctx.save();
        const flash = ctx.createRadialGradient(
          targetX,
          targetY,
          5,
          targetX,
          targetY,
          Math.max(width, height) * 0.65
        );
        flash.addColorStop(0, `rgba(255, 255, 255, ${flashIntensity})`);
        flash.addColorStop(0.2, `rgba(56, 189, 248, ${flashIntensity * 0.7})`);
        flash.addColorStop(0.6, `rgba(168, 85, 247, ${flashIntensity * 0.3})`);
        flash.addColorStop(1, 'rgba(6, 8, 14, 0)');
        ctx.fillStyle = flash;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
        flashIntensity *= 0.92;
      }

      // Dibujar ondas de choque
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += sw.speed;
        sw.alpha = Math.max(0, 1 - sw.radius / sw.maxRadius);

        if (sw.alpha > 0.01) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(targetX, targetY, sw.radius, 0, Math.PI * 2);
          ctx.strokeStyle = sw.color;
          ctx.globalAlpha = sw.alpha;
          ctx.lineWidth = sw.width * sw.alpha;
          ctx.shadowColor = sw.color;
          ctx.shadowBlur = 18;
          ctx.stroke();
          ctx.restore();
        } else {
          shockwaves.splice(i, 1);
        }
      }

      // Dibujar chispas de la explosión
      for (let i = explosionSparks.length - 1; i >= 0; i--) {
        const sp = explosionSparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vx *= 0.975;
        sp.vy *= 0.975;
        sp.alpha -= sp.decay;

        if (sp.alpha > 0.01) {
          ctx.save();
          ctx.fillStyle = sp.color;
          ctx.globalAlpha = sp.alpha;
          ctx.shadowColor = sp.color;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(sp.x, sp.y, sp.size * sp.alpha, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          explosionSparks.splice(i, 1);
        }
      }

      // Partículas de polvo de estela
      for (let i = ambientEmbers.length - 1; i >= 0; i--) {
        const eb = ambientEmbers[i];
        eb.x += eb.vx;
        eb.y += eb.vy;
        eb.alpha -= eb.decay;
        if (eb.alpha > 0.01) {
          ctx.save();
          ctx.fillStyle = eb.color;
          ctx.globalAlpha = eb.alpha;
          ctx.beginPath();
          ctx.arc(eb.x, eb.y, eb.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          ambientEmbers.splice(i, 1);
        }
      }

      // ==========================================
      // FASE 3: Lluvia Continua de Estrellas Fugaces (2.0s -> 5.5s)
      // ==========================================
      if (elapsed >= 2.0 && elapsed < 5.5) {
        // Generación cadenciosa y constante
        if (timestamp - lastShowerSpawnTime > 150) {
          spawnShootingStar();
          if (Math.random() > 0.45) spawnShootingStar();
          lastShowerSpawnTime = timestamp;
        }
      }

      // Dibujar estrellas fugaces cayendo
      for (let i = fallingShootingStars.length - 1; i >= 0; i--) {
        const star = fallingShootingStars[i];
        star.x += star.vx;
        star.y += star.vy;
        star.life -= star.decay;

        if (star.life > 0.01) {
          ctx.save();
          const speedMag = Math.hypot(star.vx, star.vy);
          const tailX = star.x - (star.vx / speedMag) * star.length;
          const tailY = star.y - (star.vy / speedMag) * star.length;

          const grad = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
          grad.addColorStop(0, `${star.palette.trail}0)`);
          grad.addColorStop(0.65, `${star.palette.trail}${star.life * 0.85})`);
          grad.addColorStop(1, '#ffffff');

          ctx.strokeStyle = grad;
          ctx.lineWidth = star.width * star.life;
          ctx.lineCap = 'round';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 10;

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(star.x, star.y);
          ctx.stroke();

          // Cabeza brillante
          ctx.fillStyle = star.palette.head;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.width * 1.25, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          fallingShootingStars.splice(i, 1);
        }
      }

      // ==========================================
      // FASE 4: Cierre y Transición hacia la Web (5.8s -> ~6.5s)
      // ==========================================
      if (elapsed >= 5.8 && !exiting) {
        handleFinish();
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [exiting]);

  return (
    <div
      onClick={handleFinish}
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-700 select-none cursor-pointer ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#06080e' }}
      role="dialog"
      aria-label="Animación cósmica de bienvenida"
    >
      {/* 1. Canvas de 60 FPS con partículas y estrellas fugaces */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* 2. Logo Idéntico al de la Pestaña de la Web (SGR Favicon Oficial) */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center text-center transition-all duration-1000 pointer-events-none px-4 -mt-10 ${
          showLogo
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-75 translate-y-6'
        }`}
      >
        {/* SVG Idéntico al favicon de la pestaña (/public/images/logo/favicon.svg) */}
        <div className="relative mb-5 group">
          {/* Halo difuso posterior con gradiente cyan-blue-purple de la web */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#38bdf8] via-[#2563eb] to-[#a855f7] opacity-65 blur-2xl animate-pulse"></div>

          {/* SVG Vectorial del Favicon */}
          <svg
            viewBox="0 0 64 64"
            className="relative w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_10px_25px_rgba(56,189,248,0.45)]"
          >
            <defs>
              <linearGradient id="cosmic-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0a0e1a" />
                <stop offset="100%" stopColor="#13182b" />
              </linearGradient>
              <linearGradient id="cosmic-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="16" fill="url(#cosmic-bg)" />
            <rect
              x="2"
              y="2"
              width="60"
              height="60"
              rx="14"
              fill="none"
              stroke="url(#cosmic-accent)"
              strokeWidth="2.2"
              strokeOpacity="0.85"
            />
            <text
              x="50%"
              y="54%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="url(#cosmic-accent)"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="22"
              letterSpacing="-1"
            >
              SGR
            </text>
            {/* Punto brillante de acento idéntico al navbar */}
            <circle cx="53" cy="11" r="2.5" fill="#38bdf8">
              <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Nombre Completo y Rol con los gradientes oficiales */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
          Samuel David Gelvez Rodríguez
        </h1>
        <div className="flex items-center gap-1.5 mt-2 text-xs sm:text-sm font-bold tracking-wide bg-gradient-to-r from-[#38bdf8] to-[#a855f7] bg-clip-text text-transparent">
          <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>Desarrollador Backend Junior</span>
        </div>
        <p className="text-[11px] text-slate-400 font-mono mt-1">
          Java 21 &bull; Spring Boot &bull; Python &bull; FastAPI &bull; PostgreSQL
        </p>
      </div>

      {/* 3. Botón para Omitir */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleFinish();
        }}
        className="absolute bottom-6 right-6 z-20 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800/80 text-xs font-mono transition-all flex items-center gap-1.5 backdrop-blur-md cursor-pointer group shadow-lg"
      >
        <span>Omitir intro</span>
        <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
          ESC
        </span>
        <X className="w-3 h-3 group-hover:rotate-90 transition-transform" />
      </button>

      {/* 4. Sugerencia de clic */}
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[10px] text-slate-500 font-mono tracking-wider uppercase opacity-75">
        Haz clic en cualquier parte para continuar
      </span>
    </div>
  );
};

export default CosmicIntro;
