// File: src/app/salon/[id]/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { MapPin, Zap, Phone, Users, Sparkles, Info, Clock, Check, X } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { db } from '@/lib/mockDb';

export default function SalonPage() {
  const params = useParams();
  const id = Number(params.id);
  
  const salon = db.salons.find(s => s.id === id);
  const salonStaff = db.staff.filter(s => s.salonId === id);
  
  const [bookingStep, setBookingStep] = useState<number>(0); // 0: None, 1: Staff/Time, 2: Success
  const [selectedService, setSelectedService] = useState<any>(null);
  
  if (!salon) return <div className="p-10 text-center">სალონი ვერ მოიძებნა</div>;
  
  const isPremium = salon.tier === 'premium';

  // Booking Logic
  const startBooking = (service: any) => {
    setSelectedService(service);
    setBookingStep(1);
  };

  const confirmBooking = (time: string) => {
    setBookingStep(2); // Success
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 pb-20">
      <Navbar />

      {/* HEADER */}
      <div className="bg-white border-b border-slate-200">
          <div className="h-[40vh] bg-slate-900 relative">
               <Image 
                  src={salon.image} 
                  alt={salon.name} 
                  fill
                  className="object-cover opacity-60"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               
               <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 pb-10 text-white animate-slide-up">
                  {isPremium 
                      ? <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-bold uppercase mb-3 inline-flex items-center gap-1"><Zap size={12} /> ონლაინ ჯავშანი</span>
                      : <span className="bg-slate-700 text-white px-2 py-0.5 rounded text-xs font-bold uppercase mb-3 inline-block">სატელეფონო ჯავშანი</span>
                  }
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{salon.name}</h1>
                  <p className="opacity-90 flex items-center gap-4 text-sm md:text-base">
                      <span className="flex items-center gap-1"><MapPin size={16} /> {salon.address}</span>
                  </p>
               </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
          
          {/* LEFT: Content */}
          <div className="md:col-span-2 space-y-10 animate-fade-in">
              
              {/* Staff */}
              <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm"><Users size={16} /></span>
                      სპეციალისტები
                  </h2>
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                      {salonStaff.map(st => (
                          <div key={st.id} className="min-w-[140px] bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center cursor-pointer hover:border-blue-500 hover:shadow-md transition-all group">
                              <div className="w-16 h-16 bg-slate-50 rounded-full mx-auto mb-3 text-3xl flex items-center justify-center border-2 border-white shadow-sm group-hover:scale-110 transition-transform">{st.avatar}</div>
                              <h4 className="font-bold text-slate-800 text-sm group-hover:text-blue-600">{st.name}</h4>
                              <p className="text-xs text-slate-500">{st.role}</p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Services */}
              <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm"><Sparkles size={16} /></span>
                      სერვისები
                  </h2>
                  
                  {!isPremium && (
                      <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl mb-4 flex items-start gap-3">
                          <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                          <div className="text-sm text-blue-800">
                              <p className="font-bold">ონლაინ ჯავშანი გამორთულია</p>
                              <p className="opacity-80">ამ სალონში ვიზიტის დასაჯავშნად გთხოვთ დაუკავშირდეთ ადმინისტრაციას მითითებულ ნომერზე.</p>
                          </div>
                      </div>
                  )}

                  <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-sm overflow-hidden">
                      {db.services.slice(0, 4).map(svc => (
                          <div key={svc.id} className="p-5 flex justify-between items-center group hover:bg-slate-50 transition-colors cursor-default">
                              <div>
                                  <h4 className="font-bold text-slate-800 text-lg">{svc.name}</h4>
                                  <div className="flex items-center gap-3 mt-1">
                                      <p className="text-xs text-slate-500 flex items-center gap-1"><Clock size={12} /> {svc.duration} წთ</p>
                                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                      <p className="text-xs text-slate-500 uppercase">{svc.category}</p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-4">
                                  <span className="font-bold text-slate-900 text-lg">{svc.price}₾</span>
                                  
                                  {isPremium ? (
                                      <button onClick={() => startBooking(svc)} className="bg-white border-2 border-slate-200 text-slate-700 px-6 py-2 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-95 shadow-sm">
                                          დაჯავშნა
                                      </button>
                                  ) : (
                                      <button className="bg-slate-50 border border-slate-200 text-slate-500 px-6 py-2 rounded-xl text-sm font-bold hover:bg-slate-100 transition-all">
                                          დარეკვა
                                      </button>
                                  )}
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          {/* RIGHT: Info */}
          <div className="md:col-span-1 hidden md:block">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg sticky top-24">
                  <h3 className="font-bold text-lg mb-4 text-slate-900">ინფორმაცია</h3>
                  <div className="h-48 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 mb-6 relative overflow-hidden group cursor-pointer border border-slate-200">
                      <span className="relative bg-white px-3 py-1 rounded shadow text-xs font-bold">რუკაზე ნახვა</span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                      <div>
                          <p className="text-xs text-slate-500 font-bold uppercase mb-1">სამუშაო საათები</p>
                          {/* გასწორებული ხაზები: შეცვლილია class -> className */}
                          <div className="flex justify-between text-sm"><span>ორშ-პარ</span> <span className="font-medium text-slate-900">10:00 - 20:00</span></div>
                          <div className="flex justify-between text-sm"><span>შაბ-კვი</span> <span className="font-medium text-slate-900">11:00 - 19:00</span></div>
                      </div>
                      <div>
                          <p className="text-xs text-slate-500 font-bold uppercase mb-1">კონტაქტი</p>
                          <p className="text-sm font-medium text-slate-900">+995 555 00 00 00</p>
                      </div>
                  </div>

                  <button className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-2">
                      <Phone size={16} /> დარეკვა
                  </button>
              </div>
          </div>
      </div>

      {/* BOOKING MODAL */}
      {bookingStep > 0 && (
        <div className="fixed inset-0 bg-slate-900/60 z-[60] flex items-center justify-center backdrop-blur-sm p-4 animate-fade-in">
           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-scale-in">
              {bookingStep === 1 && (
                  <div className="p-0">
                      {/* Header */}
                      <div className="bg-blue-50 p-6 border-b border-blue-100">
                          <div className="flex justify-between items-start mb-4">
                               <h3 className="font-bold text-xl text-blue-900">დროის არჩევა</h3>
                               <button onClick={() => setBookingStep(0)} className="text-blue-400 hover:text-blue-700"><X size={20}/></button>
                          </div>
                          <div className="flex items-center gap-4">
                              <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-100">
                                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">სერვისი</p>
                                  <p className="font-bold text-slate-800 text-sm">{selectedService?.name}</p>
                              </div>
                          </div>
                      </div>

                      <div className="p-6 space-y-6">
                          <div>
                              <div className="flex justify-between items-center mb-3">
                                  <h4 className="font-bold text-sm text-slate-700">დღეს, 29 ნოემბერი</h4>
                                  <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded">თავისუფალია</span>
                              </div>
                              <div className="grid grid-cols-3 gap-3">
                                  {['10:00', '11:30', '14:00', '15:30', '17:00', '19:00'].map(t => (
                                      <button 
                                          key={t}
                                          onClick={() => confirmBooking(t)}
                                          className="py-2.5 rounded-lg text-sm font-bold transition-all bg-white border border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 hover:shadow-md"
                                      >
                                          {t}
                                      </button>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              )}

              {bookingStep === 2 && (
                   <div className="p-10 text-center">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                            <Check size={40} />
                        </div>
                        <h3 className="font-bold text-2xl text-slate-900 mb-2">წარმატება!</h3>
                        <p className="text-slate-500 mb-8 leading-relaxed">თქვენი ჯავშანი მიღებულია.</p>
                        <button onClick={() => setBookingStep(0)} className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg w-full">დახურვა</button>
                    </div>
              )}
           </div>
        </div>
      )}

    </div>
  );
}