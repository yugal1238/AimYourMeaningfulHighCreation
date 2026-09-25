'use client';

import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const whatsappNumber = '918850391909';
    const text = `Hello AYMHC, I have an inquiry from your website:%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] relative">
      
      {/* Hero Section */}
      <section className="bg-[#0B1528] pt-32 pb-20 lg:pt-40 lg:pb-28 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1528] via-[#D4AF37] to-[#0B1528]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
            Contact Us
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light font-serif mb-6">
            Let's Build Your Future
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 font-light italic">
            "Vichaar Tamaro, Aakaar Amaro" — Your thought, our shape.
          </p>
        </div>
      </section>

      {/* Contact Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 lg:-mt-16 relative z-20 pb-20">
        <div className="overflow-hidden rounded-sm bg-white shadow-2xl border border-slate-100 lg:grid lg:grid-cols-5">

          {/* Left Column: Contact Information */}
          <div className="bg-[#0B1528] p-10 lg:p-16 lg:col-span-2 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]" />
            
            <h3 className="text-2xl font-serif mb-4">
              AYMHC Family Protection
            </h3>
            <p className="text-slate-400 font-light mb-10 leading-relaxed">
              Expert wealth advisory and comprehensive protection services designed to secure your family's future.
            </p>
            
            <dl className="space-y-8 font-light">
              <div className="flex items-start gap-4">
                <Phone className="text-[#D4AF37] shrink-0 mt-1" size={20} />
                <div>
                  <dt className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-1">Phone</dt>
                  <dd className="text-lg">+91 88503 91909</dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[#D4AF37] shrink-0 mt-1" size={20} />
                <div>
                  <dt className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-1">Email</dt>
                  <dd className="text-lg break-all">chhaya.harshad@rediffmail.com</dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[#D4AF37] shrink-0 mt-1" size={20} />
                <div>
                  <dt className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-1">Location</dt>
                  <dd className="text-lg">Mumbai, Maharashtra, India</dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Right Column: Contact Form */}
          <div className="p-10 lg:p-16 lg:col-span-3">
            <h3 className="text-2xl font-serif text-[#0B1528] mb-8">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                <input type="text" name="name" id="name" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                <input id="email" name="email" type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                <input type="tel" name="phone" id="phone" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">How can we help you?</label>
                <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all resize-none"></textarea>
              </div>

              <div className="sm:col-span-2 pt-4">
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold tracking-wide rounded-sm hover:bg-emerald-500 transition-all shadow-lg">
                  <MessageCircle size={20} />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
