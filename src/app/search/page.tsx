// File: src/app/search/page.tsx
import { Navbar } from '@/components/layout/Navbar';
import { SalonCard } from '@/components/features/SalonCard';
import { SearchFilters } from '@/components/features/SearchFilters';
import { MOCK_SALONS } from '@/lib/constants';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function SearchPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* სათაური და ნავიგაცია */}
        <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                <a href="/" className="hover:text-blue-600">მთავარი</a>
                <span>/</span>
                <span className="text-slate-900 font-medium">ძიება</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900">სალონები თბილისში</h1>
            <p className="text-slate-500 mt-1">ნაპოვნია {MOCK_SALONS.length} შედეგი</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
            
            {/* ფილტრები (დესკტოპი) */}
            <div className="hidden lg:block col-span-1">
                <SearchFilters />
            </div>

            {/* ფილტრის ღილაკი (მობილური) */}
            <div className="lg:hidden col-span-4 mb-4">
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 p-3 rounded-xl font-bold text-slate-700 shadow-sm">
                    <SlidersHorizontal size={18} />
                    ფილტრები
                </button>
            </div>

            {/* შედეგები */}
            <div className="col-span-4 lg:col-span-3">
                
                {/* სწრაფი ძიება */}
                <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm mb-6 flex items-center focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <Search className="text-slate-400 w-5 h-5 ml-3" />
                    <input 
                        type="text" 
                        placeholder="ძიება სახელით..." 
                        className="w-full p-3 bg-transparent outline-none text-sm font-medium text-slate-700 placeholder-slate-400"
                    />
                </div>

                {/* ბარათების ბადე */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {MOCK_SALONS.map((salon) => (
                        <SalonCard key={salon.id} salon={salon} />
                    ))}
                    {/* დემო მონაცემების დუბლირება შესავსებად */}
                    {MOCK_SALONS.map((salon) => (
                        <SalonCard key={`${salon.id}-copy`} salon={{...salon, id: 999 + salon.id}} />
                    ))}
                </div>

                {/* გვერდების გადართვა */}
                <div className="mt-12 flex justify-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold shadow-md">1</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium transition-colors">2</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium transition-colors">3</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}