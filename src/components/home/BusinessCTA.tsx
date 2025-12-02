import Link from 'next/link';

export function BusinessCTA() {
  return (
    <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-slate-900/20">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center p-12 md:p-24 relative z-10">
                <div className="space-y-8">
                    <div className="inline-block">
                        <span className="bg-white/10 backdrop-blur text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">ბიზნესისთვის</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        დაარეგისტრირე სალონი <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400">სრულიად უფასოდ</span>
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
                
                {/* 3D Card Effect Visual */}
                <div className="hidden md:block relative h-80 w-full perspective-1000">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl rotate-y-12 transform transition-transform hover:rotate-y-0 duration-700">
                        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
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
  );
}