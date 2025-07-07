"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "We build modern web apps with cutting-edge technology and beautiful design.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "We craft engaging and beautiful digital experiences your users will love.",
  },
  {
    icon: "⚙️",
    title: "Backend Engineering",
    description:
      "Robust, secure backends built for scalability and speed.",
  },
  {
    icon: "📱",
    title: "App Development",
    description:
      "Cross-platform apps combining elegance with high performance.",
  },
];

export default function HomeSec() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    gsap.killTweensOf("*");
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    gsap.from(".hero-heading", {
      x: -250,
      opacity: 0,
      duration: 2.5,
      ease: "elastic.out(2, 1.5)",
      scrollTrigger: {
        trigger: ".hero-heading",
        start: "top 80%",
      },
    });

    gsap.to(".highlight", {
      color: "#22D3EE",
      repeat: -1,
      yoyo: true,
      duration: 1.8,
      ease: "power1.inOut",
    });

    gsap.from(".hero-subtext", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-subtext",
        start: "top 85%",
      },
    });

    gsap.from(".cta-button", {
      opacity: 0,
      y: 30,
      duration: 1.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cta-button",
        start: "top 90%",
      },
    });

    gsap.fromTo(
      ".service-card",
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 80%",
        },
      }
    );
  }, [hasMounted]);

  if (!hasMounted) return null;

  return (
    <div
      className="
        relative min-h-screen overflow-x-hidden
        bg-gradient-to-br from-gray-50 via-purple-100 to-indigo-100
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-700
        text-gray-800 dark:text-gray-100 font-sans
      "
    >
      <Navbar />

      {/* global page margin wrapper */}
      <div className="px-4 py-4 md:px-10 md:py-10 lg:px-16 lg:py-16">
        <section className="pt-40 text-center">
          <h1 className="hero-heading font-heading text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Empowering Digital Vision with{" "}
            <span className="highlight text-indigo-600 dark:text-teal-400">
              Hexalogic
            </span>
          </h1>

          <p className="hero-subtext max-w-3xl mx-auto text-lg md:text-xl mb-4">
            We transform businesses through cutting-edge technology and stunning digital experiences.
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <button className="cta-button font-heading bg-indigo-600 dark:bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-teal-600 transform hover:scale-110">
              Start Your Project
            </button>
            <button className="cta-button font-heading border border-indigo-600 dark:border-teal-400 text-indigo-600 dark:text-teal-400 px-6 py-3 rounded-lg hover:bg-indigo-600 dark:hover:bg-teal-400 hover:text-white transform hover:scale-110">
              Explore Portfolio
            </button>
          </div>
        </section>

        <section id="services" className="mt-24">
          <h2 className="text-3xl md:text-4xl text-center font-heading font-semibold mb-12">
            Our <span className="text-indigo-600 dark:text-teal-400">Expertise</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  service-card bg-white dark:bg-gray-800
                  p-6 rounded-xl text-center
                  hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105
                "
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-2 hover:text-indigo-600 dark:hover:text-teal-400">
                  {service.title}
                </h3>
                <p className="text-sm mb-4 hover:text-indigo-600 dark:hover:text-teal-400">
                  {service.description}
                </p>
                <button className="mt-2 font-heading bg-teal-500 dark:bg-indigo-600 text-white px-4 py-2 rounded hover:bg-teal-600 dark:hover:bg-indigo-700 transform hover:scale-110">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
