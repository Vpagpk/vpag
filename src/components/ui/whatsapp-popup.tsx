"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

import { siteConfig } from '@/lib/config';

export const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = siteConfig.whatsapp; // Format: country code + number without +
  const message = "Hello! I'm interested in learning more about VPAG performances.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] group animate-fade-in"
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" />
        ) : (
          <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
        )}

        {/* Pulse Animation Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      </button>

      {/* WhatsApp Chat Card */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-[#25D366] p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-[#25D366]" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-sm">VPAG Dance Company</h3>
              <p className="text-white/90 text-xs">Typically replies instantly</p>
            </div>
          </div>

          {/* Message Content */}
          <div className="p-4 space-y-3">
            <div className="bg-zinc-800 rounded-lg p-3 rounded-tl-none">
              <p className="text-white text-sm leading-relaxed">
                👋 Hello! Welcome to VPAG Dance Company.
              </p>
              <p className="text-zinc-400 text-sm mt-2">
                Have questions about our performances, training programs, or booking? We're here to help!
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-center text-sm"
              >
                Start Chat on WhatsApp
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="block w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center text-sm"
              >
                Close
              </button>
            </div>

            {/* Contact Info */}
            <div className="text-center pt-2 border-t border-zinc-800">
              <p className="text-zinc-500 text-xs">
                📞 {siteConfig.phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};