"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RESTAURANT_DATA } from "@/data/restaurant";
import {
  Heart,
  Coffee,
  Egg,
  Users,
  MapPin,
  Clock,
  Phone,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      icon: Egg,
      title: "Real Food, Never Cut Corners",
      description:
        "Every egg is fresh Alberta-farm sourced, every batch of hollandaise is whisked from scratch, and our buttermilk pancake batter is mixed fresh daily. We don't believe in microwaved shortcuts.",
    },
    {
      icon: Heart,
      title: "John & Wendy's Personal Warmth",
      description:
        "When you walk in, you're not a table number — you're a neighbor. John mans the grill with care, while Wendy welcomes guests by name, knows your favorite order, and keeps your coffee mug full.",
    },
    {
      icon: Users,
      title: "A Mount Pleasant Community Staple",
      description:
        "Since 2007, families have watched their kids grow up in our booths, local contractors have fueled their mornings here, and weekend brunch-goers have made John's their Saturday tradition.",
    },
    {
      icon: Coffee,
      title: "Endless Hot Diner Coffee",
      description:
        "A proper diner is built on hot, fresh coffee that never runs dry. Enjoy endless refills served with a genuine smile from the moment you sit down until the moment you leave.",
    },
  ];

  const milestones = [
    {
      year: "2007",
      title: "Opening the Doors in Mount Pleasant",
      text: "John & Wendy Ly opened John's Breakfast & Lunch on 4th Street NW with a simple mission: hearty Canadian comfort food, honest prices, and authentic warmth.",
    },
    {
      year: "2012",
      title: "The Legend of the Hollandaise",
      text: "Word spread across Calgary about John's silky homemade hollandaise and breakfast poutine, making weekend morning lineups a fixture on 4th Street.",
    },
    {
      year: "2018",
      title: "Over a Decade of Neighbourhood Love",
      text: "Celebrated 11 years as a beloved north-central Calgary breakfast institution, earning hundreds of 5-star reviews from multi-generational regulars.",
    },
    {
      year: "Today",
      title: "Still Family-Owned, Still Scratch-Cooked",
      text: "Over 17 years later, John & Wendy still run the kitchen and counter every single day, preserving the warmth of an authentic classic diner.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream-50">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Page Hero Header */}
        <section className="bg-cream-100 border-b border-cream-300/80 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-espresso-600">
              <Link
                href="/"
                className="inline-flex items-center gap-1 hover:text-diner-red transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span className="text-cream-400">/</span>
              <span className="text-diner-red">Our Story</span>
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-espresso-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Heart className="w-3.5 h-3.5 text-diner-red fill-current" />
                <span>Calgary Heritage Since 2007</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-950 tracking-tight leading-tight">
                Good Food, Honest Hospitality &amp; A Real Calgary Story
              </h1>

              <p className="text-base sm:text-lg text-espresso-700 mt-4 font-sans leading-relaxed">
                For over 17 years, John &amp; Wendy Ly have welcomed Mount Pleasant families, contractors,
                students, and seniors into their diner with fresh-cracked eggs and steaming hot coffee.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Section with Editorial Photography */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Photo Column */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white bg-cream-200 aspect-[4/3] sm:aspect-[5/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85"
                    alt="Warm cosy diner ambiance with natural daylight"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-diner-red text-white mb-1.5">
                      Mount Pleasant, Calgary
                    </span>
                    <p className="font-serif text-xl font-bold">
                      2614 4th Street NW
                    </p>
                    <p className="text-xs text-cream-200 mt-0.5">
                      Where neighbours meet every morning since 2007
                    </p>
                  </div>
                </div>

                {/* Floating Mini Highlight */}
                <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl p-4 shadow-elevated border border-cream-300 max-w-xs hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-diner-honey/20 flex items-center justify-center text-espresso-950 font-bold font-serif text-lg">
                      17+
                    </div>
                    <div>
                      <p className="font-bold text-xs text-espresso-950">
                        Years of Daily Hospitality
                      </p>
                      <p className="text-[11px] text-espresso-600">
                        Scratch cooking by John &amp; Wendy
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-diner-red">
                    The Founders
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950 mt-1 leading-snug">
                    Meet John &amp; Wendy Ly
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-espresso-700 font-sans leading-relaxed">
                  In 2007, John and Wendy founded John&apos;s Breakfast &amp; Lunch with a very clear conviction: in an era of corporate breakfast chains and microwaved convenience, Calgary deserved an honest neighbourhood diner that makes things the right way.
                </p>

                <p className="text-sm sm:text-base text-espresso-700 font-sans leading-relaxed">
                  Every weekday morning before 7:00 AM, John is already in the kitchen, dicing seasoned potatoes for fresh hash browns, preparing crisp bacon, and slow-whisking the silky hollandaise sauce that has become famous throughout north Calgary. Meanwhile, Wendy sets the tables, brews fresh pots of coffee, and prepares to welcome their very first guests by name.
                </p>

                <p className="text-sm sm:text-base text-espresso-700 font-sans leading-relaxed">
                  There are no fancy QR code tablets or impersonal kiosks here. When you sit in a booth at John&apos;s, you get genuine hospitality, generous portions that fuel your whole day, and the comforting clatter of a kitchen that truly loves cooking for its community.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-diner-red hover:bg-diner-red-hover text-white text-xs font-bold tracking-wide shadow-sm hover:shadow transition-all"
                  >
                    <span>Explore Our Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={RESTAURANT_DATA.social.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-cream-300 text-espresso-950 hover:bg-cream-200 text-xs font-bold transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-diner-red" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="py-16 bg-cream-100 border-t border-b border-cream-300/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-diner-red">
                Our Values
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950 mt-1">
                The Diner Principles We Live By
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="bg-white rounded-2xl p-6 border border-cream-300 shadow-subtle flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-cream-200 flex items-center justify-center text-diner-red mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-espresso-950 mb-2">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-espresso-600 leading-relaxed font-sans">
                        {p.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Milestones */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-diner-red">
                Diner Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950 mt-1">
                17+ Years of Morning Memories
              </h2>
            </div>

            <div className="space-y-6">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-cream-300 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center gap-6"
                >
                  <div className="px-4 py-2 rounded-xl bg-espresso-900 text-cream-100 font-mono font-bold text-base sm:text-lg shrink-0">
                    {m.year}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-espresso-950">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-espresso-700 mt-1 font-sans leading-relaxed">
                      {m.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-diner-red text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-elevated">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-diner-honey-light">
                Come Have Breakfast With Us
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold">
                Pull Up a Booth This Morning
              </h3>
              <p className="text-xs sm:text-sm text-cream-100 font-sans max-w-xl">
                Open Monday to Saturday from 7:00 AM, Sunday from 8:00 AM. Free parking on 4th Street NW.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-espresso-950 hover:bg-cream-100 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>View Full Menu</span>
              </Link>
              <a
                href={`tel:${RESTAURANT_DATA.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-espresso-950 hover:bg-espresso-900 text-cream-100 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-diner-honey" />
                <span>Call (403) 277-0255</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

