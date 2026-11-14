"use client";

import React from "react";
import { Heart, Scale, Users, UtensilsCrossed, ShieldCheck } from "lucide-react";

export function WhyJohns() {
  const pillars = [
    {
      icon: Heart,
      title: "Family-Owned Hospitality",
      description:
        "Founded and operated by John & Wendy Ly since 2007. Guests are greeted with genuine warmth and frequent coffee refills.",
      badge: "Since 2007",
    },
    {
      icon: Scale,
      title: "Generous Diner Portions",
      description:
        "Hearty plates cooked to order with fresh Alberta eggs, thick-cut bacon, crisp home fries, and golden pancakes.",
      badge: "Real Value",
    },
    {
      icon: Users,
      title: "Neighbourhood Favourite",
      description:
        "A cherished gathering place in Mount Pleasant and NW Calgary with an intimate diner vibe and a sunlit summer patio.",
      badge: "4.6★ Community",
    },
    {
      icon: UtensilsCrossed,
      title: "Breakfast & Lunch Classics",
      description:
        "Combining traditional North American breakfast favorites with comforting Asian-inspired specialties like homemade wonton soup.",
      badge: "Diverse Menu",
    },
  ];

  return (
    <section id="why-johns" className="py-12 sm:py-20 md:py-28 bg-cream-100 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-espresso-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-4">
            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-diner-red" />
            <span>The John&apos;s Difference</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-espresso-900 leading-tight">
            Why Customers Love John&apos;s
          </h2>

          <p className="text-xs sm:text-lg text-espresso-600 mt-2 sm:mt-4 leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
            In a city of modern trends, John&apos;s remains true to honest diner values:
            hearty plates, familiar faces, and hospitality that feels like home.
          </p>
        </div>

        {/* 4 Cards Grid: 2x2 on Mobile, 4-col on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-7 border border-cream-300/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-5">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-cream-100 group-hover:bg-diner-red text-espresso-800 group-hover:text-cream-50 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-diner-red group-hover:text-cream-50 transition-colors" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full bg-cream-200 text-espresso-700">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-sm sm:text-xl font-bold text-espresso-900 mb-1 sm:mb-2 line-clamp-1 sm:line-clamp-none">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-espresso-600 leading-snug sm:leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
                    {pillar.description}
                  </p>
                </div>

                <div className="hidden sm:flex pt-4 mt-6 border-t border-cream-100 items-center gap-1.5 text-xs font-semibold text-diner-red">
                  <span>Calgary Diner Tradition</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

