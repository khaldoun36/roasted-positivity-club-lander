// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Newsreader",
      cssVariable: "--font-newsreader",
      weights: ["300 800"],
      fallbacks: ["serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Hanken Grotesk",
      cssVariable: "--font-hanken-grotesk",
      weights: ["300 800"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "DM Mono",
      cssVariable: "--font-dm-mono",
      weights: [400, 500],
      fallbacks: ["monospace"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
