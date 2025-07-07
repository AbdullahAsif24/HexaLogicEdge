'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

const AnimatedHoverText = ({
  children,
  className = '',
  startColor = '#ffffff',
  midColor = '#000000',
  endColor = '#ffffff'
}) => {
  const textRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    const split = new SplitType(textRef.current, { types: 'chars' });
    charsRef.current = split.chars;

    gsap.set(charsRef.current, {
      color: startColor,
    });
  }, [startColor]);

  const animateToMidColor = () => {
    gsap.to(charsRef.current, {
      color: midColor,
      stagger: {
        each: 0.015,
        from: 'end',
      },
      duration: 0.15,
      onComplete: () => {
        gsap.to(charsRef.current, {
          color: endColor,
          stagger: {
            each: 0.015,
            from: 'end',
          },
          duration: 0.15,
        });
      },
    });
  };

  const animateToStartColor = () => {
    gsap.to(charsRef.current, {
      color: midColor,
      stagger: {
        each: 0.015,
        from: 'start',
      },
      duration: 0.15,
      onComplete: () => {
        gsap.to(charsRef.current, {
          color: startColor,
          stagger: {
            each: 0.015,
            from: 'start',
          },
          duration: 0.15,
        });
      },
    });
  };

  return (
    <span
      ref={textRef}
      onMouseEnter={animateToMidColor}
      onMouseLeave={animateToStartColor}
      className={`inline-block cursor-pointer ${className}`}
    >
      {children}
    </span>
  );
};

export default AnimatedHoverText;
