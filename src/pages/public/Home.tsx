import React from 'react';
import { Button } from '../../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Link } from 'react-router-dom';
import { Users, Server, Shield, Smartphone } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-sky-200 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-teal-100 opacity-30 blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[1.05]">
              Единая платформа <br/>
              <span className="text-sky-500">управления</span> клиникой
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium">
              CRM, PWA-запись пациентов, электронная медкарта, задачи, склад, документы, касса и аналитика в одной системе с отдельной БД.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/login">
                <Button size="lg" className="h-14 px-8 text-sm font-bold uppercase tracking-wider shadow-xl shadow-sky-500/20 w-full sm:w-auto">
                  Посмотреть демо
                </Button>
              </Link>
              <Link to="/register-clinic">
                <Button size="lg" variant="outline" className="h-14 px-8 text-sm font-bold uppercase tracking-wider bg-white w-full sm:w-auto border-slate-200 text-slate-600">
                  Создать DWH
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                <Smartphone className="w-4 h-4 text-sky-500" /> Web + PWA
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                <Server className="w-4 h-4 text-sky-500" /> Изолированная БД
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                <Shield className="w-4 h-4 text-sky-500" /> Готово к масштабированию
              </div>
            </div>
          </div>
          
           {/* Mockup */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none">
            <div className="relative rounded-[2rem] border border-slate-200/50 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-2 bg-gradient-to-br from-white to-slate-50/50 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="absolute top-4 left-4 flex gap-1.5 z-20">
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
               </div>
               <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 aspect-[4/3] overflow-hidden flex items-center justify-center p-4 relative z-10">
                 {/* Simplified abstract UI representation */}
                 <div className="w-full h-full flex gap-4">
                   <div className="w-1/4 h-full bg-white rounded-2xl border border-slate-200 p-3 space-y-3 shadow-sm">
                      <div className="w-full h-4 bg-slate-200 rounded-md"></div>
                      <div className="w-3/4 h-4 bg-slate-100 rounded-md"></div>
                      <div className="w-full h-4 bg-slate-100 rounded-md"></div>
                      <div className="w-5/6 h-5 bg-sky-50 rounded-md text-sky-600 border border-sky-100"></div>
                   </div>
                   <div className="w-3/4 h-full flex flex-col gap-4">
                     <div className="h-1/3 w-full flex gap-4">
                        <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm"></div>
                        <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm"></div>
                     </div>
                     <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-sky-50/50 to-transparent"></div>
                       <svg className="absolute bottom-0 w-full text-sky-200" viewBox="0 0 100 50" preserveAspectRatio="none" style={{height: '60%'}}>
                          <path d="M0 50 L0 30 Q25 40 50 20 T100 10 L100 50 Z" fill="currentColor" fillOpacity="0.3"></path>
                          <path d="M0 50 L0 35 Q30 50 60 25 T100 15 L100 50 Z" fill="currentColor" fillOpacity="0.5"></path>
                       </svg>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules section simple preview */}
      <section className="py-24 bg-white" id="modules">
        <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Единая экосистема</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-16 font-medium">
              Избавьтесь от хаоса в Excel и WhatsApp. IBOS заменяет множество разрозненных сервисов и баз данных.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Пациенты', 'Врачи', 'Календарь', 'Склад', 'Документы', 'PWA Пациента', 'Задачи Kanban', 'Аналитика'].map((t, i) => (
                <Card key={i} className="hover:border-sky-200 hover:-translate-y-1 transition-all text-center p-6 border-slate-100 bg-slate-50/50 group cursor-pointer shadow-sm rounded-2xl">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="w-6 h-6 bg-sky-100 rounded-lg"></div>
                   </div>
                   <h3 className="font-bold text-slate-900 tracking-tight">{t}</h3>
                </Card>
              ))}
            </div>
            <div className="mt-12">
              <Link to="/features">
                <Button variant="outline" className="gap-2 h-12 px-8 uppercase tracking-wider text-xs font-bold border-slate-200 text-slate-600 rounded-xl">
                  Посмотреть все возможности
                </Button>
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
