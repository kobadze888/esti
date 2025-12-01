// File: src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, Zap, Phone, ShieldCheck, ArrowRight, PhoneCall, Smile } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { db, CATEGORIES } from '@/lib/mockDb';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans text-slate-800">
      <Navbar />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <div className="relative bg-slate-900 text-white pt-40 pb-64 px-4 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image 
                  src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2000&auto=format&fit=crop" 
                  alt="Background" 
                  fill 
                  className="object-cover opacity-40"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
                
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 hover:bg-white/10 transition-all cursor-default shadow-lg">
                    <span className="font-bold text-white tracking-wide text-base">Esti.ge</span>
                    <span className="w-px h-4 bg-white/20"></span>
                    <span className="text-sm font-medium text-slate-300 tracking-wide">სილამაზის სერვისების ერთიანი სივრცე</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight drop-shadow-lg">
                    შენი სტილი, <br className="md:hidden" />
                    <span className="text-indigo-300">შენი დრო</span>
                </h1>
                
                <p className="text-slate-200 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
                    იპოვე საუკეთესო სალონები და ესთეტიკური ცენტრები.<br className="hidden md:block"/> 
                    <span className="font-medium text-white">დაუკავშირდი ან დაჯავშნე ონლაინ.</span>
                </p>
                
                {/* SPLIT SEARCH BAR */}
                <div className="bg-white p-2 rounded-2xl max-w-4xl mx-auto shadow-2xl shadow-black/30 flex flex-col md:flex-row gap-2 transform transition-all hover:scale-[1.01]">
                    
                    <div className="flex-1 flex items-center px-4 h-16 bg-slate-50 rounded-xl border border-transparent hover:bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all cursor-text group">
                        <Search className="text-slate-400 w-5 h-5 mr-3 group-hover:text-blue-600 transition-colors" />
                        <div className="flex flex-col items-start justify-center w-full">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5 cursor-pointer">რას ეძებ?</label>
                            <input type="text" placeholder="სალონი, სტილისტი ან სერვისი" className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm font-bold h-5" />
                        </div>
                    </div>

                    <div className="hidden md:block w-px bg-slate-200 my-2"></div>

                    <div className="flex-1 flex items-center px-4 h-16 bg-slate-50 rounded-xl border border-transparent hover:bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all cursor-text group">
                        <MapPin className="text-slate-400 w-5 h-5 mr-3 group-hover:text-blue-600 transition-colors" />
                        <div className="flex flex-col items-start justify-center w-full">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5 cursor-pointer">სად?</label>
                            <input type="text" placeholder="უბანი ან მისამართი" className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400 text-sm font-bold h-5" />
                        </div>
                    </div>

                    <Link href="/search" className="bg-blue-600 hover:bg-blue-700 text-white h-16 px-8 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-95 md:w-auto w-full mt-2 md:mt-0">
                        <Search size={20} />
                        <span>ძებნა</span>
                    </Link>
                </div>
                
                <div className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm md:text-base text-slate-300 font-medium opacity-90">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default hover:text-white">
                        <Zap size={16} className="text-blue-400" /> ონლაინ ჯავშანი
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default hover:text-white">
                        <Phone size={16} className="text-blue-400" /> სატელეფონო ჯავშანი
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default hover:text-white">
                        <ShieldCheck size={16} className="text-blue-400" /> გადახდა ადგილზე
                    </span>
                </div>
            </div>
        </div>

        {/* CATEGORIES */}
        <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 pb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up">
                {CATEGORIES.map((cat, idx) => (
                    <Link href="/search" key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-1 transition duration-300 transform-gpu hardware-accelerated ease-out cursor-pointer text-center group">
                        <div className={`w-16 h-16 ${cat.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl transition-colors duration-300 shadow-inner`}>
                            {cat.i}
                        </div>
                        <h3 className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{cat.n}</h3>
                    </Link>
                ))}
            </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="bg-white py-20 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">როგორ მუშაობს?</h2>
                    <p className="text-slate-500 max-w-lg mx-auto">მარტივი პროცესი, რომელიც ზოგავს თქვენს დროს და ენერგიას.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10"></div>
                    
                    <div className="text-center group">
                        <div className="w-24 h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/5 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300 relative z-10">
                            <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
                                <Search size={32} />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold border-4 border-white">1</div>
                        </div>
                        <h3 class="font-bold text-xl text-slate-900 mb-2">მოძებნე სალონი</h3>
                        <p class="text-slate-500 text-sm leading-relaxed px-8">გამოიყენე ფილტრები და იპოვე საუკეთესო სპეციალისტი შენს უბანში.</p>
                    </div>
                    
                    <div className="text-center group">
                        <div className="w-24 h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/5 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300 relative z-10">
                            <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
                                <PhoneCall size={32} />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold border-4 border-white">2</div>
                        </div>
                        <h3 class="font-bold text-xl text-slate-900 mb-2">დაუკავშირდი</h3>
                        <p class="text-slate-500 text-sm leading-relaxed px-8">დარეკე პირდაპირ ან დაჯავშნე ონლაინ თუ სალონს აქვს ეს ფუნქცია.</p>
                    </div>
                    
                    <div className="text-center group">
                        <div className="w-24 h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/5 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300 relative z-10">
                            <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
                                <Smile size={32} />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold border-4 border-white">3</div>
                        </div>
                        <h3 class="font-bold text-xl text-slate-900 mb-2">ეწვიე და ისიამოვნე</h3>
                        <p class="text-slate-500 text-sm leading-relaxed px-8">მიიღე საუკეთესო მომსახურება რიგში დგომის გარეშე.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* FEATURED SALONS */}
        <div className="max-w-7xl mx-auto px-4 py-24">
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
                {db.salons.map(salon => (
                    <Link href={`/salon/${salon.id}`} key={salon.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition duration-300 transform-gpu hardware-accelerated cursor-pointer border border-slate-100 group relative block">
                        <div className="h-56 overflow-hidden relative bg-slate-200">
                            <Image 
                                src={salon.image} 
                                alt={salon.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                            
                            {salon.tier === 'premium' ? (
                                <div className="absolute top-4 left-4 bg-blue-600 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-lg flex items-center gap-1">
                                    <Zap size={12} fill="white" /> ონლაინ ჯავშანი
                                </div>
                            ) : (
                                <div className="absolute top-4 left-4 bg-slate-800 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-lg flex items-center gap-1">
                                    <Phone size={12} /> მხოლოდ ზარები
                                </div>
                            )}

                            <div className="absolute bottom-4 left-4 text-white">
                                <div className="flex gap-2 mb-1">
                                    {salon.categories.map((c, i) => (
                                        <span key={i} className="bg-black/30 backdrop-blur px-2 py-0.5 rounded text-[10px] font-medium uppercase border border-white/20">{c}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{salon.name}</h3>
                            <p className="text-slate-500 text-sm mb-4 flex items-center gap-1.5">
                                <MapPin size={14} className="text-slate-400" /> {salon.address}
                            </p>
                            <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                                <span className="text-xs text-slate-400">დეტალების ნახვა</span>
                                <span className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 ${salon.tier === 'premium' ? 'text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white' : 'text-slate-600 bg-slate-100 group-hover:bg-slate-200'}`}>
                                    {salon.tier === 'premium' ? 'დაჯავშნა' : 'ნახვა'} 
                                    {salon.tier === 'premium' && <ArrowRight size={12} />}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

        {/* BUSINESS CTA */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
            <div className="bg-slate-900 rounded-3xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                
                <div className="grid md:grid-cols-2 items-center p-8 md:p-16 relative z-10">
                    <div className="text-white space-y-6">
                        <span className="bg-white/10 text-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase border border-white/10">პარტნიორებისთვის</span>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">მართე შენი სალონი <br/> თანამედროვე სტანდარტებით</h2>
                        <p class="text-slate-300 max-w-md">დაგეგმე ვიზიტები, მართე თანამშრომლები და გაზარდე შემოსავალი EasyBook CRM-ის დახმარებით.</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link href="/business" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/50 text-center">დაარეგისტრირე სალონი</Link>
                            <button className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl font-bold transition-all">გაიგე მეტი</button>
                        </div>
                    </div>
                    <div className="hidden md:block relative h-64">
                        {/* Abstract Dashboard Mockup */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-8 bg-white/20 rounded w-3/4"></div>
                                <div className="h-24 bg-white/10 rounded w-full"></div>
                                <div className="h-24 bg-white/10 rounded w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
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