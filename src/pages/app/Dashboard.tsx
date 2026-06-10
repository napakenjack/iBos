import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { mockRequests, mockInventory, mockTasks } from '../../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle, Calendar, UserPlus, TrendingUp } from 'lucide-react';

const incomeData = [
  { name: '1 Окт', income: 420 },
  { name: '5 Окт', income: 750 },
  { name: '10 Окт', income: 680 },
  { name: '15 Окт', income: 1100 },
  { name: '20 Окт', income: 980 },
  { name: '25 Окт', income: 1350 },
];

export default function Dashboard() {
  const lowStock = mockInventory.filter(i => i.status !== 'ok');

  return (
    <div className="grid grid-cols-12 gap-6 pb-8">
      {/* KPI Cards */}
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-white rounded-2xl p-5 shadow-sm border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-5 text-emerald-500">
          <TrendingUp className="w-16 h-16" />
        </div>
        <div className="text-slate-500 text-xs font-bold uppercase mb-1 tracking-tight">Пациенты</div>
        <div className="text-2xl font-black text-slate-900">1,284</div>
        <div className="mt-2 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full inline-block">+12.5% за месяц</div>
      </div>
      
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-white rounded-2xl p-5 shadow-sm border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-5 text-sky-500">
          <Calendar className="w-16 h-16" />
        </div>
        <div className="text-slate-500 text-xs font-bold uppercase mb-1 tracking-tight">Записи сегодня</div>
        <div className="text-2xl font-black text-slate-900">42</div>
        <div className="mt-2 text-[10px] text-sky-600 font-bold bg-sky-50 px-2 py-0.5 rounded-full inline-block">Осталось: 18</div>
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-white rounded-2xl p-5 shadow-sm border border-slate-200 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-3 opacity-5 text-emerald-500">
          <TrendingUp className="w-16 h-16" />
        </div>
        <div className="text-slate-500 text-xs font-bold uppercase mb-1 tracking-tight">Доход (Месяц)</div>
        <div className="text-2xl font-black text-slate-900">8,450,000 ₸</div>
        <div className="mt-2 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full inline-block">Цель: 84%</div>
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-white rounded-2xl p-5 shadow-sm border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-5 text-rose-500">
          <AlertCircle className="w-16 h-16" />
        </div>
        <div className="text-slate-500 text-xs font-bold uppercase mb-1 tracking-tight">Задачи клиники</div>
        <div className="text-2xl font-black text-slate-900">36</div>
        <div className="mt-2 text-[10px] text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded-full inline-block">8 просрочено</div>
      </div>

      {/* Table & Chart Area */}
      <div className="col-span-12 lg:col-span-7 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold flex items-center gap-2">
            <Calendar className="w-4 h-4 text-sky-500" />
            Ближайшие приемы
          </h3>
          <button className="text-[10px] font-bold text-sky-600 hover:underline uppercase tracking-wider">Смотреть всё</button>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-left min-w-[500px]">
            <thead className="bg-slate-50 text-[10px] uppercase text-slate-400 font-bold border-b border-slate-100 tracking-wider">
              <tr>
                <th className="px-6 py-3">Пациент</th>
                <th className="px-6 py-3">Врач</th>
                <th className="px-6 py-3">Время</th>
                <th className="px-6 py-3">Статус</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              <tr className="border-b border-slate-50 hover:bg-slate-50/50">
                <td className="px-6 py-4 font-bold text-slate-900">Серик Оспанов</td>
                <td className="px-6 py-4 text-slate-500">д-р Алимов (Терапевт)</td>
                <td className="px-6 py-4 font-mono font-medium">14:30</td>
                <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md font-bold tracking-tight text-[10px] uppercase">Ожидается</span></td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50/50">
                <td className="px-6 py-4 font-bold text-slate-900">Елена Иванова</td>
                <td className="px-6 py-4 text-slate-500">д-р Смагулова (УЗИ)</td>
                <td className="px-6 py-4 font-mono font-medium">15:00</td>
                <td className="px-6 py-4"><span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-md font-bold tracking-tight text-[10px] uppercase">В процессе</span></td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50/50">
                <td className="px-6 py-4 font-bold text-slate-900">Марат Ахметов</td>
                <td className="px-6 py-4 text-slate-500">д-р Пак (Кардиолог)</td>
                <td className="px-6 py-4 font-mono font-medium">15:15</td>
                <td className="px-6 py-4"><span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-bold tracking-tight text-[10px] uppercase">Подтвержден</span></td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-bold text-slate-900">Анар Бекова</td>
                <td className="px-6 py-4 text-slate-500">д-р Алимов (Терапевт)</td>
                <td className="px-6 py-4 font-mono font-medium">16:00</td>
                <td className="px-6 py-4"><span className="bg-rose-100 text-rose-700 px-2 py-1 rounded-md font-bold tracking-tight text-[10px] uppercase">Опаздывает</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-5 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-sky-500" />
            Аналитика записей
          </h3>
          <select className="text-[10px] border-none font-bold bg-slate-100 text-slate-600 rounded-md py-1 px-2 focus:ring-0 uppercase tracking-wider cursor-pointer">
            <option>Неделя</option>
            <option>Месяц</option>
          </select>
        </div>
        <div className="flex-1 p-6 flex flex-col justify-end">
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={incomeData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} dy={10} />
                <YAxis hide={true} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px', fontWeight: 'bold'}} />
                <Bar dataKey="income" fill="#38bdf8" radius={[6, 6, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Footer Alerts */}
      {lowStock.length > 0 && (
        <div className="col-span-12 flex flex-col sm:flex-row sm:items-center gap-4 bg-sky-900 text-white rounded-xl p-4 sm:px-6 shadow-lg shadow-sky-900/20 mt-2">
          <div className="bg-white/20 p-2 rounded-lg shrink-0 w-max">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-sm leading-snug">
              <span className="font-bold text-sky-300">Уведомление: </span> 
              Критический остаток на складе ({lowStock[0].name} — {lowStock[0].stock} {lowStock[0].unit}). Требуется закуп.
            </div>
            <div className="flex gap-3 shrink-0">
              <button className="text-[10px] font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all">Проигнорировать</button>
              <button className="text-[10px] font-bold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 px-4 py-2 rounded-lg transition-all shadow-lg shadow-sky-500/20 text-white">Создать задачу</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
