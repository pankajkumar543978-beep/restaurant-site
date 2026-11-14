"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "johns_diner_favorites";
const EVENT_KEY = "johns_favorites_updated";

export function getStoredFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveStoredFavorites(ids: string[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    window.dispatchEvent(new Event(EVENT_KEY));
  } catch (err) {
    console.error("Failed to save favorites:", err);
  }
}

export function toggleStoredFavorite(id: string): string[] {
  const current = getStoredFavorites();
  const exists = current.includes(id);
  const updated = exists ? current.filter((item) => item !== id) : [...current, id];
  saveStoredFavorites(updated);
  return updated;
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setFavorites(getStoredFavorites());
    setIsLoaded(true);

    const handleUpdate = () => {
      setFavorites(getStoredFavorites());
    };

    window.addEventListener(EVENT_KEY, handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener(EVENT_KEY, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const toggle = (id: string) => {
    return toggleStoredFavorite(id);
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return { favorites, toggle, isFavorite, isLoaded, count: favorites.length };
}

