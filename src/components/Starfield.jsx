import React, { useMemo } from 'react';

export const Starfield = () => {
  // Generate 75 twinkling stars with negative delays so they are already active upon page load
  const stars = useMemo(() => {
    const starList = [];
    const count = 75;
    for (let i = 0; i < count; i++) {
      const isBright = Math.random() > 0.7;
      const size = isBright ? 2.2 : Math.random() > 0.4 ? 1.6 : 1.1;
      starList.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size,
        duration: 1.8 + Math.random() * 2.8,
        // Negative delay ensures instant animation with no frozen state on load
        delay: -(Math.random() * 5),
        opacity: isBright ? 0.9 : 0.35 + Math.random() * 0.45,
        color: Math.random() > 0.65 ? '#bae6fd' : Math.random() > 0.85 ? '#e9d5ff' : '#ffffff',
      });
    }
    return starList;
  }, []);

  // Shooting stars distributed across the sky with negative delays
  // to ensure they are actively moving immediately on first visit and refresh
  const shootingStars = [
    { id: 1, top: '2%', left: '85%', delay: '-0.8s', duration: '3.6s' },
    { id: 2, top: '8%', left: '65%', delay: '-2.4s', duration: '4.0s' },
    { id: 3, top: '15%', left: '92%', delay: '-4.2s', duration: '3.8s' },
    { id: 4, top: '22%', left: '50%', delay: '-1.5s', duration: '4.4s' },
    { id: 5, top: '5%', left: '72%', delay: '-3.1s', duration: '3.9s' },
    { id: 6, top: '28%', left: '80%', delay: '-5.3s', duration: '4.2s' },
    { id: 7, top: '12%', left: '40%', delay: '-2.9s', duration: '4.6s' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* 1. Twinkling Sky Stars */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
            boxShadow: star.size > 2 ? `0 0 5px 1px ${star.color}` : 'none',
          }}
        />
      ))}

      {/* 2. Seamless Shooting Stars (Active immediately on load) */}
      {shootingStars.map((shooting) => (
        <div
          key={shooting.id}
          className="shooting-star-emitter"
          style={{
            top: shooting.top,
            left: shooting.left,
            animationDelay: shooting.delay,
            animationDuration: shooting.duration,
          }}
        >
          <div className="shooting-star-beam" />
        </div>
      ))}
    </div>
  );
};
