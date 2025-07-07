"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

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

  return (
    <nav
      className="
        fixed bottom-4 left-1/2 transform -translate-x-1/2
        w-[77%] max-w-5xl
        bg-white dark:bg-gray-900
        text-gray-800 dark:text-gray-100
        rounded-full px-6 py-3
        flex justify-between items-center
        shadow-lg z-50
      "
    >
      <div className="flex items-center gap-2 text-xl font-heading font-bold">
        <span className="text-indigo-600 dark:text-teal-400">🔷</span>
        Hexalogic
      </div>

      <ul className="hidden md:flex gap-6 items-center">
        {["Home", "Services", "Portfolio", "Contact"].map((link) => (
          <li
            key={link}
            className="
              cursor-pointer font-medium
              hover:text-indigo-600 dark:hover:text-teal-400
            "
          >
            {link}
          </li>
        ))}
        <li>
          <button
            onClick={toggleTheme}
            className="
              bg-indigo-600 dark:bg-teal-500
              text-white px-4 py-2 rounded-full
              hover:bg-indigo-700 dark:hover:bg-teal-600
            "
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-gray-800 dark:text-gray-100 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed bottom-20 left-1/2 transform -translate-x-1/2
          w-[70%] max-w-5xl
          bg-white dark:bg-gray-900
          text-gray-800 dark:text-gray-100
          rounded-2xl p-6
          shadow-2xl
          ${menuOpen ? "block" : "hidden"}
        `}
      >
        <ul className="flex flex-col gap-4">
          {["Home", "Services", "Portfolio", "Contact"].map((link) => (
            <li
              key={link}
              className="
                text-lg font-medium cursor-pointer
                hover:text-indigo-600 dark:hover:text-teal-400
              "
            >
              {link}
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="
                mt-4 w-full
                bg-indigo-600 dark:bg-teal-500
                text-white px-4 py-2 rounded-full
                hover:bg-indigo-700 dark:hover:bg-teal-600
              "
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
