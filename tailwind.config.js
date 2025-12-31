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
          "0%": { borderColor: "#0ea5e9" },
          "20%": { borderColor: "#10b981" },
          "40%": { borderColor: "#14b8a6" },
          "60%": { borderColor: "#7c3aed" },
          "80%": { borderColor: "#2563eb" },
          "100%": { borderColor: "#0ea5e9" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        wave: "wave 10s ease-in-out infinite",
        rainbowBorder: "rainbowBorder 5s linear infinite",
      },
    },
  },
  plugins: [],
};
