"use client";

import { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      if (email && email.includes('@')) {
        setStatus('success');
        setMessage('Thank you! Check your email to confirm your subscription.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Please enter a valid email address.');
      }
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" aria-hidden="true" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            disabled={status === 'loading'}
            className="w-full pl-12 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Email address for newsletter"
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'loading' || !email}
          className="w-full inline-flex items-center justify-center bg-primary text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-950"
          aria-label="Subscribe to newsletter"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </button>
        
        {status === 'success' && (
          <div className="flex items-start gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg" role="alert">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-green-400">{message}</p>
          </div>
        )}
        
        {status === 'error' && (
          <div className="flex items-start gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg" role="alert">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-red-400">{message}</p>
          </div>
        )}
      </form>
      
      <p className="text-xs text-zinc-500 mt-3">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  );
}