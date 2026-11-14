"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MENU_ITEMS, MenuItem } from "@/data/menu";
import { useFavorites } from "@/utils/favorites";
import { RESTAURANT_DATA } from "@/data/restaurant";
import {
  Heart,
  Star,
  Clock,
  Plus,
  Phone,
  MapPin,
  ArrowLeft,
  Trash2,
  Utensils,
  Search,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FavoritesPage() {
  const { favorites, toggle, count, isLoaded } = useFavorites();
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const favoriteItems = MENU_ITEMS.filter((item) => favorites.includes(item.id));

  const filteredFavorites = favoriteItems.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q) ||
      (item.badge && item.badge.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Compact Page Header (Reduced Padding & Spacing) */}
        <section className="bg-white border-b border-cream-200 py-3.5 sm:py-5 shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-espresso-500 mb-2 font-sans">
              <Link href="/" className="hover:text-diner-red transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>&gt;</span>
              <Link href="/menu" className="hover:text-diner-red transition-colors">
                Menu
              </Link>
              <span>&gt;</span>
              <span className="font-semibold text-espresso-950">My Favourites</span>
            </div>

            {/* Header Content & Search Row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-diner-red/10 text-diner-red text-[11px] font-bold uppercase tracking-wider mb-1">
                  <Heart className="w-3 h-3 fill-current" />
                  <span>Personal Wishlist</span>
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-espresso-950 tracking-tight leading-tight">
                  Saved Diner Favourites
                </h1>
                <p className="text-xs text-espresso-600 mt-0.5 font-sans">
                  {favoriteItems.length} {favoriteItems.length === 1 ? "dish" : "dishes"} saved for your next visit to Mount Pleasant
                </p>
              </div>

              {/* Action Toolbar: Search Bar + Call to Order */}
              {favoriteItems.length > 0 && (
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1 lg:pt-0">
                  {/* Search Saved Dishes */}
                  <div className="relative w-full sm:w-64 md:w-72">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-espresso-400 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search saved dishes..."
                      className="w-full pl-9 pr-8 py-2 rounded-full border border-cream-300 bg-cream-50 text-xs text-espresso-950 placeholder-espresso-400 focus:outline-none focus:ring-2 focus:ring-diner-red/30 focus:border-diner-red transition-all"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-espresso-400 hover:text-espresso-800"
                        aria-label="Clear search"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <a
                    href={`tel:${RESTAURANT_DATA.contact.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-espresso-950 font-bold text-xs shadow-xs transition-all whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call to Order All</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content Section (Compact Padding) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6">
          {!isLoaded ? (
            <div className="py-16 text-center text-espresso-500">Loading your saved favourites...</div>
          ) : favoriteItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-cream-300 p-6 sm:p-10 max-w-md mx-auto shadow-subtle">
              <div className="w-14 h-14 rounded-full bg-cream-100 flex items-center justify-center text-espresso-400 mx-auto mb-3">
                <Heart className="w-7 h-7" />
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-espresso-950">
                No Favourites Saved Yet
              </h2>
              <p className="text-xs text-espresso-600 mt-2 font-sans leading-relaxed">
                Click the heart icon on any dish in our menu to save it here for fast ordering when you visit John&apos;s!
              </p>
              <Link
                href="/menu"
                className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-diner-red hover:bg-diner-red-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Full Menu</span>
              </Link>
            </div>
          ) : filteredFavorites.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-cream-200 p-6 max-w-md mx-auto">
              <Search className="w-8 h-8 text-espresso-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-espresso-900">
                No saved dishes match &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-xs text-espresso-500 mt-1">
                Try searching for another dish or clear the filter.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-4 px-4 py-1.5 rounded-full bg-cream-200 hover:bg-cream-300 text-xs font-semibold text-espresso-800 transition-colors"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div>
              {searchQuery && (
                <div className="mb-4 flex items-center justify-between text-xs text-espresso-600">
                  <span>
                    Showing {filteredFavorites.length} of {favoriteItems.length} saved dishes matching &ldquo;{searchQuery}&rdquo;
                  </span>
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-diner-red hover:underline font-semibold"
                  >
                    Clear Filter
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {filteredFavorites.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedDish(item)}
                    className="bg-white rounded-3xl p-3.5 sm:p-4 border border-cream-300/80 shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between group cursor-pointer hover:-translate-y-0.5 relative"
                  >
                    {/* Top Row: Badge + Heart Action */}
                    <div className="flex items-center justify-between gap-2 mb-1.5 z-10">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-400 text-espresso-950">
                        {item.badge || item.categoryLabel}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggle(item.id);
                        }}
                        className="p-1.5 rounded-full text-diner-red hover:bg-cream-100 transition-colors"
                        aria-label={`Remove ${item.name} from favourites`}
                        title="Remove from favourites"
                      >
                        <Heart className="w-4 h-4 fill-diner-red text-diner-red" />
                      </button>
                    </div>

                    {/* Centered Image */}
                    <div className="relative aspect-square rounded-2xl bg-cream-100 overflow-hidden mb-3 my-0.5">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif font-bold text-sm sm:text-base text-espresso-950 group-hover:text-diner-red transition-colors line-clamp-1 leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-espresso-500 font-sans mt-0.5 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-espresso-600 mt-2 pt-2 border-t border-cream-200/80">
                        <div className="flex items-center gap-1 font-semibold text-espresso-900">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                          <span>{item.rating}</span>
                          <span className="text-espresso-400 font-normal">({item.reviewCount})</span>
                        </div>
                        <div className="flex items-center gap-1 text-espresso-500">
                          <Clock className="w-3 h-3 text-espresso-400" />
                          <span>{item.prepTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2.5 mt-1">
                        <span className="font-serif font-bold text-base sm:text-lg text-espresso-950">
                          {item.priceEstimate}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDish(item);
                          }}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-400 hover:bg-amber-500 active:scale-90 text-espresso-950 flex items-center justify-center font-bold shadow-2xs transition-transform"
                          aria-label={`View details for ${item.name}`}
                        >
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Standardized Responsive Dish Detail Modal (Fixed Height & No Overflow) */}
        <AnimatePresence>
          {selectedDish && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDish(null)}
                className="fixed inset-0 bg-espresso-950/65 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative bg-white rounded-3xl max-w-md w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl z-10 border border-cream-300"
              >
                {/* Fixed Height Photo */}
                <div className="relative h-44 sm:h-52 w-full shrink-0 bg-cream-200 overflow-hidden">
                  <Image
                    src={selectedDish.imageUrl}
                    alt={selectedDish.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 500px"
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedDish(null)}
                    className="absolute top-3.5 right-3.5 p-2 rounded-full bg-espresso-950/75 hover:bg-espresso-950 text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-3 left-3.5 flex flex-wrap gap-1.5">
                    {selectedDish.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-espresso-950 shadow-sm">
                        {selectedDish.badge}
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-espresso-900/90 text-white">
                      {selectedDish.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Scrollable Body */}
                <div className="p-4 sm:p-6 overflow-y-auto space-y-3 flex-1 no-scrollbar">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso-950">
                      {selectedDish.name}
                    </h3>
                    <span className="font-serif font-bold text-xl sm:text-2xl text-espresso-950 shrink-0">
                      {selectedDish.priceEstimate}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-espresso-700 font-sans leading-relaxed">
                    {selectedDish.description}
                  </p>

                  {selectedDish.sidesInfo && (
                    <div className="p-3 rounded-2xl bg-cream-100 border border-cream-200 text-xs text-espresso-800 space-y-0.5">
                      <p className="font-bold text-espresso-950">🍽 Standard Diner Sides:</p>
                      <p className="text-espresso-600">{selectedDish.sidesInfo}</p>
                    </div>
                  )}

                  {selectedDish.category !== "beverages" && (
                    <div className="text-xs text-espresso-600 space-y-0.5">
                      <span className="font-bold text-espresso-900">Toast Choices:</span> Thick-cut Sourdough, Marble Rye, or Whole Wheat with butter &amp; jam.
                    </div>
                  )}
                </div>

                {/* Sticky Action Footer */}
                <div className="p-3.5 sm:p-4 border-t border-cream-200 bg-white shrink-0 flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${RESTAURANT_DATA.contact.phone}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-amber-400 hover:bg-amber-500 text-espresso-950 font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call to Order (403) 277-0255</span>
                  </a>

                  <a
                    href={RESTAURANT_DATA.social.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-cream-100 hover:bg-cream-200 text-espresso-900 font-semibold text-xs transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-diner-red" />
                    <span>Directions</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

