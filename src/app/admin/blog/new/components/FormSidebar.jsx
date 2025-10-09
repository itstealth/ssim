import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

function ImageUploadField({ field }) {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      field.onChange(file);
      setPreview(URL.createObjectURL(file));
    }
  }, [field]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer",
          isDragActive && "border-blue-500 bg-blue-50"
        )}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop an image here, or click to select one</p>
      </div>
      {preview && (
        <div className="mt-4">
          <Image src={preview} alt="Image preview" width={200} height={100} className="rounded-lg" />
        </div>
      )}
    </div>
  );
}

export function FormSidebar({ form }) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Publish Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <FormField
            control={form.control}
            name="publishDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Publish Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Featured Image</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Thumbnail</FormLabel>
                <FormControl>
                  <ImageUploadField field={field} />
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
                  <Input placeholder="A descriptive caption" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="taxonomies">
          <AccordionTrigger className="text-lg font-semibold">Taxonomies</AccordionTrigger>
          <AccordionContent>
            <Card className="border-none">
              <CardContent className="pt-6 space-y-6">
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags</FormLabel>
                      <FormControl>
                        <Input placeholder="Technology, Business" {...field} />
                      </FormControl>
                      <FormDescription>Separate tags with commas.</FormDescription>
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
                        <Input placeholder="News, Updates" {...field} />
                      </FormControl>
                      <FormDescription>Separate categories with commas.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="seo">
          <AccordionTrigger className="text-lg font-semibold">SEO & Advanced</AccordionTrigger>
          <AccordionContent>
            <Card className="border-none">
              <CardContent className="pt-6 space-y-6">
                <FormField
                  control={form.control}
                  name="metaTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meta Title</FormLabel>
                      <FormControl>
                        <Input placeholder="A concise title for SEO" {...field} />
                      </FormControl>
                      <FormMessage />
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
                        <Textarea placeholder="A brief summary for SEO" {...field} />
                      </FormControl>
                      <FormMessage />
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
                        <Input placeholder="keyword1, keyword2" {...field} />
                      </FormControl>
                      <FormDescription>Separate keywords with commas.</FormDescription>
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
                        <Input placeholder="Auto-generated from slug" {...field} disabled />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
