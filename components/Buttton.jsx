"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function AnimatedButton({ children, className = "", ...props }) {
  const btnRef = useRef(null);
  const bgRef = useRef(null);
  const [letters, setLetters] = useState([]);

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
    const letterEls = btn.querySelectorAll(".animated-letter");

    // Initial style
    gsap.set(bg, {
      borderRadius: "0.375rem",
      backgroundColor: "#bba891", // warmBeige
    });
    gsap.set(letterEls, {
      color: "#f7f4ef", // linen
      scale: 1,
    });

    function onEnter() {
      gsap.to(bg, {
        backgroundColor: "#f7f4ef", // linen on hover
        duration: 0.4,
        ease: "power1.out",
      });
      gsap.to(letterEls, {
        color: "#0b0c10", // richBlack
        scale: 1.2,
        duration: 0.4,
        stagger: 0.05,
        ease: "power3.out",
      });
    }

    function onLeave() {
      gsap.to(bg, {
        backgroundColor: "#bba891", // back to warmBeige
        duration: 0.4,
        ease: "power1.in",
      });
      gsap.to(letterEls, {
        color: "#f7f4ef", // linen
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
      className={`relative overflow-hidden px-8 py-3 rounded-md font-semibold cursor-pointer select-none bg-warmBeige text-linen transition-colors duration-300 ${className}`}
      {...props}
    >
      <span
        ref={bgRef}
        className="absolute inset-0"
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
