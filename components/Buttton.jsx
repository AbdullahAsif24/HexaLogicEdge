"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function AnimatedButton({ children, className = "", ...props }) {
  const btnRef = useRef(null);
  const bgRef = useRef(null);
  const [letters, setLetters] = useState([]);

  // Split children text into letters for animation
  useEffect(() => {
    if (typeof children === "string") {
      setLetters(children.split(""));
    } else {
      setLetters([children]);
    }
  }, [children]);

  useEffect(() => {
    const btn = btnRef.current;
    const bg = bgRef.current;

    // Anim refs for letters
    const letterEls = btn.querySelectorAll(".animated-letter");

    // Initial states
    gsap.set(bg, {
      borderRadius: "0.375rem", // Tailwind rounded-md fixed, no morph
      backgroundColor: "#4f46e5", // Indigo-600
    });
    gsap.set(letterEls, { color: "#ede8f5", scale: 1 });

    function onEnter() {
      // Change bg color once on hover
      gsap.to(bg, {
        backgroundColor: "#ede8f5", // Light lavender on hover
        duration: 0.4,
        ease: "power1.out",
      });
    
      // Animate letters: stagger color and scale
      gsap.to(letterEls, {
        color: "#1e2235", // Dark text on light background
        scale: 1.2,
        duration: 0.4,
        stagger: 0.05,
        ease: "power3.out",
      });
    }
    

    function onLeave() {
      // Revert bg color
      gsap.to(bg, {
        backgroundColor: "#4f46e5",
        duration: 0.4,
        ease: "power1.in",
      });

      gsap.to(letterEls, {
        color: "#ede8f5",
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: "power3.in",
      });
    }

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);

    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, [letters]);

  return (
    <button
      ref={btnRef}
      className={`relative overflow-hidden px-8 py-3 rounded-md font-semibold cursor-pointer select-none ${className}`}
      {...props}
    >
      <span
        ref={bgRef}
        className="absolute inset-0 bg-indigo-600"
        style={{ zIndex: -1 }}
      ></span>
      <span className="relative z-10 flex justify-center gap-[2px]">
        {letters.map((char, i) => (
          <span
            key={i}
            className="animated-letter inline-block"
            
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char}
          </span>
        ))}
      </span>
    </button>
  );
}
