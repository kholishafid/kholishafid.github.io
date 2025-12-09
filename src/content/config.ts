import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    short_description: z.string(),
    link: z.string().url(),
    logo: z.string().optional(),
  }),
});

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    short_description: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  projects,
  articles,
};
