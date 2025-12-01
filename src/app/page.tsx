// File: src/app/page.tsx
import { Search, MapPin, Zap, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { SalonCard } from '@/components/features/SalonCard';
import { CATEGORIES, MOCK_SALONS } from '@/lib/constants';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans text-slate-800">
      
      <Navbar />

      <main className="flex-grow">
        {/* HERO სექცია */}
        <div className="relative bg-slate-900 text-white pt-32 pb-64 px-4 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                <Image 
                  src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2000&auto=format&fit=crop" 
                  alt="Background" 
                  fill 
                  className="object-cover"
                  priority
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40 z-0"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 shadow-lg animate-in fade-in zoom-in duration-700">
                    <span className="font-bold text-white tracking-wide text-base">Esti.ge</span>
                    <span className="w-px h-4 bg-white/20"></span>
                    <span className="text-sm font-medium text-slate-300 tracking-wide">სილამაზის სერვისების ერთიანი სივრცე</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight drop-shadow-lg animate-in slide-in-from-bottom-5 duration-700 delay-100">
                    შენი სტილი, <br className="md:hidden" />
                    <span className="text-blue-400">შენი დრო</span>
                </h1>
                
                <p className="text-slate-200 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-in slide-in-from-bottom-5 duration-700 delay-200">
                    იპოვე საუკეთესო სალონები და ესთეტიკური ცენტრები.<br className="hidden md:block"/> 
                    <span className="font-medium text-white">დაუკავშირდი ან დაჯავშნე ონლაინ.</span>
                </p>
                
                {/* საძიებო ველები */}
                <div className="bg-white p-2 rounded-2xl max-w-4xl mx-auto shadow-2xl shadow-black/30 flex flex-col md:flex-row gap-2 transform transition-all hover:scale-[1.01] animate-in slide-in-from-bottom-5 duration-700 delay-300">
                    <div className="flex-1 flex items-center px-4 h-16 bg-slate-50 rounded-xl border border-transparent hover:bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all cursor-text group">
                        <Search className="text-slate-400 w-5 h-5 mr-3 group-hover:text-blue-500 transition-colors" />
                        <div className="flex flex-col items-start justify-center w-full">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">რას ეძებ?</label>
                            <input type="text" placeholder="სალონი, სტილისტი ან სერვისი" className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm font-bold h-5" />
                        </div>
                    </div>

                    <div className="hidden md:block w-px bg-slate-200 my-2"></div>

                    <div className="flex-1 flex items-center px-4 h-16 bg-slate-50 rounded-xl border border-transparent hover:bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all cursor-text group">
                        <MapPin className="text-slate-400 w-5 h-5 mr-3 group-hover:text-blue-500 transition-colors" />
                        <div className="flex flex-col items-start justify-center w-full">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">სად?</label>
                            <input type="text" placeholder="უბანი ან მისამართი" className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm font-bold h-5" />
                        </div>
                    </div>

                    <Link href="/search" className="bg-blue-600 hover:bg-blue-700 text-white h-16 px-8 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-95 md:w-auto w-full mt-2 md:mt-0">
                        <Search size={20} />
                        <span>ძებნა</span>
                    </Link>
                </div>
                
                {/* სანდოობის ნიშნები */}
                <div className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm md:text-base text-slate-300 font-medium opacity-90 animate-in fade-in duration-1000 delay-500">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                        <Zap size={16} className="text-blue-400" /> ონლაინ ჯავშანი
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                        <Phone size={16} className="text-blue-400" /> სატელეფონო ჯავშანი
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                        <ShieldCheck size={16} className="text-blue-400" /> გადახდა ადგილზე
                    </span>
                </div>
            </div>
        </div>

        {/* კატეგორიები */}
        <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 pb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {CATEGORIES.map((cat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-1 transition duration-300 cursor-pointer text-center group">
                        <div className={`w-16 h-16 ${cat.themeClass} rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl transition-colors duration-300 shadow-inner`}>
                            {cat.icon}
                        </div>
                        <h3 className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{cat.name}</h3>
                    </div>
                ))}
            </div>
        </div>

        {/* რჩეული სალონები */}
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">პოპულარული სალონები</h2>
                    <p className="text-slate-500 text-sm mt-1">ჩვენი მომხმარებლების რჩეული ადგილები</p>
                </div>
                <Link href="/search" className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1">
                    ყველას ნახვა <ArrowRight size={16} />
                </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {MOCK_SALONS.map((salon) => (
                    <SalonCard key={salon.id} salon={salon} />
                ))}
            </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
            © 2025 Esti. ყველა უფლება დაცულია.
        </div>
      </footer>
    </div>
  );
}