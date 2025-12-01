// File: src/components/features/SalonCard.tsx
import Image from 'next/image';
import { MapPin, Zap, Phone, ArrowRight } from 'lucide-react';
import { Salon } from '@/types';

interface SalonCardProps {
  salon: Salon;
}

export function SalonCard({ salon }: SalonCardProps) {
  const isPremium = salon.tier === 'premium';

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition duration-300 border border-slate-100 group relative cursor-pointer flex flex-col h-full">
        {/* სურათის სექცია */}
        <div className="h-56 overflow-hidden relative bg-slate-200">
            <Image 
                src={salon.image} 
                alt={salon.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* გრადიენტი ტექსტის კითხვისთვის */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            
            {/* სტატუსის ბეჯი */}
            {isPremium ? (
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-lg flex items-center gap-1">
                    <Zap size={12} fill="white" /> ონლაინ ჯავშანი
                </div>
            ) : (
                <div className="absolute top-4 left-4 bg-slate-800 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-lg flex items-center gap-1">
                    <Phone size={12} /> მხოლოდ ზარები
                </div>
            )}
        </div>

        {/* ინფორმაციის სექცია */}
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {salon.name}
            </h3>
            <p className="text-slate-500 text-sm mb-4 flex items-center gap-1.5">
                <MapPin size={14} className="text-slate-400" /> {salon.address}
            </p>
            
            <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">
                {salon.description}
            </p>

            <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
                <span className="text-xs text-slate-400">დეტალების ნახვა</span>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 ${isPremium ? 'text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white' : 'text-slate-600 bg-slate-100 group-hover:bg-slate-200'}`}>
                    {isPremium ? 'დაჯავშნა' : 'ნახვა'} 
                    {isPremium && <ArrowRight size={12} />}
                </span>
            </div>
        </div>
    </div>
  );
}