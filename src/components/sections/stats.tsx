import React from 'react';
import { siteConfig } from '@/lib/config';

const statsData: { value: string; label: string }[] = [
  {
    value: siteConfig.stats.years,
    label: 'Years Excellence',
  },
  {
    value: siteConfig.stats.clients,
    label: 'Happy Clients',
  },
  {
    value: siteConfig.stats.performances,
    label: 'Performances',
  },
];

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto px-4 md:px-0">
      {statsData.map((stat) => (
        <div
          key={stat.label}
          className="text-center p-10 group rounded-2xl border-2 border-zinc-800/50 bg-zinc-900/60 backdrop-blur-lg shadow-2xl hover:border-primary/30 transition-all duration-300"
        >
          <div className="font-display text-5xl md:text-6xl font-bold text-primary mb-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">
            {stat.value}
          </div>
          <p className="text-lg text-zinc-300 font-semibold tracking-wide transition-colors duration-300 group-hover:text-white">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;