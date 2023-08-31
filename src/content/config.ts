import {z, defineCollection} from 'astro:content';
type InputFormat = import("astro").ImageInputFormat;

interface ImageMetadata {
	src: string;
	width: number;
	height: number;
	format: InputFormat;
}



import defaultImage from "../assets/images/posts/hq-background.png";
import { any } from 'astro/zod';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.enum(["Adam B", "Adam", "Wild"]),
    image: z.object({
      src: z.string(),
      width: z.number().optional(),
      height: z.number().optional(),
      format: z.string().optional(),
    }).optional().default({ src: defaultImage.src}),
    imageTitle: z.string().optional().nullable(),
    description: z.string(),
    draft: z.boolean().default(false),
    category: z.enum(["Coding", "Personal", "General", "University"]),
  }),
});

export const collections = { blog };

