"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              AYMHC
            </h2>

            <p className="mt-3 text-blue-400 font-medium">
              Aim Your Meaningful High Creation
            </p>

            <p className="mt-6 leading-7 text-slate-400">
              Helping families protect, grow and preserve wealth through
              personalized financial planning.
            </p>

            <p className="mt-4 italic text-white">
              "Vichar Tamaro, Aakar Amaro"
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
<Link href="/terms">Terms of Service</Link>
            </div>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-xl font-semibold text-white">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              <p>Financial Planning</p>
              <p>Mutual Funds</p>
              <p>Insurance Planning</p>
              <p>Retirement Planning</p>
              <p>Health Insurance</p>
              <p>Life Insurance</p>
              <p>General Insurance</p>
              



            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-4">

              <a
                href="tel:+918850391909"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone size={18} />
                +91 88503 91909
              </a>

              <a
                href="mailto:chhaya.harshad@rediffmail.com"
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail size={18} />
                chhaya.harshad@rediffmail.com
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <span>Mumbai, Maharashtra</span>
              </div>

              <a
                href="https://wa.me/918850391909"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-white hover:bg-green-700"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © {year} AYMHC. All Rights Reserved.
          </p>

          <div className="flex gap-4">
  <a
    href="https://wa.me/918850391909"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-slate-700 px-4 py-2 hover:bg-white hover:text-slate-900 transition"
  >
    WhatsApp
  </a>

  <a
    href="#"
    className="rounded-full border border-slate-700 px-4 py-2 hover:bg-white hover:text-slate-900 transition"
  >
    LinkedIn
  </a>

  <a
    href="#"
    className="rounded-full border border-slate-700 px-4 py-2 hover:bg-white hover:text-slate-900 transition"
  >
    Instagram
  </a>
</div>

        </div>

      </div>
    </footer>
  );
}