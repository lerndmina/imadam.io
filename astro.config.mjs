import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelServerless(),
  // experimental: {
  //   viewTransitions: true,
  // },
  integrations: [mdx(), tailwind()],
});
