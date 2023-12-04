import {z, defineCollection} from 'astro:content';
type InputFormat = import("astro").ImageInputFormat;

interface ImageMetadata {
	src: string;
	width: number;
	height: number;
	format: InputFormat;
}



import { any } from 'astro/zod';

const blog = defineCollection({
  schema: ({ image }) => 
    z.object({
      title: z.string(),
      date: z.date(),
      author: z.enum(["Adam B", "Adam", "Wild"]),
      // image: z.object({
      //   src: z.string(),
      //   width: z.number().optional(),
      //   height: z.number().optional(),
      //   format: z.string().optional(),
      // }).optional().default({ src: defaultImage.src}),
      image: image().optional().default("../../assets/images/posts/hq-background.png"), 
      // Default path is reletive from blog posts not from here
      imageTitle: z.string().optional().nullable(),
      description: z.string(),
      draft: z.boolean().default(false),
      category: z.enum(["Coding", "Personal", "General", "University"]),
    }),
});

export const collections = { blog };

