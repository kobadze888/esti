// File: src/lib/constants.ts
import { Salon, ServiceCategory } from "@/types";

export const CATEGORIES: ServiceCategory[] = [
  {
    name: 'თმა',
    slug: 'hair',
    icon: '💇‍♀️',
    themeClass: 'bg-orange-50 text-orange-600 group-hover:bg-orange-100 group-hover:text-orange-700'
  },
  {
    name: 'ფრჩხილი',
    slug: 'nails',
    icon: '💅',
    themeClass: 'bg-pink-50 text-pink-600 group-hover:bg-pink-100 group-hover:text-pink-700'
  },
  {
    name: 'მაკიაჟი',
    slug: 'makeup',
    icon: '💄',
    themeClass: 'bg-red-50 text-red-600 group-hover:bg-red-100 group-hover:text-red-700'
  },
  {
    name: 'ბარბერშოპი',
    slug: 'barber',
    icon: '🧔',
    themeClass: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700'
  }
];

export const MOCK_SALONS: Salon[] = [
  { 
      id: 1, 
      name: "Beauty Corner Vake", 
      tier: "premium", 
      address: "ჭავჭავაძის 32", 
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80", 
      categories: ["hair", "nails"], 
      description: "პრემიუმ კლასის სალონი ვაკეში. საუკეთესო სტილისტები და სასიამოვნო გარემო." 
  },
  { 
      id: 2, 
      name: "Barber House", 
      tier: "premium", 
      address: "პეკინის 14", 
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80", 
      categories: ["barber"], 
      description: "ნამდვილი მამაკაცური ატმოსფერო. წვერის და თმის მოვლა პროფესიონალებთან." 
  },
  { 
      id: 3, 
      name: "Lotus Spa", 
      tier: "free", 
      address: "აბაშიძის 10", 
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", 
      categories: ["spa", "massage"], 
      description: "დასვენება და რელაქსაცია ქალაქის ცენტრში. (მხოლოდ სატელეფონო ჯავშნები)" 
  }
];