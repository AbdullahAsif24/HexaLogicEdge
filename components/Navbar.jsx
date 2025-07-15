"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }

    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -10, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        }
      );
    }
  }, [menuOpen]);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <>
      {/* Top Fixed Navbar */}
      <nav
        ref={navRef}
        className="
          fixed top-3 left-1/2 transform -translate-x-1/2
          w-[89%] sm:w-[85%] md:w-[70%] max-w-5xl
          bg-warmBeige text-richBlack
          rounded-full px-5 py-2
          flex justify-between items-center
          shadow-xl z-50 backdrop-blur-xl bg-opacity-90 border border-warmBeige/20
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <img
            src="/another-logo-without-bg.png"
            alt="Hexalogic Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-semibold tracking-wide text-richBlack">
            Hexalogic
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 items-center font-medium text-[15px]">
          {["Home", "Services", "Work", "Contact"].map((link) => (
            <Link href={`/${link.toLowerCase()}`} key={link}>
              <li
                onClick={handleLinkClick}
                className="cursor-pointer hover:text-linen transition"
              >
                {link}
              </li>
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-richBlack"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`
          fixed top-20 left-1/2 transform -translate-x-1/2
          w-[89%] sm:w-[85%] md:w-[70%] max-w-5xl
          bg-warmBeige text-richBlack
          rounded-2xl p-6 shadow-2xl z-40
          border border-warmBeige/20
          ${menuOpen ? "block" : "hidden"}
        `}
      >
        <ul className="flex flex-col gap-5 text-center font-medium text-[16px]">
          {["Home", "Services", "Work", "Contact"].map((link) => (
            <Link href={`/${link.toLowerCase()}`} key={link}>
              <li
                onClick={handleLinkClick}
                className="cursor-pointer hover:text-linen transition"
              >
                {link}
              </li>
            </Link>
          ))}

          {/* Optional Theme Toggle */}
          {/* <li>
            <button
              onClick={toggleTheme}
              className="mt-4 w-full bg-warmBeige text-richBlack px-4 py-2 rounded-full hover:bg-linen"
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </li> */}
        </ul>
      </div>
    </>
  );
}
