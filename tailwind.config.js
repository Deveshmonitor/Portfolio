/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3", // Your custom primary color
        secondary: "#074C83", // Your custom secondary color
        Gray: "#90A2B2", // Your custom Gray color
        bg: "#F5F5F5", // Your custom Gray color
        dark_bg: "#1E293B",
        dar_bg_secondary: "#0F172A", 
      },

      fontFamily: {
        custom: ["Epilogue", "sans-serif"], // 'Epilogue' is the custom font, 'sans-serif' is a fallback
        Poppins: ["Poppins", "sans-serif"], // 'Epilogue' is the custom font, 'sans-serif' is a fallback
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
