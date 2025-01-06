/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "scroll-left": "scroll-left 10s linear infinite",
        "scroll-right": "scroll-right 10s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(100%)" }, // Start from right
          "100%": { transform: "translateX(-100%)" }, // End at left
        },
        "scroll-right": {
          "0%": { transform: "translateX(-100%)" }, // Start from left
          "100%": { transform: "translateX(100%)" }, // End at right
        },
      },
      fontSize: {
        'xs': '.75rem', // 12px
        'sm': '.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '4rem', // 64px
        '7xl': '5rem', // 80px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueColor: "#219DD9",
      },
      fontFamily: {
        lato: ["Lato-Black", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
      borderWidth: {
        1.3: "1.3px", // Add a custom border width
      },
    },
  },
  plugins: [],
};
