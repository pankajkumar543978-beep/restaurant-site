"use client";

import React, { useEffect, useState } from "react";
import { RESTAURANT_DATA, getLiveBusinessStatus } from "@/data/restaurant";
import { Phone, MapPin } from "lucide-react";

export function AnnouncementBar() {
  const [status, setStatus] = useState({
    isOpen: false,
    statusBadge: "Hours: 8:00 AM – 3:30 PM",
    details: "Tue–Sat 8:00 AM – 3:30 PM",
  });

  useEffect(() => {
    setStatus(getLiveBusinessStatus());
    const interval = setInterval(() => {
      setStatus(getLiveBusinessStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside
      aria-label="Restaurant announcement"
      className="bg-espresso-900 text-cream-200 text-xs py-2 px-4 border-b border-espresso-800/80 font-sans tracking-wide"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Heritage Note */}
        <div className="flex items-center gap-2 text-[11px] sm:text-xs">
          <span className="font-semibold text-diner-honey tracking-wider uppercase text-[10px]">
            Est. {RESTAURANT_DATA.established}
          </span>
          <span className="text-espresso-500">·</span>
          <span className="text-cream-300 font-medium hidden sm:inline">
            Family-owned neighbourhood diner in Mount Pleasant, Calgary
          </span>
          <span className="text-cream-300 font-medium sm:hidden">
            Calgary&apos;s Family Diner
          </span>
        </div>

        {/* Live Status & Quick Action */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                status.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
              }`}
            />
            <span className="text-cream-200 font-medium">{status.statusBadge}</span>
          </div>

          <span className="text-espresso-700 hidden md:inline">|</span>

          <a
            href={`tel:${RESTAURANT_DATA.contact.phone}`}
            className="hidden md:inline-flex items-center gap-1 text-cream-300 hover:text-cream-100 transition-colors whitespace-nowrap"
          >
            <Phone className="w-3 h-3 text-diner-honey" />
            <span>(403) 277-0255</span>
          </a>

          <span className="text-espresso-700 hidden lg:inline">|</span>

          <a
            href={RESTAURANT_DATA.social.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1 text-cream-300 hover:text-cream-100 transition-colors whitespace-nowrap"
          >
            <MapPin className="w-3 h-3 text-diner-red" />
            <span>2614 4 St NW</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
