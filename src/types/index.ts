// File: src/types/index.ts

// ძირითადი ინტერფეისები აპლიკაციისთვის

export type SalonTier = 'free' | 'premium';

export interface Salon {
  id: number;
  name: string;
  tier: SalonTier;
  address: string;
  image: string;
  categories: string[];
  description: string;
  rating?: number;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  icon: string;
  themeClass: string; // Tailwind კლასები სტილიზაციისთვის
}