import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Blog | VPAG - Cultural Insights & Pakistani Dance Articles',
  description: 'Read about Pakistani cultural heritage, traditional dance forms, Sufi whirling, and behind-the-scenes stories from VPAG Dance Company. Expert insights and cultural education.',
  keywords: 'Pakistani dance blog, Sufi dance articles, cultural heritage Pakistan, traditional dance education, VPAG insights',
  openGraph: {
    title: 'Cultural Insights Blog - VPAG',
    description: 'Explore articles about Pakistani cultural heritage and traditional dance.',
    type: 'website',
  }
};

const blogPosts = [
  {
    id: 1,
    title: "The History and Significance of Sufi Whirling",
    excerpt: "Discover the spiritual and cultural importance of Sufi whirling in Pakistani tradition and how it continues to mesmerize audiences worldwide.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0778c1ec-e67a-45bd-9ba6-03c99b673a81/generated_images/sufi-whirling-dervish-dancer-in-traditio-3592353e-20251019214823.jpg?",
    category: "Cultural Heritage",
    date: "January 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Punjabi Bhangra: The Dance of Joy and Celebration",
    excerpt: "Explore the vibrant world of Punjabi bhangra, a high-energy folk dance that embodies the spirit of celebration and harvest festivals.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0778c1ec-e67a-45bd-9ba6-03c99b673a81/generated_images/vibrant-punjabi-bhangra-dancers-in-color-18b0d85a-20251019214831.jpg?",
    category: "Folk Dance",
    date: "January 10, 2024",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Traditional Pakistani Wedding Dances: A Complete Guide",
    excerpt: "Learn about the various traditional dances performed at Pakistani weddings and how they add cultural richness to celebrations.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0778c1ec-e67a-45bd-9ba6-03c99b673a81/generated_images/traditional-pakistani-wedding-dance-cere-a213aa64-20251019214841.jpg?",
    category: "Wedding Events",
    date: "January 5, 2024",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Preserving Cultural Heritage Through Dance Education",
    excerpt: "How V.PAG's training programs are ensuring the continuation of traditional Pakistani dance forms for future generations.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0778c1ec-e67a-45bd-9ba6-03c99b673a81/generated_images/pakistani-dance-education-class%2c-profe-c3aafb0f-20251019214851.jpg?",
    category: "Education",
    date: "December 28, 2023",
    readTime: "5 min read"
  },
  {
    id: 5,
    title: "Behind the Scenes: Preparing for a Major Cultural Performance",
    excerpt: "Get an insider's look at the dedication and preparation that goes into creating an unforgettable cultural dance performance.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0778c1ec-e67a-45bd-9ba6-03c99b673a81/generated_images/behind-the-scenes-of-cultural-dance-perf-ab9077e5-20251019214859.jpg?",
    category: "Behind the Scenes",
    date: "December 20, 2023",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "The Evolution of Pakistani Folk Dance Over the Decades",
    excerpt: "A journey through time exploring how traditional Pakistani folk dances have evolved while maintaining their cultural authenticity.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0778c1ec-e67a-45bd-9ba6-03c99b673a81/generated_images/evolution-of-pakistani-folk-dance-throug-b42c4b19-20251019214909.jpg?",
    category: "Cultural Heritage",
    date: "December 15, 2023",
    readTime: "6 min read"
  }
];

export default function BlogPage() {
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
                <BookOpen className="w-4 h-4 inline-block mr-2" aria-hidden="true" />
                Cultural Insights & Articles
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up animate-delay-100">
                Cultural <span className="text-primary">Insights</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
                Explore articles about Pakistani cultural heritage, traditional dance, and our journey preserving these art forms
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {blogPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 will-change-transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-primary text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-zinc-300 mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group/link"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
              
              <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-800 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6">
                  <BookOpen className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Stay <span className="text-primary">Connected</span>
                </h2>
                <p className="text-zinc-300 text-lg md:text-xl mb-8 leading-relaxed">
                  Subscribe to our newsletter for updates on performances, cultural insights, and exclusive content
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 active:scale-95 h-14 px-8"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}