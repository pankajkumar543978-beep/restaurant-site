"use client";

import React from "react";

export function MenuGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 animate-pulse">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-3xl p-4 sm:p-4.5 border border-cream-200/80 shadow-subtle flex flex-col justify-between"
        >
          {/* Top row badge and heart */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="w-16 h-4 bg-cream-200 rounded-full" />
            <div className="w-6 h-6 bg-cream-200 rounded-full" />
          </div>

          {/* Image Placeholder */}
          <div className="aspect-square rounded-2xl bg-cream-200 mb-3.5 my-1" />

          {/* Title & Desc */}
          <div className="space-y-2 mt-1">
            <div className="h-4 bg-cream-200 rounded-md w-3/4" />
            <div className="h-3 bg-cream-200 rounded-md w-full" />
            <div className="h-3 bg-cream-200 rounded-md w-2/3" />
          </div>

          {/* Rating & prep time row */}
          <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-cream-100">
            <div className="w-14 h-3 bg-cream-200 rounded" />
            <div className="w-14 h-3 bg-cream-200 rounded" />
          </div>

          {/* Price & Plus button row */}
          <div className="flex items-center justify-between pt-3 mt-1">
            <div className="w-12 h-5 bg-cream-200 rounded" />
            <div className="w-8 h-8 bg-cream-200 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

