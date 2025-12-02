import Link from 'next/link';
import { CATEGORIES } from '@/lib/mockDb';

export function CategoriesSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 relative z-10 -mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, idx) => (
                <Link href="/search" key={idx} className="group bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center hardware-accelerated">
                    <div className={`w-20 h-20 ${cat.bg} rounded-2xl flex items-center justify-center mb-6 text-4xl shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                        {cat.i}
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors mb-2">{cat.n}</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider bg-slate-50 px-3 py-1 rounded-full">120+ ობიექტი</p>
                </Link>
            ))}
        </div>
    </section>
  );
}