'use client';

import React from 'react';

export default function ContactPage() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Get the data from the form
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // 2. Format the message for WhatsApp
    const whatsappNumber = '918850391909'; // Your number with the +91 country code
    const text = `Hello AYMHC, I have an inquiry from your website:%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;

    // 3. Open WhatsApp in a new tab
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-800 sm:text-base">
            Contact Us
          </h2>
          <p className="mt-2 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Let's Build Your Financial Future Together
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base italic text-gray-500 sm:text-lg lg:text-xl">
            "Vichaar Tamaro, Aakaar Amaro | Your thought, our shape."
          </p>
        </div>

        {/* Contact Container */}
        <div className="mt-10 overflow-hidden rounded-lg bg-white shadow-xl sm:mt-16 lg:grid lg:grid-cols-2 lg:gap-4">

          {/* Left Column: Contact Information */}
          <div className="bg-blue-900 px-6 pb-10 pt-8 text-white sm:px-10 sm:pb-12 sm:pt-16 lg:pr-0 lg:py-16 xl:px-12 xl:py-20">
            <div className="lg:self-center">
              <h3 className="text-xl font-extrabold sm:text-2xl lg:text-3xl">
                AYMHC Family Protection
              </h3>
              <p className="mt-4 text-base text-blue-200 sm:text-lg">
                Expert property consultancy and comprehensive insurance services designed to protect your human life value.
              </p>
              <dl className="mt-8 space-y-5 sm:space-y-6">

                {/* Phone */}
                <dt className="sr-only">Phone number</dt>
                <dd className="flex text-sm text-blue-50 sm:text-base">
                  <svg className="h-6 w-6 flex-shrink-0 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className="ml-3">+91 88503 91909</span>
                </dd>

                {/* Email */}
                <dt className="sr-only">Email</dt>
                <dd className="flex text-sm text-blue-50 sm:text-base">
                  <svg className="h-6 w-6 flex-shrink-0 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="ml-3 break-all">chhaya.harshad@rediffmail.com</span>
                </dd>

                {/* Location */}
                <dt className="sr-only">Location</dt>
                <dd className="flex text-sm text-blue-50 sm:text-base">
                  <svg className="h-6 w-6 flex-shrink-0 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="ml-3">Mumbai, Maharashtra, India</span>
                </dd>
              </dl>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="px-6 py-8 sm:px-10 sm:py-10 lg:col-span-1 xl:p-12">
            <h3 className="text-base font-medium text-gray-900 sm:text-lg">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1">
                  <input type="text" name="name" id="name" required className="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" required className="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="mt-1">
                  <input type="tel" name="phone" id="phone" required className="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">How can we help you?</label>
                <div className="mt-1">
                  <textarea id="message" name="message" rows={4} required className="block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                </div>
              </div>

              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:text-base">
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
