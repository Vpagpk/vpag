import { Award, Trophy, Star, Medal } from 'lucide-react';

const awards = [
  {
    icon: Trophy,
    title: 'National Excellence Award',
    year: '2020',
    organization: 'Pakistan Arts Council',
    description: 'Recognition for outstanding contribution to cultural preservation',
  },
  {
    icon: Award,
    title: 'Cultural Heritage Award',
    year: '2018',
    organization: 'Ministry of Culture, Pakistan',
    description: 'Honoring dedication to traditional Pakistani dance forms',
  },
  {
    icon: Star,
    title: 'Best Performance Award',
    year: '2019',
    organization: 'Alhamra Arts Council',
    description: 'Excellence in Sufi and classical dance performances',
  },
  {
    icon: Medal,
    title: 'Lifetime Achievement',
    year: '2021',
    organization: 'National Academy of Performing Arts',
    description: '22+ years of preserving Pakistani cultural heritage',
  },
];

const certifications = [
  'Certified by Pakistan Arts Council',
  'Member of International Dance Council (CID-UNESCO)',
  'Accredited Training Institution',
  'National Heritage Recognition',
];

export default function AwardsSection() {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-black py-24 sm:py-32" aria-labelledby="awards-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="awards-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Awards & <span className="text-primary">Recognition</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Honored for our commitment to preserving and promoting Pakistani cultural heritage
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 will-change-transform"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <award.icon className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{award.year}</div>
              <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
              <p className="text-sm text-primary/80 mb-3">{award.organization}</p>
              <p className="text-sm text-zinc-300 leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Professional <span className="text-primary">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <span className="text-zinc-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}