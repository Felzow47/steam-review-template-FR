import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://Felzow47.github.io/",
  base: "/index.astro",
  integrations: [tailwind()],
});
