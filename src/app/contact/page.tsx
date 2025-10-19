"use client";

import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

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
                <Send className="w-4 h-4 inline-block mr-2" aria-hidden="true" />
                Let's Connect
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up animate-delay-100">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
                Ready to book a performance or have questions? We'd love to hear from you
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Contact <span className="text-primary">Information</span>
                  </h2>
                  <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                    Reach out to us for bookings, inquiries, or to learn more about our cultural dance services
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="group flex items-start gap-4 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300" aria-hidden="true">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">Studio Location</h3>
                      <address className="text-zinc-300 not-italic leading-relaxed">
                        Lahore, Punjab, Pakistan<br />
                        Pakistan's Cultural Capital
                      </address>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300" aria-hidden="true">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">Phone</h3>
                      <p className="text-zinc-300 leading-relaxed">
                        <a href="tel:+923001234567" className="hover:text-primary transition-colors">+92 (300) 123-4567</a><br />
                        <a href="tel:+923219876543" className="hover:text-primary transition-colors">+92 (321) 987-6543</a>
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300" aria-hidden="true">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">Email</h3>
                      <p className="text-zinc-300 leading-relaxed">
                        <a href="mailto:info@vpag.com.pk" className="hover:text-primary transition-colors">info@vpag.com.pk</a><br />
                        <a href="mailto:bookings@vpag.com.pk" className="hover:text-primary transition-colors">bookings@vpag.com.pk</a>
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300" aria-hidden="true">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">Business Hours</h3>
                      <p className="text-zinc-300 leading-relaxed">
                        Mon - Sat: 9:00 AM - 8:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-800 rounded-3xl p-8 lg:p-12">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                      Book Your <span className="text-primary">Performance</span>
                    </h2>
                    <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>

                    {submitSuccess && (
                      <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 flex items-start gap-3" role="alert">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Thank you! Your message has been sent successfully. We'll contact you within 24 hours.</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            className={`w-full px-4 py-3 bg-zinc-800 border ${errors.name ? 'border-red-500' : 'border-zinc-700'} rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                            placeholder="Enter your full name"
                          />
                          {errors.name && <p id="name-error" className="mt-2 text-sm text-red-400">{errors.name}</p>}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                            Email Address <span className="text-primary">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={`w-full px-4 py-3 bg-zinc-800 border ${errors.email ? 'border-red-500' : 'border-zinc-700'} rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                            placeholder="your.email@example.com"
                          />
                          {errors.email && <p id="email-error" className="mt-2 text-sm text-red-400">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                            Phone Number <span className="text-primary">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                            className={`w-full px-4 py-3 bg-zinc-800 border ${errors.phone ? 'border-red-500' : 'border-zinc-700'} rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                            placeholder="+92 300 1234567"
                          />
                          {errors.phone && <p id="phone-error" className="mt-2 text-sm text-red-400">{errors.phone}</p>}
                        </div>

                        <div>
                          <label htmlFor="eventType" className="block text-sm font-medium text-zinc-300 mb-2">
                            Event Type <span className="text-primary">*</span>
                          </label>
                          <select
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            aria-invalid={!!errors.eventType}
                            aria-describedby={errors.eventType ? "eventType-error" : undefined}
                            className={`w-full px-4 py-3 bg-zinc-800 border ${errors.eventType ? 'border-red-500' : 'border-zinc-700'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                          >
                            <option value="">Select event type</option>
                            <option value="wedding">Wedding</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="cultural">Cultural Festival</option>
                            <option value="private">Private Event</option>
                            <option value="training">Dance Training</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.eventType && <p id="eventType-error" className="mt-2 text-sm text-red-400">{errors.eventType}</p>}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="eventDate" className="block text-sm font-medium text-zinc-300 mb-2">
                          Preferred Event Date
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          aria-label="Select your preferred event date"
                          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                          Message <span className="text-primary">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          rows={6}
                          className={`w-full px-4 py-3 bg-zinc-800 border ${errors.message ? 'border-red-500' : 'border-zinc-700'} rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none`}
                          placeholder="Tell us about your event, number of guests, venue details, and any specific requirements..."
                        />
                        {errors.message && <p id="message-error" className="mt-2 text-sm text-red-400">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 active:scale-95 h-14 px-8 py-3"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" aria-hidden="true" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gradient-to-b from-black via-amber-900/20 to-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Visit Our <span className="text-primary">Studio Location</span>
              </h2>
              <p className="text-zinc-300 text-lg md:text-xl">
                Located in Lahore, Punjab - Pakistan's Cultural Capital
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-12 text-center">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-2xl mb-6 border border-primary/30" aria-hidden="true">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Studio Address</h3>
                <address className="text-zinc-300 text-lg lg:text-xl not-italic leading-relaxed">
                  Our training facility and office are located in the heart of Lahore, 
                  Pakistan's cultural capital. We welcome visitors by appointment.
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}