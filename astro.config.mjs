import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // experimental: {
  //   viewTransitions: true,
  // },
  site: "https://imadam.io",
  integrations: [mdx(), tailwind(), sitemap()],
});
