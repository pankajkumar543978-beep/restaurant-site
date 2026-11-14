"use client";

import React from "react";
import { REVIEWS_DATA, REVIEWS_META } from "@/data/reviews";
import { Star, MessageSquare, ExternalLink, Heart, CheckCircle2 } from "lucide-react";

export function CustomerReviews() {
  return (
    <section id="reviews" className="py-12 sm:py-20 md:py-28 bg-cream-50 border-t border-cream-200 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-espresso-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-4">
            <Star className="w-3.5 h-3.5 text-diner-honey fill-current" />
            <span>Community Love</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-espresso-900 leading-tight">
            Loved by Calgary Neighbours
          </h2>

          <p className="text-xs sm:text-lg text-espresso-600 mt-2 sm:mt-4 leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
            Over 18 years in Mount Pleasant, Calgary diners have shared what makes John&apos;s special.
            Here is a summary of verified community feedback.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-4 sm:mt-6 bg-white py-2 px-4 sm:py-3 sm:px-6 rounded-full border border-cream-300 shadow-2xs">
            <div className="flex items-center gap-1 text-diner-honey">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
              ))}
            </div>
            <span className="font-serif text-sm sm:text-base font-bold text-espresso-900">
              {REVIEWS_META.averageRating} out of 5.0
            </span>
            <span className="text-[11px] sm:text-xs text-espresso-600">
              ({REVIEWS_META.totalReviewsCount})
            </span>
          </div>
        </div>

        {/* Feedback Themes: Horizontal Touch-Snap Carousel on Mobile, Grid on Desktop */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory gap-4 sm:gap-8 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 scrollbar-none">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="shrink-0 w-[82vw] max-w-[320px] sm:w-auto snap-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-cream-300/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 text-diner-honey">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cream-100 text-espresso-600 border border-cream-200">
                    {review.highlightTag}
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-espresso-900 mb-2 line-clamp-1 sm:line-clamp-none">
                  {review.theme}
                </h3>

                <p className="text-xs sm:text-sm text-espresso-700 leading-relaxed font-sans line-clamp-3 sm:line-clamp-none">
                  &ldquo;{review.paraphrasedFeedback}&rdquo;
                </p>
              </div>

              <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 border-t border-cream-100 flex items-center justify-between text-[11px] sm:text-xs text-espresso-500">
                <span className="font-semibold text-espresso-800">{review.authorLabel}</span>
                <span className="truncate max-w-[130px] sm:max-w-none">{review.reviewerContext}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicator Hint */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 mt-2 text-[11px] text-espresso-500 font-medium">
          <span>👈 Swipe for more community reviews 👉</span>
        </div>

        {/* Read More on Google CTA */}
        <div className="text-center mt-8 sm:mt-16">
          <a
            href={REVIEWS_META.directGoogleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-cream-200 hover:bg-cream-300 text-espresso-900 border border-cream-400/80 text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 text-diner-red" />
            <span>Read 350+ Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-espresso-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
