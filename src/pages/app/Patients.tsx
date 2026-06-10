import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { mockPatients, mockDoctors } from '../../data/mockData';
import { Search, Plus, Filter, MoreHorizontal, User } from 'lucide-react';

export default function Patients() {
  const [search, setSearch] = useState('');

  const filteredPatients = mockPatients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.phone.includes(search));

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Пациенты</h1>
          <p className="text-sm text-slate-500">Управление базой пациентов клиники</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Добавить пациента
        </Button>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex gap-4 bg-white items-center">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input 
              placeholder="Поиск по ФИО или телефону..." 
              className="pl-10 bg-slate-50 border-none rounded-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm" className="gap-2 rounded-full h-10 border-slate-200">
            <Filter className="w-4 h-4" /> Фильтры
          </Button>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead className="bg-slate-50 text-[10px] uppercase text-slate-400 font-bold border-b border-slate-100 tracking-wider">
              <tr>
                <th className="px-6 py-4">Пациент</th>
                <th className="px-6 py-4">Контакты</th>
                <th className="px-6 py-4">Последний визит</th>
                <th className="px-6 py-4">Лечащий врач</th>
                <th className="px-6 py-4">Статус</th>
                <th className="px-6 py-4 text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="text-xs divide-y divide-slate-50">
              {filteredPatients.map(patient => {
                const doc = mockDoctors.find(d => d.id === patient.assignedDoctorId);
                return (
                  <tr key={patient.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold shadow-sm">
                          {patient.name.charAt(0)}
                        </div>
                        <div className="font-bold text-slate-900">{patient.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 font-mono font-medium">{patient.phone}</td>
                    <td className="px-6 py-4 text-slate-500 font-medium">{patient.lastVisit}</td>
                    <td className="px-6 py-4 text-slate-600">
                      {doc ? (
                         <div className="flex items-center gap-2 font-medium">
                           <User className="w-3 h-3 text-slate-400" />
                           {doc.name}
                         </div>
                      ) : <span className="text-slate-400">-</span>}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={patient.status === 'active' ? 'success' : 'secondary'}>
                        {patient.status === 'active' ? 'Активен' : 'Архив'}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-sky-600">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          
          {filteredPatients.length === 0 && (
            <div className="p-12 text-center text-slate-500 font-medium text-sm">
              Пациенты не найдены.
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
