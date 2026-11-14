import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { generateRestaurantSchema } from "@/lib/schema";
import { MobileBottomBar } from "@/components/MobileBottomBar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#35251F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "John's Breakfast & Lunch | Calgary Diner Since 2007",
  description:
    "Family-run Calgary diner serving hearty homestyle breakfasts, eggs benedict, signature breakfast poutine, and lunch favourites. Established in 2007 by John & Wendy Ly in Mount Pleasant, Calgary.",
  keywords: [
    "John's Breakfast and Lunch",
    "Calgary Breakfast",
    "Best Diner Calgary",
    "Mount Pleasant Diner",
    "Calgary Eggs Benedict",
    "Breakfast Poutine Calgary",
    "John and Wendy Ly"
  ],
  authors: [{ name: "John's Breakfast & Lunch" }],
  openGraph: {
    title: "John's Breakfast & Lunch | Calgary Diner Since 2007",
    description:
      "Good Food. Great Mornings. Since 2007. Enjoy hearty homestyle breakfast favourites served with warmth in the heart of Calgary.",
    url:
      process.env.NEXT_PROD_SITE_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://johnsbreakfastyyc.com",
    siteName: "John's Breakfast & Lunch",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Hearty breakfast at John's Breakfast & Lunch Calgary",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = generateRestaurantSchema();

  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-cream-100 text-espresso-800 flex flex-col selection:bg-diner-red selection:text-cream-100">
        {children}
        <MobileBottomBar />
      </body>
    </html>
  );
}

