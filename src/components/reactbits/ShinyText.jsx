import React from 'react';

/**
 * ShinyText component: 100% GPU-composited metallic shimmer
 * Uses transform: translateX on an accelerated pseudo-layer instead of background-position.
 */
export const ShinyText = ({
  text,
  speed = 3.5,
  className = '',
}) => {
  return (
    <span className={`relative inline-flex overflow-hidden align-middle ${className}`}>
      <span className="relative z-10 text-blue-700 dark:text-blue-300 font-semibold">{text}</span>
      <span
        className="pointer-events-none absolute inset-0 z-20 animate-shiny-shimmer-gpu opacity-70"
        style={{ animationDuration: `${speed}s` }}
      />
    </span>
  );
};

export default ShinyText;
