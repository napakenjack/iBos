import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { mockTasks } from '../../data/mockData';
import { Plus, MoreVertical, MessageSquare, Clock } from 'lucide-react';

export default function Tasks() {
  const columns = [
    { id: 'new', title: 'Новая', color: 'bg-slate-100 text-slate-600' },
    { id: 'in_progress', title: 'В работе', color: 'bg-sky-100 text-sky-700' },
    { id: 'review', title: 'На согласовании', color: 'bg-amber-100 text-amber-700' },
    { id: 'done', title: 'Выполнено', color: 'bg-emerald-100 text-emerald-700' },
  ];

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Задачи & Kanban</h1>
          <p className="text-sm text-slate-500">Управление внутренними процессами клиники</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Новая задача
        </Button>
      </div>

      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-6 h-full min-w-max">
          {columns.map(col => {
            const colTasks = mockTasks.filter(t => t.status === col.id);
            return (
              <div key={col.id} className="w-80 flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${col.color.split(' ')[0]}`}></div>
                    <span className="font-bold text-sm uppercase tracking-wider text-slate-700">{col.title}</span>
                  </div>
                  <span className="bg-slate-200 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full">{colTasks.length}</span>
                </div>
                
                <div className="flex-1 overflow-y-auto space-y-3 pb-2">
                  {colTasks.map(task => (
                    <Card key={task.id} className="cursor-pointer hover:-translate-y-0.5 hover:shadow-md transition-all border border-slate-200">
                      <CardContent className="p-4 space-y-3">
                        <div className="flex justify-between items-start gap-2">
                          <p className="font-bold text-slate-900 text-sm leading-snug">{task.title}</p>
                          <button className="text-slate-400 hover:text-sky-500 transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge variant={
                            task.priority === 'high' ? 'destructive' : 
                            task.priority === 'medium' ? 'warning' : 'secondary'
                          }>
                            {task.priority === 'high' ? 'Высокий' : task.priority === 'medium' ? 'Средний' : 'Низкий'}
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between pt-3 mt-1 border-t border-slate-100">
                          <div className="w-7 h-7 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center text-xs font-bold text-sky-700 shadow-sm" title="Исполнитель">
                            АБ
                          </div>
                          <div className="flex items-center gap-3 text-xs text-slate-400 font-bold">
                            <div className="flex items-center gap-1 hover:text-sky-500 transition-colors">
                              <MessageSquare className="w-3.5 h-3.5" /> 2
                            </div>
                            <div className="flex items-center gap-1 font-mono">
                              <Clock className="w-3.5 h-3.5" /> {task.dueDate.split('-').reverse().slice(0, 2).join('.')}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <button className="w-full py-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors border-2 border-dashed border-slate-200 hover:border-sky-200 mt-2">
                    <Plus className="w-4 h-4" />
                    Добавить
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
