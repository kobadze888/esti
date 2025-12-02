'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, User, LogIn } from 'lucide-react';
import { Logo } from '@/components/ui/Logo'; // [!code ++] იმპორტი

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm h-20' 
            : 'bg-transparent h-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          
          {/* Brand Identity */}
          <Link href="/" className="relative z-50 group flex items-center gap-1">
            {/* [!code ++] აქ ვიყენებთ ახალ Logo კომპონენტს */}
            <Logo 
              className={isScrolled || mobileMenuOpen ? 'text-slate-900' : 'text-white'} 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['სალონები', 'სერვისები', 'აქციები'].map((item) => (
              <Link 
                key={item} 
                href="/search" 
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-500 ${
                  isScrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
              </Link>
            ))}
            
            <div className={`h-4 w-px transition-colors duration-300 ${isScrolled ? 'bg-slate-300' : 'bg-white/30'}`}></div>

            <Link 
              href="/business" 
              className={`text-sm font-medium transition-colors duration-300 ${
                 isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
              }`}
            >
              ბიზნესისთვის
            </Link>

            <button className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              isScrolled 
                ? 'bg-slate-900 text-white hover:bg-slate-800' 
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}>
              <User size={16} />
              შესვლა
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-colors duration-300 z-50 ${
              (isScrolled || mobileMenuOpen) ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-28 px-6 md:hidden animate-in slide-in-from-top-5 duration-300">
           <nav className="flex flex-col gap-6 text-xl font-medium text-slate-800">
              <Link href="/search" onClick={() => setMobileMenuOpen(false)} className="flex justify-between items-center border-b border-slate-100 pb-4">
                სალონები <span className="text-slate-400">→</span>
              </Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="flex justify-between items-center border-b border-slate-100 pb-4">
                სერვისები <span className="text-slate-400">→</span>
              </Link>
              <Link href="/business" onClick={() => setMobileMenuOpen(false)} className="flex justify-between items-center border-b border-slate-100 pb-4 text-blue-600">
                ბიზნესისთვის <span className="text-blue-300">→</span>
              </Link>
              
              <button className="bg-slate-900 text-white py-4 rounded-xl font-bold mt-8 flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-transform">
                <LogIn size={20} />
                ავტორიზაცია
              </button>
           </nav>
        </div>
      )}
    </>
  );
}