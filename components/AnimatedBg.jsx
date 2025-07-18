"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBg = ({ children }) => {
  const polyRefs = useRef([]);

  useEffect(() => {
    polyRefs.current.forEach((poly, i) => {
      gsap.to(poly, {
        duration: 6 + i * 1.5,
        x: i % 2 === 0 ? 20 : -20,
        y: i % 2 === 0 ? -10 : 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 1,
      });
      gsap.to(poly, {
        duration: 5 + i,
        fillOpacity: 0.2 + (i % 2) * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.75,
      });
    });
  }, []);

  return (
    <div
      className="
        relative
        h-auto
        bg-richBlack text-linen
        font-sans
        flex flex-col
        scrollbar-hide
      "
    >
      {/* Animated SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <polygon
          ref={(el) => (polyRefs.current[0] = el)}
          points="0,0 300,100 200,400 0,300"
          fill="#7a6c5d" // softBrown
          fillOpacity="0.3"
        />
        <polygon
          ref={(el) => (polyRefs.current[1] = el)}
          points="800,0 600,150 650,450 800,400"
          fill="#bba891" // warmBeige
          fillOpacity="0.25"
        />
        <polygon
          ref={(el) => (polyRefs.current[2] = el)}
          points="400,600 550,400 700,600"
          fill="#948e88" // muted
          fillOpacity="0.35"
        />
        <polygon
          ref={(el) => (polyRefs.current[3] = el)}
          points="0,500 150,350 350,600"
          fill="#d6cdc4" // stone
          fillOpacity="0.2"
        />
      </svg>

      {/* Scrollable content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBg;
