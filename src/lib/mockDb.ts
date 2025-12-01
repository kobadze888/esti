// File: src/lib/mockDb.ts

export const db = {
    salons: [
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
    ],
    staff: [
        { id: 101, salonId: 1, name: "ნინო კ.", role: "Top Stylist", avatar: "👩‍🦰", services: [201, 202] },
        { id: 102, salonId: 1, name: "მარიამ ს.", role: "Nail Artist", avatar: "👩", services: [203] },
        { id: 103, salonId: 2, name: "გიორგი ბ.", role: "Senior Barber", avatar: "🧔", services: [204, 205] }
    ],
    services: [
        { id: 201, name: "ქალის თმის შეჭრა", price: 50, duration: 60, category: "hair" },
        { id: 202, name: "თმის შეღებვა", price: 150, duration: 120, category: "hair" },
        { id: 203, name: "შილაკი", price: 40, duration: 45, category: "nails" },
        { id: 204, name: "კაცის შეჭრა", price: 35, duration: 45, category: "barber" },
        { id: 205, name: "წვერის კორექცია", price: 25, duration: 30, category: "barber" }
    ],
    bookings: [
        { id: 901, salonId: 1, staffId: 101, serviceId: 201, date: "2025-11-29", time: "10:00", client: "ანა მ.", status: "confirmed" },
        { id: 902, salonId: 2, staffId: 103, serviceId: 204, date: "2025-11-29", time: "14:00", client: "დავით გ.", status: "pending" }
    ]
};

export const CATEGORIES = [
    {n: 'თმა', i: '💇‍♀️', slug: 'hair', bg: 'bg-orange-50 text-orange-600 group-hover:bg-orange-100 group-hover:text-orange-700'}, 
    {n: 'ფრჩხილი', i: '💅', slug: 'nails', bg: 'bg-pink-50 text-pink-600 group-hover:bg-pink-100 group-hover:text-pink-700'}, 
    {n: 'მაკიაჟი', i: '💄', slug: 'makeup', bg: 'bg-red-50 text-red-600 group-hover:bg-red-100 group-hover:text-red-700'}, 
    {n: 'ბარბერშოპი', i: '🧔', slug: 'barber', bg: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700'}
];