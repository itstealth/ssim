"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RichTextEditor } from "@/components/RichTextEditor";
import { ImageUpload } from "@/components/ImageUpload";
import slugify from "@/utils/slugify";

// Define the base URL for generating canonical URLs
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ssim.ac.in";

// Helper function to highlight "Yogesh" in red
const highlightYogesh = (message) => {
  if (!message || typeof message !== "string") return message;
  
  const parts = message.split(/(Yogesh)/gi);
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === "yogesh" ? (
          <span key={index} style={{ color: "red", fontWeight: "bold" }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

const blogFormSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long." })
    .max(255, { message: "Title cannot be longer than 255 characters." }),
  slug: z.string().min(1, { message: "Slug is required." }),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters long." }),
  imageUrl: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Please upload an image.",
    }),
  imageAlt: z
    .string()
    .min(5, { message: "Image alt text must be at least 5 characters long." }),
  authorName: z.string().optional(),
  publishDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Please enter a valid date.",
  }),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  keywords: z.string().optional(),
  tags: z.string().optional(),
  categories: z.string().optional(),
  canonicalUrl: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional()
    .or(z.literal("")),
  jsonLdSchema: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImageUrl: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional()
    .or(z.literal("")),
});

export default function AddNewBlogPostPage() {
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);

  const form = useForm({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      imageUrl: null, // Changed from "" to null for File type
      imageAlt: "",
      authorName: "",
      publishDate: new Date().toISOString().split("T")[0], // Defaults to today
      metaTitle: "",
      metaDescription: "",
      keywords: "",
      tags: "",
      categories: "",
      canonicalUrl: "",
      jsonLdSchema: "",
      ogTitle: "",
      ogDescription: "",
      ogImageUrl: "",
    },
  });

  // Watch for changes in the slug field to update the canonical URL
  const slug = form.watch("slug");
  useEffect(() => {
    if (slug) {
      form.setValue("canonicalUrl", `${BASE_URL}/blog/${slug}`);
    } else {
      form.setValue("canonicalUrl", "");
    }
  }, [slug, form]);

  const handleTitleChange = (e) => {
    const title = e.target.value;
    form.setValue("title", title);
    
    if (!isSlugManuallyEdited) {
      form.setValue("slug", slugify(title));
    }
  };

  async function onSubmit(values) {
    try {
      // Create FormData to send multipart/form-data
      const formData = new FormData();

      // Add all form fields to FormData
      for (const key in values) {
        if (key === "imageUrl" && values[key] instanceof File) {
          // Add the File object directly
          formData.append(key, values[key]);
        } else if (key === "tags" || key === "categories") {
          // Send as plain string (API expects string, not JSON)
          const value = values[key] || "";
          if (value.trim()) {
            formData.append(key, value);
          }
        } else if (key === "publishDate") {
          // Convert date to MySQL format
          const mysqlDate = new Date(values[key])
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");
          formData.append(key, mysqlDate);
        } else if (key === "canonicalUrl" || key === "ogImageUrl") {
          // These fields explicitly allow empty strings in the API schema
          formData.append(key, values[key] || "");
        } else if (
          key === "metaTitle" ||
          key === "metaDescription" ||
          key === "keywords" ||
          key === "authorName" ||
          key === "ogTitle" ||
          key === "ogDescription" ||
          key === "jsonLdSchema"
        ) {
          // Optional fields: only send if not empty
          if (values[key] && values[key].trim()) {
            formData.append(key, values[key]);
          }
        } else if (values[key] !== undefined && values[key] !== null && values[key] !== "") {
          // Add all other non-null, non-empty fields
          formData.append(key, values[key]);
        }
      }

      const response = await fetch("/api/blogs", {
        method: "POST",
        body: formData, // Send as multipart/form-data
      });

      if (!response.ok) {
        const errorData = await response.json();
        
        // Show detailed validation errors if available
        if (errorData.errors) {
          const errorMessages = [];
          for (const [field, messages] of Object.entries(errorData.errors)) {
            if (Array.isArray(messages)) {
              errorMessages.push(`${field}: ${messages.join(", ")}`);
            } else if (messages) {
              errorMessages.push(`${field}: ${messages}`);
            }
          }
          if (errorMessages.length > 0) {
            toast.error(highlightYogesh(errorMessages.join(" | ")));
            // Set form errors for each field
            Object.keys(errorData.errors).forEach((field) => {
              form.setError(field, {
                type: "server",
                message: Array.isArray(errorData.errors[field])
                  ? errorData.errors[field][0]
                  : errorData.errors[field],
              });
            });
            return;
          }
        }
        
        // Show detailed database error messages
        let errorMessage = errorData.message || "Something went wrong";
        if (errorData.details) {
          errorMessage += `: ${errorData.details}`;
        }
        if (errorData.hint) {
          errorMessage += ` (${errorData.hint})`;
        }
        
        throw new Error(errorMessage);
      }

      toast.success("Your blog post has been created successfully.");
      form.reset();
      form.setValue("publishDate", new Date().toISOString().split("T")[0]);
    } catch (error) {
      toast.error(highlightYogesh(error.message));
    }
  }

  return (
    <div className="container mx-auto px-10 py-10 my-16 shadow-2xl rounded-lg max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Add New Blog Post</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Main Content Area */}
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter the blog title"
                      {...field}
                      onChange={handleTitleChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="this-will-be-your-blog-url"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setIsSlugManuallyEdited(true);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Slug is auto-generated from title. You can manually edit it if needed.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Content</FormLabel>
                  <FormControl>
                    <RichTextEditor {...field} />
                  </FormControl>
                  <FormDescription>
                    You can paste content from Word or Google Docs here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Publish Details
              </h2>
              <div className="grid grid-cols-1 gap-6">
                 <FormField
                  control={form.control}
                  name="publishDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Publish Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="authorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Featured Image
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field: { value, onChange, ...field } }) => (
                    <FormItem>
                      <FormLabel>Blog Thumbnail</FormLabel>
                      <FormControl>
                        <ImageUpload
                          value={value}
                          onChange={(file) => onChange(file)}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="imageAlt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image Alt Text</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="A descriptive caption for the image"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

             <div>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Taxonomies
              </h2>
              <div className="grid grid-cols-1 gap-6">
                 <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags</FormLabel>
                      <FormControl>
                        <Input placeholder="Technology, Business, etc." {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter tags separated by commas.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="categories"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categories</FormLabel>
                      <FormControl>
                        <Input placeholder="News, Updates, etc." {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter categories separated by commas.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                SEO & Advanced
              </h2>
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="metaTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meta Title</FormLabel>
                      <FormControl>
                        <Input placeholder="A concise title for search engines" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="metaDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meta Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="A brief summary for search engines"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Keywords</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="keyword1, keyword2, keyword3"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Enter keywords separated by commas.
                      </FormDescription>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="canonicalUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Canonical URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Auto-generated from slug"
                          {...field}
                          disabled
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="ogTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Open Graph Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Title for social media sharing" {...field} />
                      </FormControl>
                       <FormDescription>
                        If empty, defaults to Meta Title.
                      </FormDescription>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ogDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Open Graph Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Description for social media sharing" {...field} />
                      </FormControl>
                      <FormDescription>
                        If empty, defaults to Meta Description.
                      </FormDescription>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ogImageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Open Graph Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="URL for social media image" {...field} />
                      </FormControl>
                       <FormDescription>
                        If empty, defaults to Featured Image.
                      </FormDescription>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="jsonLdSchema"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>JSON-LD Schema</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='{ "@context": "https://schema.org", ... }'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Optional: Provide a JSON-LD schema for advanced SEO.
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <Button type="submit">Create Blog Post</Button>
        </form>
      </Form>
    </div>
  );
}
