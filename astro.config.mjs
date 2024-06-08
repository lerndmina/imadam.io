import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  // experimental: {
  //   viewTransitions: true,
  // },
  integrations: [mdx(), tailwind(), icon()],
});
