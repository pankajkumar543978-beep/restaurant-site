export function generateRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "John's Breakfast & Lunch",
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1200",
    "description": "Family-owned Calgary neighbourhood diner serving homestyle breakfast, eggs benedict, breakfast poutine, and lunch since 2007.",
    "servesCuisine": ["Canadian", "Breakfast", "Brunch", "Diner"],
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2614 4 St NW A",
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "postalCode": "T2M 3A1",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.0756416,
      "longitude": -114.0713015
    },
    "telephone": "+1-403-277-0255",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "15:30"
      }
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "John Ly"
      },
      {
        "@type": "Person",
        "name": "Wendy Ly"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/johnsbreakfastyyc/",
      "https://www.facebook.com/johnsbreakfastyyc/",
      "https://maps.app.goo.gl/kCNiTCxWnfGUAxpF8"
    ]
  };
}

