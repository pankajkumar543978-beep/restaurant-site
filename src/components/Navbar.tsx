"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RESTAURANT_DATA } from "@/data/restaurant";
import { useFavorites } from "@/utils/favorites";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Sparkles,
  Utensils,
  BookOpen,
  Camera,
  Star,
  ChevronRight,
  Clock,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count: favCount } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Signatures", href: "/#signatures" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Hours & Location", href: "/#location" },
  ];

  const mobileNavItems = [
    {
      label: "Home",
      href: "/",
      subtitle: "Welcome to John's Diner",
      icon: BookOpen,
    },
    {
      label: "Our Story",
      href: "/about",
      subtitle: "Family diner by John & Wendy since 2007",
      icon: BookOpen,
    },
    {
      label: "The Diner Menu",
      href: "/menu",
      subtitle: "Complete 24 Canadian breakfast & lunch items",
      icon: Utensils,
      badge: "Full Menu",
    },
    {
      label: "My Saved Favourites",
      href: "/favorites",
      subtitle: `${favCount} dishes saved on your wishlist`,
      icon: Heart,
      badge: favCount > 0 ? `${favCount}` : undefined,
    },
    {
      label: "Signature Dishes",
      href: "/#signatures",
      subtitle: "House Hollandaise & Breakfast Poutines",
      icon: Sparkles,
      badge: "Must Try",
    },
    {
      label: "Food Gallery",
      href: "/#gallery",
      subtitle: "Fresh plates prepared to order daily",
      icon: Camera,
    },
    {
      label: "Guest Reviews",
      href: "/#reviews",
      subtitle: "4.6★ from 600+ Calgary guests",
      icon: Star,
    },
    {
      label: "Hours & Location",
      href: "/#location",
      subtitle: "2614 4 St NW, Mount Pleasant",
      icon: MapPin,
    },
    {
      label: "Contact Us",
      href: "/#contact",
      subtitle: "Call for daily chalkboard specials",
      icon: Phone,
    },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-cream-100/95 backdrop-blur-md shadow-subtle border-b border-cream-300/80 py-3"
            : "bg-cream-100 border-b border-cream-200 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Typographic Restaurant Logo / Wordmark */}
            <Link
              href="/"
              className="group flex flex-col text-left focus:outline-none focus:ring-2 focus:ring-diner-red rounded px-1 -mx-1"
              aria-label="John's Breakfast & Lunch Home"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-espresso-950 group-hover:text-diner-red transition-colors leading-none">
                JOHN&apos;S
              </span>
              <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.22em] uppercase text-espresso-600 mt-1 leading-none">
                Breakfast &amp; Lunch · Calgary
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13.5px] font-medium text-espresso-700 hover:text-diner-red transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-diner-red rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Call to Action & Phone & Favorites */}
            <div className="hidden md:flex items-center gap-4">
              {/* Wishlist Link */}
              <Link
                href="/favorites"
                className="relative p-2 rounded-full text-espresso-700 hover:text-diner-red hover:bg-cream-200 transition-colors"
                aria-label={`View saved favourites (${favCount})`}
              >
                <Heart className={`w-4 h-4 ${favCount > 0 ? "fill-diner-red text-diner-red" : ""}`} />
                {favCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-diner-red text-white text-[9px] font-bold flex items-center justify-center">
                    {favCount}
                  </span>
                )}
              </Link>

              <a
                href={`tel:${RESTAURANT_DATA.contact.phone}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-espresso-800 hover:text-diner-red transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-diner-red" />
                <span>(403) 277-0255</span>
              </a>

              <a
                href={RESTAURANT_DATA.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-diner-red hover:bg-diner-red-hover text-white text-xs font-semibold shadow-subtle hover:shadow transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-diner-red whitespace-nowrap"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex items-center md:hidden gap-2">
              <Link
                href="/favorites"
                className="relative p-2 rounded-full bg-white border border-cream-300 text-espresso-700 shadow-2xs"
                aria-label={`View saved favourites (${favCount})`}
              >
                <Heart className={`w-4 h-4 ${favCount > 0 ? "fill-diner-red text-diner-red" : ""}`} />
                {favCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-diner-red text-white text-[8px] font-bold flex items-center justify-center">
                    {favCount}
                  </span>
                )}
              </Link>

              <a
                href={RESTAURANT_DATA.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-diner-red text-white shadow-2xs focus:outline-none focus:ring-2 focus:ring-diner-red"
                aria-label="Get Directions in Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl bg-cream-200/80 text-espresso-950 hover:bg-cream-300 transition-colors focus:outline-none focus:ring-2 focus:ring-diner-red"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Animated Mobile Drawer with Motion & Backdrop Blur */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            {/* Dark Frosted Glass Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-espresso-950/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-over Drawer Panel (Solid Warm Linen Background #FAF7F2) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-[340px] sm:max-w-sm h-full bg-[#FAF7F2] border-l border-cream-300 shadow-2xl flex flex-col justify-between overflow-y-auto z-10 p-5 sm:p-6 text-espresso-950 no-scrollbar"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation drawer"
            >
              <div>
                {/* Drawer Header */}
                <div className="pb-4 mb-4 border-b border-cream-300/80 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-espresso-950 leading-none">
                      JOHN&apos;S
                    </h3>
                    <p className="text-[10px] uppercase tracking-wider text-diner-red mt-1 font-bold">
                      Breakfast &amp; Lunch · Est. 2007
                    </p>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-cream-200 text-espresso-900 hover:bg-cream-300 transition-colors focus:outline-none focus:ring-2 focus:ring-diner-red"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Diner Status Pill */}
                <div className="mb-4 px-3.5 py-2.5 rounded-xl bg-white border border-cream-300/80 shadow-xs flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span>Open Today</span>
                  </div>
                  <div className="flex items-center gap-1 text-espresso-600 font-medium text-[11px]">
                    <Clock className="w-3 h-3 text-diner-honey" />
                    <span>Closes 3:30 PM</span>
                  </div>
                </div>

                {/* Animated Navigation Items */}
                <nav className="space-y-1.5">
                  {mobileNavItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.03 * index, duration: 0.2 }}
                        className="group flex items-center justify-between p-2.5 rounded-xl bg-white/70 hover:bg-white border border-cream-200/90 hover:border-diner-red/30 shadow-xs hover:shadow-subtle transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-cream-200 flex items-center justify-center text-espresso-800 group-hover:bg-diner-red group-hover:text-white transition-colors shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-bold text-espresso-900 group-hover:text-diner-red transition-colors">
                                {item.label}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded bg-diner-red/10 text-diner-red">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-espresso-500 font-normal">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        <ChevronRight className="w-4 h-4 text-espresso-400 group-hover:text-diner-red group-hover:translate-x-0.5 transition-all shrink-0" />
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom Actions & Diner Details */}
              <div className="pt-4 border-t border-cream-300/80 space-y-2 mt-4">
                <a
                  href={RESTAURANT_DATA.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-diner-red hover:bg-diner-red-hover text-white font-bold text-xs tracking-wide shadow-sm hover:shadow transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions (Google Maps)</span>
                </a>

                <a
                  href={`tel:${RESTAURANT_DATA.contact.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-espresso-900 hover:bg-espresso-800 text-cream-100 font-semibold text-xs shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-diner-honey" />
                  <span>Call (403) 277-0255</span>
                </a>

                <div className="text-center pt-2">
                  <p className="text-[11px] text-espresso-700 font-medium">
                    2614 4 St NW, Mount Pleasant, Calgary
                  </p>
                  <p className="text-[10px] text-espresso-500 mt-0.5">
                    Family-run warmth by John &amp; Wendy Ly
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
