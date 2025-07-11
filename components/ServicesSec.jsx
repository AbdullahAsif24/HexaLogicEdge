"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHoverText from "./AnimatedTextHover";

const designServices = [
  "Information Architecture",
  "User research and testing",
  "Conversion optimization",
  "Design systems",
  "Web app design",
];

const developmentServices = [
  "Mobile app design",
  "Brand identity",
  "Decks and social media",
  "Internal product design",
  "Marketing assets",
];

export default function ServicesSec() {
  const [activeTab, setActiveTab] = useState("development");

  return (
    <div className="min-h-[90vh] md:min-h-[97vh] px-6 md:px-20 py-20 font-sans text-[#ede8f5]">
      {/* Top Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h2 className="text-4xl md:text-7xl font-bold">What we do</h2>
        <p className="text-sm md:text-base font-medium mt-4 text-[#b5b0c3]">
          <span className="font-semibold text-[#ede8f5]">Services</span>
          <span> — Ranging from big ideas to fine details</span>
        </p>
        <hr className="mt-4 border-[#d9cec6]" />
      </motion.div>

      {/* Layout: Left Tabs & Right List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Tabs */}
        <div className="space-y-10">
          {/* Development Tab */}
          <div
            className="relative cursor-pointer w-fit"
            onClick={() => setActiveTab("development")}
          >
            <AnimatedHoverText
              className={`text-[3rem] md:text-[4.5rem] font-bold transition ${
                activeTab === "development" ? "text-[#f1e6dd]" : "text-[#77758a]"
              }`}
            >
              Development
            </AnimatedHoverText>

            <div className="h-[6px] mt-1 relative">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeTab === "development" ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="origin-left absolute left-0 bottom-0 h-[6px] w-full bg-[#a5b4fc] rounded-full"
              />
            </div>
          </div>

          {/* Design Tab */}
          <div
            className="relative cursor-pointer w-fit"
            onClick={() => setActiveTab("design")}
          >
            <AnimatedHoverText
              className={`text-5xl md:text-6xl font-bold transition ${
                activeTab === "design" ? "text-[#f1e6dd]" : "text-[#77758a]"
              }`}
            >
              Design
            </AnimatedHoverText>

            <div className="h-[6px] mt-1 relative">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeTab === "design" ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="origin-left absolute left-0 bottom-0 h-[6px] w-full bg-[#a5b4fc] rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-x-10 text-base"
            >
              {(activeTab === "design"
                ? designServices
                : developmentServices
              ).map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-start"
                  initial={{ opacity: 0, x: activeTab === "design" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <span className="text-[#4f46e5] mr-3 text-lg">✦</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
