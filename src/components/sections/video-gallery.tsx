import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const videoData = [
  {
    category: 'Sufi Performance',
    title: 'YA HAYYU YA QAYYUM – A Soulful Sufi Kalam',
    description: 'Experience the spiritual depth of Sufi poetry through mesmerizing dance and music.',
    thumbnail: 'https://img.youtube.com/vi/nDAXiJ848a8/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=nDAXiJ848a8',
  },
  {
    category: 'Cultural Festival',
    title: 'Punjab Culture Day 2025 - V.PAG Performance',
    description: 'Celebrating the vibrant cultural heritage of Punjab through traditional dance.',
    thumbnail: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-763903-maxresdefault-3.jpg?',
    href: 'https://www.youtube.com/watch?v=U4jowB_3U1s',
  },
  {
    category: 'Classical Dance',
    title: 'Classical Kathak Performance',
    description: 'Elegant classical dance showcasing traditional storytelling through movement.',
    thumbnail: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-383062-maxresdefault-8.jpg?',
    href: 'https://www.youtube.com/watch?v=XMdLb1-TEtg',
  },
  {
    category: 'Folk Dance',
    title: 'Folk Dance Spectacular',
    description: 'High-energy folk dance celebrating regional traditions and customs.',
    thumbnail: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-121209-maxresdefault-4.jpg?',
    href: 'https://www.youtube.com/watch?v=azZZRqTmoQc',
  },
  {
    category: 'Wedding Events',
    title: 'Wedding Performance Highlights',
    description: 'Creating magical moments for special celebrations through dance.',
    thumbnail: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-270473-maxresdefault-5.jpg?',
    href: 'https://www.youtube.com/watch?v=m_ViCP12qnw',
  },
  {
    category: 'Training',
    title: 'Behind the Scenes - V.PAG Training',
    description: 'A glimpse into our rigorous training programs and artistic development.',
    thumbnail: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0778c1ec-e67a-45bd-9ba6-03c99b673a81/generated_images/behind-the-scenes-of-pakistani-cultural--189f1de9-20251019215504.jpg?',
    href: 'https://www.youtube.com/watch?v=placeholder-training',
  },
];

export default function VideoGallery() {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-black py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,#f59e0b,transparent_40%)]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Live <span className="text-primary">Performances</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-zinc-300 leading-relaxed">
            Watch our most captivating performances and experience the magic of V.PAG Dance Company through these memorable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoData.map((video) => (
            <Link
              key={video.title}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl"
            >
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 border border-zinc-800 hover:border-primary/30 transition-all duration-300 h-full flex flex-col hover:-translate-y-2 will-change-transform">
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={`Thumbnail for ${video.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-black backdrop-blur-sm">
                      {video.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-primary/80 text-black backdrop-blur-sm transition-all duration-300 scale-90 group-hover:scale-100 group-hover:bg-primary will-change-transform">
                      <Play className="h-8 w-8 lg:h-10 lg:w-10 ml-1 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-300 group-hover:text-primary">
                      {video.title}
                    </h3>
                    <p className="text-sm text-zinc-300 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-20">
          <p className="text-zinc-300 mb-6">
            Want to see more? Visit our YouTube channel for the complete collection.
          </p>
          <Button asChild variant="outline" size="lg" className="border-2 border-zinc-700 bg-zinc-900/50 text-white hover:bg-primary/5 hover:border-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 active:scale-95 px-8 py-3 h-auto text-base will-change-transform">
            <Link href="https://www.youtube.com/@vpagdancecompany" target="_blank" rel="noopener noreferrer">
              Visit Our YouTube Channel
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}