"use client";

import React from "react";
import Link from "next/link";
import { RESTAURANT_DATA } from "@/data/restaurant";
import { Coffee, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-espresso-950 text-cream-100 border-t border-espresso-800">
      {/* Top Banner Accent */}
      <div className="h-1.5 bg-gradient-to-r from-diner-red via-diner-honey to-diner-red" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-24 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-diner-red flex items-center justify-center text-cream-50 shadow-sm">
                <Coffee className="w-5 h-5 text-diner-honey" />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-cream-50 leading-none">
                  JOHN&apos;S
                </span>
                <span className="block text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-cream-300 mt-1">
                  Breakfast &amp; Lunch · Est. 2007
                </span>
              </div>
            </div>

            <p className="text-sm text-cream-300 max-w-sm leading-relaxed font-sans">
              &ldquo;{RESTAURANT_DATA.tagline}&rdquo; Family-owned and operated by John &amp; Wendy Ly,
              proudly serving Calgary homemade-style morning favourites for over 18 years.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_DATA.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-900 hover:bg-diner-red text-cream-200 hover:text-white flex items-center justify-center transition-colors border border-espresso-800"
                aria-label="John's Breakfast & Lunch Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_DATA.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-900 hover:bg-diner-red text-cream-200 hover:text-white flex items-center justify-center transition-colors border border-espresso-800"
                aria-label="John's Breakfast & Lunch Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-cream-50 uppercase tracking-wider text-xs">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-cream-300">
              <li>
                <Link href="/" className="hover:text-diner-honey transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-diner-honey transition-colors">
                  Our Story &amp; Founders
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-diner-honey transition-colors">
                  Complete Diner Menu
                </Link>
              </li>
              <li>
                <a href="/#signatures" className="hover:text-diner-honey transition-colors">
                  Signature Dishes
                </a>
              </li>
              <li>
                <a href="/#gallery" className="hover:text-diner-honey transition-colors">
                  Food Gallery
                </a>
              </li>
              <li>
                <a href="/#reviews" className="hover:text-diner-honey transition-colors">
                  Community Reviews
                </a>
              </li>
              <li>
                <a href="/#location" className="hover:text-diner-honey transition-colors">
                  Hours &amp; Location
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-diner-honey transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-cream-50 uppercase tracking-wider text-xs">
              Location &amp; Hours
            </h4>
            <div className="space-y-2 text-sm text-cream-300 font-sans">
              <a
                href={RESTAURANT_DATA.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-cream-100 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-diner-red shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>
                  {RESTAURANT_DATA.address.street}, {RESTAURANT_DATA.address.city}, {RESTAURANT_DATA.address.province}{" "}
                  {RESTAURANT_DATA.address.postalCode} (Mount Pleasant)
                </span>
              </a>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-diner-honey shrink-0" />
                <a href={`tel:${RESTAURANT_DATA.contact.phone}`} className="hover:underline">
                  {RESTAURANT_DATA.contact.formattedPhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cream-400 shrink-0" />
                <a href={`mailto:${RESTAURANT_DATA.contact.email}`} className="hover:underline text-xs">
                  {RESTAURANT_DATA.contact.email}
                </a>
              </p>
            </div>

            <div className="pt-2 text-xs text-cream-400 border-t border-espresso-800">
              <p className="font-semibold text-cream-200">Tue – Sat: 8:00 AM – 3:30 PM</p>
              <p className="text-espresso-400 italic">Sunday &amp; Monday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="mt-14 pt-8 border-t border-espresso-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <p>
            © {new Date().getFullYear()} John&apos;s Breakfast &amp; Lunch. All rights reserved.
          </p>

          <p className="italic text-espresso-400 text-center sm:text-right max-w-md">
            {RESTAURANT_DATA.disclaimer}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-full bg-espresso-900 hover:bg-diner-red text-cream-200 hover:text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
