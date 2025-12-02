'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, Calendar } from 'lucide-react';

export function Hero() {
  // --- TYPEWRITER EFFECT LOGIC ---
  const [placeholderText, setPlaceholderText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "სალონი...", "ბარბერშოპი...", "თმის შეჭრა...", 
    "წვერის კორექცია...", "შილაკი...", "სპა ცენტრი..."
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setPlaceholderText(
        isDeleting 
          ? fullText.substring(0, placeholderText.length - 1) 
          : fullText.substring(0, placeholderText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && placeholderText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && placeholderText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [placeholderText, isDeleting, loopNum, typingSpeed, words]);

  return (
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
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/70 to-slate-950/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center mt-10">
          
          {/* Badge */}
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
          
          {/* Subtitle */}
          <p className="text-base md:text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              იპოვე საუკეთესო სალონები, ბარბერშოპები და ესთეტიკური ცენტრები შენს უბანში.
          </p>

          {/* Search Bar Container */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl md:rounded-full max-w-5xl mx-auto shadow-2xl flex flex-col md:flex-row gap-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              
              {/* Query Input */}
              <div className="flex-1 bg-white rounded-xl md:rounded-l-full md:rounded-r-none h-14 md:h-16 px-6 flex items-center group cursor-text transition-colors hover:bg-slate-50 relative z-20">
                  <Search className="text-slate-400 group-hover:text-blue-600 transition-colors w-5 h-5 mr-3" />
                  <div className="flex flex-col items-start w-full">
                      <label htmlFor="search-query" className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5 cursor-pointer">რას ეძებ?</label>
                      <input 
                        id="search-query"
                        type="text" 
                        placeholder={placeholderText} 
                        className="w-full bg-transparent outline-none text-slate-900 font-bold placeholder:text-slate-600 text-sm md:text-base h-5 placeholder:transition-all"
                      />
                  </div>
              </div>

              <div className="hidden md:block w-px bg-white/10 my-2"></div>

              {/* Location Input */}
              <div className="flex-1 bg-white rounded-xl md:rounded-none h-14 md:h-16 px-6 flex items-center group cursor-text transition-colors hover:bg-slate-50 relative z-20">
                  <MapPin className="text-slate-400 group-hover:text-blue-600 transition-colors w-5 h-5 mr-3" />
                  <div className="flex flex-col items-start w-full">
                      <label htmlFor="search-location" className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5 cursor-pointer">ლოკაცია</label>
                      <input 
                        id="search-location"
                        type="text" 
                        placeholder="თბილისი, ვაკე..." 
                        className="w-full bg-transparent outline-none text-slate-900 font-bold placeholder:text-slate-600 text-sm md:text-base h-5"
                      />
                  </div>
              </div>

              {/* Date Input */}
              <div className="hidden md:flex flex-1 bg-white rounded-none h-16 px-6 items-center group cursor-pointer hover:bg-slate-50 transition-colors border-l border-slate-100 relative z-20">
                  <Calendar className="text-slate-400 group-hover:text-blue-600 transition-colors w-5 h-5 mr-3" />
                  <div className="flex flex-col items-start w-full">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5 cursor-pointer">თარიღი</label>
                      <span className="text-slate-800 text-sm font-bold">ნებისმიერი</span>
                  </div>
              </div>

              {/* Search Button */}
              <Link href="/search" className="bg-blue-600 hover:bg-blue-700 text-white h-14 md:h-16 px-10 rounded-xl md:rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 md:w-auto w-full relative z-20">
                  <Search className="w-5 h-5" />
                  <span>ძებნა</span>
              </Link>
          </div>

          {/* Quick Categories */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-medium text-white/70 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link href="/search?q=hair" className="hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm border border-white/5 hover:border-white/20"><span className="opacity-80">✂️</span> თმის შეჭრა</Link>
              <Link href="/search?q=barber" className="hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm border border-white/5 hover:border-white/20"><span className="opacity-80">💈</span> ბარბერშოპი</Link>
              <Link href="/search?q=beard" className="hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm border border-white/5 hover:border-white/20"><span className="opacity-80">🧔</span> წვერის კორექცია</Link>
              <Link href="/search?q=nails" className="hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm border border-white/5 hover:border-white/20"><span className="opacity-80">💅</span> მანიკური</Link>
              <Link href="/search?q=shellac" className="hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm border border-white/5 hover:border-white/20"><span className="opacity-80">🎨</span> შილაკი</Link>
              <Link href="/search?q=spa" className="hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm border border-white/5 hover:border-white/20"><span className="opacity-80">💆‍♀️</span> სპა</Link>
          </div>
      </div>
    </section>
  );
}