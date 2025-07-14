/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages//*.{js,ts,jsx,tsx}",
    "./components//*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBackground: "#F7F8FC",
        darkBackground: "#111827",
        lightSurface: "#FFFFFF",
        darkSurface: "#1F2937",
        lightTextPrimary: "#111827",
        darkTextPrimary: "#F9FAFB",
        lightTextSecondary: "#374151",
        darkTextSecondary: "#9CA3AF",
        primary: "#4F46E5", // violet
        primaryDark: "#3730A3",
        accent: "#22D3EE", // cyan
        accentDark: "#0E7490",
        buttonHover: "#3730A3",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(rgba(17,24,39,0.5), rgba(17,24,39,0.5)), url('/bg-hero.jpg')",
      },
      keyframes: {
        grow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        pulseCircle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.3)", opacity: "0.5" },
        },
        bounceUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        grow: "grow 2s ease-out forwards",
        pulseCircle: "pulseCircle 1.5s ease-in-out infinite",
        bounceUp: "bounceUp 0.6s ease infinite",
      },
    },
  },
  plugins: [],
};