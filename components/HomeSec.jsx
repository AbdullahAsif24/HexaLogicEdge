"use client";
import Link from "next/link";
import AnimatedHoverText from "./AnimatedTextHover";
import AnimatedButton from "./Buttton";

export default function HomeSec() {
  return (
    <div className="relative z-10 h-screen w-full flex items-center justify-center px-4 md:px-10 lg:px-16 text-linen">
      <div className="max-w-5xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight md:leading-[4.5rem] text-warmBeige">
          <AnimatedHoverText
            startColor="#bba891"
            midColor="#f7f4ef"
            endColor="#bba891"
          >
            HEXALOGIC
          </AnimatedHoverText>{" "}
          Makes digital feel personal.
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl mb-4 text-stone">
          We transform businesses through cutting-edge technology and stunning
          digital experiences.
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
