/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        greeen: 'rgb(6, 243, 192)',
        grey: 'rgba(20, 26, 47,0.8)'
      },
    },
    boxShadow: {
      custom: '0px 5px 0px 0px rgba(6, 243, 192,0.9)', // Adjust values as needed
    },
  },
  plugins: [],
};
