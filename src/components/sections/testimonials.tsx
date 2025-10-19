import React from 'react';
import Link from 'next/link';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "V.PAG's performance at our client's wedding was absolutely mesmerizing. The Sufi dance performance brought tears to everyone's eyes. Their professionalism and artistry are unmatched. We've been working with them for over 3 years now.",
    name: 'Ahmed Hassan',
    role: 'Wedding Planner, Elite Events Lahore',
    avatarUrl: 'https://i.pravatar.cc/48?u=ahmed-hassan',
  },
  {
    quote: 'Working with V.PAG for our Punjab Culture Day event was incredible. Muhammad Fayyaz and his team delivered a performance that truly captured the essence of our cultural heritage. The audience was captivated from start to finish.',
    name: 'Fatima Khan',
    role: 'Cultural Director, Alhamra Arts Council',
    avatarUrl: 'https://i.pravatar.cc/48?u=fatima-khan',
  },
  {
    quote: 'V.PAG has performed at multiple corporate events for us. Their ability to adapt their performances to different audiences while maintaining cultural authenticity is remarkable. Highly recommended for any cultural event.',
    name: 'Malik Usman',
    role: 'Corporate Event Manager, Atlas Honda',
    avatarUrl: 'https://i.pravatar.cc/48?u=malik-usman',
  },
  {
    quote: 'Learning Kathak from V.PAG has been a transformative experience. The instructors are not just teachers but true artists who inspire you to connect with the art form on a deeper level. The training is professional yet nurturing.',
    name: 'Sarah Ali',
    role: 'Dance Student, V.PAG Academy',
    avatarUrl: 'https://i.pravatar.cc/48?u=sarah-ali',
  },
  {
    quote: "V.PAG's contribution to our annual cultural festival has been invaluable. Their performances are not just entertainment but cultural education that helps preserve our traditions for future generations.",
    name: 'Dr. Rashid Mahmood',
    role: 'Festival Organizer, Shalimar Cultural Festival',
    avatarUrl: 'https://i.pravatar.cc/48?u=dr-rashid-mahmood',
  },
  {
    quote: 'Having V.PAG perform at my mehndi was a dream come true. The dancers were so graceful and the performance was perfectly choreographed. All our guests were talking about it for months afterward!',
    name: 'Amna Sheikh',
    role: 'Bride, Personal Client',
    avatarUrl: 'https://i.pravatar.cc/48?u=amna-sheikh',
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) => (
  <div 
    className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 flex flex-col h-full shadow-lg hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 will-change-transform group relative overflow-hidden animate-fade-in"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Gradient Overlay on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Top Border Accent */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative z-10">
      <div className="relative mb-4">
        <div className="absolute -left-2 -top-2 w-12 h-12 bg-primary/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
        <Quote className="relative w-10 h-10 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
      </div>
      
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-primary fill-primary transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
        ))}
      </div>
      
      <p className="text-zinc-300 flex-grow leading-relaxed text-sm mb-6 group-hover:text-zinc-200 transition-colors duration-300">"{testimonial.quote}"</p>
      
      <div className="pt-4 border-t border-zinc-800/50 group-hover:border-primary/20 transition-colors duration-500">
        <h4 className="font-bold text-white text-base group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
        <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-black via-zinc-950 to-black py-16 sm:py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tighter text-white sm:text-4xl md:text-5xl mb-6">
            What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary">Say</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-zinc-300 font-medium">
            Over 22 years of excellence, thousands of happy clients, and countless memorable performances. Here's what our clients say about working with V.PAG Dance Company.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <div className="text-center animate-fade-in animate-delay-700">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center bg-primary text-black font-bold px-6 py-3 rounded-lg shadow-lg shadow-primary/30 transition-all duration-500 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/50 hover:scale-105 active:scale-95 text-base overflow-hidden"
          >
            <span className="relative z-10">Book Your Performance</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;