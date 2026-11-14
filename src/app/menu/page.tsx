"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MenuGridSkeleton } from "@/components/MenuSkeleton";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuCategoryId,
  MenuItem,
  MENU_DISCLAIMER,
} from "@/data/menu";
import { useFavorites } from "@/utils/favorites";
import { RESTAURANT_DATA } from "@/data/restaurant";
import {
  Search,
  Star,
  Clock,
  Plus,
  Heart,
  SlidersHorizontal,
  X,
  Phone,
  MapPin,
  ChevronDown,
  Info,
  Check,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function MenuPage() {
  // Favorites hook with localStorage persistence
  const { toggle: toggleFav, isFavorite, count: favCount } = useFavorites();

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId | "all" | "favorites">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [priceMax, setPriceMax] = useState<number>(22);
  const [portionFilter, setPortionFilter] = useState<string>("All");
  const [dietaryFilters, setDietaryFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"popular" | "rating" | "price-asc" | "price-desc">("popular");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Selected Dish Modal State
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Initial load skeleton simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 350);
    return () => clearTimeout(timer);
  }, []);

  // Debounced search (250ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput);
    }, 250);
    return () => clearTimeout(timer);
  }, [searchInput]);

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Google-style search autocomplete suggestions
  const searchSuggestions = useMemo(() => {
    const q = searchInput.toLowerCase().trim();
    if (!q) return [];
    return MENU_ITEMS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q)
    ).slice(0, 5);
  }, [searchInput]);

  const handleClearAll = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSearchInput("");
    setPriceMax(22);
    setPortionFilter("All");
    setDietaryFilters([]);
    setSortBy("popular");
  };

  const handleSuggestionClick = (dish: MenuItem) => {
    setSearchInput(dish.name);
    setSearchQuery(dish.name);
    setShowSuggestions(false);
    setSelectedDish(dish);
  };

  const toggleDietary = (diet: string) => {
    setDietaryFilters((prev) =>
      prev.includes(diet) ? prev.filter((d) => d !== diet) : [...prev, diet]
    );
  };

  // Filtered & Sorted Items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Favorites Category
      if (selectedCategory === "favorites") {
        if (!isFavorite(item.id)) return false;
      } else if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }

      // Price Filter
      if (item.priceNumber > priceMax) {
        return false;
      }
      // Portion Filter
      if (portionFilter !== "All" && item.portionSize !== portionFilter) {
        return false;
      }
      // Dietary Filters
      if (dietaryFilters.length > 0) {
        const matchesDiet = dietaryFilters.some((d) => {
          if (d === "Vegetarian") return item.dietary?.includes("Vegetarian");
          if (d === "House Special")
            return item.isSignature || item.badge?.includes("SPECIAL") || item.badge?.includes("LEGEND");
          if (d === "100% Alberta Beef")
            return item.tags?.includes("100% Alberta Beef") || item.categoryLabel.includes("Beef");
          if (d === "Scratch Batter")
            return item.tags?.includes("From Scratch") || item.badge?.includes("SCRATCH");
          return true;
        });
        if (!matchesDiet) return false;
      }
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCategory = item.categoryLabel.toLowerCase().includes(q);
        const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesCategory && !matchesTags) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "popular") {
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0) || b.reviewCount - a.reviewCount;
      }
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      if (sortBy === "price-asc") {
        return a.priceNumber - b.priceNumber;
      }
      if (sortBy === "price-desc") {
        return b.priceNumber - a.priceNumber;
      }
      return 0;
    });
  }, [selectedCategory, priceMax, portionFilter, dietaryFilters, searchQuery, sortBy, isFavorite]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Compact Page Header (Optimized for Mobile Initial Screen) */}
        <section className="bg-white border-b border-cream-200 py-3.5 sm:py-7">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-espresso-500 mb-1.5 sm:mb-2 font-sans">
              <Link href="/" className="hover:text-diner-red transition-colors">
                Home
              </Link>
              <span>&gt;</span>
              <span className="font-semibold text-espresso-950">Full Menu</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6">
              {/* Heading */}
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-espresso-950 tracking-tight leading-tight">
                  Full Menu
                </h1>
                <p className="text-[11px] sm:text-xs text-espresso-600 mt-0.5 font-sans">
                  {MENU_ITEMS.length} dishes made fresh daily in Mount Pleasant, Calgary
                </p>
              </div>

              {/* Google-Style Instant Suggestion Search (No Search Button, Auto-debounce) */}
              <div ref={searchContainerRef} className="relative w-full md:w-80 lg:w-96">
                <div className="relative flex items-center">
                  <Search className="w-4 h-4 text-espresso-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder="Search dishes (e.g. benny, poutine, coffee)..."
                    className="w-full pl-10 pr-9 py-2.5 rounded-full bg-cream-50 border border-cream-300 text-xs text-espresso-950 placeholder:text-espresso-400 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs transition-all"
                  />
                  {searchInput && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchInput("");
                        setSearchQuery("");
                        setShowSuggestions(false);
                      }}
                      className="absolute right-3 p-1 rounded-full text-espresso-400 hover:text-espresso-700"
                      aria-label="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Google-Style Suggestions Dropdown Popup */}
                <AnimatePresence>
                  {showSuggestions && searchInput.trim().length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-2xl shadow-elevated border border-cream-300 p-2 z-40 max-h-72 overflow-y-auto no-scrollbar"
                    >
                      {searchSuggestions.length === 0 ? (
                        <div className="p-3 text-center text-xs text-espresso-500">
                          No dishes found for &ldquo;{searchInput}&rdquo;
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <p className="px-2.5 py-1 text-[10px] uppercase font-bold text-espresso-400 tracking-wider">
                            Suggested Dishes
                          </p>
                          {searchSuggestions.map((dish) => (
                            <button
                              key={dish.id}
                              type="button"
                              onClick={() => handleSuggestionClick(dish)}
                              className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-cream-100 transition-colors text-left group"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="relative w-9 h-9 rounded-lg bg-cream-200 overflow-hidden shrink-0">
                                  <Image
                                    src={dish.imageUrl}
                                    alt={dish.name}
                                    fill
                                    sizes="36px"
                                    className="object-cover"
                                  />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-xs font-bold text-espresso-950 group-hover:text-diner-red truncate">
                                    {dish.name}
                                  </p>
                                  <span className="text-[10px] text-espresso-500">
                                    {dish.categoryLabel}
                                  </span>
                                </div>
                              </div>
                              <span className="font-serif font-bold text-xs text-espresso-900 shrink-0 ml-2">
                                {dish.priceEstimate}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
          {/* Mobile Sleek Control Strip (Compact, saves vertical height so products show immediately) */}
          <div className="lg:hidden flex items-center justify-between gap-3 mb-4">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-cream-300 text-espresso-900 text-xs font-bold shadow-2xs active:scale-95 transition-all"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-diner-red" />
              <span>Filters ({dietaryFilters.length + (selectedCategory !== "all" ? 1 : 0)})</span>
            </button>

            {/* Quick Favorites Toggle on Mobile */}
            <Link
              href="/favorites"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-cream-300 text-xs font-semibold text-espresso-800 shadow-2xs"
            >
              <Heart className={`w-3.5 h-3.5 ${favCount > 0 ? "fill-diner-red text-diner-red" : "text-espresso-400"}`} />
              <span>Saved ({favCount})</span>
            </Link>

            {/* Sort Select */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-white border border-cream-300 rounded-full pl-3 pr-7 py-2 text-xs font-semibold text-espresso-900 focus:outline-none shadow-2xs"
              >
                <option value="popular">Popular</option>
                <option value="rating">Top Rated</option>
                <option value="price-asc">$ Low-High</option>
                <option value="price-desc">$ High-Low</option>
              </select>
              <ChevronDown className="w-3 h-3 text-espresso-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* LEFT SIDEBAR: FILTERS PANEL (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3 bg-white rounded-3xl border border-cream-300/80 p-5 lg:p-6 shadow-subtle sticky top-24 space-y-6">
              {/* Header with Clear All */}
              <div className="flex items-center justify-between pb-3.5 border-b border-cream-200">
                <h3 className="font-serif text-lg font-bold text-espresso-950">
                  Filters
                </h3>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="text-xs text-espresso-500 hover:text-diner-red font-medium transition-colors"
                >
                  Clear all
                </button>
              </div>

              {/* Category Filter */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-espresso-950">
                  Category
                </h4>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-xs text-espresso-700 cursor-pointer hover:text-espresso-950">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === "all"}
                      onChange={() => setSelectedCategory("all")}
                      className="w-3.5 h-3.5 text-amber-500 focus:ring-amber-400 accent-amber-500"
                    />
                    <span className="font-medium">ALL</span>
                    <span className="text-[11px] text-espresso-400 ml-auto">({MENU_ITEMS.length})</span>
                  </label>

                  {/* Saved Favorites quick filter */}
                  <label className="flex items-center gap-2 text-xs text-espresso-700 cursor-pointer hover:text-espresso-950">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === "favorites"}
                      onChange={() => setSelectedCategory("favorites")}
                      className="w-3.5 h-3.5 text-amber-500 focus:ring-amber-400 accent-amber-500"
                    />
                    <span className="font-medium flex items-center gap-1 text-diner-red">
                      <Heart className="w-3 h-3 fill-current" />
                      <span>My Favourites</span>
                    </span>
                    <span className="text-[11px] text-espresso-400 ml-auto">({favCount})</span>
                  </label>

                  {MENU_CATEGORIES.map((cat) => {
                    const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;
                    return (
                      <label
                        key={cat.id}
                        className="flex items-center gap-2 text-xs text-espresso-700 cursor-pointer hover:text-espresso-950"
                      >
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat.id}
                          onChange={() => setSelectedCategory(cat.id)}
                          className="w-3.5 h-3.5 text-amber-500 focus:ring-amber-400 accent-amber-500"
                        />
                        <span>{cat.shortTitle}</span>
                        <span className="text-[11px] text-espresso-400 ml-auto">({count})</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-2.5 pt-4 border-t border-cream-200">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-espresso-950">
                    Price Range
                  </h4>
                  <span className="text-xs font-bold text-amber-600 font-mono">
                    Up to ${priceMax}
                  </span>
                </div>

                <input
                  type="range"
                  min="3"
                  max="22"
                  step="1"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />

                <div className="flex justify-between text-[10px] text-espresso-500 font-mono">
                  <span>$3</span>
                  <span>$22</span>
                </div>
              </div>

              {/* Portion Size */}
              <div className="space-y-2.5 pt-4 border-t border-cream-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-espresso-950">
                  Portion Size
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {["All", "Regular", "Hearty"].map((size) => {
                    const isActive = portionFilter === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setPortionFilter(size)}
                        className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                          isActive
                            ? "bg-amber-400 text-espresso-950 font-bold shadow-2xs"
                            : "bg-cream-100 text-espresso-700 hover:bg-cream-200 border border-cream-300/80"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dietary Checkboxes */}
              <div className="space-y-2 pt-4 border-t border-cream-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-espresso-950">
                  Dietary &amp; Specialty
                </h4>
                <div className="space-y-1.5">
                  {[
                    "Vegetarian",
                    "House Special",
                    "100% Alberta Beef",
                    "Scratch Batter",
                  ].map((diet) => {
                    const isChecked = dietaryFilters.includes(diet);
                    return (
                      <label
                        key={diet}
                        className="flex items-center gap-2 text-xs text-espresso-700 cursor-pointer hover:text-espresso-950"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleDietary(diet)}
                          className="w-3.5 h-3.5 rounded text-amber-500 focus:ring-amber-400 accent-amber-500"
                        />
                        <span>{diet}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Call to Order Info Box */}
              <div className="p-3.5 rounded-2xl bg-cream-100 border border-cream-200 text-xs text-espresso-700 space-y-1">
                <p className="font-bold text-espresso-900 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-diner-red" />
                  <span>Call to Order Takeout</span>
                </p>
                <p className="text-[11px] text-espresso-600">
                  (403) 277-0255 · Pickup ready in 10–15 min.
                </p>
              </div>
            </aside>

            {/* RIGHT COLUMN: MAIN PRODUCT CATALOG */}
            <div className="lg:col-span-9 space-y-4 sm:space-y-6">
              {/* Desktop Toolbar: Count & Sort */}
              <div className="hidden lg:flex items-center justify-between gap-4 pb-1">
                <p className="text-xs sm:text-sm font-bold text-espresso-950">
                  Showing {filteredItems.length} Dishes
                </p>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-espresso-500">Sort by:</span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="appearance-none bg-white border border-cream-300 rounded-full pl-3 pr-7 py-1.5 text-xs font-semibold text-espresso-900 focus:outline-none cursor-pointer shadow-2xs"
                    >
                      <option value="popular">Popular Favourites</option>
                      <option value="rating">Top Rated (★)</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                    </select>
                    <ChevronDown className="w-3 h-3 text-espresso-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Loading Skeleton Simulation */}
              {isLoading ? (
                <MenuGridSkeleton count={8} />
              ) : filteredItems.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border border-cream-300 p-8 shadow-subtle">
                  <p className="text-base font-serif font-bold text-espresso-950">
                    No dishes match your selected filters.
                  </p>
                  <p className="text-xs text-espresso-600 mt-1">
                    Try clearing search query or price adjustments.
                  </p>
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="mt-4 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-espresso-950 text-xs font-bold transition-all shadow-xs"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                /* Product Cards Grid (Foodly Card Style, Responsive & Compact) */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                  {filteredItems.map((item) => {
                    const isFav = isFavorite(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedDish(item)}
                        className="bg-white rounded-3xl p-3.5 sm:p-4 border border-cream-300/80 shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between group cursor-pointer hover:-translate-y-0.5 relative"
                      >
                        {/* Card Top Row: Badge on Left + Heart on Right */}
                        <div className="flex items-center justify-between gap-2 mb-1.5 z-10">
                          {item.badge ? (
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-400 text-espresso-950 shadow-2xs">
                              {item.badge}
                            </span>
                          ) : (
                            <span className="text-[9.5px] font-semibold text-espresso-400 uppercase tracking-wide">
                              {item.categoryLabel}
                            </span>
                          )}

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFav(item.id);
                            }}
                            className="p-1 rounded-full text-espresso-400 hover:text-diner-red hover:bg-cream-100 transition-colors"
                            aria-label={`Save ${item.name} to favourites`}
                          >
                            <Heart
                              className={`w-3.5 h-3.5 transition-all ${
                                isFav ? "fill-diner-red text-diner-red scale-110" : ""
                              }`}
                            />
                          </button>
                        </div>

                        {/* Centered Food Image Container (Square & Crisp) */}
                        <div className="relative aspect-square rounded-2xl bg-cream-100 overflow-hidden mb-2.5 group-hover:scale-102 transition-transform duration-300">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Content Info */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="font-serif font-bold text-sm sm:text-base text-espresso-950 group-hover:text-diner-red transition-colors line-clamp-1 leading-snug">
                              {item.name}
                            </h3>

                            <p className="text-[11px] text-espresso-500 font-sans mt-0.5 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          {/* Rating & Prep Time Row */}
                          <div className="flex items-center justify-between text-[10.5px] text-espresso-600 mt-2 pt-2 border-t border-cream-200/80">
                            <div className="flex items-center gap-1 font-semibold text-espresso-900">
                              <Star className="w-3 h-3 text-amber-500 fill-amber-400" />
                              <span>{item.rating}</span>
                              <span className="text-espresso-400 font-normal">({item.reviewCount})</span>
                            </div>

                            <div className="flex items-center gap-1 text-espresso-500">
                              <Clock className="w-3 h-3 text-espresso-400" />
                              <span>{item.prepTime}</span>
                            </div>
                          </div>

                          {/* Bottom Row: Price & Yellow Add Circle (+) */}
                          <div className="flex items-center justify-between pt-2.5 mt-0.5">
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
                    );
                  })}
                </div>
              )}

              {/* Daily Blackboard Specials Banner */}
              <div className="mt-10 sm:mt-12 p-5 sm:p-7 rounded-3xl bg-espresso-900 text-cream-100 border border-espresso-800 shadow-elevated">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                  <div className="md:col-span-8 space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-diner-honey">
                      Daily Chalkboard Specials
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      Ask John &amp; Wendy What’s Fresh Today
                    </h3>
                    <p className="text-xs text-cream-300 font-sans leading-relaxed">
                      In addition to our full printed menu, we prepare rotating daily specials, weekend scrambles,
                      and homemade soups written fresh on our Mount Pleasant diner chalkboard every morning.
                    </p>
                  </div>

                  <div className="md:col-span-4 flex flex-col gap-2">
                    <a
                      href={`tel:${RESTAURANT_DATA.contact.phone}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-amber-400 hover:bg-amber-500 text-espresso-950 font-bold text-xs tracking-wider uppercase shadow-md transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call (403) 277-0255</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-3.5 rounded-2xl bg-cream-100 border border-cream-200/80 flex items-start gap-2.5 text-xs text-espresso-600">
                <Info className="w-4 h-4 text-diner-red shrink-0 mt-0.5" />
                <p>{MENU_DISCLAIMER}</p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE FILTERS BOTTOM SHEET / DRAWER */}
        <AnimatePresence>
          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileFilterOpen(false)}
                className="fixed inset-0 bg-espresso-950/60 backdrop-blur-xs"
              />

              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 280 }}
                className="relative bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto p-5 sm:p-6 z-10 shadow-2xl space-y-5 no-scrollbar"
              >
                <div className="flex items-center justify-between pb-3.5 border-b border-cream-200">
                  <h3 className="font-serif text-lg font-bold text-espresso-950">
                    Filter Menu
                  </h3>
                  <button
                    type="button"
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-1.5 rounded-full bg-cream-100 text-espresso-900"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Categories */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-espresso-900">
                    Category
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory("all");
                        setMobileFilterOpen(false);
                      }}
                      className={`p-2 rounded-xl text-xs font-semibold text-left ${
                        selectedCategory === "all"
                          ? "bg-amber-400 text-espresso-950 font-bold"
                          : "bg-cream-100 text-espresso-800"
                      }`}
                    >
                      ALL ({MENU_ITEMS.length})
                    </button>
                    {MENU_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setMobileFilterOpen(false);
                        }}
                        className={`p-2 rounded-xl text-xs font-semibold text-left truncate ${
                          selectedCategory === cat.id
                            ? "bg-amber-400 text-espresso-950 font-bold"
                            : "bg-cream-100 text-espresso-800"
                        }`}
                      >
                        {cat.shortTitle}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Slider */}
                <div className="space-y-2 pt-3 border-t border-cream-200">
                  <div className="flex justify-between text-xs font-bold">
                    <span>Max Price</span>
                    <span className="text-amber-600 font-mono">${priceMax}</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="22"
                    step="1"
                    value={priceMax}
                    onChange={(e) => setPriceMax(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2.5 pt-3 border-t border-cream-200">
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="w-1/2 py-2.5 rounded-full bg-cream-100 text-espresso-900 font-bold text-xs"
                  >
                    Clear All
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileFilterOpen(false)}
                    className="w-1/2 py-2.5 rounded-full bg-amber-400 text-espresso-950 font-bold text-xs shadow-sm"
                  >
                    Show Results
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* STANDARDIZED RESPONSIVE DISH DETAIL MODAL (Fixed Height & No Overflow) */}
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
                {/* Standardized Fixed Height Photo (Never pushes modal out of view) */}
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
                    className="absolute top-3 right-3 p-2 rounded-full bg-espresso-950/75 hover:bg-espresso-950 text-white transition-colors"
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

                {/* Scrollable Modal Content */}
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

                  {/* Standard Diner Sides (Only if applicable) */}
                  {selectedDish.sidesInfo && (
                    <div className="p-3 rounded-2xl bg-cream-100 border border-cream-200 text-xs text-espresso-800 space-y-0.5">
                      <p className="font-bold text-espresso-950">🍽 Standard Diner Sides:</p>
                      <p className="text-espresso-600">{selectedDish.sidesInfo}</p>
                    </div>
                  )}

                  {/* Toast Choices ONLY on food plates, NOT on beverages! */}
                  {selectedDish.category !== "beverages" && (
                    <div className="text-xs text-espresso-600 space-y-0.5">
                      <span className="font-bold text-espresso-900">Toast Choices:</span> Thick-cut Sourdough, Marble Rye, or Whole Wheat with butter &amp; jam.
                    </div>
                  )}
                </div>

                {/* Pinned Bottom Actions Bar (Always visible and reachable) */}
                <div className="p-3.5 sm:p-4.5 pt-2.5 border-t border-cream-200 bg-white shrink-0 flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${RESTAURANT_DATA.contact.phone}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-amber-400 hover:bg-amber-500 text-espresso-950 font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call to Order (403) 277-0255</span>
                  </a>

                  <a
                    href={RESTAURANT_DATA.social.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-3 px-5 rounded-full bg-cream-100 hover:bg-cream-200 text-espresso-900 font-semibold text-xs transition-colors"
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
