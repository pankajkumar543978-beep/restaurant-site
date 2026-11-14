"use client";

import React, { useState } from "react";
import { RESTAURANT_DATA } from "@/data/restaurant";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";

export function ContactSection() {
  const [showMobileForm, setShowMobileForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!formData.message.trim()) newErrors.message = "Please enter your message.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Provide functional mailto link fallback
    const mailtoUrl = `mailto:${RESTAURANT_DATA.contact.email}?subject=${encodeURIComponent(
      `[Website Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    // Window open mail client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-12 sm:py-20 md:py-28 bg-cream-50 border-t border-cream-200 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Social Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 text-diner-red text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-2 sm:mb-3">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Get In Touch</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-espresso-900 leading-tight">
                We&apos;d Love to Hear From You.
              </h2>

              <p className="text-xs sm:text-lg text-espresso-600 mt-2 sm:mt-4 leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
                Have a question about large party seating, our weekend brunch specials, or catering?
                Reach out to John &amp; Wendy directly.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              <a
                href={`tel:${RESTAURANT_DATA.contact.phone}`}
                className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-cream-300 shadow-2xs hover:shadow-subtle transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-cream-100 group-hover:bg-diner-red flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-diner-red group-hover:text-cream-50 transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-espresso-500 uppercase tracking-wider">
                    Telephone (Call to Order / Inquire)
                  </p>
                  <p className="font-serif text-base sm:text-lg font-bold text-espresso-900 group-hover:text-diner-red transition-colors">
                    {RESTAURANT_DATA.contact.formattedPhone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${RESTAURANT_DATA.contact.email}`}
                className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-cream-300 shadow-2xs hover:shadow-subtle transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-cream-100 group-hover:bg-diner-red flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-diner-red group-hover:text-cream-50 transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-espresso-500 uppercase tracking-wider">
                    Direct Email
                  </p>
                  <p className="font-serif text-sm sm:text-base font-bold text-espresso-900 group-hover:text-diner-red transition-colors">
                    {RESTAURANT_DATA.contact.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-cream-300 shadow-2xs">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-cream-100 flex items-center justify-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-diner-red" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-espresso-500 uppercase tracking-wider">
                    Diner Address
                  </p>
                  <p className="font-sans text-xs sm:text-sm font-semibold text-espresso-900">
                    {RESTAURANT_DATA.address.full}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-espresso-600 mb-2 sm:mb-3">
                Follow Us on Social Media
              </p>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <a
                  href={RESTAURANT_DATA.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white border border-cream-300 hover:border-diner-red text-xs font-bold text-espresso-800 hover:text-diner-red transition-all shadow-2xs"
                >
                  <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-diner-red" />
                  <span>@johnsbreakfastyyc</span>
                </a>

                {RESTAURANT_DATA.social.isFacebookActive ? (
                  <a
                    href={RESTAURANT_DATA.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white border border-cream-300 hover:border-diner-red text-xs font-bold text-espresso-800 hover:text-diner-red transition-all shadow-2xs"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-diner-red" />
                    <span>Facebook</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-cream-100 border border-cream-300/60 text-xs font-semibold text-espresso-400 cursor-not-allowed shadow-none select-none"
                    aria-label="Facebook page currently unavailable"
                    title="Facebook page currently unavailable (Page inactive or closed)"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-espresso-400" />
                    <span>Facebook (Unavailable)</span>
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Toggle to Show/Hide Email Form */}
            <div className="lg:hidden pt-2 text-center">
              <button
                type="button"
                onClick={() => setShowMobileForm(!showMobileForm)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cream-200 active:bg-cream-300 text-espresso-900 border border-cream-300 text-xs font-bold transition-all shadow-xs"
              >
                <Mail className="w-4 h-4 text-diner-red" />
                <span>
                  {showMobileForm ? "Hide Message Form ▴" : "Send an Email Message Instead ▾"}
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form (collapsible on mobile, always open on desktop) */}
          <div
            className={`${
              showMobileForm ? "block" : "hidden lg:block"
            } lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-cream-300/80 shadow-card transition-all`}
          >
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso-900 mb-1 sm:mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-espresso-600 mb-4 sm:mb-6 font-sans">
              Fill in your details below. This will open your email client pre-filled with your message.
            </p>

            {submitted ? (
              <div className="bg-cream-100 border border-cream-300 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-espresso-900">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-sm text-espresso-600 leading-relaxed font-sans max-w-md mx-auto">
                  Your message has been prepared for transmission to{" "}
                  <strong>{RESTAURANT_DATA.contact.email}</strong>. John &amp; Wendy look forward to hearing from you!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-4 px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-espresso-900 text-cream-100 hover:bg-espresso-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-espresso-800 mb-1.5">
                    Your Name <span className="text-diner-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50 focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-diner-red focus:ring-diner-red"
                        : "border-cream-300 focus:ring-diner-red focus:border-diner-red"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-diner-red mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-espresso-800 mb-1.5">
                    Your Email <span className="text-diner-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50 focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-diner-red focus:ring-diner-red"
                        : "border-cream-300 focus:ring-diner-red focus:border-diner-red"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-diner-red mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-espresso-800 mb-1.5">
                    Subject <span className="text-diner-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Weekend brunch seating inquiry"
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50 focus:outline-none focus:ring-2 ${
                      errors.subject
                        ? "border-diner-red focus:ring-diner-red"
                        : "border-cream-300 focus:ring-diner-red focus:border-diner-red"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-diner-red mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-espresso-800 mb-1.5">
                    Your Message <span className="text-diner-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note to John & Wendy..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream-50 focus:outline-none focus:ring-2 ${
                      errors.message
                        ? "border-diner-red focus:ring-diner-red"
                        : "border-cream-300 focus:ring-diner-red focus:border-diner-red"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-diner-red mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-diner-red hover:bg-diner-red-hover text-cream-50 font-bold text-sm shadow-card hover:shadow-elevated transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-diner-red"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
