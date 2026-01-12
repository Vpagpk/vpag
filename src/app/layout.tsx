import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Optimized font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "VPAG - Premier Pakistani Cultural Dance Company",
    template: "%s | VPAG"
  },
  description: "Experience authentic Pakistani cultural dance with VPAG. 22+ years of excellence in Sufi whirling, Kathak, folk dances. Professional performances for weddings, corporate events & cultural festivals.",
  keywords: ["Pakistani dance", "Sufi whirling", "cultural performances", "Kathak dance", "folk dance Pakistan", "wedding dance", "corporate events Lahore", "cultural heritage", "traditional dance"],
  authors: [{ name: "VPAG - Versatile Performing Art Group" }],
  creator: "VPAG",
  publisher: "VPAG",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vpag.com.pk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VPAG - Premier Pakistani Cultural Dance Company',
    description: 'Experience authentic Pakistani cultural dance with VPAG. 22+ years of excellence in Sufi whirling, Kathak, and folk dances.',
    url: 'https://vpag.com.pk',
    siteName: 'VPAG',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VPAG - Premier Pakistani Cultural Dance Company',
    description: 'Experience authentic Pakistani cultural dance with VPAG. 22+ years of excellence.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://slelguoygbfzlpylpxfs.supabase.co" />
        <link rel="dns-prefetch" href="https://slelguoygbfzlpylpxfs.supabase.co" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/route-messenger.js"
          strategy="lazyOnload"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <Toaster />
        <VisualEditsMessenger />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}