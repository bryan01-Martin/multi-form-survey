/** @type {import('tailwindcss').Config} */

import colors from "./tailwind/colors";

const px0_20 = Array.from({ length: 21 }, (_, i) => `${i}px`);
const px0_200 = Array.from({ length: 201 }, (_, i) => `${i}px`);

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        ...px0_20,
      },
      borderRadius: {
        ...px0_20,
      },
      spacing: {
        ...px0_200,
      },
      fontSize: {
        ...px0_200,
      },
      colors: colors,
    },
  },
  plugins: [],
};
