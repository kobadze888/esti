// File: src/components/features/SearchFilters.tsx
'use client';

import { useState } from 'react';
import { CATEGORIES } from '@/lib/constants';

export function SearchFilters() {
  const [priceRange, setPriceRange] = useState(50);

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24 h-fit">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-slate-900">ფილტრები</h3>
        <button className="text-xs text-blue-600 hover:underline">გასუფთავება</button>
      </div>

      {/* კატეგორიები */}
      <div className="mb-8">
        <h4 className="font-bold text-sm text-slate-700 mb-3">კატეგორია</h4>
        <div className="space-y-2.5">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300" defaultChecked />
            <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">ყველა</span>
          </label>
          {CATEGORIES.map((cat) => (
            <label key={cat.slug} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300" />
              <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ფასის სლაიდერი */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
            <h4 className="font-bold text-sm text-slate-700">ფასი</h4>
            <span className="text-xs text-slate-500 font-medium">{priceRange}₾-მდე</span>
        </div>
        <input 
            type="range" 
            min="10" 
            max="200" 
            step="10"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" 
        />
        <div className="flex justify-between mt-2 text-[10px] text-slate-400">
            <span>10₾</span>
            <span>200₾+</span>
        </div>
      </div>

      {/* უბნები */}
      <div>
        <h4 className="font-bold text-sm text-slate-700 mb-3">უბანი</h4>
        <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none">
            <option>ყველა უბანი</option>
            <option>ვაკე</option>
            <option>საბურთალო</option>
            <option>მთაწმინდა</option>
            <option>გლდანი</option>
        </select>
      </div>
    </div>
  );
}