import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import AwardsSection from '@/components/sections/awards';
import Image from 'next/image';
import { Sparkles, Trophy, Globe, GraduationCap, Target, Eye } from 'lucide-react';

export const metadata = {
  title: 'About VPAG | 22+ Years of Pakistani Cultural Dance Excellence',
  description: 'Learn about VPAG - Pakistan\'s leading cultural dance institution. Founded by Sir Muhammad Fayyaz, we preserve authentic Sufi, Kathak, and folk dance traditions for over 22 years.',
  keywords: 'About VPAG, Pakistani dance company, cultural heritage, Sufi dance history, traditional dance Lahore, Muhammad Fayyaz',
  openGraph: {
    title: 'About VPAG - Pakistan\'s Premier Cultural Dance Company',
    description: '22+ years of preserving Pakistani cultural heritage through authentic traditional dance.',
    type: 'website',
  }
};

export default function AboutPage() {
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
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
                Pakistan's Leading <span className="text-primary">Cultural Arts Institution</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
                22+ years of preserving and promoting Pakistani cultural heritage through authentic traditional dance performances
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
              <div className="space-y-6 animate-slide-up animate-delay-300">
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-4">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Our <span className="text-primary">Heritage Story</span>
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  The Versatile Performing Art Group (VPAG) stands as Pakistan's premier cultural dance institution, dedicated to preserving and showcasing the rich tapestry of Pakistani traditional arts. Founded over two decades ago, we have become synonymous with excellence in cultural performances.
                </p>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Our mission is to keep the flame of traditional Pakistani dance alive while adapting to contemporary presentation standards. From the mesmerizing Sufi whirling to vibrant folk dances from all provinces, we bring authentic cultural experiences to audiences worldwide.
                </p>
                <div className="pt-4">
                  <button className="px-8 py-4 bg-primary text-black font-semibold rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                    Discover Our Journey
                  </button>
                </div>
              </div>
              <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 group animate-slide-up animate-delay-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-152755-about-image-B8DwQPlU-2.jpg?"
                  alt="VPAG master dancer performing traditional Pakistani Kathak with ornate cultural costume and expressive mudras demonstrating years of classical training"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
              {[
                {
                  icon: Sparkles,
                  title: 'Specializations',
                  description: 'Sufi whirling, Punjabi bhangra, Sindhi folk, Balochi dance, and more traditional Pakistani performances'
                },
                {
                  icon: Trophy,
                  title: 'Award-Winning',
                  description: 'Recognition from national and international cultural organizations for preserving heritage'
                },
                {
                  icon: Globe,
                  title: 'Global Reach',
                  description: 'Performed for international audiences, diplomatic events, and cultural festivals worldwide'
                },
                {
                  icon: GraduationCap,
                  title: 'Training Academy',
                  description: 'Professional training programs for aspiring dancers to learn authentic traditional techniques'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 will-change-transform"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-800 p-12 lg:p-16">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
              
              <div className="relative grid md:grid-cols-3 gap-12 lg:gap-16">
                {[
                  { number: '22+', label: 'Years Excellence' },
                  { number: '1.1k+', label: 'Happy Clients' },
                  { number: '1k+', label: 'Performances' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-5xl lg:text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-zinc-300 text-lg lg:text-xl font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <AwardsSection />

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="text-primary">Purpose</span>
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Driving our passion for cultural preservation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              <div className="group relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-10 lg:p-12 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                {/* Decorative Icon */}
                <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Target className="w-32 h-32 text-primary" aria-hidden="true" />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Target className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                    Our <span className="text-primary">Mission</span>
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    To preserve, promote, and present the rich cultural heritage of Pakistan through authentic traditional dance performances. We strive to keep ancient art forms alive while making them accessible and relevant to modern audiences, both locally and globally.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-10 lg:p-12 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                {/* Decorative Icon */}
                <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Eye className="w-32 h-32 text-primary" aria-hidden="true" />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Eye className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                    Our <span className="text-primary">Vision</span>
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    To be recognized internationally as the leading institution for Pakistani cultural dance, inspiring future generations to appreciate and continue our rich artistic traditions. We envision a world where Pakistani cultural arts are celebrated globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}