import {z, defineCollection} from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.enum(["Adam B", "Adam", "Wild"]),
    image: z.object({
        src: z.string(),
        alt: z.string(),
        aspect_ratio: z.object({
          x: z.number(),
          y: z.number(),
        }),
      }).default({src: "/assets/images/posts/hq-background.png", alt: "A clean default background image.", aspect_ratio: {x: 1, y: 0.75}}),
    description: z.string(),
    draft: z.boolean().default(false),
    category: z.enum(["Coding", "Personal", "General", "University"]),
  }),
});

export const collections = { blog };

