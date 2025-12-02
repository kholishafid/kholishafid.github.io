import { z, defineCollection } from "astro:content";
import { date } from "astro:schema";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    short_description: z.string(),
    link: z.string().url(),
  }),
});

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    short_description: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  projects,
  articles
};
