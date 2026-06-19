
// I want to use Astro content system. z= What information must exist in my markdown files
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
// Define collection details
const learningNotes = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/learning-notes",
  }),
  // schema = Keypairs must exist
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});
const writeUps = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/write-ups",
  }),
  // schema = Keypairs must exist
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});
// here are all the collections I want you to know about. Astro will fetch for folders with these names in content
export const collections = {
  "learning-notes": learningNotes,
  "write-ups": writeUps,
};