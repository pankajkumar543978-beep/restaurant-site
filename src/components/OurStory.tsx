"use client";

import React from "react";
import Image from "next/image";
import { RESTAURANT_DATA } from "@/data/restaurant";
import { Heart, Coffee, MapPin, Award, CheckCircle2 } from "lucide-react";

export function OurStory() {
  return (
    <section id="story" className="py-20 md:py-28 bg-cream-50 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling Montage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white bg-cream-200 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                  alt="Warm friendly diner counter and hospitality at John's Breakfast & Lunch"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-cream-50">
                  <p className="font-serif text-2xl font-bold">John &amp; Wendy Ly</p>
                  <p className="text-xs text-cream-200 mt-1">
                    Founders &amp; Operators · Proudly Serving Calgary
                  </p>
                </div>
              </div>

              {/* Floating Established Badge */}
              <div className="absolute -top-5 -left-5 bg-diner-red text-cream-50 py-3 px-5 rounded-2xl shadow-elevated border-2 border-white flex items-center gap-2.5">
                <Coffee className="w-5 h-5 text-diner-honey" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider leading-none">
                    Established
                  </p>
                  <p className="font-serif text-xl font-bold leading-none mt-1">2007</p>
                </div>
              </div>

              {/* Mount Pleasant Community Pill */}
              <div className="absolute -bottom-4 -right-4 bg-espresso-900 text-cream-100 py-2.5 px-4 rounded-xl shadow-card border border-espresso-700/80 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-diner-red" />
                <span className="text-xs font-semibold">2614 4 St NW, Calgary</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-diner-red text-xs font-bold tracking-wider uppercase">
              <Heart className="w-4 h-4 fill-current" />
              <span>Our Heritage &amp; Hospitality</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-900 leading-tight">
              A Family Tradition, <br />
              <span className="italic font-normal text-diner-red">Served Fresh Every Day.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-espresso-700 font-sans leading-relaxed">
              <p>
                {RESTAURANT_DATA.owners} opened John&apos;s Breakfast &amp; Lunch in {RESTAURANT_DATA.established} with
                a simple passion: good, honest food and genuine family hospitality.
              </p>

              <p>
                What started as a quiet neighbourhood diner in northwest Calgary has grown into a familiar morning
                destination where generations of regulars, families, and local workers gather for hearty meals and a warm welcome.
              </p>

              <p className="text-sm sm:text-base text-espresso-600">
                Over the past 18+ years, our menu has blended traditional North American breakfast classics with
                comforting Asian-inspired lunch favourites. We take pride in generous portions, quick coffee refills, and treating every guest like an old friend.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                "Locally owned & family operated since 2007",
                "Fresh Alberta eggs & thick-cut diner bacon",
                "Homemade hollandaise & breakfast poutine",
                "Welcoming Mount Pleasant community hub",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-sm font-semibold text-espresso-800">
                  <CheckCircle2 className="w-4 h-4 text-diner-red shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Signature Quote Card */}
            <div className="pt-6 border-t border-cream-200 mt-6 bg-cream-100 p-5 rounded-2xl border border-cream-300/80">
              <p className="font-serif italic text-espresso-900 text-base sm:text-lg">
                &ldquo;We don&apos;t just serve breakfast—we make sure you leave ready for whatever the day holds, with a smile and a full stomach.&rdquo;
              </p>
              <p className="text-xs font-bold text-espresso-600 mt-2">
                — John &amp; Wendy Ly, Owners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

