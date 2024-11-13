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
        primary_bg: "#0D0F0E",
        cyan: "#0CFFA7",
        cyan2: "#0CFFD3",
        darkLight: "#151716",
      },
      borderColor: {
        borderLight: "#272928",
        cyan: "#0CFFD3",
        borderGrayLight: "rgba(255, 255, 255, 0.2)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        inter: "var(--font-inter)",
        montserrat: "var(--font-montserrat)",
        segoe: "Segoe UI",
      },
      backgroundColor: {
        app_primary_gradient: "var(--background)",
        background: "var(--background)",
        cyanLight: "#142F2A",
        lightGray: "rgba(255, 255, 255, 0.1)",
      },
      boxShadow: {
        tab_box: "0px 0px 4px 4px rgba(224,223,223,0.36)",
      },
    },
  },
  plugins: [],
};
