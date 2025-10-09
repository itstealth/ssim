import * as z from "zod";

export const blogFormSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long." })
    .max(255, { message: "Title cannot be longer than 255 characters." }),
  slug: z
    .string()
    .min(1, { message: "Slug is required." })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "Slug can only contain lowercase letters, numbers, and hyphens.",
    }),
  content: z
    .string()
    .min(100, { message: "Content must be at least 100 characters long." }),
  
  // We'll validate the file on the server. The client will ensure it's a File object.
  imageUrl: z.any(),

  imageAlt: z
    .string()
    .min(5, { message: "Image alt text must be at least 5 characters long." })
    .max(125, { message: "Image alt text cannot be longer than 125 characters." }),
  
  publishDate: z.date({
    required_error: "A publish date is required.",
  }),

  authorName: z.string().max(100).optional(),
  
  // Taxonomies
  tags: z.string().optional(),
  categories: z.string().optional(),

  // SEO Fields
  metaTitle: z.string().max(70, { message: "Meta title should be 70 characters or less." }).optional(),
  metaDescription: z.string().max(160, { message: "Meta description should be 160 characters or less." }).optional(),
  keywords: z.string().optional(),
  canonicalUrl: z.string().url({ message: "Please enter a valid canonical URL." }).optional().or(z.literal("")),
  
  // Open Graph Fields for Social Sharing
  ogTitle: z.string().max(70).optional(),
  ogDescription: z.string().max(160).optional(),
  ogImageUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),

  // Advanced SEO
  jsonLdSchema: z.string().optional(),
});
