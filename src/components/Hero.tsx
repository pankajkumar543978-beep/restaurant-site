"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RESTAURANT_DATA } from "@/data/restaurant";
import { Utensils, MapPin, Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "benedict",
    badge: "Customer Favourite",
    title: "Traditional Eggs Benedict",
    description: "Poached Alberta eggs with rich hollandaise & home fries",
    tag: "Family-Run Hospitality",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=1200&q=85",
    alt: "John's signature Eggs Benedict served diner-style with golden hollandaise and hash browns",
  },
  {
    id: "storefront",
    badge: "Our Diner on 4th St NW",
    title: "Mount Pleasant Storefront & Patio",
    description: "Sunny outdoor dining & welcoming diner booths · 2614 4 St NW",
    tag: "Calgary Landmark Since 2007",
    image: "/images/johns-storefront.jpg",
    alt: "Authentic storefront and summer patio of John's Breakfast & Lunch in Mount Pleasant Calgary",
  },
  {
    id: "poutine",
    badge: "Calgary Legend",
    title: "The Legendary Breakfast Poutine",
    description: "Crispy hash browns, real cheese curds, gravy & sunny eggs",
    tag: "Neighbourhood Classic",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1200&q=85",
    alt: "The Legendary Breakfast Poutine with sunny side eggs, cheese curds, and rich diner gravy",
  },
  {
    id: "pancakes",
    badge: "Scratch Griddle",
    title: "Golden Buttermilk Pancakes",
    description: "Fluffy, made-from-scratch griddle cakes with creamery butter & syrup",
    tag: "Weekend Family Tradition",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=85",
    alt: "Warm stack of golden buttermilk pancakes with butter and drizzled syrup",
  },
  {
    id: "salmon",
    badge: "Seafood Special",
    title: "Pacific Smoked Salmon Benny",
    description: "Delicate wild smoked salmon, poached eggs, silky hollandaise & dill",
    tag: "Top-Rated Chef Special",
    image: "https://images.unsplash.com/photo-1779332114741-655f5a7da58d?auto=format&fit=crop&w=1200&q=85",
    alt: "Pacific Smoked Salmon Benny with wild smoked salmon and dill hollandaise",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play interval (4.5s), pauses on mouse hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="top" className="relative overflow-hidden bg-cream-100 py-6 sm:py-10 lg:py-14 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            {/* Elegant Whisper Tag */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-espresso-600">
              <span className="w-1.5 h-1.5 rounded-full bg-diner-red inline-block" />
              <span>Mount Pleasant, Calgary</span>
              <span className="text-cream-400">/</span>
              <span>Family Owned Since {RESTAURANT_DATA.established}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-espresso-950 tracking-tight leading-[1.1]">
              Good Food. <br className="hidden sm:inline" />
              Great Mornings. <br className="hidden sm:inline" />
              <span className="text-diner-red font-serif font-normal italic">Since 2007.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-lg text-espresso-700 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed line-clamp-2 sm:line-clamp-none">
              From hearty breakfasts to comforting midday lunches, enjoy homemade-style favourites
              served with warmth in the heart of Calgary. Owned &amp; operated by John &amp; Wendy Ly.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-1">
              <Link
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-diner-red hover:bg-diner-red-hover text-white text-xs sm:text-sm font-semibold shadow-subtle hover:shadow-card transition-all transform hover:-translate-y-0.5"
              >
                <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-diner-honey" />
                <span>Explore Full Menu</span>
              </Link>

              <a
                href="#location"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-cream-200 hover:bg-cream-300 text-espresso-900 border border-cream-400/80 text-xs sm:text-sm font-semibold transition-all transform hover:-translate-y-0.5"
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-diner-red" />
                <span>Find Us on 4th St NW</span>
              </a>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-espresso-600">
              <div className="flex items-center gap-1 text-diner-honey">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-espresso-900">4.6★ on Google</span>
              <span className="text-cream-400">·</span>
              <span>800+ Reviews</span>
              <span className="text-cream-400">·</span>
              <span>18+ Years</span>
            </div>
          </div>

          {/* Right Column: High-Craft Interactive Hero Card Carousel (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Stable Frame Card (Shape never shifts; content & image transition smoothly) */}
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white bg-cream-200 aspect-[4/3] sm:aspect-[1/1] group select-none"
              >
                {/* Cross-fading Image Layer */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={currentSlide === 0}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Subtle Bottom Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/20 to-transparent pointer-events-none z-10" />

                {/* Top Slide Indicator Badges */}
                <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 bg-espresso-950/60 backdrop-blur-xs py-1 px-2.5 rounded-full border border-white/10">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentSlide ? "w-5 bg-amber-400" : "w-1.5 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Jump to hero slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Controls (Smooth hover reveal, tactile mobile tap) */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-espresso-950/60 hover:bg-espresso-950 text-white backdrop-blur-xs flex items-center justify-center opacity-85 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-md hover:scale-105 z-20"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-espresso-950/60 hover:bg-espresso-950 text-white backdrop-blur-xs flex items-center justify-center opacity-85 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-md hover:scale-105 z-20"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Over-image caption (Smoothly shifts with image) */}
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 text-white z-20 pointer-events-none">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-diner-red text-white mb-1.5 shadow-2xs">
                        {slide.badge}
                      </span>
                      <p className="font-serif text-lg sm:text-2xl font-bold leading-tight drop-shadow-xs">
                        {slide.title}
                      </p>
                      <p className="text-xs text-cream-200 mt-0.5 font-sans line-clamp-1 drop-shadow-xs">
                        {slide.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Dynamic Floating Verified Tag (Syncs with active slide) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="absolute -top-3 -right-2 sm:-right-3 bg-espresso-900 text-cream-100 py-1.5 px-3.5 rounded-full shadow-card border border-espresso-700/80 flex items-center gap-1.5 text-xs z-30 pointer-events-none"
                >
                  <Heart className="w-3.5 h-3.5 text-diner-red fill-current" />
                  <span className="font-semibold text-[10.5px] sm:text-[11px] tracking-wide whitespace-nowrap">
                    {slide.tag}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
