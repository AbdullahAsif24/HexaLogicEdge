"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBgForPr from "./AnimatedBgForPr";
import Navbar from "./Navbar";
import AnimatedButton from "./Buttton";

const projects = [
  { title: "One", description: "Test", image: "/img1.jpg" },
  { title: "Two", description: "Test", image: "/img2.jpg" },
  { title: "Three", description: "Test", image: "/img3.jpg" },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1 < projects.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <AnimatedBgForPr>

      <div className="h-full flex flex-col px-4 sm:px-6">
        {/* Main Section */}
        <div className="flex-1 h-screen flex flex-col md:flex-row text-white overflow-hidden">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center relative mb-6 md:mb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[activeIndex].image}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute"
              >
                <div className="w-[90vw] max-w-[400px] h-[250px] sm:h-[300px] relative">
                  <Image
                    src={projects[activeIndex].image}
                    alt=""
                    fill
                    className="object-cover rounded-lg shadow-xl"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-center relative px-4 md:px-10 text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[activeIndex].title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                className="relative max-w-md"
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  {projects[activeIndex].title}
                </h2>
                <p className="text-base sm:text-lg text-gray-300">
                  {projects[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 py-6">
          <AnimatedButton
          
            onClick={handlePrev}
            className="px-4 py-2 rounded disabled:opacity-40 disabled:pointer-events-none"
            disabled={activeIndex === 0}
          >
            Previous
          </AnimatedButton>
          <AnimatedButton
            onClick={handleNext}
            className="px-4 py-2 rounded disabled:opacity-40 disabled:pointer-events-none"
            disabled={activeIndex === projects.length - 1}
          >
            Next
          </AnimatedButton>
        </div>
      </div>
    </AnimatedBgForPr>
  );
}
