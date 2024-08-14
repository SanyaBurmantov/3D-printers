import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  corePlugins: {

  },
  theme: {

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        bahnschrift: ['Bahnschrift', 'sans-serif'],
      },
      fontWeight: {
        semi: "600",
      },
      fontStretch: {
        condensed: 'condensed',
      },
      colors: {
        primary: '#ff6600', // Замените на желаемый цвет
      },
    },
  },
  plugins: [
      nextui(),
      require("tailgrids/plugin"),

  ],
};
export default config;
