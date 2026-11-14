"use client";

import React from "react";
import Image from "next/image";
import { MENU_ITEMS, getSignatureDishes } from "@/data/menu";
import { ArrowRight, Sparkles, ChefHat } from "lucide-react";

export function SignatureDishes() {
  const signatures = getSignatureDishes();

  return (
    <section id="signatures" className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-espresso-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-diner-honey fill-current" />
            <span>Customer Favourites</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-900 leading-tight">
            Our Signature Dishes
          </h2>

          <p className="text-base sm:text-lg text-espresso-600 mt-4 leading-relaxed font-sans">
            Crafted fresh each morning using homestyle recipes. These are the neighbourhood staples
            that keep Calgary regulars returning week after week.
          </p>
        </div>

        {/* 6 Dish Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatures.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-2xl overflow-hidden border border-cream-300/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Dish Photo */}
              <div className="relative aspect-[16/11] bg-cream-200 overflow-hidden">
                <Image
                  src={dish.imageUrl || "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800"}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover image-zoom-hover"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-espresso-900/90 text-cream-100 backdrop-blur-xs">
                    {dish.categoryLabel}
                  </span>
                  {(dish.tags || []).slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-diner-honey/90 text-espresso-950"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-espresso-900 group-hover:text-diner-red transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-espresso-600 mt-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-cream-200 flex items-center justify-between">
                  <span className="text-xs font-medium text-espresso-500 italic">
                    {dish.priceEstimate || "Current price in diner"}
                  </span>
                  <a
                    href="#menu"
                    className="inline-flex items-center gap-1 text-xs font-bold text-diner-red hover:text-diner-red-hover"
                  >
                    <span>View Menu</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Full Menu */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-espresso-900 hover:bg-espresso-800 text-cream-100 text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <ChefHat className="w-4 h-4 text-diner-honey" />
            <span>Explore Complete Diner Menu</span>
          </a>
        </div>
      </div>
    </section>
  );
}

