import React from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { RestaurantIntro } from "@/components/RestaurantIntro";
import { SignatureCarousel } from "@/components/SignatureCarousel";
import { WhyJohns } from "@/components/WhyJohns";
import { FoodGallery } from "@/components/FoodGallery";
import { CustomerReviews } from "@/components/CustomerReviews";
import { LocationHours } from "@/components/LocationHours";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-50">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RestaurantIntro />
        <SignatureCarousel />
        <WhyJohns />
        <FoodGallery />
        <CustomerReviews />
        <LocationHours />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
