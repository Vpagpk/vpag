import React from 'react';
import Link from 'next/link';
import { Disc, Music2, GraduationCap, Heart } from 'lucide-react';

const serviceItems = [
  {
    icon: Disc,
    title: "Sufi Dance",
    description: "Authentic whirling ceremonies",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Music2,
    title: "Cultural Shows",
    description: "Folk & classical performances",
    gradient: "from-primary/20 to-amber-400/20",
  },
  {
    icon: GraduationCap,
    title: "Dance Training",
    description: "Kathak & cultural classes",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    icon: Heart,
    title: "Wedding Events",
    description: "Bespoke celebrations",
    gradient: "from-amber-400/20 to-primary/20",
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 via-black to-zinc-950 relative overflow-hidden py-16 md:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tighter">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary">
              Dance Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Comprehensive cultural dance services across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serviceItems.map((item, index) => (
            <div
              key={item.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-full bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 text-center flex flex-col items-center group cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 will-change-transform relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/40 text-primary transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-primary/50">
                      <item.icon className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                <h3 className="relative z-10 text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="relative z-10 text-zinc-300 leading-relaxed text-sm group-hover:text-zinc-200 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Bottom Shine Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in animate-delay-600">
          <Link
            href="/services"
            aria-label="Explore All Services"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-bold border-2 border-zinc-700 bg-zinc-900/70 rounded-lg transition-all duration-500 hover:border-primary hover:bg-primary/10 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95 text-zinc-300 hover:text-white overflow-hidden"
          >
            <span className="relative z-10">Explore All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;