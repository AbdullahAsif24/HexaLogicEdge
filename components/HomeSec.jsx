"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedButton from "./Buttton";
import AnimatedHoverText from "./AnimatedTextHover";

export default function HomeSec() {
  const wordsRef = useRef([]);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Cinematic word-by-word entry animation
    tl.fromTo(
      wordsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.7,
      }
    )
      .fromTo(
        paragraphRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 },
        "-=0.3"
      );
  }, []);

  const headingWords = [" Makes ", "digital ", "feel ", "personal."];

  return (
    <section id="home">
      <div className="relative z-10 h-screen w-full flex items-center justify-center px-4 md:px-10 lg:px-16 text-linen">
        <div className="max-w-5xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight md:leading-[4.5rem] text-warmBeige flex flex-wrap justify-center gap-x-3 gap-y-4 text-center">
        {/* HEXALOGIC wrapped in hover animation */}
            <span
              ref={(el) => (wordsRef.current[0] = el)}
              className="inline-block opacity-0"
            >
              <AnimatedHoverText
                startColor="#bba891"
                midColor="#f7f4ef"
                endColor="#bba891"
              >
                HEXALOGIC
              </AnimatedHoverText>
            </span>

            {/* Rest of the heading */}
            {headingWords.map((word, index) => (
              <span
                key={index}
                ref={(el) => (wordsRef.current[index + 1] = el)}
                className="inline-block opacity-0"
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            ref={paragraphRef}
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl mb-4 text-stone"
          >
            We transform businesses through cutting-edge technology and stunning
            digital experiences.
          </p>

          <div
            ref={buttonRef}
            className="flex justify-center gap-6 mt-6 flex-wrap"
          >
            <a href="#contact">
              <AnimatedButton>Start Your Project</AnimatedButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
