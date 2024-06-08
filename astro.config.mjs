import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

let adapter = node({
  mode: "standalone",
});

if (process.env.USING_VERCEL) {
  adapter = vercel({
    imageService: true,
    devImageService: "sharp",
    speedInsights: {
      enabled: true,
    },
    webAnalytics: {
      enabled: true,
    },
  });
}
// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  integrations: [mdx(), tailwind(), icon()],
  output: "server",
  server: serverConfig,
});
