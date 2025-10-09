"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogFormSchema } from "@/lib/validators/blog";
import slugify from "@/utils/slugify";
import { toast } from "sonner";
import { useState, useEffect, useTransition } from "react";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { MainContent } from "./MainContent";
import { FormSidebar } from "./FormSidebar";
import { Loader2 } from "lucide-react";

// Define the base URL for generating canonical URLs
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ssim.ac.in";

export function BlogForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      imageUrl: null,
      imageAlt: "",
      authorName: "SSIM", // Default author
      publishDate: new Date(), // Default to today
      tags: "",
      categories: "",
      metaTitle: "",
      metaDescription: "",
      keywords: "",
      canonicalUrl: "",
      ogTitle: "",
      ogDescription: "",
      ogImageUrl: "",
      jsonLdSchema: "",
    },
    mode: "onChange",
  });

  const title = form.watch("title");
  useEffect(() => {
    const generatedSlug = slugify(title);
    form.setValue("slug", generatedSlug, { shouldValidate: true });
    form.setValue("metaTitle", title, { shouldValidate: true });
    form.setValue("ogTitle", title, { shouldValidate: true });
  }, [title, form]);

  const slug = form.watch("slug");
  useEffect(() => {
    if (slug) {
      form.setValue("canonicalUrl", `${BASE_URL}/blog/${slug}`, { shouldValidate: true });
    } else {
      form.setValue("canonicalUrl", "", { shouldValidate: true });
    }
  }, [slug, form]);

  async function onSubmit(values) {
    startTransition(async () => {
      try {
        const formData = new FormData();
        
        // Append all values to FormData
        for (const key in values) {
          if (values[key]) {
            if (key === 'publishDate' && values[key] instanceof Date) {
              formData.append(key, values[key].toISOString());
            } else {
              formData.append(key, values[key]);
            }
          }
        }

        const response = await fetch("/api/blogs", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Something went wrong creating the post.");
        }

        toast.success("Blog post created successfully!");
        form.reset();
        
      } catch (error) {
        toast.error(error.message);
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MainContent form={form} />
        </div>
        <div className="lg:col-span-1">
          <FormSidebar form={form} />
        </div>
        <div className="lg:col-span-3 flex justify-end">
          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isPending ? "Creating..." : "Create Blog Post"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
