/**
 * Verified Business & Heritage Information
 * John's Breakfast & Lunch (Calgary, AB, Canada)
 * Established 2007 · Family-owned by John & Wendy Ly
 */

export interface DaySchedule {
  dayName: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  dayIndex: number; // 0 for Sunday, 1 for Monday, etc.
  isOpen: boolean;
  openTime: string; // e.g. "08:00"
  closeTime: string; // e.g. "15:30"
  displayHours: string; // e.g. "8:00 AM – 3:30 PM" or "Closed"
}

export interface RestaurantData {
  name: string;
  tagline: string;
  eyebrow: string;
  owners: string;
  established: number;
  description: string;
  neighborhood: string;
  address: {
    street: string;
    suite: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    full: string;
    neighborhood: string;
  };
  contact: {
    phone: string;
    formattedPhone: string;
    email: string;
  };
  social: {
    instagram: string;
    facebook: string;
    googleMaps: string;
  };
  hours: {
    summary: string;
    schedule: DaySchedule[];
    grouped: {
      days: string;
      hours: string;
      isClosed: boolean;
    }[];
    note: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  features: string[];
  disclaimer: string;
}

export const RESTAURANT_DATA: RestaurantData = {
  name: "John's Breakfast & Lunch",
  tagline: "Good Food. Great Mornings. Since 2007.",
  eyebrow: "YOUR NEIGHBOURHOOD BREAKFAST SPOT",
  owners: "John & Wendy Ly",
  established: 2007,
  description:
    "A cherished Mount Pleasant staple serving generous portions of classic Canadian breakfast, hearty lunches, and authentic Vietnamese family recipes with warm, hospitable care.",
  neighborhood: "Mount Pleasant / Capitol Hill",
  address: {
    street: "2614 4 St NW",
    suite: "A",
    city: "Calgary",
    province: "AB",
    postalCode: "T2M 3A1",
    country: "Canada",
    full: "2614 4 St NW A, Calgary, AB T2M 3A1, Canada",
    neighborhood: "Mount Pleasant / Capitol Hill",
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_RESTAURANT_PHONE || "+1 403-277-0255",
    formattedPhone: process.env.NEXT_PUBLIC_RESTAURANT_FORMATTED_PHONE || "(403) 277-0255",
    email: process.env.NEXT_PUBLIC_RESTAURANT_EMAIL || "johnsbreakfastyyc@gmail.com",
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/johnsbreakfastyyc/",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/johnsbreakfastyyc/",
    googleMaps: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "https://maps.app.goo.gl/kCNiTCxWnfGUAxpF8",
  },
  hours: {
    summary: "Tuesday – Saturday: 8:00 AM – 3:30 PM | Sunday & Monday: Closed",
    grouped: [
      {
        days: "Tuesday – Saturday",
        hours: "8:00 AM – 3:30 PM",
        isClosed: false,
      },
      {
        days: "Sunday & Monday",
        hours: "Closed",
        isClosed: true,
      },
    ],
    schedule: [
      {
        dayName: "Sunday",
        dayIndex: 0,
        isOpen: false,
        openTime: "",
        closeTime: "",
        displayHours: "Closed",
      },
      {
        dayName: "Monday",
        dayIndex: 1,
        isOpen: false,
        openTime: "",
        closeTime: "",
        displayHours: "Closed",
      },
      {
        dayName: "Tuesday",
        dayIndex: 2,
        isOpen: true,
        openTime: "08:00",
        closeTime: "15:30",
        displayHours: "8:00 AM – 3:30 PM",
      },
      {
        dayName: "Wednesday",
        dayIndex: 3,
        isOpen: true,
        openTime: "08:00",
        closeTime: "15:30",
        displayHours: "8:00 AM – 3:30 PM",
      },
      {
        dayName: "Thursday",
        dayIndex: 4,
        isOpen: true,
        openTime: "08:00",
        closeTime: "15:30",
        displayHours: "8:00 AM – 3:30 PM",
      },
      {
        dayName: "Friday",
        dayIndex: 5,
        isOpen: true,
        openTime: "08:00",
        closeTime: "15:30",
        displayHours: "8:00 AM – 3:30 PM",
      },
      {
        dayName: "Saturday",
        dayIndex: 6,
        isOpen: true,
        openTime: "08:00",
        closeTime: "15:30",
        displayHours: "8:00 AM – 3:30 PM",
      },
    ],
    note: "Hours subject to seasonal changes. Call ahead for holiday hours.",
  },
  coordinates: {
    lat: 51.0756416,
    lng: -114.0713015,
  },
  features: [
    "Family-owned",
    "West-facing summer patio",
    "Generous diner portions",
    "Homestyle Canadian classics",
  ],
  disclaimer:
    "This is an independent modern website presentation crafted for John & Wendy Ly. All rights, trademarks, and heritage belong to John's Breakfast & Lunch.",
};

/**
 * Calculates current real-time open status based on Calgary local time (America/Edmonton)
 */
export function getLiveBusinessStatus(date = new Date()): {
  isOpen: boolean;
  statusBadge: string;
  details: string;
} {
  try {
    // Format to Calgary local time
    const calgaryTimeStr = date.toLocaleTimeString("en-US", {
      timeZone: "America/Edmonton",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    const calgaryDay = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Edmonton",
      weekday: "long",
    }).format(date) as DaySchedule["dayName"];

    const todaySchedule = RESTAURANT_DATA.hours.schedule.find(
      (s) => s.dayName === calgaryDay
    );

    if (!todaySchedule || !todaySchedule.isOpen) {
      return {
        isOpen: false,
        statusBadge: "Closed Today",
        details: "Opens Tuesday at 8:00 AM",
      };
    }

    const [currentHour, currentMinute] = calgaryTimeStr.split(":").map(Number);
    const currentMins = currentHour * 60 + currentMinute;

    const [openH, openM] = todaySchedule.openTime.split(":").map(Number);
    const [closeH, closeM] = todaySchedule.closeTime.split(":").map(Number);

    const openMins = openH * 60 + openM;
    const closeMins = closeH * 60 + closeM;

    if (currentMins >= openMins && currentMins < closeMins) {
      return {
        isOpen: true,
        statusBadge: "Open Now",
        details: `Open until 3:30 PM today`,
      };
    } else if (currentMins < openMins) {
      return {
        isOpen: false,
        statusBadge: "Opens at 8:00 AM",
        details: `Serving breakfast today starting at 8:00 AM`,
      };
    } else {
      return {
        isOpen: false,
        statusBadge: "Closed for the Day",
        details: "Re-opens tomorrow morning at 8:00 AM",
      };
    }
  } catch {
    return {
      isOpen: false,
      statusBadge: "Hours: 8:00 AM – 3:30 PM",
      details: "Tue–Sat 8:00 AM – 3:30 PM · Sun & Mon Closed",
    };
  }
}

export default RESTAURANT_DATA;
