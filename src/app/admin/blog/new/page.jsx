"use client";

import { BlogForm } from "./components/BlogForm";

export default function AddNewBlogPostPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 my-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create New Blog Post
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Fill in the details below to publish a new article.
          </p>
        </div>
        <BlogForm />
      </div>
    </div>
  );
}
