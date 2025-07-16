"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedButton from "./Buttton";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Caffeine Empire",
    description:
      "A sleek and responsive coffee eCommerce website built to deliver premium coffee experiences online.",
    image: "/web1.png",
    link: "",
    technologies: ["Html", "Css", "Js", "Bootstrap", "J-Query"],
  },
  {
    title: "Auctions-Table",
    description:
      "An elegant and responsive website showcasing handcrafted furniture and artistic paintings, designed to blend aesthetics with usability.",
    image: "/web2.png",
    link: "",
    technologies: ["Html", "Css", "Js", "Bootstrap", "J-Query"],
  },
  {
    title: "WordPress",
    description:
      "Fully custom WordPress websites with beautiful design and SEO-ready setup.",
    image: "/img3.jpg",
    link: "",
    technologies: ["WordPress", "Elementor", "Yoast SEO", "PHP"],
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
            gsap.to(text, {
              autoAlpha: 0,
              x: 50,
              duration: 0.6,
              ease: "power3.in",
            });
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
      <div className="absolute top-0 left-0 w-full z-10 pt-20 md:pt-24 px-4 sm:px-10 text-center pointer-events-none">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-warmBeige">
          Projects That Speak for Themselves
        </h2>
      </div>

      <div className="flex w-[300vw] h-screen">
        {projects.map((project, i) => (
          <div
            key={i}
            ref={(el) => (slideRefs.current[i] = el)}
            className="project-slide w-screen h-screen relative flex items-center justify-center px-4 sm:px-10"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto w-full pt-28 md:pt-36">
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

                {/* Technologies (No Icons) */}
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
                      window.location.href = project.link;
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
