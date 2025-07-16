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
        richBlack: "#0b0c10",
        linen: "#f7f4ef",
        stone: "#d6cdc4",
        warmBeige: "#bba891",
        softBrown: "#7a6c5d",
        textMuted: "#948e88",
        textDark: "#1c1c1c",
        
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