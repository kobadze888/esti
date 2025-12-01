// File: src/app/admin/page.tsx
import { CalendarDays, Wallet, MessageSquare, Plus, MoreHorizontal } from 'lucide-react';

export default function AdminDashboard() {
  // Mock Stats
  const stats = [
    { title: "დღეს ჯავშნები", value: "8", icon: CalendarDays, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "შემოსავალი", value: "320₾", icon: Wallet, color: "text-green-600", bg: "bg-green-50" },
    { title: "SMS ბალანსი", value: "450", icon: MessageSquare, color: "text-orange-600", bg: "bg-orange-50" },
  ];

  // Mock Bookings
  const bookings = [
    { time: "10:00", client: "ანა მ.", service: "თმის შეჭრა", staff: "ნინო", status: "confirmed", price: "50₾" },
    { time: "11:30", client: "გიორგი კ.", service: "წვერის კორექცია", staff: "დავითი", status: "pending", price: "35₾" },
    { time: "14:00", client: "მარიამ ს.", service: "მანიკური", staff: "ელენე", status: "confirmed", price: "45₾" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
        
        <header className="flex justify-between items-center mb-8">
            <div>
                <h2 className="text-2xl font-bold text-slate-800">დილა მშვიდობისა, გიორგი! 👋</h2>
                <p className="text-slate-500 text-sm mt-1">აქ არის თქვენი სალონის დღევანდელი მიმოხილვა.</p>
            </div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95">
                <Plus size={18} /> ჯავშნის დამატება
            </button>
        </header>

        {/* სტატისტიკა */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        {i === 0 && <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">+12%</span>}
                    </div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wide">{stat.title}</p>
                    <p className="text-3xl font-black text-slate-900 mt-1">{stat.value}</p>
                </div>
            ))}
        </div>

        {/* ცხრილი */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-bold text-lg text-slate-800">ბოლო ჯავშნები</h3>
                <button className="text-sm text-blue-600 font-bold hover:underline">ყველას ნახვა</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold tracking-wider">
                        <tr>
                            <th className="p-5 pl-6">დრო</th>
                            <th className="p-5">კლიენტი</th>
                            <th className="p-5">სერვისი</th>
                            <th className="p-5">სპეციალისტი</th>
                            <th className="p-5">ფასი</th>
                            <th className="p-5">სტატუსი</th>
                            <th className="p-5 text-right pr-6">მოქმედება</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {bookings.map((b, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                                <td className="p-5 pl-6 font-bold text-slate-700">{b.time}</td>
                                <td className="p-5 font-medium text-slate-900">{b.client}</td>
                                <td className="p-5 text-slate-600">{b.service}</td>
                                <td className="p-5 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold border border-slate-200 text-slate-500">
                                        {b.staff[0]}
                                    </div>
                                    <span className="text-slate-700">{b.staff}</span>
                                </td>
                                <td className="p-5 font-bold text-slate-700">{b.price}</td>
                                <td className="p-5">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
                                        b.status === 'confirmed' 
                                            ? 'bg-green-50 text-green-700 border-green-100' 
                                            : 'bg-amber-50 text-amber-700 border-amber-100'
                                    }`}>
                                        {b.status === 'confirmed' ? 'დადასტურებული' : 'მოლოდინში'}
                                    </span>
                                </td>
                                <td className="p-5 text-right pr-6">
                                    <button className="text-slate-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}