import Image from 'next/image';
import { SmartImage } from '@/components/ui/smart-image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Trophy, Drama } from 'lucide-react';

import { siteConfig } from '@/lib/config';

const HeroSection = () => {
  const features = [
    {
      icon: Trophy,
      text: 'Award-Winning',
    },
    {
      icon: Sparkles,
      text: siteConfig.stats.events + ' Events',
    },
    {
      icon: Drama,
      text: 'Seen on PTV',
    },
  ];

  const stats = [
    {
      value: siteConfig.stats.years,
      label: 'Years Excellence',
    },
    {
      value: siteConfig.stats.clients,
      label: 'Happy Clients',
    },
    {
      value: siteConfig.stats.performances,
      label: 'Performances',
    },
  ];

  return (
    <section className="relative flex items-center overflow-hidden min-h-screen bg-black">
      {/* Background Image with Optimization */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-slow-zoom">
          <SmartImage
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-715657-IMAGE56_1758785926748.webp?"
            alt="Grand theater spectacle featuring V.PAG Dance Company's large-scale cultural performance with multiple dancers showcasing traditional Pakistani folk dances on grand stage"
            fill
            className="object-cover object-center"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,158,11,0.05),transparent_50%)]"></div>
      </div>

      {/* Animated Gradient Orbs - GPU Optimized */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float will-change-transform"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-delayed will-change-transform"></div>

      <div className="relative z-10 container py-20 pt-32 pb-32">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-sm font-semibold text-primary shadow-lg shadow-primary/10">
              <Sparkles className="w-4 h-4" />
              {siteConfig.stats.years} Years of Excellence
            </span>
          </div>

          {/* Main Heading with Staggered Animation */}
          <div className="animate-fade-in animate-duration-1000">
            <h1 className="font-display text-4xl font-black leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tighter">
              <span className="inline-block animate-slide-up will-change-transform">The Soul of</span>{' '}
              <span className="inline-block animate-slide-up animate-delay-100 text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary drop-shadow-2xl will-change-transform">
                Pakistan,
              </span>{' '}
              <span className="inline-block animate-slide-up animate-delay-200 will-change-transform">Brought to Life</span>
            </h1>
          </div>

          {/* Feature List with Enhanced Icons */}
          <div className="animate-fade-in animate-delay-300 animate-duration-1000 text-base md:text-lg text-zinc-100 mb-10 space-y-4 leading-relaxed max-w-3xl mx-auto px-4 md:px-0 flex flex-wrap justify-center gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 group animate-slide-up will-change-transform"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/40 text-primary shadow-lg group-hover:scale-125 group-hover:border-primary group-hover:shadow-primary/50 transition-all duration-500 will-change-transform">
                    <feature.icon className="w-4 h-4" />
                  </span>
                </div>
                <span className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors duration-300">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons with Enhanced Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 px-4 md:px-0 animate-fade-in animate-delay-700">
            <Link href="/services" passHref>
              <Button
                size="lg"
                className="group h-12 px-8 text-base font-bold transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 active:scale-95 relative overflow-hidden will-change-transform"
                aria-label="Book a Sufi dance performance"
              >
                <span className="relative z-10">Book Sufi Performance</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </Link>
            <Link href="/gallery" passHref>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base font-bold border-2 border-zinc-700 bg-zinc-900/70 backdrop-blur-xl transition-all duration-500 hover:bg-primary/10 hover:border-primary hover:text-primary hover:scale-105 hover:shadow-xl hover:shadow-primary/20 active:scale-95 will-change-transform"
                aria-label="View the dance gallery"
              >
                View Dance Gallery
              </Button>
            </Link>
          </div>

          {/* Stats Grid with Enhanced Design */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-4 md:px-0 animate-fade-in animate-delay-900 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${1000 + index * 150}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-amber-500/20 to-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Card Content */}
                <div className="relative text-center p-6 border-2 border-zinc-800/80 hover:border-primary/50 bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-950/80 backdrop-blur-2xl shadow-xl rounded-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-primary/10 will-change-transform">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="font-display text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-amber-400 to-primary mb-2 transition-transform duration-500 group-hover:scale-110 drop-shadow-xl animate-pulse-subtle will-change-transform">
                    {stat.value}
                  </div>
                  <p className="text-sm text-zinc-300 font-bold tracking-wider uppercase transition-colors duration-300 group-hover:text-white">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;