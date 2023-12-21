import { z, defineCollection } from "astro:content";
type InputFormat = import("astro").ImageInputFormat;
import defaultImage from "../assets/images/posts/hq-background.png";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      author: z.enum(["Adam B", "Adam", "Wild"]),
      image: image().default(defaultImage),
      imageTitle: z.string().optional().nullable(),
      description: z.string(),
      draft: z.boolean().default(false),
      category: z.enum(["Coding", "Personal", "General", "University"]),
    }),
});

export const collections = { blog };
