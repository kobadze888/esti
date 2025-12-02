import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SalonCard } from '@/components/features/SalonCard';
import { db } from '@/lib/mockDb';

export function FeaturedSalons() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">ბოლო დამატებული</h2>
                <p className="text-slate-500">ახალი ობიექტები ჩვენს ბაზაში</p>
            </div>
            <Link href="/search" className="group text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-xl transition-all hover:bg-blue-100">
                ყველას ნახვა 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {db.salons.map((salon) => (
                <Link href={`/salon/${salon.id}`} key={salon.id} className="h-full">
                   <SalonCard salon={salon} />
                </Link>
            ))}
        </div>
    </section>
  );
}