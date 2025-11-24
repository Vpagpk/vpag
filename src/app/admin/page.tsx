"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import {
  Loader2,
  Upload,
  Image as ImageIcon,
  Trash2,
  Eye,
  EyeOff,
  LogOut,
  FileImage,
  CheckCircle2,
  AlertCircle,
  X,
} from "lucide-react";
import { useDropzone } from "react-dropzone";
import { upload } from "@vercel/blob/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface GalleryPhoto {
  id: number;
  title: string;
  description: string | null;
  imageUrl: string;
  category: string | null;
  displayOrder: number;
  isVisible: boolean;
  width: number | null;
  height: number | null;
  sizeKB: number | null;
  uploadedBy: string | null;
  createdAt: string;
  updatedAt: string;
}

interface UploadFile {
  file: File;
  preview: string;
  title: string;
  description: string;
  category: string;
  displayOrder: number;
  isVisible: boolean;
  width: number;
  height: number;
  sizeKB: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
  blobUrl?: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const { data: session, isPending, refetch } = useSession();

  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/sign-in");
    }
  }, [session, isPending, router]);

  useEffect(() => {
    if (session?.user) {
      fetchPhotos();
    }
  }, [session]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("/api/gallery-photos");
      if (response.status === 401) {
        toast.error("Unauthorized access");
        router.push("/sign-in");
        return;
      }
      if (response.ok) {
        const data = await response.json();
        setPhotos(data);
      }
    } catch (error) {
      toast.error("Failed to load photos");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();
    if (error?.code) {
      toast.error("Sign out failed");
    } else {
      localStorage.removeItem("bearer_token");
      refetch();
      router.push("/");
    }
  };

  const convertToWebP = async (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error('Failed to convert image'));
          },
          'image/webp',
          0.9
        );
      };

      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = URL.createObjectURL(file);
    });
  };

  const getImageDimensions = (file: File): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
        URL.revokeObjectURL(img.src);
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const newFiles: UploadFile[] = [];

    for (const file of acceptedFiles) {
      try {
        let processedFile: File | Blob = file;

        if (file.type !== 'image/webp') {
          const webpBlob = await convertToWebP(file);
          processedFile = new File([webpBlob], file.name.replace(/\.[^/.]+$/, '.webp'), { type: 'image/webp' });
          toast.success(`Converted ${file.name} to WebP`);
        }

        const dimensions = await getImageDimensions(file);
        const sizeKB = Math.round(processedFile.size / 1024);

        if (sizeKB > 5000) {
          toast.error(`${file.name} exceeds 5MB limit`);
          continue;
        }

        newFiles.push({
          file: processedFile as File,
          preview: URL.createObjectURL(processedFile),
          title: file.name.replace(/\.[^/.]+$/, ''),
          description: '',
          category: '',
          displayOrder: photos.length + newFiles.length,
          isVisible: true,
          width: dimensions.width,
          height: dimensions.height,
          sizeKB,
          status: 'pending',
        });
      } catch (error) {
        toast.error(`Failed to process ${file.name}`);
      }
    }

    setUploadFiles(prev => [...prev, ...newFiles]);
  }, [photos.length]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/webp': ['.webp'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    maxSize: 5 * 1024 * 1024,
    multiple: true,
  });

  const handleUploadAll = async () => {
    if (uploadFiles.length === 0) return;

    setIsUploading(true);
    const updatedFiles = [...uploadFiles];

    for (let i = 0; i < updatedFiles.length; i++) {
      const fileData = updatedFiles[i];

      if (fileData.status !== 'pending') continue;

      updatedFiles[i].status = 'uploading';
      setUploadFiles([...updatedFiles]);

      try {
        const blob = await upload(fileData.file.name, fileData.file, {
          access: 'public',
          handleUploadUrl: '/api/admin/gallery/upload',
        });

        updatedFiles[i].blobUrl = blob.url;

        const response = await fetch('/api/gallery-photos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: fileData.title,
            description: fileData.description || null,
            imageUrl: blob.url,
            category: fileData.category || null,
            displayOrder: fileData.displayOrder,
            isVisible: fileData.isVisible,
            width: fileData.width,
            height: fileData.height,
            sizeKB: fileData.sizeKB,
          }),
        });

        if (!response.ok) throw new Error('Failed to save photo metadata');

        updatedFiles[i].status = 'success';
        toast.success(`Uploaded: ${fileData.title}`);
      } catch (error: any) {
        updatedFiles[i].status = 'error';
        updatedFiles[i].error = error.message;
        toast.error(`Failed: ${fileData.title}`);
      }

      setUploadFiles([...updatedFiles]);
    }

    setIsUploading(false);
    fetchPhotos();

    setTimeout(() => {
      setUploadFiles(prev => prev.filter(f => f.status !== 'success'));
    }, 2000);
  };

  const removeUploadFile = (index: number) => {
    setUploadFiles(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const updateUploadFile = (index: number, updates: Partial<UploadFile>) => {
    setUploadFiles(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], ...updates };
      return updated;
    });
  };

  const handleBulkAction = async (action: 'show' | 'hide' | 'delete') => {
    if (selectedPhotos.length === 0) {
      toast.error('No photos selected');
      return;
    }

    if (action === 'delete') {
      setDeleteDialogOpen(true);
      return;
    }

    try {
      const response = await fetch('/api/admin/gallery/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedPhotos, action }),
      });

      if (!response.ok) throw new Error();

      toast.success(`${selectedPhotos.length} photos updated`);
      setSelectedPhotos([]);
      fetchPhotos();
    } catch (error) {
      toast.error('Bulk action failed');
    }
  };

  const confirmBulkDelete = async () => {
    try {
      const response = await fetch('/api/admin/gallery/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedPhotos, action: 'delete' }),
      });

      if (!response.ok) throw new Error();

      toast.success(`${selectedPhotos.length} photos deleted`);
      setSelectedPhotos([]);
      setDeleteDialogOpen(false);
      fetchPhotos();
    } catch (error) {
      toast.error('Bulk delete failed');
    }
  };

  const togglePhotoSelection = (id: number) => {
    setSelectedPhotos(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedPhotos.length === photos.length) {
      setSelectedPhotos([]);
    } else {
      setSelectedPhotos(photos.map(p => p.id));
    }
  };

  if (isPending || isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  if (!session?.user) return null;

  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/IMAGE00-1759911028053.webp"
              alt="VPAG Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-white">
                Gallery <span className="text-primary">Manager</span>
              </h1>
              <p className="text-sm text-zinc-400">Welcome, {session.user.name}</p>
            </div>
          </div>
          <Button
            onClick={handleSignOut}
            variant="outline"
            className="border-zinc-700 hover:border-primary"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Upload className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-white">Upload Photos</h2>
            <span className="text-sm text-zinc-500">WebP only, max 5MB each</span>
          </div>

          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${isDragActive
                ? 'border-primary bg-primary/5'
                : 'border-zinc-700 hover:border-zinc-600 bg-zinc-800/50'
              }`}
          >
            <input {...getInputProps()} />
            <FileImage className="w-16 h-16 mx-auto mb-4 text-zinc-600" />
            {isDragActive ? (
              <p className="text-white text-lg font-semibold">Drop files here...</p>
            ) : (
              <>
                <p className="text-white text-lg font-semibold mb-2">
                  Drag & drop images, or click to browse
                </p>
                <p className="text-zinc-400 text-sm">
                  Supports JPG, PNG, WebP • Auto-converts to WebP • Max 5MB per file
                </p>
              </>
            )}
          </div>

          {uploadFiles.length > 0 && (
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  Upload Queue ({uploadFiles.length})
                </h3>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setUploadFiles([])}
                    variant="outline"
                    size="sm"
                    disabled={isUploading}
                    className="border-zinc-700"
                  >
                    Clear All
                  </Button>
                  <Button
                    onClick={handleUploadAll}
                    disabled={isUploading || uploadFiles.every(f => f.status !== 'pending')}
                    className="bg-primary hover:bg-primary/90 text-black"
                  >
                    {isUploading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload All
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {uploadFiles.map((file, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800 border border-zinc-700 rounded-lg p-4"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-900">
                        <Image
                          src={file.preview}
                          alt={file.title}
                          fill
                          className="object-cover"
                        />
                        {file.status === 'success' && (
                          <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                          </div>
                        )}
                        {file.status === 'error' && (
                          <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                            <AlertCircle className="w-8 h-8 text-red-500" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 space-y-2">
                        <Input
                          value={file.title}
                          onChange={(e) => updateUploadFile(index, { title: e.target.value })}
                          placeholder="Photo title"
                          disabled={file.status !== 'pending'}
                          className="bg-zinc-900 border-zinc-700 text-white"
                        />
                        <div className="flex gap-2">
                          <Input
                            value={file.category}
                            onChange={(e) => updateUploadFile(index, { category: e.target.value })}
                            placeholder="Category (optional)"
                            disabled={file.status !== 'pending'}
                            className="bg-zinc-900 border-zinc-700 text-white flex-1"
                          />
                          <Input
                            type="number"
                            value={file.displayOrder}
                            onChange={(e) => updateUploadFile(index, { displayOrder: parseInt(e.target.value) || 0 })}
                            placeholder="Order"
                            disabled={file.status !== 'pending'}
                            className="bg-zinc-900 border-zinc-700 text-white w-20"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              checked={file.isVisible}
                              onCheckedChange={(checked) => updateUploadFile(index, { isVisible: !!checked })}
                              disabled={file.status !== 'pending'}
                            />
                            <span className="text-xs text-zinc-400">Visible</span>
                          </div>
                          <div className="text-xs text-zinc-500">
                            {file.width}×{file.height} • {file.sizeKB}KB
                          </div>
                          {file.status === 'pending' && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeUploadFile(index)}
                              className="text-red-500 hover:text-red-400"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                        {file.error && (
                          <p className="text-xs text-red-500">{file.error}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <ImageIcon className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">
                Gallery Photos ({photos.length})
              </h2>
            </div>

            {selectedPhotos.length > 0 && (
              <div className="flex items-center gap-3">
                <span className="text-sm text-zinc-400">
                  {selectedPhotos.length} selected
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleBulkAction('show')}
                  className="border-zinc-700"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Show
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleBulkAction('hide')}
                  className="border-zinc-700"
                >
                  <EyeOff className="w-4 h-4 mr-2" />
                  Hide
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleBulkAction('delete')}
                  className="border-red-700 text-red-500 hover:bg-red-500/10"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setSelectedPhotos([])}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {photos.length > 0 && (
            <div className="mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  checked={selectedPhotos.length === photos.length}
                  onCheckedChange={toggleSelectAll}
                />
                <span className="text-sm text-zinc-400">Select All</span>
              </label>
            </div>
          )}

          {photos.length === 0 ? (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 mx-auto text-zinc-700 mb-4" />
              <p className="text-zinc-400 text-lg">No photos yet</p>
              <p className="text-zinc-500 text-sm">
                Upload your first photo using the form above
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden group relative"
                >
                  <div className="absolute top-3 left-3 z-10">
                    <Checkbox
                      checked={selectedPhotos.includes(photo.id)}
                      onCheckedChange={() => togglePhotoSelection(photo.id)}
                      className="bg-white/90 border-white"
                    />
                  </div>

                  <div className="relative aspect-video">
                    <Image
                      src={photo.imageUrl}
                      alt={photo.title}
                      fill
                      className="object-cover"
                    />
                    {!photo.isVisible && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <EyeOff className="w-8 h-8 text-zinc-400" />
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-1 truncate">
                      {photo.title}
                    </h3>
                    {photo.category && (
                      <p className="text-primary text-sm mb-2">
                        {photo.category}
                      </p>
                    )}
                    {photo.description && (
                      <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
                        {photo.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-700">
                      <span className="text-xs text-zinc-500">
                        Order: {photo.displayOrder}
                      </span>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={async () => {
                            try {
                              const response = await fetch(`/api/gallery-photos/${photo.id}`, {
                                method: 'PATCH',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ isVisible: !photo.isVisible }),
                              });
                              if (response.ok) {
                                toast.success(photo.isVisible ? 'Photo hidden' : 'Photo visible');
                                fetchPhotos();
                              }
                            } catch (error) {
                              toast.error('Failed to update visibility');
                            }
                          }}
                          className="border-zinc-700 hover:border-primary"
                        >
                          {photo.isVisible ? (
                            <Eye className="w-4 h-4" />
                          ) : (
                            <EyeOff className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={async () => {
                            if (!confirm('Delete this photo?')) return;
                            try {
                              const response = await fetch(`/api/gallery-photos/${photo.id}`, {
                                method: 'DELETE',
                              });
                              if (response.ok) {
                                toast.success('Photo deleted');
                                fetchPhotos();
                              }
                            } catch (error) {
                              toast.error('Failed to delete photo');
                            }
                          }}
                          className="border-zinc-700 hover:border-red-500 text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle>Confirm Bulk Delete</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Are you sure you want to delete {selectedPhotos.length} photo(s)? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              className="border-zinc-700"
            >
              Cancel
            </Button>
            <Button
              onClick={confirmBulkDelete}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete {selectedPhotos.length} Photo(s)
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}