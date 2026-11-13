import React, { useEffect, useState, useRef } from 'react';

/**
 * DecryptedText component inspired by React Bits (reactbits.dev)
 * Creates a cyber/terminal decrypt scramble effect on mount and hover.
 */
export const DecryptedText = ({
  text,
  speed = 35,
  maxIterations = 14,
  sequential = true,
  characters = '01#@%&*<>/\\{}[]_=+?!~XYZ',
  className = '',
  parentClassName = '',
  animateOn = 'both', // 'view', 'hover', 'both'
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const hasAnimatedOnView = useRef(false);

  // Sincronizar texto si cambia el idioma
  useEffect(() => {
    setDisplayText(text);
    hasAnimatedOnView.current = false;
    startScramble();
  }, [text]);

  const startScramble = () => {
    clearInterval(intervalRef.current);
    setIsScrambling(true);

    let iteration = 0;
    const splitText = text.split('');
    const length = splitText.length;

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        splitText
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (char === '/' || char === '•' || char === '-') return char;

            if (sequential) {
              const progress = (iteration / maxIterations) * length;
              if (index < progress) {
                return text[index];
              }
            } else {
              if (iteration >= maxIterations) {
                return text[index];
              }
            }

            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      iteration++;

      if (iteration > maxIterations) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, speed);
  };

  useEffect(() => {
    if (animateOn === 'view' || animateOn === 'both') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimatedOnView.current) {
              hasAnimatedOnView.current = true;
              startScramble();
            }
          });
        },
        { threshold: 0.2 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        observer.disconnect();
        clearInterval(intervalRef.current);
      };
    }
  }, [animateOn]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover' || animateOn === 'both') {
      startScramble();
    }
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={`inline-block cursor-default select-none ${parentClassName}`}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
};

export default DecryptedText;
