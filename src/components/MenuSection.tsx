"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuCategoryId,
  MENU_DISCLAIMER,
} from "@/data/menu";
import { Utensils, Sparkles, Clock, Phone, Info } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>("benedicts");

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);
  const activeMeta = MENU_CATEGORIES.find((cat) => cat.id === activeCategory);
  const featuredItem = filteredItems.find((item) => item.imageUrl);

  return (
    <section id="menu" className="py-20 md:py-28 bg-cream-50 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-diner-red mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>Mount Pleasant, Calgary · Homestyle Diner</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-950 tracking-tight leading-tight">
            The Diner Menu
          </h2>

          <p className="text-base text-espresso-600 mt-3 font-sans leading-relaxed">
            Every dish is cooked fresh to order with farm-fresh Alberta eggs, generous portions,
            and honest diner recipes John &amp; Wendy have perfected since {RESTAURANT_DATA.established}.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 gap-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-12">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-diner-red ${
                  isActive
                    ? "bg-espresso-900 text-cream-100 shadow-sm"
                    : "bg-white text-espresso-700 border border-cream-300 hover:bg-cream-200 hover:text-espresso-900"
                }`}
                aria-pressed={isActive}
              >
                {cat.shortTitle}
              </button>
            );
          })}
        </div>

        {/* Editorial Menu Card Sheet */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-cream-300 shadow-card">
          {/* Category Top Banner */}
          <div className="pb-6 mb-8 border-b border-cream-200 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950">
                {activeMeta?.title}
              </h3>
              <p className="text-sm text-espresso-600 mt-1 font-sans">
                {activeMeta?.tagline}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-100 border border-cream-200 text-xs font-semibold text-espresso-700 self-start sm:self-auto">
              <Clock className="w-3.5 h-3.5 text-diner-honey" />
              <span>{activeMeta?.servingTime}</span>
            </div>
          </div>

          {/* Menu Items Layout: Split if image exists, otherwise 2-col editorial */}
          <div className={`grid grid-cols-1 ${featuredItem ? "lg:grid-cols-12 gap-10" : "md:grid-cols-2 gap-x-12 gap-y-10"}`}>
            {/* Items Column (takes 7 or 12 cols) */}
            <div className={`${featuredItem ? "lg:col-span-7" : "md:col-span-2"} space-y-8`}>
              <div className={`grid grid-cols-1 ${featuredItem ? "gap-8" : "md:grid-cols-2 gap-x-12 gap-y-8"}`}>
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="group pb-6 border-b border-cream-200/80 last:border-none flex flex-col justify-between"
                  >
                    <div>
                      {/* Title & Price Header */}
                      <div className="flex items-baseline justify-between gap-4 mb-1.5">
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-lg font-bold text-espresso-950 group-hover:text-diner-red transition-colors">
                            {item.name}
                          </h4>
                          {item.isSignature && (
                            <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-diner-red/10 text-diner-red">
                              <Sparkles className="w-3 h-3 fill-current" />
                              House Special
                            </span>
                          )}
                        </div>
                        {item.priceEstimate && (
                          <span className="font-serif font-bold text-base text-espresso-900 shrink-0">
                            {item.priceEstimate}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-espresso-700 leading-relaxed font-sans">
                        {item.description}
                      </p>

                      {/* Sides / Serving Information */}
                      {item.sidesInfo && (
                        <p className="text-xs text-espresso-500 italic mt-1.5 font-sans">
                          {item.sidesInfo}
                        </p>
                      )}
                    </div>

                    {/* Dietary / Feature Tags */}
                    {(item.tags || item.dietary) && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {item.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-cream-100 text-espresso-600 border border-cream-200"
                          >
                            {tag}
                          </span>
                        ))}
                        {item.dietary?.map((diet) => (
                          <span
                            key={diet}
                            className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200"
                          >
                            {diet}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Photo Spotlight (if available for category) */}
            {featuredItem && (
              <div className="lg:col-span-5 flex flex-col">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] bg-cream-200 shadow-md border-2 border-white">
                  <Image
                    src={featuredItem.imageUrl!}
                    alt={featuredItem.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-diner-red text-white mb-1">
                      {featuredItem.categoryLabel}
                    </span>
                    <h5 className="font-serif text-xl font-bold">
                      {featuredItem.name}
                    </h5>
                    <p className="text-xs text-cream-200 mt-1 font-sans line-clamp-2">
                      {featuredItem.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-cream-100 border border-cream-200 text-xs text-espresso-700 space-y-1">
                  <p className="font-semibold text-espresso-900">
                    {activeCategory === "lunch-sandwiches"
                      ? "🥪 Diner Lunch Tradition:"
                      : activeCategory === "griddle"
                      ? "🥞 Fresh from the Griddle:"
                      : "🍳 Traditional Breakfast Sides:"}
                  </p>
                  <p className="text-espresso-600">
                    {activeCategory === "lunch-sandwiches"
                      ? "All burgers and sandwiches are served with generous golden diner fries, crisp dill pickle spear, and fresh toppings."
                      : activeCategory === "griddle"
                      ? "Poured from John's scratch buttermilk batter, served with melting whipped butter and pure Canadian maple syrup."
                      : "Every breakfast order includes crispy house-seasoned hashbrowns and choice of thick-cut sourdough, whole wheat, or marble rye."}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Authentic Diner Notice Footer */}
          <div className="mt-12 pt-6 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-espresso-600">
            <div className="flex items-start gap-2 max-w-xl">
              <Info className="w-4 h-4 text-diner-red shrink-0 mt-0.5" />
              <p>
                {MENU_DISCLAIMER}
              </p>
            </div>

            <a
              href={`tel:${RESTAURANT_DATA.contact.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cream-200 hover:bg-cream-300 text-espresso-900 font-semibold text-xs transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-diner-red" />
              <span>Call (403) 277-0255 for Daily Specials</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
