import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        dmg: ["Aleo", 'roman'],
        lapiz: ["Indie Flower", 'Static'],



      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        DMGsecundary: "var(--DMGsecundary)",
        fondo: "var(--fondo)"
      },
    },
  },
  plugins: [nextui()],
};
export default config;
