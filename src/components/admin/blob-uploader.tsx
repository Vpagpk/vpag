"use client";

import { useState, useCallback } from "react";
import { upload } from "@vercel/blob/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Upload, X, Loader2, CheckCircle2, FileWarning } from "lucide-react";
import Image from "next/image";

interface BlobUploaderProps {
  onUploadComplete: (url: string, metadata: { width: number; height: number; sizeKB: number }) => void;
}

interface UploadFile {
  file: File;
  preview: string;
  status: "pending" | "uploading" | "success" | "error";
  url?: string;
  error?: string;
  progress?: number;
}

export default function BlobUploader({ onUploadComplete }: BlobUploaderProps) {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const validateFile = (file: File): string | undefined => {
    // Check file type
    if (file.type !== "image/webp") {
      return "Only WebP images are allowed. Please convert your image to WebP format.";
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return "File size must be less than 5MB";
    }

    return undefined;
  };

  const handleFiles = useCallback((newFiles: FileList | File[]) => {
    const fileArray = Array.from(newFiles);

    const validatedFiles: UploadFile[] = fileArray.map((file) => {
      const error = validateFile(file);
      return {
        file,
        preview: URL.createObjectURL(file),
        status: error ? ("error" as const) : ("pending" as const),
        error: error || undefined,
      };
    });

    setFiles((prev) => [...prev, ...validatedFiles]);

    // Show errors immediately
    validatedFiles.forEach((f) => {
      if (f.error) {
        toast.error(f.error);
      }
    });
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  }, [handleFiles]);

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const uploadFile = async (fileData: UploadFile, index: number) => {
    try {
      setFiles((prev) => {
        const newFiles = [...prev];
        newFiles[index].status = "uploading";
        newFiles[index].progress = 0;
        return newFiles;
      });

      const blob = await upload(fileData.file.name, fileData.file, {
        access: "public",
        handleUploadUrl: "/api/admin/gallery/upload",
        onUploadProgress: ({ percentage }) => {
          setFiles((prev) => {
            const newFiles = [...prev];
            newFiles[index].progress = percentage;
            return newFiles;
          });
        },
      });

      // Get image dimensions
      const img = document.createElement("img");
      img.src = fileData.preview;
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      const metadata = {
        width: img.naturalWidth,
        height: img.naturalHeight,
        sizeKB: Math.round(fileData.file.size / 1024),
      };

      setFiles((prev) => {
        const newFiles = [...prev];
        newFiles[index].status = "success";
        newFiles[index].url = blob.url;
        return newFiles;
      });

      onUploadComplete(blob.url, metadata);
      toast.success("Image uploaded successfully!");
    } catch (error: any) {
      console.error("Upload error:", error);
      setFiles((prev) => {
        const newFiles = [...prev];
        newFiles[index].status = "error";
        newFiles[index].error = error.message || "Upload failed";
        return newFiles;
      });
      toast.error(`Upload failed: ${error.message || "Unknown error"}`);
    }
  };

  const uploadAll = async () => {
    const pendingFiles = files
      .map((f, index) => ({ file: f, index }))
      .filter(({ file }) => file.status === "pending");

    for (const { file, index } of pendingFiles) {
      await uploadFile(file, index);
    }
  };

  const clearCompleted = () => {
    setFiles((prev) => {
      const remaining = prev.filter((f) => f.status !== "success");
      prev.forEach((f) => {
        if (f.status === "success") {
          URL.revokeObjectURL(f.preview);
        }
      });
      return remaining;
    });
  };

  const pendingCount = files.filter((f) => f.status === "pending").length;
  const uploadingCount = files.filter((f) => f.status === "uploading").length;
  const successCount = files.filter((f) => f.status === "success").length;

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          relative border-2 border-dashed rounded-2xl p-12 text-center transition-all
          ${isDragging
            ? "border-primary bg-primary/5"
            : "border-zinc-700 hover:border-zinc-600 bg-zinc-900/50"
          }
        `}
      >
        <input
          type="file"
          id="file-input"
          accept="image/webp"
          multiple
          onChange={handleFileInput}
          className="hidden"
        />

        <div className="flex flex-col items-center space-y-4">
          <div className="p-4 rounded-full bg-zinc-800">
            <Upload className="w-8 h-8 text-zinc-400" />
          </div>
          <div>
            <p className="text-lg font-semibold text-white mb-1">
              Drop WebP images here or{" "}
              <label htmlFor="file-input" className="text-primary cursor-pointer hover:underline">
                browse
              </label>
            </p>
            <p className="text-sm text-zinc-500">
              Only .webp format • Max 5MB per file
            </p>
          </div>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-400">
              {pendingCount} pending • {uploadingCount} uploading • {successCount} completed
            </p>
            <div className="flex space-x-2">
              {successCount > 0 && (
                <Button
                  onClick={clearCompleted}
                  variant="outline"
                  size="sm"
                  className="border-zinc-700"
                >
                  Clear Completed
                </Button>
              )}
              {pendingCount > 0 && (
                <Button
                  onClick={uploadAll}
                  disabled={uploadingCount > 0}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-black"
                >
                  {uploadingCount > 0 ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    `Upload All (${pendingCount})`
                  )}
                </Button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {files.map((fileData, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900"
              >
                <Image
                  src={fileData.preview}
                  alt={fileData.file.name}
                  fill
                  className="object-cover"
                />

                {/* Status Overlay */}
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                  {fileData.status === "pending" && (
                    <Button
                      onClick={() => uploadFile(fileData, index)}
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-black"
                    >
                      <Upload className="w-4 h-4 mr-1" />
                      Upload
                    </Button>
                  )}

                  {fileData.status === "uploading" && (
                    <div className="text-center">
                      <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto mb-2" />
                      <p className="text-xs text-white">{fileData.progress}%</p>
                    </div>
                  )}

                  {fileData.status === "success" && (
                    <div className="text-center">
                      <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <p className="text-xs text-white">Uploaded</p>
                    </div>
                  )}

                  {fileData.status === "error" && (
                    <div className="text-center px-2">
                      <FileWarning className="w-8 h-8 text-red-500 mx-auto mb-2" />
                      <p className="text-xs text-red-400 line-clamp-2">{fileData.error}</p>
                    </div>
                  )}
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-2 right-2 p-1 rounded-full bg-zinc-900/80 hover:bg-red-500/80 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {/* Filename */}
                <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/90 p-2">
                  <p className="text-xs text-zinc-300 truncate">{fileData.file.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}