import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        textColor: "var(--textColor)",
        details10: "var(--details10)",
        details20: "var(--details20)",
        details60: "var(--details60)",
        colorRed: "var(--colorRed)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins-latin)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
