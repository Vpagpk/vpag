import dynamic from 'next/dynamic';
import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';

// Lazy load below-the-fold sections for faster initial page load
const AboutPreview = dynamic(() => import('@/components/sections/about-preview'), {
  loading: () => <div className="min-h-[400px] bg-background" />,
});
const ServicesPreview = dynamic(() => import('@/components/sections/services-preview'), {
  loading: () => <div className="min-h-[400px] bg-background" />,
});
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials'), {
  loading: () => <div className="min-h-[300px] bg-background" />,
});
const PartnersSection = dynamic(() => import('@/components/sections/partners'), {
  loading: () => <div className="min-h-[200px] bg-background" />,
});
const LocationSection = dynamic(() => import('@/components/sections/location'), {
  loading: () => <div className="min-h-[400px] bg-background" />,
});
const CtaSection = dynamic(() => import('@/components/sections/cta'), {
  loading: () => <div className="min-h-[200px] bg-background" />,
});
const Footer = dynamic(() => import('@/components/sections/footer'), {
  loading: () => <div className="min-h-[300px] bg-background" />,
});
const WhatsAppPopup = dynamic(
  () => import('@/components/ui/whatsapp-popup').then(mod => ({ default: mod.WhatsAppPopup })),
  { ssr: false }
);

export const metadata = {
  title: 'VPAG - Premier Pakistani Cultural Dance Company | Authentic Sufi & Folk Performances',
  description: 'Experience authentic Pakistani cultural dance with VPAG. 22+ years of excellence in Sufi whirling, Kathak, folk dances. Professional performances for weddings, corporate events & cultural festivals.',
  keywords: 'Pakistani dance, Sufi whirling, cultural performances, Kathak dance, folk dance Pakistan, wedding dance, corporate events Lahore',
  openGraph: {
    title: 'VPAG - Premier Pakistani Cultural Dance Company',
    description: 'Experience authentic Pakistani cultural dance with VPAG. 22+ years of excellence.',
    type: 'website',
    locale: 'en_US',
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative">
        <HeroSection />
        <AboutPreview />
        <ServicesPreview />
        <TestimonialsSection />
        <PartnersSection />
        <LocationSection />
        <CtaSection />
      </main>

      <Footer />
      <WhatsAppPopup />
    </div>
  );
}