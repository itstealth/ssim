"use client";

import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, X } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export function ImageUpload({ value, onChange }) {
  const [preview, setPreview] = useState(null);

  // Generate preview URL when a File object is provided
  useEffect(() => {
    if (value instanceof File) {
      const objectUrl = URL.createObjectURL(value);
      setPreview(objectUrl);

      // Clean up the object URL when component unmounts or value changes
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null);
    }
  }, [value]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file) return;

      // Validate file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        toast.error("File size must be less than 2MB");
        return;
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        toast.error("Only image files are allowed");
        return;
      }

      // Pass the File object directly to the form
      onChange(file);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg", ".webp"] },
    multiple: false,
  });

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    onChange(null); // Set to null to clear
    setPreview(null);
  };

  return (
    <div
      {...getRootProps()}
      className={`relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
      ${isDragActive ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary"}
      ${preview ? "p-0" : ""}`}
    >
      <input {...getInputProps()} />
      {preview ? (
        <div className="relative w-full h-64">
          <Image
            src={preview}
            alt="Uploaded thumbnail"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600"
            aria-label="Remove image"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-2">
          <UploadCloud className="w-12 h-12 text-gray-400" />
          <p className="text-lg font-semibold">
            {isDragActive
              ? "Drop the image here"
              : "Drag & drop an image here, or click to select"}
          </p>
          <p className="text-sm text-gray-500">
            (Max file size 2MB, PNG, JPG, WEBP)
          </p>
        </div>
      )}
    </div>
  );
}
