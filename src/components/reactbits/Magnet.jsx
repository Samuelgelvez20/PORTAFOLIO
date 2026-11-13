import React, { useRef } from 'react';
import gsap from 'gsap';

/**
 * Magnet component inspired by React Bits (reactbits.dev)
 * Attracts elements towards the cursor with elastic physics on hover.
 */
export const Magnet = ({
  children,
  strength = 0.35,
  className = '',
  innerClassName = '',
  active = true,
}) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!active) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(inner, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!active) return;
    const inner = innerRef.current;
    if (!inner) return;

    gsap.to(inner, {
      x: 0,
      y: 0,
      duration: 0.75,
      ease: 'elastic.out(1.1, 0.35)',
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      <div ref={innerRef} className={`will-change-transform ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default Magnet;
