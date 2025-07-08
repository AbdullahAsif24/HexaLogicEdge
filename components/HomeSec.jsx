"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedHoverText from "./AnimatedTextHover";
import AnimatedButton from "./Buttton";
import AnimatedAbstract from "./AnimatedAbstract";

gsap.registerPlugin(ScrollTrigger);


/**
 * A Hero Section component that displays a background with animated polygons and a centered text container with a heading, subtext, and call-to-action buttons.
 *
 * @returns {ReactElement} The Hero Section component.
 */

export default function HomeSec() {


  


  return (
    <div
      className="
      "
    >
      

      {/* Content */}
      <div className="relative z-10 px-4 py-4 md:px-10 md:py-10 lg:px-16 lg:py-16 max-w-5xl text-center">
      <h1
  className="
    hero-heading font-heading 
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
    font-extrabold mb-4 tracking-tight 
    text-[#ede8f5] 
    leading-tight md:leading-[4.5rem]
  "
>
  Empowering Digital Vision with{" "}
  <AnimatedHoverText startColor="#adbbda" midColor="#1e2235">
    HEXALOGIC
  </AnimatedHoverText>
</h1>

<p
  className="
    hero-subtext max-w-3xl mx-auto 
    text-base sm:text-lg md:text-xl 
    mb-4 text-[#e0dff0]
  "
>
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
