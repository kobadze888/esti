import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, Calendar, ArrowRight, Star, Heart, Phone, Zap, Info } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { db, CATEGORIES } from '@/lib/mockDb';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-grow">
        
       {/* --- HERO SECTION --- */}
<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
    
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
        <Image 
          src="https://tbilisiweb.com/wp-content/uploads/2025/12/bg_hero_small.jpeg" 
          alt="Esti.ge Salon Interior" 
          fill 
          className="object-cover"
          priority 
          quality={100}
          unoptimized 
          sizes="100vw"
        />
        {/* Updated Overlay: 
            - ამოღებულია indigo (ლურჯი), რომ არ იყოს "მყვირალა".
            - Opacity გაზრდილია 90-95%-მდე მაქსიმალური კონტრასისთვის.
            - გამოყენებულია bg-gradient-to-b (ზემოდან ქვემოთ), რომ ძირში შავში გადავიდეს.
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/90 to-slate-950/95"></div>
    </div>

    {/* Hero Content */}
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center mt-10">
        
        {/* Badge - ოდნავ გავამუქე ფონიც */}
        <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 mb-8 cursor-default">
            <span className="text-white text-xs md:text-sm tracking-wide">
                <span className="font-bold">Esti.ge</span>
                <span className="mx-2 opacity-50">|</span>
                <span className="font-medium opacity-80">სილამაზის სერვისების ერთიანი სივრცე</span>
            </span>
        </div>

        {/* H1 Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl animate-fade-in-up">
            ჩაეწერე მარტივად
        </h1>
        
        {/* Subtitle - ტექსტის ფერი slate-300-დან slate-200-ზე ავწიე რომ უკეთ გამოჩნდეს მუქ ფონზე */}
        <p className="text-base md:text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            იპოვე საუკეთესო სალონები, ბარბერშოპები და ესთეტიკური ცენტრები შენს უბანში.
        </p>

        {/* Search Bar */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl md:rounded-full max-w-4xl mx-auto shadow-2xl flex flex-col md:flex-row gap-2 animate-fade-in-up transform transition-all hover:scale-[1.005] hover:border-white/20 hover:bg-white/10" style={{ animationDelay: '0.2s' }}>
            
            {/* Query Input */}
            <div className="flex-1 bg-white rounded-xl md:rounded-l-full md:rounded-r-none h-14 md:h-16 px-6 flex items-center group cursor-text transition-colors hover:bg-slate-50 relative z-20">
                <Search className="text-slate-400 group-hover:text-indigo-600 transition-colors w-5 h-5 mr-3" />
                <div className="flex flex-col items-start w-full">
                    <label htmlFor="search-query" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5 cursor-pointer">რას ეძებ?</label>
                    <input 
                      id="search-query"
                      type="text" 
                      placeholder="მაგ: სალონი, ბარბერშოპი" 
                      className="w-full bg-transparent outline-none text-slate-900 font-bold placeholder:text-slate-400 text-sm md:text-base h-5"
                    />
                </div>
            </div>

            <div className="hidden md:block w-px bg-white/10 my-2"></div>

            {/* Location Input */}
            <div className="flex-1 bg-white rounded-xl md:rounded-none h-14 md:h-16 px-6 flex items-center group cursor-text transition-colors hover:bg-slate-50 relative z-20">
                <MapPin className="text-slate-400 group-hover:text-indigo-600 transition-colors w-5 h-5 mr-3" />
                <div className="flex flex-col items-start w-full">
                    <label htmlFor="search-location" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5 cursor-pointer">ლოკაცია</label>
                    <input 
                      id="search-location"
                      type="text" 
                      placeholder="თბილისი, ვაკე..." 
                      className="w-full bg-transparent outline-none text-slate-900 font-bold placeholder:text-slate-400 text-sm md:text-base h-5"
                    />
                </div>
            </div>

            {/* Date Input */}
            <div className="hidden md:flex flex-1 bg-white rounded-none h-16 px-6 items-center group cursor-pointer hover:bg-slate-50 transition-colors border-l border-slate-100 relative z-20">
                <Calendar className="text-slate-400 group-hover:text-indigo-600 transition-colors w-5 h-5 mr-3" />
                <div className="flex flex-col items-start w-full">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5 cursor-pointer">თარიღი</label>
                    <span className="text-slate-800 text-sm font-bold">ნებისმიერი</span>
                </div>
            </div>

            {/* Search Button */}
            <Link href="/search" className="bg-indigo-600 hover:bg-indigo-700 text-white h-14 md:h-16 px-10 rounded-xl md:rounded-full font-bold text-lg transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 md:w-auto w-full relative z-20">
                <span>ძებნა</span>
            </Link>
        </div>

        {/* Quick Categories */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-medium text-white/70 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/search?q=hair" className="hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm border border-white/5 hover:border-white/20"><span className="opacity-80">✂️</span> თმის შეჭრა</Link>
            <Link href="/search?q=nails" className="hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm border border-white/5 hover:border-white/20"><span className="opacity-80">💅</span> მანიკური</Link>
            <Link href="/search?q=barber" className="hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm border border-white/5 hover:border-white/20"><span className="opacity-80">💈</span> ბარბერშოპი</Link>
            <Link href="/search?q=spa" className="hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm border border-white/5 hover:border-white/20"><span className="opacity-80">💆‍♀️</span> სპა</Link>
        </div>
    </div>
    
</section>

        {/* --- CATEGORIES SECTION --- */}
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

        {/* --- HOW IT WORKS SECTION --- */}
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">მარტივი გზა</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">როგორ მუშაობს Esti?</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">იპოვე სასურველი ობიექტი და დაუკავშირდი შენთვის მოსახერხებელი გზით.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-100 via-blue-100 to-slate-100 -z-0"></div>
                    
                    {/* Step 1 */}
                    <div className="text-center group relative">
                        <div className="w-24 h-24 bg-white border border-slate-100 rounded-2xl rotate-3 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-slate-200/50 group-hover:rotate-6 transition-all duration-300 z-10 relative">
                            <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-xl flex items-center justify-center -rotate-3 group-hover:-rotate-6 transition-all">
                                <Search size={32} strokeWidth={1.5} />
                            </div>
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold border-4 border-white shadow-sm">1</div>
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">მოძებნე ობიექტი</h3>
                        <p className="text-slate-500 leading-relaxed px-4">ნებისმიერი ტიპის სალონი, ბარბერშოპი ან ესთეტიკური ცენტრი შენს უბანში.</p>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="text-center group relative">
                        <div className="w-24 h-24 bg-white border border-slate-100 rounded-2xl -rotate-2 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-slate-200/50 group-hover:-rotate-6 transition-all duration-300 z-10 relative">
                            <div className="bg-purple-50 text-purple-600 w-16 h-16 rounded-xl flex items-center justify-center rotate-2 group-hover:rotate-6 transition-all">
                                <Info size={32} strokeWidth={1.5} />
                            </div>
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold border-4 border-white shadow-sm">2</div>
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">ნახე დეტალები</h3>
                        <p className="text-slate-500 leading-relaxed px-4">გაეცანი ფასებს, ლოკაციას, სამუშაო საათებს და სერვისების ჩამონათვალს.</p>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="text-center group relative">
                        <div className="w-24 h-24 bg-white border border-slate-100 rounded-2xl rotate-2 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-slate-200/50 group-hover:rotate-6 transition-all duration-300 z-10 relative">
                            <div className="bg-green-50 text-green-600 w-16 h-16 rounded-xl flex items-center justify-center -rotate-2 group-hover:-rotate-6 transition-all">
                                <Phone size={32} strokeWidth={1.5} />
                            </div>
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold border-4 border-white shadow-sm">3</div>
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">დაუკავშირდი</h3>
                        <p className="text-slate-500 leading-relaxed px-4">დარეკე პირდაპირ ან დაჯავშნე ვიზიტი ონლაინ (მხოლოდ Premium ობიექტებზე).</p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- FEATURED SALONS SECTION --- */}
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
                    <Link href={`/salon/${salon.id}`} key={salon.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                        
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden bg-slate-200">
                            <Image 
                                src={salon.image} 
                                alt={salon.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80"></div>
                            
                            {/* Top Badges */}
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                {salon.tier === 'premium' ? (
                                    <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide flex items-center gap-1 shadow-lg">
                                        <Zap size={12} fill="currentColor" /> Online Booking
                                    </span>
                                ) : (
                                    <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide shadow-lg">
                                        Info Only
                                    </span>
                                )}
                                <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
                                    <Heart size={18} />
                                </button>
                            </div>

                            {/* Bottom Info on Image */}
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <div className="flex gap-2 mb-2">
                                    {salon.categories.slice(0, 2).map((c, i) => (
                                        <span key={i} className="bg-white/20 backdrop-blur-md border border-white/10 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider">{c}</span>
                                    ))}
                                </div>
                                <h3 className="font-bold text-xl leading-tight mb-1 group-hover:text-blue-200 transition-colors">{salon.name}</h3>
                                <div className="flex items-center gap-4 text-sm text-slate-200">
                                     <span className="flex items-center gap-1"><MapPin size={14} /> {salon.address}</span>
                                </div>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-50">
                                <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                                    <Star size={16} fill="currentColor" />
                                    <span>4.8</span>
                                    <span className="text-slate-400 font-medium text-xs">(120 შეფასება)</span>
                                </div>
                                <div className="text-xs font-bold px-2 py-1 bg-green-50 text-green-700 rounded-md">
                                    ღიაა
                                </div>
                            </div>
                            
                            <p className="text-slate-500 text-sm line-clamp-2 mb-6 flex-grow">
                                {salon.description}
                            </p>

                            <div className="mt-auto flex items-center justify-between pt-2">
                                <div>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase block mb-0.5">ფასი</span>
                                    <span className="text-slate-900 font-bold text-lg">₾25-დან</span>
                                </div>
                                <span className={`text-sm font-bold px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${salon.tier === 'premium' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 group-hover:bg-blue-700' : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'}`}>
                                    {salon.tier === 'premium' ? 'დაჯავშნა' : 'დარეკვა'} 
                                    {salon.tier === 'premium' ? <Calendar size={16} /> : <Phone size={16} />}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>

        {/* --- BUSINESS CTA SECTION --- */}
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-slate-900/20">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center p-12 md:p-24 relative z-10">
                    <div className="space-y-8">
                        <div className="inline-block">
                            <span className="bg-white/10 backdrop-blur text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">ბიზნესისთვის</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            დაარეგისტრირე სალონი <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">სრულიად უფასოდ</span>
                        </h2>
                        <div className="space-y-4 text-slate-300 text-lg max-w-lg leading-relaxed">
                            <p>
                                ✅ <strong>უფასო პაკეტი:</strong> შექმენი ბიზნეს პროფილი, დაამატე ფოტოები, სერვისები და საკონტაქტო ინფორმაცია. იყავი ხელმისაწვდომი ათასობით მომხმარებლისთვის.
                            </p>
                            <p>
                                🚀 <strong>Premium პაკეტი:</strong> ჩართე ონლაინ ჯავშნები, CRM სისტემა, SMS შეტყობინებები და მართე ბიზნესი სმარტფონიდან.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/business" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95">
                                უფასო რეგისტრაცია
                            </Link>
                            <button className="bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95">
                                Premium შესაძლებლობები
                            </button>
                        </div>
                    </div>
                    
                    {/* Abstract UI Representation */}
                    <div className="hidden md:block relative h-80 w-full perspective-1000">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl rotate-y-12 transform transition-transform hover:rotate-y-0 duration-700">
                            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <span className="text-xs text-white/50 font-mono">Business Profile</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                     <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-300">🏪</div>
                                     <div>
                                         <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
                                         <div className="h-2 w-16 bg-white/10 rounded"></div>
                                     </div>
                                </div>
                                <div className="h-20 bg-white/5 rounded-xl w-full mt-6 border border-white/5 p-4 flex items-center justify-center text-white/40 text-sm">
                                    ფოტო გალერეა და სერვისები
                                </div>
                                <div className="flex justify-between gap-2">
                                    <div className="h-8 bg-green-500/20 rounded w-1/2 flex items-center justify-center text-green-300 text-xs">📞 დარეკვა</div>
                                    <div className="h-8 bg-blue-500/20 rounded w-1/2 flex items-center justify-center text-blue-300 text-xs">📅 ჯავშანი (Pro)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="font-bold text-2xl tracking-tighter text-slate-900 mb-6 block">
                        Esti<span className="text-blue-600">.</span>ge
                    </Link>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        სილამაზის სერვისების ერთიანი სივრცე საქართველოში.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                            <span className="font-bold text-xs">FB</span>
                        </div>
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white transition-colors cursor-pointer">
                            <span className="font-bold text-xs">IG</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-wider">კომპანია</h4>
                    <ul className="space-y-4 text-sm text-slate-500 font-medium">
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">ჩვენ შესახებ</li>
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">კონტაქტი</li>
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">ბლოგი</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-wider">მომხმარებლებისთვის</h4>
                    <ul className="space-y-4 text-sm text-slate-500 font-medium">
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">როგორ მუშაობს</li>
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">ხშირად დასმული კითხვები</li>
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">კონფიდენციალობა</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-wider">პარტნიორებისთვის</h4>
                    <ul className="space-y-4 text-sm text-slate-500 font-medium">
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">დაარეგისტრირე სალონი</li>
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">ბიზნეს პაკეტები</li>
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">შესვლა</li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
                <p>© 2025 Esti.ge. ყველა უფლება დაცულია.</p>
                <div className="flex gap-6">
                    <span className="hover:text-slate-600 cursor-pointer">წესები და პირობები</span>
                    <span className="hover:text-slate-600 cursor-pointer">უსაფრთხოება</span>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}