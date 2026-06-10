import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { mockInventory } from '../../data/mockData';
import { Search, Plus, Filter, AlertTriangle } from 'lucide-react';

export default function Inventory() {
  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Склад (Реестр)</h1>
          <p className="text-sm text-slate-500">Учет расходных материалов клиники</p>
        </div>
        <Button className="gap-2">
           <Plus className="w-4 h-4" />
           Приход товара
        </Button>
      </div>

      <Card className="flex-1 shadow-sm border-slate-100 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex gap-4 bg-white justify-between items-center">
           <div className="flex gap-4 flex-1">
             <div className="relative max-w-sm flex-1">
               <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
               <Input placeholder="Поиск по названию или штрихкоду..." className="pl-10 bg-slate-50 border-none rounded-full" />
             </div>
             <Button variant="outline" size="sm" className="gap-2 rounded-full h-10 border-slate-200">
               <Filter className="w-4 h-4" /> Категории
             </Button>
           </div>
           <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1.5 rounded-full font-bold shadow-sm hidden sm:flex">
             <AlertTriangle className="w-3.5 h-3.5" /> 2 позиции требуют закупки
           </div>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-[10px] uppercase text-slate-400 font-bold border-b border-slate-100 tracking-wider sticky top-0">
              <tr>
                <th className="px-6 py-4">Наименование</th>
                <th className="px-6 py-4">Артикул</th>
                <th className="px-6 py-4">Категория</th>
                <th className="px-6 py-4 text-right">Остаток</th>
                <th className="px-6 py-4 text-right">Статус</th>
              </tr>
            </thead>
            <tbody className="text-xs divide-y divide-slate-50">
              {mockInventory.map(item => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                  <td className="px-6 py-4 font-bold text-slate-900">{item.name}</td>
                  <td className="px-6 py-4 text-slate-500 font-mono font-medium">{item.article}</td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{item.category}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-black text-slate-900">{item.stock}</span> <span className="text-slate-400">{item.unit}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {item.status === 'ok' && <Badge variant="success">В норме</Badge>}
                    {item.status === 'low' && <Badge variant="warning">Мало</Badge>}
                    {item.status === 'out' && <Badge variant="destructive">Закончился</Badge>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
