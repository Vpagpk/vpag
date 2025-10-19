import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import FaqSection from '@/components/sections/faq';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { HelpCircle, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Frequently Asked Questions | VPAG - Pakistani Cultural Dance',
  description: 'Find answers to common questions about VPAG dance performances, training programs, booking process, and our cultural dance services in Pakistan.',
  keywords: 'VPAG FAQ, dance performance questions, booking information, training programs, Pakistani dance services',
  openGraph: {
    title: 'FAQ - VPAG Cultural Dance Company',
    description: 'Find answers to common questions about our performances and services.',
    type: 'website',
  }
};

export default function FaqPage() {
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
                <HelpCircle className="w-4 h-4 inline-block mr-2" aria-hidden="true" />
                Get Your Answers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up animate-delay-100">
                Frequently Asked <span className="text-primary">Questions</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
                Find answers to common questions about our performances, training programs, and booking process
              </p>
            </div>
          </div>
        </section>

        <FaqSection />
        
        {/* Still Have Questions CTA */}
        <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
              
              <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-800 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6">
                  <MessageCircle className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Still Have <span className="text-primary">Questions?</span>
                </h2>
                <p className="text-zinc-300 text-lg md:text-xl mb-8 leading-relaxed">
                  Can't find the answer you're looking for? Our team is here to help you
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 active:scale-95 h-14 px-8"
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}