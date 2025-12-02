import Link from 'next/link';

export function Footer() {
  return (
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
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-rose-600 hover:text-white transition-colors cursor-pointer">
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
  );
}