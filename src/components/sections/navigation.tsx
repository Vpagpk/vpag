"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activePath = '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
      scrolled 
        ? "backdrop-blur-2xl bg-black/60 border-b border-primary/20 shadow-[0_8px_32px_0_rgba(245,158,11,0.15)]" 
        : "backdrop-blur-md bg-black/40 border-b border-white/5"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex items-center justify-between transition-all duration-700",
          scrolled ? "h-16" : "h-20"
        )}>
          <Link href="/" aria-label="VPAG - Versatile Performing Art Group" className="flex items-center group">
            <div className={cn(
              "relative flex items-center justify-center transition-all duration-700",
              scrolled ? "w-11 h-11" : "w-14 h-14"
            )}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-amber-500/20 to-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150 group-hover:scale-125"></div>
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-subtle"></div>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/IMAGE00-1759911028053.webp"
                alt="VPAG Logo"
                width={56}
                height={56}
                className="relative w-full h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-125 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)] will-change-transform"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-xl group overflow-hidden",
                  activePath === link.href
                    ? 'text-primary'
                    : 'text-zinc-200 hover:text-white'
                )}
              >
                <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">{link.label}</span>
                {activePath === link.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-xl border border-primary/30"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-amber-500/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl scale-95 group-hover:scale-100"></div>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-3/4 transition-all duration-500"></div>
              </Link>
            ))}
            <div className="ml-3 pl-3 border-l border-zinc-700/50">
              <Link
                href="/contact"
                aria-label="Book a cultural dance performance"
                className="group relative inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold tracking-wide transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-primary via-amber-500 to-primary text-black shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-95 h-10 px-6 py-2.5 overflow-hidden border border-amber-500/50"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">Book Performance</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-primary to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            </div>
          </nav>

          <button
            className="relative p-3 md:hidden hover:bg-zinc-800/50 rounded-xl transition-all duration-300 group border border-transparent hover:border-primary/20"
            aria-label="Open mobile menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-amber-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex h-5 w-6 flex-col justify-between">
              <span className={cn("block h-[2px] w-full rounded-full bg-zinc-200 transition-all duration-500 will-change-transform group-hover:bg-primary", isOpen ? 'rotate-45 translate-y-[9px]' : '')}></span>
              <span className={cn("block h-[2px] w-full rounded-full bg-zinc-200 transition-all duration-300 group-hover:bg-primary", isOpen ? 'opacity-0 scale-0' : '')}></span>
              <span className={cn("block h-[2px] w-full rounded-full bg-zinc-200 transition-all duration-500 will-change-transform group-hover:bg-primary", isOpen ? '-rotate-45 -translate-y-[9px]' : '')}></span>
            </div>
          </button>
        </div>
        
        <div id="mobile-menu" className={cn("overflow-hidden transition-all duration-700 ease-in-out md:hidden", isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0')} role="navigation" aria-label="Mobile navigation">
          {isOpen && (
            <nav className="flex flex-col space-y-2 border-t border-primary/10 pt-5 pb-5 bg-gradient-to-b from-zinc-900/50 to-black/50 backdrop-blur-sm rounded-b-2xl">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "relative rounded-xl px-4 py-3 text-sm font-semibold tracking-wide transition-all duration-500 hover:scale-[1.02] will-change-transform overflow-hidden animate-slide-up",
                    activePath === link.href
                      ? 'bg-gradient-to-r from-primary/20 via-amber-500/20 to-primary/20 text-primary border border-primary/30 shadow-lg shadow-primary/10'
                      : 'text-zinc-200 hover:bg-zinc-800/40 hover:text-white border border-transparent hover:border-zinc-700/50'
                  )}
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <span className="relative z-10">{link.label}</span>
                  {activePath !== link.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
              ))}
              <div className="pt-3 animate-slide-up animate-delay-500">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  aria-label="Book a cultural dance performance"
                  className="w-full justify-center inline-flex items-center whitespace-nowrap rounded-xl text-sm font-bold tracking-wide transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-primary via-amber-500 to-primary text-black shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 h-11 px-6 py-3 border border-amber-500/50 overflow-hidden group"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">Book Performance</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-primary to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;