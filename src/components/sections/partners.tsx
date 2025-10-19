import Image from 'next/image';

const partners = [
  {
    name: 'Pakistan Television',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-409643-ptv.png?',
    alt: 'Pakistan Television Corporation logo',
  },
  {
    name: 'Haier Pakistan',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-975497-haier-pakistan.png?',
    alt: 'Haier Pakistan logo',
  },
  {
    name: 'Bata Pakistan',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-822033-bata-pakistan.jpg?',
    alt: 'Bata Pakistan logo',
  },
  {
    name: 'Atlas Honda Limited',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-861102-atlas-honda.png?',
    alt: 'Atlas Honda Limited logo',
  },
  {
    name: 'Alhamra Arts Council',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-768723-alhamra-arts-council.png?',
    alt: 'Alhamra Arts Council logo',
  },
  {
    name: 'National Bank of Pakistan',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-781220-nbp.png?',
    alt: 'National Bank of Pakistan logo',
  },
];

const stats = [
  { value: '500+', title: 'Corporate Events', description: 'Successfully delivered' },
  { value: '50+', title: 'Brand Partnerships', description: 'Across Pakistan' },
  { value: '22+', title: 'Years of Excellence', description: 'In cultural arts' },
];

const PartnersSection = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 via-black to-zinc-950 border-y border-zinc-800/30 py-16 sm:py-20 relative overflow-hidden" id="partners">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <div className="mb-4">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30">
              Our Partners
            </span>
          </div>
          <h2 className="font-display text-3xl font-black tracking-tighter text-white sm:text-4xl md:text-5xl mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary">Leading Organizations</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-zinc-300 font-medium">
            Collaborating with prestigious brands and institutions to deliver exceptional cultural performances nationwide
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <div 
              key={partner.name} 
              className="col-span-1 flex flex-col items-center text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full">
                {/* Glow Effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-amber-500/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Card */}
                <div className="relative flex h-32 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-6 border border-zinc-800/80 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/20 hover:-translate-y-2 will-change-transform overflow-hidden">
                  {/* Top Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={140}
                    height={50}
                    className="relative h-12 w-auto object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-xl filter grayscale-0"
                  />
                </div>
              </div>
              <p className="mt-3 text-zinc-400 text-sm font-semibold group-hover:text-primary transition-colors duration-300">{partner.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 mb-8 border-t-2 border-primary/30 pt-12">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {stats.map((stat, index) => (
              <div 
                key={stat.title} 
                className="relative group animate-fade-in"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="font-display text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-amber-400 to-primary group-hover:scale-110 transition-transform duration-500 inline-block">{stat.value}</div>
                  <h3 className="mt-3 text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">{stat.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;