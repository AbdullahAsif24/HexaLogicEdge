"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedButton from "./Buttton";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI Chatbot",
    description: "An intelligent assistant built to automate conversations and enhance user engagement.",
    image: "/img1.jpg",
    link: "",
  },
  {
    title: "Ecommerce",
    description: "A sleek, high-performance store built for modern shopping experiences.",
    image: "/img2.jpg",
    link: "",
  },
  {
    title: "WordPress",
    description: "Fully custom WordPress websites with beautiful design and SEO-ready setup.",
    image: "/img3.jpg",
    link: "",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".project-slide");

      // Scroll trigger for horizontal scroll
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

      // Animate text per slide
      slides.forEach((slide, i) => {
        const text = slide.querySelector(".project-text");
        gsap.set(text, { autoAlpha: 0, x: 50 });

        // Show text only when that slide is in center view
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
            gsap.to(text, {
              autoAlpha: 0,
              x: 50,
              duration: 0.6,
              ease: "power3.in",
            });
          },
        });

        // 👇 manually show text of first slide on load
        if (i === 0) {
          gsap.to(text, {
            autoAlpha: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.2, // allow DOM to settle
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
      {/* Section Heading */}
      <div className="absolute top-0 left-0 w-full z-10 pt-20 md:pt-24 px-4 sm:px-10 text-center pointer-events-none">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-warmBeige">
          Projects That Speak for Themselves
        </h2>
      </div>

      {/* Slides */}
      <div className="flex w-[300vw] h-screen">
        {projects.map((project, i) => (
          <div
            key={i}
            ref={(el) => (slideRefs.current[i] = el)}
            className="project-slide w-screen h-screen relative flex items-center justify-center px-4 sm:px-10"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto w-full pt-28 md:pt-36">
              {/* Image */}
              <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="project-text opacity-0 max-w-xl text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-warmBeige">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-textMuted mb-6">
                  {project.description}
                </p>

                <AnimatedButton
                  onClick={() => {
                    if (project.link) {
                      window.location.href = project.link;
                    }
                  }}
                  className={`px-6 py-3 bg-softBrown text-linen ${
                    !project.link ? "opacity-50 cursor-not-allowed" : "hover:bg-softBrown/80"
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
