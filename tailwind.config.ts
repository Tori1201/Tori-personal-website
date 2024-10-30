import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
export const achievementsList = [
  {
    metric: "Projects",
    value: "3",
    postfix: "+",
  },
  {
    prefix: "+",
    metric: "GPA",
    value: "3",
  },
  {
    metric: "Awards",
    value: "1",
  },
  {
    metric: "Years",
    value: "1",
  },
];

