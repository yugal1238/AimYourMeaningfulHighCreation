"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      
       <a href="https://wa.me/918850391909?text=Hello%20AYMHC,%20I%20would%20like%20to%20know%20more."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition hover:scale-110 hover:bg-green-700"
      >
        <MessageCircle size={26} />
      </a>

      
       <a href="tel:+918850391909"
        aria-label="Call AYMHC"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:scale-110 hover:bg-blue-700"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}   