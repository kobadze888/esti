// File: src/app/admin/layout.tsx
'use client';

import Link from 'next/link';
import { Calendar, Users, Scissors, Settings, LayoutDashboard, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-slate-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 hidden md:flex">
        <div className="p-6 border-b border-slate-800">
           <Link href="/" className="text-white font-bold text-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Esti Admin
           </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
            <Link href="/admin" className="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-xl font-medium shadow-lg shadow-blue-900/20 transition-all">
                <LayoutDashboard size={20} /> მიმოხილვა
            </Link>
            <a href="#" className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors">
                <Calendar size={20} /> კალენდარი
            </a>
            <a href="#" className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors">
                <Users size={20} /> თანამშრომლები
            </a>
            <a href="#" className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors">
                <Scissors size={20} /> სერვისები
            </a>
            <a href="#" className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors">
                <Settings size={20} /> პარამეტრები
            </a>
        </nav>

        <div className="p-6 border-t border-slate-800">
            <button className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors w-full">
                <LogOut size={20} /> გასვლა
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header placeholder (if needed later) */}
        <main className="flex-1 overflow-auto p-8">
            {children}
        </main>
      </div>

    </div>
  );
}