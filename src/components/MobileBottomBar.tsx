"use client";

import React from "react";
import Link from "next/link";
import { Phone, Navigation, Utensils } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export function MobileBottomBar() {
  return (
    <aside
      aria-label="Quick mobile actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-cream-300/80 px-3 py-2 flex items-center justify-between gap-2 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      {/* 1. Quick Call */}
      <a
        href={`tel:${RESTAURANT_DATA.contact.phone}`}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-cream-100 active:bg-cream-200 text-espresso-900 border border-cream-300 text-xs font-bold transition-all"
        aria-label="Call diner"
      >
        <Phone className="w-3.5 h-3.5 text-diner-red" />
        <span>Call</span>
      </a>

      {/* 2. Get Directions (Google Maps short link) */}
      <a
        href={RESTAURANT_DATA.social.googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-diner-red active:bg-diner-red-hover text-white text-xs font-bold shadow-xs transition-all"
        aria-label="Get Google Maps directions"
      >
        <Navigation className="w-3.5 h-3.5" />
        <span>Directions</span>
      </a>

      {/* 3. Dedicated Menu Page */}
      <Link
        href="/menu"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-diner-honey active:bg-diner-honey-hover text-espresso-950 text-xs font-bold shadow-xs transition-all"
        aria-label="View complete menu"
      >
        <Utensils className="w-3.5 h-3.5 text-espresso-900" />
        <span>Menu</span>
      </Link>
    </aside>
  );
}

