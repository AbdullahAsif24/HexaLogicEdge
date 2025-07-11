"use client";
import Link from "next/link";
import AnimatedHoverText from "./AnimatedTextHover";
import AnimatedButton from "./Buttton";

export default function HomeSec() {
  return (
    <div className="relative z-10 h-screen md:h-[97vh] w-full flex items-center justify-center px-4 md:px-10 lg:px-16 overflow-hidden">
      {/* Content */}
      <div className="max-w-5xl text-center">
        <h1
          className="
            hero-heading font-heading 
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-extrabold mb-4 tracking-tight 
            text-[#ede8f5] 
            leading-tight md:leading-[4.5rem]
          "
        >

          <AnimatedHoverText startColor="#adbbda" midColor="#1e2235">
            HEXALOGIC
          </AnimatedHoverText>
          {" "} Makes digital feel personal.
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
          <Link href="/contact">
            <AnimatedButton>Start Your Project</AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
