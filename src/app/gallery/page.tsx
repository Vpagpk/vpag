import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import VideoGallery from '@/components/sections/video-gallery';
import Image from 'next/image';
import { Image as ImageIcon, Video, Loader2 } from 'lucide-react';

interface GalleryPhoto {
  id: number;
  title: string;
  description: string | null;
  imageUrl: string;
  category: string | null;
  displayOrder: number;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
}

async function getPhotos(): Promise<GalleryPhoto[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/gallery-photos?isVisible=true`, {
      next: { 
        revalidate: 60,
        tags: ['gallery']
      }
    });
    
    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    console.error("Failed to load photos", error);
    return [];
  }
}

export default async function GalleryPage() {
  const photos = await getPhotos();

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-950" aria-hidden="true">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="animate-fade-in">
              <Breadcrumbs />
            </div>
            <div className="text-center mb-16 max-w-5xl mx-auto">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-6 animate-slide-up">
                <Video className="w-4 h-4 inline-block mr-2" aria-hidden="true" />
                Photos & Videos
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up animate-delay-100">
                Performance <span className="text-primary">Gallery</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
                Watch our mesmerizing cultural dance performances and experience the beauty of Pakistani traditional arts
              </p>
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <VideoGallery />

        {/* Photo Gallery Section */}
        <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-6">
                <ImageIcon className="w-4 h-4 inline-block mr-2" aria-hidden="true" />
                Photo Collection
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Photo <span className="text-primary">Highlights</span>
              </h2>
              <p className="text-zinc-300 text-lg md:text-xl">
                Capturing the essence of Pakistani cultural performances
              </p>
            </div>

            {photos.length === 0 ? (
              <div className="text-center py-20">
                <ImageIcon className="w-16 h-16 mx-auto text-zinc-700 mb-4" />
                <p className="text-zinc-400 text-lg">No photos available yet</p>
                <p className="text-zinc-500 text-sm">Check back soon for new gallery updates</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500"
                  >
                    <Image
                      src={photo.imageUrl}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-bold text-xl mb-1">{photo.title}</h3>
                        {photo.description && (
                          <p className="text-zinc-300 text-sm line-clamp-2">{photo.description}</p>
                        )}
                        {photo.category && (
                          <span className="inline-block mt-2 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">
                            {photo.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}