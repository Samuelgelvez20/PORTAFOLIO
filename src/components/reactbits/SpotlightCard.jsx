import React, { useRef, useState } from 'react';

/**
 * SpotlightCard component inspired by React Bits (reactbits.dev)
 * Generates an interactive cursor-following radial spotlight glow across the card surface.
 * Uses high-performance CSS variables to prevent unnecessary React re-renders on mousemove.
 */
export const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(56, 189, 248, 0.16)',
  borderSpotlightColor = 'rgba(129, 140, 248, 0.35)',
  ...props
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--spotlight-x', `${x}px`);
    cardRef.current.style.setProperty('--spotlight-y', `${y}px`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Radial Spotlight Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at var(--spotlight-x, -500px) var(--spotlight-y, -500px), ${spotlightColor}, transparent 65%)`,
        }}
      />

      {/* Luminous Border Illumination */}
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
          background: `radial-gradient(280px circle at var(--spotlight-x, -500px) var(--spotlight-y, -500px), ${borderSpotlightColor}, transparent 70%)`,
        }}
      />

      {/* Card Inner Content (z-10 to stay above spotlight) */}
      <div className="relative z-10 flex-1 flex flex-col justify-between h-full">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
