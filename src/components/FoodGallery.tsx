"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export function FoodGallery() {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedItemIndex(null);
  }, []);

  const goToNext = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % GALLERY_ITEMS.length);
    }
  }, [selectedItemIndex]);

  const goToPrev = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  }, [selectedItemIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, closeLightbox, goToNext, goToPrev]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (selectedItemIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItemIndex]);

  const currentItem: GalleryItem | null =
    selectedItemIndex !== null ? GALLERY_ITEMS[selectedItemIndex] : null;

  return (
    <section id="gallery" className="py-12 sm:py-20 md:py-28 bg-cream-100 border-t border-cream-200 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-espresso-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-4">
            <Camera className="w-3.5 h-3.5 text-diner-red" />
            <span>Visual Tour</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-espresso-900 leading-tight">
            Food &amp; Atmosphere Gallery
          </h2>

          <p className="text-xs sm:text-lg text-espresso-600 mt-2 sm:mt-4 leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
            Take a look at our freshly made breakfast dishes, comforting lunch plates,
            and the welcoming diner space waiting for you in Calgary.
          </p>
        </div>

        {/* Gallery Grid: Top 4 on Mobile by default, full on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            const isHiddenOnMobile = !showAllMobile && index >= 4;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(index)}
                className={`${
                  isHiddenOnMobile ? "hidden sm:block" : "block"
                } group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-cream-200 border border-cream-300/80 shadow-subtle hover:shadow-card transition-all text-left focus:outline-none focus:ring-2 focus:ring-diner-red`}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.thumbnailUrl || item.imageUrl}
                  alt={item.altText}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover image-zoom-hover"
                />

                {/* Hover / Touch Overlay */}
                <div className="absolute inset-0 bg-espresso-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 sm:p-4 text-cream-50">
                  <div className="self-end p-1 sm:p-1.5 rounded-full bg-white/20 backdrop-blur-xs">
                    <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cream-50" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-diner-honey">
                      {item.categoryLabel}
                    </span>
                    <p className="font-serif text-xs sm:text-base font-bold leading-snug mt-0.5 line-clamp-1 sm:line-clamp-none">
                      {item.title}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile View All / Show Less Toggle Button */}
        <div className="sm:hidden text-center mt-5">
          <button
            type="button"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream-200 active:bg-cream-300 text-espresso-900 border border-cream-300 text-xs font-bold shadow-xs transition-all"
          >
            <Camera className="w-3.5 h-3.5 text-diner-red" />
            <span>
              {showAllMobile
                ? "Show Top 4 Photos"
                : `View All ${GALLERY_ITEMS.length} Photos (+${GALLERY_ITEMS.length - 4} more)`}
            </span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-espresso-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-espresso-900/80 text-cream-100 hover:bg-diner-red hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cream-100"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-espresso-900/80 text-cream-100 hover:bg-diner-red hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cream-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-espresso-900/80 text-cream-100 hover:bg-diner-red hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cream-100"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Modal Content */}
          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-espresso-900">
              <Image
                src={currentItem.imageUrl}
                alt={currentItem.altText}
                fill
                priority
                sizes="(max-width: 1024px) 95vw, 1000px"
                className="object-contain"
              />
            </div>

            {/* Caption & Counter */}
            <div className="mt-4 text-center text-cream-100 max-w-2xl px-4">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-diner-honey mb-1">
                <span>{currentItem.categoryLabel}</span>
                <span>•</span>
                <span>
                  {selectedItemIndex! + 1} of {GALLERY_ITEMS.length}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-cream-300 mt-1 font-sans leading-relaxed">
                {currentItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

