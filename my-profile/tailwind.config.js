/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%, 5%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        wave: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        rainbowBorder: {
          "0%": { borderColor: "red" },
          "16.7%": { borderColor: "orange" },
          "33.4%": { borderColor: "yellow" },
          "50%": { borderColor: "green" },
          "66.7%": { borderColor: "blue" },
          "83.4%": { borderColor: "indigo" },
          "100%": { borderColor: "violet" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        wave: "wave 8s ease-in-out infinite",
        rainbowBorder: "rainbowBorder 5s linear infinite",
      },
    },
  },
  plugins: [],
};
