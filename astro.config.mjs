import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";


// https://astro.build/config

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // experimental: {
  //   viewTransitions: true,
  // },
  integrations: [mdx(), tailwind()],
  output: "server",
  adapter: vercel()
});