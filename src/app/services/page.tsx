import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Music, Disc, GraduationCap, Heart, Sparkles, Trophy, ArrowRight, Briefcase } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Dance Services | VPAG - Sufi, Cultural, Training & Wedding Performances',
  description: 'Professional Pakistani dance services: Sufi whirling, cultural shows, Kathak training, wedding events, and corporate performances. 22+ years of excellence in Lahore, Pakistan.',
  keywords: 'Sufi dance performances, cultural shows Pakistan, Kathak training Lahore, wedding dance events, corporate entertainment, folk dance services',
  openGraph: {
    title: 'Professional Dance Services - VPAG',
    description: 'Authentic Pakistani cultural performances for weddings, corporate events, and festivals.',
    type: 'website',
  }
};

export default function ServicesPage() {
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
                <Briefcase className="w-4 h-4 inline-block mr-2" aria-hidden="true" />
                Our Offerings
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up animate-delay-100">
                Professional <span className="text-primary">Dance Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
                Bringing authentic Pakistani cultural performances to your special events
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-24">
              {/* Sufi Dance */}
              <div className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 will-change-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/30 rounded-2xl mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Disc className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Sufi Dance Performances
                </h2>
                <p className="text-zinc-300 leading-relaxed">
                  Mesmerizing Sufi whirling ceremonies that captivate audiences with spiritual elegance and traditional authenticity
                </p>
              </div>

              {/* Cultural Shows */}
              <div className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 will-change-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/30 rounded-2xl mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Music className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Cultural Shows
                </h2>
                <p className="text-zinc-300 leading-relaxed">
                  Complete cultural performances featuring folk dances from all provinces of Pakistan with traditional music
                </p>
              </div>

              {/* Dance Training */}
              <div className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 will-change-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/30 rounded-2xl mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <GraduationCap className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Dance Training
                </h2>
                <p className="text-zinc-300 leading-relaxed">
                  Professional training programs for individuals and groups to learn authentic Pakistani traditional dance
                </p>
              </div>

              {/* Wedding Events */}
              <div className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 will-change-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/30 rounded-2xl mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Heart className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Wedding Events
                </h2>
                <p className="text-zinc-300 leading-relaxed">
                  Make your wedding unforgettable with traditional dance performances that celebrate Pakistani culture
                </p>
              </div>
            </div>

            {/* Additional Services */}
            <div className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="text-primary">Additional</span> Services
                </h2>
                <p className="text-zinc-300 text-lg md:text-xl">
                  Comprehensive solutions for all your cultural event needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                <div className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/30 rounded-xl flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Trophy className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Corporate Events</h3>
                      <p className="text-zinc-300 leading-relaxed">
                        Professional cultural performances for corporate functions, product launches, and business celebrations. We've performed for Pakistan's leading brands including PTV, Haier, Bata, and Atlas Honda.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/30 rounded-xl flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Sparkles className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Festival Performances</h3>
                      <p className="text-zinc-300 leading-relaxed">
                        Spectacular performances for cultural festivals, national celebrations, and international events. Experience the full vibrancy of Pakistani traditional arts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/30 rounded-xl flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Music className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Private Events</h3>
                      <p className="text-zinc-300 leading-relaxed">
                        Customized performances for private parties, milestone celebrations, and intimate gatherings. Bring authentic cultural entertainment to your special occasion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/30 rounded-xl flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <GraduationCap className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Educational Programs</h3>
                      <p className="text-zinc-300 leading-relaxed">
                        Cultural workshops and educational performances for schools, universities, and institutions to promote understanding of Pakistani heritage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-3xl mx-auto relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
              
              <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-800 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Ready to Experience <span className="text-primary">Authentic Culture?</span>
                </h2>
                <p className="text-zinc-300 text-lg md:text-xl mb-8 leading-relaxed">
                  Bring authentic Pakistani culture to your event with our professional dance performances
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-xl text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 active:scale-95 h-14 px-8"
                >
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}