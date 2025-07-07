"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedHoverText from "./AnimatedTextHover";
import AnimatedButton from "./Buttton";

gsap.registerPlugin(ScrollTrigger);


export default function HomeSec() {


  // for animation 
  const polyRefs = useRef([]);

  useEffect(() => {
  polyRefs.current.forEach((poly, i) => {
    gsap.to(poly, {
      duration: 6 + i * 1.5,  // was 12 + i*3
      x: i % 2 === 0 ? 20 : -20,
      y: i % 2 === 0 ? -10 : 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: i * 1,
    });
    gsap.to(poly, {
      duration: 5 + i,   // was 10 + i*2
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
        h-[95vh] overflow-x-hidden
        bg-[#1e2235] text-[#ede8f5]
        font-sans rounded-lg m-5
        flex items-center justify-center
      "
    >
      {/* Animated Abstract Polygon SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <polygon
          ref={(el) => (polyRefs.current[0] = el)}
          points="0,0 300,100 200,400 0,300"
          fill="#4f46e5"
          fillOpacity="0.3"
        />
        <polygon
          ref={(el) => (polyRefs.current[1] = el)}
          points="800,0 600,150 650,450 800,400"
          fill="#a5b4fc"
          fillOpacity="0.25"
        />
        <polygon
          ref={(el) => (polyRefs.current[2] = el)}
          points="400,600 550,400 700,600"
          fill="#4338ca"
          fillOpacity="0.35"
        />
        <polygon
          ref={(el) => (polyRefs.current[3] = el)}
          points="0,500 150,350 350,600"
          fill="#818cf8"
          fillOpacity="0.2"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 px-4 py-4 md:px-10 md:py-10 lg:px-16 lg:py-16 max-w-5xl text-center">
        <h1 className="hero-heading font-heading text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-[#ede8f5]" style={{ lineHeight: "4.5rem" }}>
          Empowering Digital Vision with{" "}
          <AnimatedHoverText className="" startColor="#adbbda" midColor="#1e2235">
            HEXALOGIC
          </AnimatedHoverText>
        </h1>

        <p className="hero-subtext max-w-3xl mx-auto text-lg md:text-xl mb-4">
          We transform businesses through cutting-edge technology and stunning digital experiences.
        </p>

        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          {/* <button className="cta-button font-heading bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transform hover:scale-110 transition">
            Start Your Project
          </button>
          <button className="cta-button font-heading border border-indigo-400 text-indigo-400 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transform hover:scale-110 transition">
            Explore Portfolio
          </button> */}
          <AnimatedButton>Start Your Project</AnimatedButton>
        </div>
      </div>
    </div>
  );
}
