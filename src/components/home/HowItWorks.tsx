import { Search, Info, Phone } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">მარტივი გზა</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">როგორ მუშაობს Esti?</h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">იპოვე სასურველი ობიექტი და დაუკავშირდი შენთვის მოსახერხებელი გზით.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
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
                        <div className="bg-rose-50 text-rose-600 w-16 h-16 rounded-xl flex items-center justify-center rotate-2 group-hover:rotate-6 transition-all">
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
  );
}