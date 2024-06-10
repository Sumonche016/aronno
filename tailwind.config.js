/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#095723",
        textPrimary: "#333",
        dark: "#212529",
        cartColor: "#434343",
        borderPrimar: "#ededed",
        borderDark: "#e0e0e0",
        card: "#c4cdd5",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        card: "rgba(145, 158, 171, 0.25) 0px 6px 16px",
      },
    },
  },
  plugins: [],
};
