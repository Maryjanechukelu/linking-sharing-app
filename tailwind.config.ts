import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-grey": "#fafafa",
        white: "#fff",
        purple: "#633cff",
        grey: "#737373",
        borders: "#d9d9d9",
        "dark-grey": "#333",
        gray: "#1c2239",
      },
      spacing: {},
      fontFamily: {
        "heading-s": "'Instrument Sans'",
        "gotham-bold": "'Gotham Bold'",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  plugins: [],
};
export default config;

