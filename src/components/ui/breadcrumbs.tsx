"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show on homepage
  if (pathname === '/') return null;
  
  const pathSegments = pathname.split('/').filter(segment => segment);
  
  const breadcrumbItems = [
    { label: 'Home', href: '/', icon: Home },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return { label, href };
    })
  ];
  
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const Icon = item.icon;
          
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-zinc-600" aria-hidden="true" />
              )}
              {isLast ? (
                <span 
                  className="text-primary font-medium flex items-center gap-1.5"
                  aria-current="page"
                >
                  {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-md px-1"
                  )}
                >
                  {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}