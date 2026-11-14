"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Coffee, Heart, Users } from "lucide-react";

export function RestaurantIntro() {
  return (
    <section className="py-10 sm:py-16 md:py-24 bg-cream-50 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic Atmosphere Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border-2 sm:border-4 border-white bg-cream-200 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11]">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                alt="Cozy sunlit diner atmosphere at John's Breakfast & Lunch in Calgary"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5 text-cream-50 flex items-center justify-between text-xs">
                <span>Mount Pleasant, Calgary · 2614 4 St NW</span>
                <span className="font-semibold text-diner-honey">Est. 2007</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-3 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-diner-red text-xs font-bold tracking-wider uppercase">
              <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>A Warm Calgary Welcome</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-espresso-900 leading-tight">
              More Than Just Breakfast.
            </h2>

            <p className="text-sm sm:text-lg text-espresso-700 leading-relaxed line-clamp-3 sm:line-clamp-none font-sans">
              At John&apos;s Breakfast &amp; Lunch, we believe good food brings people together.
              Since 2007, our family-run restaurant has been serving the Calgary community
              with hearty meals, familiar favourites, and an unhurried, welcoming neighbourhood atmosphere.
            </p>

            <p className="hidden sm:block text-sm sm:text-base text-espresso-600 leading-relaxed font-sans">
              Whether you&apos;re stopping by for our legendary breakfast poutine, indulging in a hot plate of eggs benedict,
              or relaxing on our west-facing patio on a sunny morning, every plate is prepared fresh with the care and
              generosity that only a true mom-and-pop kitchen can deliver.
            </p>

            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 font-bold text-diner-red hover:text-diner-red-hover group"
              >
                <span>Read John &amp; Wendy&apos;s Story</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-cream-400">·</span>
              <Link
                href="/menu"
                className="inline-flex items-center gap-1.5 font-bold text-espresso-800 hover:text-diner-red group"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

