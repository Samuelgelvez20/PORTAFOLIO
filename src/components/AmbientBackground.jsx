import React from 'react';
import { Starfield } from './Starfield';

export const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 1. Dynamic Animated Ambient Orbs */}
      <div className="absolute top-[-5%] left-[-5%] w-[40rem] h-[40rem] rounded-full bg-blue-600/25 dark:bg-blue-600/30 blur-[110px] animate-aurora-1" />
      <div className="absolute top-[25%] right-[-10%] w-[44rem] h-[44rem] rounded-full bg-purple-600/25 dark:bg-purple-600/30 blur-[120px] animate-aurora-2" />
      <div className="absolute bottom-[-10%] left-[15%] w-[42rem] h-[42rem] rounded-full bg-indigo-600/20 dark:bg-indigo-600/25 blur-[120px] animate-aurora-3" />
      <div className="absolute top-[65%] right-[20%] w-[34rem] h-[34rem] rounded-full bg-cyan-500/20 dark:bg-cyan-500/20 blur-[100px] animate-aurora-4" />

      {/* 2. Twinkling Starfield & Falling Shooting Stars */}
      <Starfield />

      {/* 3. Modern Technical Mesh Grid with Radial Mask */}
      <div className="absolute inset-0 bg-grid-ambient opacity-60 dark:opacity-45" />

      {/* 4. Top Spotlight Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[30rem] bg-gradient-to-b from-blue-500/15 via-purple-500/10 to-transparent blur-3xl" />

      {/* 5. Subtle Vignette for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(6,8,14,0.6)_100%)]" />
    </div>
  );
};
