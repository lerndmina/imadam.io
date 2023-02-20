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
      }),
    description: z.string().max(
      160,
      "For best SEO results, please keep the description under 160 characters."
    ),
    draft: z.boolean().default(false),
    category: z.enum(["Coding", "Personal", "General", "University"]),
  }),
});

export const collections = { blog };

