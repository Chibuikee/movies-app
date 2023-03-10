/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxxs: "400px",
      xxs: "500px",
      xs: "540px",
      s: "600px",
      sm: "640px",
      m: "700px",
      md: "768px",
      mmd: "800px",
      pc: "900px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {},
  },
  plugins: [],
};
