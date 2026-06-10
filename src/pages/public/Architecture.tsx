import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Database, Globe, Server, User } from 'lucide-react';

export default function Architecture() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
       <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Архитектура платформы</h1>
        <p className="text-lg text-slate-600">
          Безопасность и изоляция данных — главный приоритет IBOS CRM.
        </p>
      </div>

      <div className="space-y-12">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm text-center flex flex-col md:flex-row items-center justify-center gap-8">
           <div className="flex flex-col items-center gap-2">
             <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
               <Globe className="w-8 h-8 text-blue-600" />
             </div>
             <div className="font-bold">ibos.kz</div>
             <div className="text-xs text-slate-500">Портал регистрации</div>
           </div>
           
           <div className="hidden md:block w-16 h-1 bg-slate-200 relative">
              <div className="absolute right-0 top-1/2 -mt-1.5 w-3 h-3 border-t-2 border-r-2 border-slate-300 transform rotate-45"></div>
           </div>

           <div className="flex flex-col items-center gap-2">
             <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center">
               <Server className="w-8 h-8 text-indigo-600" />
             </div>
             <div className="font-bold">Общий Backend</div>
             <div className="text-xs text-slate-500">Единая кодовая база</div>
           </div>

           <div className="hidden md:block w-16 h-1 bg-slate-200 relative">
              <div className="absolute right-0 top-1/2 -mt-1.5 w-3 h-3 border-t-2 border-r-2 border-slate-300 transform rotate-45"></div>
           </div>

           <div className="flex flex-col gap-4">
              {[1,2,3].map(i => (
                <div key={i} className="flex items-center gap-4 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                  <Database className="w-5 h-5 text-emerald-500" />
                  <div className="text-sm font-medium text-left">
                    <div className="text-slate-900">БД Клиники {i}</div>
                    <div className="text-xs text-slate-400">clinic{i}.ibos.kz</div>
                  </div>
                </div>
              ))}
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <Card>
             <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Изоляция медицинских данных</h3>
                <p className="text-slate-600 text-sm">
                  Медицинские карты, данные пациентов и финансовая информация каждой клиники хранятся в <strong>отдельной базе данных PostgreSQL</strong>. Утечка данных из одной клиники в другую на уровне запросов исключена архитектурно.
                </p>
             </CardContent>
           </Card>
           <Card>
             <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Wildcard поддомены</h3>
                <p className="text-slate-600 text-sm">
                  Вместо сложной настройки отдельного домена и SSL, каждая клиника получает готовый защищенный поддомен вида <code>название.ibos.kz</code> сразу после регистрации.
                </p>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
