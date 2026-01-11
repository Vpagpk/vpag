import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import NewsletterSignup from "@/components/ui/newsletter-signup";

import { siteConfig } from '@/lib/config';

const Footer = () => {
  return (
    <footer className="bg-black text-zinc-300 relative overflow-hidden" role="contentinfo">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div className="space-y-3 pr-0 lg:pr-8 animate-fade-in">
            <Link href="/" className="mb-3 inline-block group" aria-label="VPAG Home">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/IMAGE00-1759911028053.webp"
                  alt="VPAG - Versatile Performing Art Group Logo"
                  width={80}
                  height={80}
                  className="relative object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 will-change-transform"
                />
              </div>
            </Link>
            <h3 className="font-semibold text-base text-white">
              VPAG - Versatile Performing Art Group
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400 hover:text-zinc-300 transition-colors duration-300">
              Preserving Pakistani cultural heritage through authentic dance
              performances, training programs, and artistic excellence for over
              {siteConfig.stats.years} years.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="animate-fade-in animate-delay-100">
            <h4 className="mb-4 font-bold text-base text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li className="group"><Link href="/" className="text-zinc-400 text-sm hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Home</Link></li>
              <li className="group"><Link href="/about" className="text-zinc-400 text-sm hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">About Us</Link></li>
              <li className="group"><Link href="/services" className="text-zinc-400 text-sm hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Services</Link></li>
              <li className="group"><Link href="/gallery" className="text-zinc-400 text-sm hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Gallery</Link></li>
              <li className="group"><Link href="/faq" className="text-zinc-400 text-sm hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">FAQ</Link></li>
              <li className="group"><Link href="/blog" className="text-zinc-400 text-sm hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Blog</Link></li>
              <li className="group"><Link href="/contact" className="text-zinc-400 text-sm hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="animate-fade-in animate-delay-200">
            <h4 className="mb-4 font-bold text-base text-white tracking-wide">
              Get in Touch
            </h4>
            <ul className="mb-4 space-y-3 text-zinc-400">
              <li className="flex items-start gap-2.5 group hover:text-zinc-300 transition-colors duration-300">
                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <span className="text-sm">Lahore, Punjab, Pakistan</span>
              </li>
              <li className="flex items-start gap-2.5 group">
                <Phone className="h-4 w-4 text-primary mt-1 shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" aria-hidden="true" />
                <Link href={siteConfig.phoneHref} className="text-sm hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">
                  {siteConfig.phone}
                </Link>
              </li>
              <li className="flex items-start gap-2.5 group">
                <Mail className="h-4 w-4 text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <Link href={`mailto:${siteConfig.email}`} className="text-sm hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">
                  {siteConfig.email}
                </Link>
              </li>
            </ul>

            <h5 className="mb-3 font-bold text-sm text-white">Follow Us</h5>
            <div className="flex items-center space-x-2.5 mb-4">
              <Link href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="relative w-9 h-9 rounded-full bg-zinc-800 hover:bg-primary text-white hover:text-black flex items-center justify-center transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black group hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/50 will-change-transform">
                <Facebook className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </Link>
              <Link href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="relative w-9 h-9 rounded-full bg-zinc-800 hover:bg-primary text-white hover:text-black flex items-center justify-center transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black group hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/50 will-change-transform">
                <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </Link>
              <Link href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel" className="relative w-9 h-9 rounded-full bg-zinc-800 hover:bg-primary text-white hover:text-black flex items-center justify-center transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black group hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/50 will-change-transform">
                <Youtube className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </Link>
              <Link href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="relative w-9 h-9 rounded-full bg-zinc-800 hover:bg-primary text-white hover:text-black flex items-center justify-center transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black group hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/50 will-change-transform">
                <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="animate-fade-in animate-delay-300">
            <h4 className="mb-4 font-bold text-base text-white tracking-wide">
              Stay Updated
            </h4>
            <p className="text-sm text-zinc-400 mb-4 hover:text-zinc-300 transition-colors duration-300">
              Subscribe to our newsletter for updates on performances, cultural insights, and exclusive content.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800/50 relative z-10">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-sm sm:flex-row">
          <p className="text-center text-zinc-500 text-xs sm:text-left hover:text-zinc-400 transition-colors duration-300">
            © {siteConfig.copyrightYear} VPAG - Versatile Performing Art Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-zinc-400 text-xs hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-zinc-400 text-xs hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;