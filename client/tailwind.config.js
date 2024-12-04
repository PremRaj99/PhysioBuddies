/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'bg-primary': '#ecf6ff',
  			'bg-secondary': '#f6ffff',
  			'text-primary': '#15415c'
  		},
  		screens: {
  			'xl-custom': '1262px'
  		},
  		fontFamily: {
  			roboto: ["Roboto", "sans-serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
