"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import AnimatedButton from "./Buttton";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A responsive expense tracking application built with Next.js, Tailwind CSS, and Firebase.",
    image: "/expense.png",
    link: "https://expense-tracker-ashy-xi.vercel.app/",
    technologies: ["Next js", "TypeScript", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Caffeine Empire",
    description:
      "A sleek and responsive coffee eCommerce website built to deliver premium coffee experiences online.",
    image: "/coffe.png",
    link: "https://muhammadmubashir732.github.io/COFFEE/",
    technologies: ["Html", "Css", "Js", "Bootstrap", "J-Query"],
  },
  {
    title: "Auctions-Table",
    description:
      "An elegant and responsive website showcasing handcrafted furniture and artistic paintings, designed to blend aesthetics with usability.",
    image: "/auctions.png",
    link: "https://muhammadmubashir732.github.io/Auction-table/",
    technologies: ["Html", "Css", "Js", "Bootstrap", "J-Query"],
  },
  {
    title: "Password Manager",
    description:
      "A password manager application which allows users to store and manage their passwords securely.",
    image: "/pass.png",
    link: "https://abdullahasif24.github.io/PassWord-Manager/",
    technologies: ["Html", "Css", "Js", "Bootstrap", "local storage", "encryption"],
  },
  {
    title: "Headphones Landing Page",
    description:
      "A responsive landing page for headphones built with Html, Css, Js, and Bootstrap.",
    image: "/headphones.png",
    link: "https://abdullahasif24.github.io/HeadPhone-Animated-LandingPage/",
    technologies: ["Html", "Css", "Js", "Bootstrap"],
  },
  
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".project-slide");

      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (slides.length - 1),
          end: () => "+=" + sectionRef.current.offsetWidth * 0.7,
        },
      });

      slides.forEach((slide, i) => {
        const text = slide.querySelector(".project-text");
        gsap.set(text, { autoAlpha: 0, x: 50 });

        ScrollTrigger.create({
          trigger: slide,
          start: "center center",
          onEnter: () => {
            gsap.to(text, {
              autoAlpha: 1,
              x: 0,
              duration: 0.6,
              ease: "power3.out",
            });
          },
          onEnterBack: () => {
            gsap.to(text, {
              autoAlpha: 1,
              x: 0,
              duration: 0.6,
              ease: "power3.out",
            });
          },
          onLeaveBack: () => {
            if (i !== 0) {
              gsap.to(text, {
                autoAlpha: 0,
                x: 50,
                duration: 0.6,
                ease: "power3.in",
              });
            }
          },
        });
        

        if (i === 0) {
          gsap.to(text, {
            autoAlpha: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.2,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full overflow-x-hidden relative bg-richBlack text-linen"
      id="work"
    >
      {/* Background SVG Blob 1 */}
      <motion.svg
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] z-0 opacity-10 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#bba891" />
            <stop offset="100%" stopColor="#7a6c5d" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient1)"
          d="M44.8,-61.9C57.3,-54.1,66.8,-42.3,69.8,-29.6C72.8,-16.9,69.2,-3.4,66.3,10.3C63.5,24.1,61.3,37.9,53.1,48.8C45,59.6,30.9,67.5,16.3,70.9C1.6,74.3,-13.6,73.1,-27.8,67.4C-42,61.8,-55.3,51.7,-63.5,38.5C-71.8,25.4,-75,9.2,-72.8,-6.3C-70.6,-21.8,-63,-36.7,-51.6,-44.9C-40.3,-53.1,-25.1,-54.7,-10.4,-61.3C4.3,-68,17.4,-79.6,29.9,-78.2C42.5,-76.8,44.8,-61.9,44.8,-61.9Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      {/* Background SVG Blob 2 */}
      <motion.svg
        className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] z-0 opacity-20 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7a6c5d" />
            <stop offset="100%" stopColor="#bba891" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient2)"
          d="M54.4,-60.5C69.4,-50.7,80.7,-34.5,83.7,-17.3C86.7,0,81.3,17.2,72.6,32.3C63.9,47.4,51.8,60.5,37.2,66.2C22.5,72,5.2,70.4,-10.4,66.7C-26,63.1,-39.8,57.4,-51.2,47.6C-62.6,37.7,-71.7,23.8,-74.2,8.4C-76.7,-7,-72.5,-23,-63.1,-36.1C-53.6,-49.2,-39,-59.4,-23.3,-67.2C-7.5,-75,9.5,-80.4,24.2,-76.4C38.9,-72.5,51.4,-59.3,54.4,-60.5Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      {/* Section Heading */}
      <div className="absolute top-0 left-0 w-full z-10 pt-20 md:pt-24 px-4 sm:px-10 text-center pointer-events-none">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-warmBeige">
          Projects That Speak for Themselves
        </h2>
      </div>

      {/* Projects */}
      <div className="flex w-[500vw] h-screen z-10 relative">
        {projects.map((project, i) => (
          <div
            key={i}
            ref={(el) => (slideRefs.current[i] = el)}
            className="project-slide w-screen h-screen relative flex items-center justify-center px-4 sm:px-10"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto w-full min-h-[650px] sm:min-h-[700px] md:min-h-0 pt-28 md:pt-36">

              <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="project-text opacity-0 max-w-xl text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-warmBeige">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-textMuted mb-4">
                  {project.description}
                </p>

                <div className="hidden md:flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm px-3 py-1 bg-warmBeige/10 text-warmBeige border border-warmBeige/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <AnimatedButton
                  onClick={() => {
                    if (project.link) {
                      window.open(project.link, "_blank");
                    }
                  }}
                  className={`px-6 py-3 bg-softBrown text-linen ${
                    !project.link
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-softBrown/80"
                  }`}
                  disabled={!project.link}
                >
                  View Project
                </AnimatedButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
