/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#ecf6ff",
        "bg-secondary": "#f6ffff",
        "text-primary": "#15415c",
      },
      screens: {
        "xl-custom": "1262px", // Custom breakpoint
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
