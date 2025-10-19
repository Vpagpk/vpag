import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Tent, Crown, Globe, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: Tent,
    title: 'Specializing in:',
    description: 'Authentic Sufi dance, classical performances & traditional folk arts',
  },
  {
    icon: Crown,
    title: 'Founded by:',
    description: 'Renowned artist Sir Muhammad Fayyaz',
  },
  {
    icon: Globe,
    title: 'Global reach:',
    description: 'International stages & cultural preservation',
  },
  {
    icon: GraduationCap,
    title: 'Training:',
    description: 'World-class performers & certified instructors',
  },
];

const FeatureCard = ({ icon: Icon, title, description, index }: { icon: any; title: string; description: string; index: number }) => {
  return (
    <div 
      className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50 hover:border-primary/50 hover:bg-zinc-900/70 transition-all duration-500 group will-change-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex-shrink-0 mt-1 relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
        <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/40 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary group-hover:rotate-12 transition-all duration-500 will-change-transform">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div>
        <strong className="text-primary font-bold text-base block mb-1 group-hover:text-amber-400 transition-colors duration-300">{title}</strong>
        <p className="text-zinc-300 leading-relaxed text-sm group-hover:text-zinc-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const AboutPreview = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 via-black to-zinc-950 relative py-16 md:py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float will-change-transform"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-delayed will-change-transform"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
                    About VPAG
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-white tracking-tighter">
                  Pakistan's Leading{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary">
                    Cultural Arts
                  </span>{' '}
                  Institution
                </h2>
              </div>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} index={index} />
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="group relative inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-bold ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 active:scale-95 px-6 py-3 h-auto overflow-hidden will-change-transform"
                >
                  <span className="relative z-10">Our Heritage Story</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </div>
            </div>

            {/* Right Image with Enhanced Effects */}
            <div className="relative group animate-fade-in animate-delay-300">
              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-amber-500/20 to-primary/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary/20 rounded-2xl rotate-12 group-hover:rotate-24 transition-transform duration-700 will-change-transform"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-primary/10 rounded-2xl -rotate-12 group-hover:-rotate-24 transition-transform duration-700 will-change-transform"></div>

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 group-hover:from-primary/30 transition-colors duration-500"></div>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-152755-about-image-B8DwQPlU-2.jpg?"
                  alt="V.PAG Dance Company master performing traditional Pakistani classical Kathak dance in ornate cultural costume with precise hand gestures and expressions showcasing years of artistic training"
                  width={600}
                  height={700}
                  className="relative w-full h-[400px] lg:h-[500px] object-cover shadow-2xl transition-all duration-700 group-hover:scale-110 will-change-transform"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-zinc-900 to-black border-2 border-primary/50 rounded-xl px-6 py-3 shadow-2xl backdrop-blur-xl animate-float will-change-transform">
                <p className="text-primary font-black text-xl">22+ Years</p>
                <p className="text-zinc-300 text-xs font-semibold">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;