"use client";

import React, { useEffect, useState } from "react";
import { RESTAURANT_DATA, getLiveBusinessStatus } from "@/data/restaurant";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  ExternalLink,
  AlertCircle,
  Calendar,
} from "lucide-react";

export function LocationHours() {
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const [liveStatus, setLiveStatus] = useState({
    isOpen: false,
    statusBadge: "Hours: 8:00 AM – 3:30 PM",
    details: "Tue–Sat 8:00 AM – 3:30 PM",
  });

  useEffect(() => {
    setLiveStatus(getLiveBusinessStatus());
    const interval = setInterval(() => {
      setLiveStatus(getLiveBusinessStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="location" className="py-12 sm:py-20 md:py-28 bg-cream-100 border-t border-cream-200 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-espresso-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-4">
            <MapPin className="w-3.5 h-3.5 text-diner-red" />
            <span>Find Our Diner</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-espresso-900 leading-tight">
            Come Visit Us in NW Calgary
          </h2>

          <p className="text-xs sm:text-lg text-espresso-600 mt-2 sm:mt-4 leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
            Located on 4th Street NW in Mount Pleasant. Fresh coffee is brewing, and a table is ready for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Hours, Contact & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Live Status Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cream-300/80 shadow-subtle">
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-cream-200">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <span
                    className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full ${
                      liveStatus.isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                    }`}
                  />
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso-900">
                    {liveStatus.statusBadge}
                  </h3>
                </div>
                <span className="text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-cream-100 text-espresso-700">
                  Calgary Time
                </span>
              </div>
              <p className="text-xs sm:text-sm text-espresso-600 mt-2.5 sm:mt-3 font-sans">
                {liveStatus.details}
              </p>
            </div>

            {/* Weekly Schedule Table with Mobile Collapsible */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cream-300/80 shadow-subtle">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2 text-espresso-900 font-serif text-base sm:text-lg font-bold">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-diner-red" />
                  <span>Weekly Opening Hours</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowFullSchedule(!showFullSchedule)}
                  className="sm:hidden text-xs font-bold text-diner-red hover:underline py-1 px-2 rounded-lg bg-cream-100"
                >
                  {showFullSchedule ? "Hide Schedule ▴" : "View Full Week ▾"}
                </button>
              </div>

              {/* Mobile compact summary when collapsed */}
              <div className={`${showFullSchedule ? "block" : "hidden sm:block"} space-y-2`}>
                {RESTAURANT_DATA.hours.schedule.map((item) => (
                  <div
                    key={item.dayName}
                    className="flex items-center justify-between py-1 border-b border-cream-100 last:border-none text-xs sm:text-sm"
                  >
                    <span className="font-medium text-espresso-800">{item.dayName}</span>
                    <span
                      className={`font-semibold ${
                        item.isOpen ? "text-espresso-900" : "text-espresso-400 italic"
                      }`}
                    >
                      {item.displayHours}
                    </span>
                  </div>
                ))}
              </div>

              {!showFullSchedule && (
                <div className="sm:hidden py-1 text-xs text-espresso-700 font-sans">
                  <div className="flex justify-between py-1">
                    <span className="font-semibold text-espresso-900">Tuesday – Saturday:</span>
                    <span className="font-bold text-diner-red">8:00 AM – 3:30 PM</span>
                  </div>
                  <div className="flex justify-between py-0.5 text-espresso-500">
                    <span>Sunday &amp; Monday:</span>
                    <span className="italic">Closed</span>
                  </div>
                </div>
              )}

              {/* Notice */}
              <div className="mt-3 pt-2.5 sm:mt-4 sm:pt-3 border-t border-cream-200 flex items-start gap-2 text-[11px] sm:text-xs text-espresso-500">
                <AlertCircle className="w-3.5 h-3.5 text-diner-honey shrink-0 mt-0.5" />
                <p>{RESTAURANT_DATA.hours.note}</p>
              </div>
            </div>

            {/* Address & Direct Contact Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cream-300/80 shadow-subtle space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-diner-red shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif font-bold text-espresso-900 text-sm sm:text-base">
                    {RESTAURANT_DATA.name}
                  </p>
                  <p className="text-xs sm:text-sm text-espresso-700 mt-0.5">
                    {RESTAURANT_DATA.address.street}
                  </p>
                  <p className="text-xs sm:text-sm text-espresso-600">
                    {RESTAURANT_DATA.address.city}, {RESTAURANT_DATA.address.province}{" "}
                    {RESTAURANT_DATA.address.postalCode}
                  </p>
                </div>
              </div>

              <div className="pt-2.5 sm:pt-3 border-t border-cream-200 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a
                  href={`tel:${RESTAURANT_DATA.contact.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cream-200 hover:bg-cream-300 active:bg-cream-300 text-espresso-900 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-diner-red" />
                  <span>Call {RESTAURANT_DATA.contact.formattedPhone}</span>
                </a>

                <a
                  href={RESTAURANT_DATA.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-diner-red hover:bg-diner-red-hover active:bg-diner-red-hover text-cream-50 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Preview (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-cream-300/80 shadow-card">
              <div className="relative w-full h-[240px] sm:h-[460px] rounded-xl sm:rounded-2xl overflow-hidden bg-cream-200 border border-cream-200">
                {/* Embed Map */}
                <iframe
                  title="John's Breakfast & Lunch Calgary Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={
                    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
                    "https://maps.google.com/maps?q=John's+Breakfast+%26+Lunch+2614+4+St+NW+A+Calgary+AB&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  }
                  className="w-full h-full"
                />

                {/* Over-map pill */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-espresso-900/90 text-cream-100 py-1.5 px-2.5 sm:py-2 sm:px-3.5 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-xs flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                  <MapPin className="w-3.5 h-3.5 text-diner-red" />
                  <span className="font-semibold">Mount Pleasant, NW Calgary</span>
                </div>
              </div>

              {/* Map Footer Bar */}
              <div className="mt-3 sm:mt-4 px-1 sm:px-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-xs text-espresso-600">
                <span>Free street parking available along 4th Street NW.</span>
                <a
                  href={RESTAURANT_DATA.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-diner-red hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

