import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  output: "server",
  adapter: vercel({
    imageService: true,
    devImageService: "sharp",
    speedInsights: {
      enabled: true,
    },
    webAnalytics: {
      enabled: true,
    },
  }),
  // experimental: {
  //   viewTransitions: true,
  // },
  integrations: [mdx(), tailwind(), icon()],
});
