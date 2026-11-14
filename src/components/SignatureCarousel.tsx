"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getSignatureDishes } from "@/data/menu";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Utensils,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function SignatureCarousel() {
  const dishes = getSignatureDishes();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance every 5 seconds if user is not interacting
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dishes.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, dishes.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % dishes.length);
  };

  const activeDish = dishes[currentIndex];

  return (
    <section
      id="signatures"
      className="py-12 sm:py-20 md:py-24 bg-cream-100 border-t border-b border-cream-300/80 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-espresso-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5 text-diner-honey fill-current" />
              <span>Customer Favourites Carousel</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-espresso-950 tracking-tight leading-tight">
              Signature Diner Creations
            </h2>

            <p className="text-xs sm:text-base text-espresso-700 mt-2 font-sans leading-relaxed line-clamp-2 sm:line-clamp-none">
              Swipe or navigate through the homestyle plates that Calgary regulars order time and again.
              Made fresh to order with farm-fresh Alberta eggs and genuine diner hospitality.
            </p>
          </div>

          {/* Carousel Controls (Desktop & Mobile) */}
          <div className="flex items-center gap-2 sm:gap-3 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 sm:p-3 rounded-full bg-white border border-cream-300 text-espresso-900 hover:bg-diner-red hover:text-white hover:border-diner-red transition-all shadow-subtle focus:outline-none focus:ring-2 focus:ring-diner-red active:scale-95"
              aria-label="Previous signature dish"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <span className="text-xs font-bold font-mono text-espresso-600 px-1">
              0{currentIndex + 1} / 0{dishes.length}
            </span>

            <button
              type="button"
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-full bg-white border border-cream-300 text-espresso-900 hover:bg-diner-red hover:text-white hover:border-diner-red transition-all shadow-subtle focus:outline-none focus:ring-2 focus:ring-diner-red active:scale-95"
              aria-label="Next signature dish"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Featured Showcase Slide with Motion */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl border border-cream-300 shadow-card overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDish.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px]"
            >
              {/* Dish Photo (Left 7 cols on desktop) */}
              <div className="relative lg:col-span-7 h-64 sm:h-80 lg:h-full bg-cream-200 overflow-hidden">
                <Image
                  src={
                    activeDish.imageUrl ||
                    "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800"
                  }
                  alt={activeDish.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent lg:hidden" />

                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-espresso-900/90 text-cream-100 backdrop-blur-xs">
                    {activeDish.categoryLabel}
                  </span>
                  {activeDish.tags?.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-semibold bg-diner-honey text-espresso-950 shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dish Info (Right 5 cols on desktop) */}
              <div className="lg:col-span-5 p-4 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-2 sm:mb-3">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-diner-red">
                      Signature House Recipe
                    </span>
                    {activeDish.priceEstimate && (
                      <span className="font-serif font-bold text-xl sm:text-2xl text-espresso-950">
                        {activeDish.priceEstimate}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl sm:text-3xl font-bold text-espresso-950 leading-tight">
                    {activeDish.name}
                  </h3>

                  <p className="text-xs sm:text-base text-espresso-700 mt-2 sm:mt-4 leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
                    {activeDish.description}
                  </p>

                  {activeDish.sidesInfo && (
                    <div className="mt-3 sm:mt-4 p-2.5 sm:p-3.5 rounded-xl bg-cream-100 border border-cream-200 text-xs text-espresso-700 line-clamp-1 sm:line-clamp-none">
                      <span className="font-semibold text-espresso-900">Includes: </span>
                      <span>{activeDish.sidesInfo}</span>
                    </div>
                  )}

                  {activeDish.dietary && (
                    <div className="flex gap-2 mt-3 sm:mt-4">
                      {activeDish.dietary.map((d) => (
                        <span
                          key={d}
                          className="text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                  <Link
                    href="/menu"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-diner-red hover:bg-diner-red-hover text-white text-xs font-bold tracking-wide shadow-sm hover:shadow transition-all group"
                  >
                    <span>View in Full Diner Menu</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] sm:text-xs text-espresso-500 italic text-center sm:text-right">
                    Served hot &amp; fresh all morning
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Thumbnail Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {dishes.map((dish, idx) => (
            <button
              key={dish.id}
              type="button"
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-diner-red ${
                currentIndex === idx
                  ? "w-8 bg-diner-red"
                  : "w-2.5 bg-cream-300 hover:bg-cream-400"
              }`}
              aria-label={`Go to slide ${idx + 1}: ${dish.name}`}
            />
          ))}
        </div>

        {/* Bottom Banner to Dedicated Menu Page */}
        <div className="mt-6 sm:mt-12 p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-espresso-900 text-cream-100 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-2xl font-bold text-white">
              Looking for our complete selection?
            </h4>
            <p className="text-xs sm:text-sm text-cream-300 font-sans line-clamp-1 sm:line-clamp-none">
              Explore 25+ Canadian breakfast classics, 3-egg omelettes, griddle stacks, and lunch melts.
            </p>
          </div>

          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-diner-honey hover:bg-diner-honey-hover text-espresso-950 font-bold text-xs tracking-wider uppercase shadow-md transition-all shrink-0 hover:-translate-y-0.5"
          >
            <Utensils className="w-4 h-4 text-espresso-950" />
            <span>Open Full Diner Menu</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

