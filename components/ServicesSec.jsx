"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHoverText from "./AnimatedTextHover";

const designServices = [
  "UI/UX Design",
  "Logo Design",
  "Web App Design",
  "Website Design",
  "Mobile App Design",
];

const developmentServices = [
  "Website Development",
  "Web App Development",
  "Cross Platform Mobile Apps",
  "API Integrations",
  "Performance Optimization",
  "Ongoing Support",
];

export default function ServicesSec() {
  const [activeTab, setActiveTab] = useState("development");

  return (
    <section id="services" className="relative overflow-hidden">
      <div className="h-auto md:h-screen px-6 md:px-20 py-24 bg-linen text-textDark font-sans">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <AnimatedHoverText
            startColor="#bba891"
            midColor="#1c1c1c"
            endColor="#bba891"
          >
            <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#7a6c5d] via-[#1c1c1c] to-[#7a6c5d] bg-clip-text text-transparent drop-shadow-md">
              What we do
            </h2>
          </AnimatedHoverText>

          <p className="text-sm md:text-base font-medium mt-4 text-softBrown">
            <span className="font-semibold text-warmBeige">Services</span>
            <span> — Ranging from big ideas to fine details</span>
          </p>

          <hr className="mt-5 border-stone mx-auto w-32" />
        </motion.div>

        {/* Tabs and List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Tabs */}
          <div className="space-y-12">
            {["development", "design"].map((tab) => (
              <motion.div
                key={tab}
                whileHover={{ scale: 1.03 }}
                className="relative cursor-pointer w-fit group"
                onClick={() => setActiveTab(tab)}
              >
                <AnimatedHoverText
                  startColor="#7a6c5d"
                  endColor="#bba891"
                  midColor="#1c1c1c"
                  className={`text-4xl md:text-6xl font-extrabold transition duration-300 ${
                    activeTab === tab ? "text-textDark" : "text-textMuted"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </AnimatedHoverText>

                <div className="h-[6px] mt-2 relative">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeTab === tab ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="origin-left absolute left-0 bottom-0 h-[6px] w-full bg-gradient-to-r from-warmBeige to-softBrown rounded-full shadow-md"
                  />
                </div>
              </motion.div>
            ))}
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
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-x-10 text-base bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-softBrown/20"
              >
                {(activeTab === "design"
                  ? designServices
                  : developmentServices
                ).map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-lg text-textDark"
                    initial={{
                      opacity: 0,
                      x: activeTab === "design" ? -20 : 20,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <span className="text-warmBeige text-xl">✦</span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
