"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AnimatedBgForPr from "./AnimatedBgForPr";
import AnimatedButton from "./Buttton";

const projects = [
  {
    title: "AI Chatbot",
    description: "This is an AI chatbot",
    image: "/img1.jpg",
    link: "",
  },
  {
    title: "Ecommerce",
    description: "This is an Ecommerce website",
    image: "/img2.jpg",
    link: "",
  },
  {
    title: "Wordpress",
    description: "This is a Wordpress website",
    image: "/img3.jpg",
    link: "",
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev + 1 < projects.length ? prev + 1 : prev
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : prev
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    if (deltaX > 50) {
      handlePrev();
    } else if (deltaX < -50) {
      handleNext();
    }
  };

  return (
    <AnimatedBgForPr>
      <div
        className="w-full max-w-none min-h-screen md:h-[90vh] pt-24 px-4 sm:px-6 overflow-x-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-white">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[activeIndex].image}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-[800px] h-[300px] sm:h-[400px] md:h-[500px] relative rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src={projects[activeIndex].image}
                  alt=""
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Text + Navigation */}
          <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-between h-[300px] sm:h-[400px] md:h-[500px] px-4">
            {/* Top Content */}
            <div className="text-center md:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={projects[activeIndex].title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-md"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    {projects[activeIndex].title}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 mb-6">
                    {projects[activeIndex].description}
                  </p>

                  {/* View Project Button */}
                  <a
                    href={projects[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AnimatedButton className="px-6 py-3 rounded bg-[#4f46e5] text-white hover:bg-[#4f46e5]/80">
                      View Project
                    </AnimatedButton>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Navigation Buttons */}
            <div className="flex justify-center md:justify-start items-center gap-4 mt-8">
              <AnimatedButton
                onClick={handlePrev}
                className="flex items-center gap-2 px-5 py-3 rounded bg-white/10 text-white hover:bg-white/20 disabled:opacity-40"
                disabled={activeIndex === 0}
              >
                <FaArrowLeft />
                Previous
              </AnimatedButton>
              <AnimatedButton
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-3 rounded bg-white/10 text-white hover:bg-white/20 disabled:opacity-40"
                disabled={activeIndex === projects.length - 1}
              >
                Next
                <FaArrowRight />
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </AnimatedBgForPr>
  );
}
