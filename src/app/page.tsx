import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import AboutPreview from '@/components/sections/about-preview';
import ServicesPreview from '@/components/sections/services-preview';
import TestimonialsSection from '@/components/sections/testimonials';
import PartnersSection from '@/components/sections/partners';
import LocationSection from '@/components/sections/location';
import CtaSection from '@/components/sections/cta';
import Footer from '@/components/sections/footer';
import { WhatsAppPopup } from '@/components/ui/whatsapp-popup';

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