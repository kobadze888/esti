// File: src/components/layout/Navbar.tsx
'use client';

import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-xl border-b border-slate-200/80 sticky top-0 z-50 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative z-50">
          
          {/* ლოგო */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
              <span className="font-bold text-2xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  Esti<span className="text-blue-600 text-3xl leading-none">.</span>
              </span>
          </Link>

          {/* დესკტოპ მენიუ */}
          <div className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-600">
              <Link href="/search" className="hover:text-blue-600 cursor-pointer transition-colors px-3 py-2 rounded-lg hover:bg-slate-50">
                სალონები
              </Link>
              <Link href="/about" className="hover:text-blue-600 cursor-pointer transition-colors px-3 py-2 rounded-lg hover:bg-slate-50">
                როგორ მუშაობს
              </Link>
              
              <div className="h-6 w-px bg-slate-200 mx-2"></div>
              
              <Link href="/business" className="border border-slate-300 text-slate-600 px-5 py-2.5 rounded-full font-bold transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 flex items-center gap-2">
                  ბიზნესისთვის
              </Link>
              
              <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 active:scale-95 font-bold flex items-center gap-2">
                 <User size={18} />
                  შესვლა
              </button>
          </div>

          {/* მობილური მენიუს ღილაკი */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 p-3 hover:bg-slate-100 rounded-full transition-colors"
          >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
      </div>

      {/* მობილური მენიუს ჩამოსაშლელი */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl md:hidden p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
            <Link href="/search" className="flex items-center gap-3 text-slate-600 font-medium p-3 hover:bg-slate-50 rounded-xl">
                <Search size={20} className="text-blue-500"/> სალონები
            </Link>
            <button className="bg-slate-900 text-white w-full py-3.5 rounded-xl font-bold">
                შესვლა
            </button>
        </div>
      )}
    </nav>
  );
}