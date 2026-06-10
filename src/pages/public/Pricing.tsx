import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../../components/ui/Card';
import { Check } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
       <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Коммерческое предложение</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Сводка по этапам разработки, стоимости и срокам запуска платформы IBOS Medical CRM.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl">Этап 1: Демо-версия</CardTitle>
            <CardDescription>Разработка интерактивного MVP без backend</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-4xl font-bold">500 000 ₸</div>
            <div className="text-sm font-medium text-slate-500">Сроки: 3–4 недели</div>
            <ul className="space-y-3">
              {[
                'UX/UI дизайн всех основных экранов',
                'Frontend-разработка (React/Vite)',
                'Интерактивная навигация с Mock-данными',
                'Презентационная маркетинговая страница',
                'Готово к демонстрации инвесторам',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
             <div className="mt-8 pt-6 border-t border-slate-100">
                <Badge variant="secondary">Текущий этап завершен</Badge>
             </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 shadow-blue-900/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            Production
          </div>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Этап 2: MVP Backend</CardTitle>
            <CardDescription>Полноценный запуск системы с базой данных</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-4xl font-bold">9 500 000 ₸</div>
            <div className="text-sm font-medium text-slate-500">Сроки: 4–6 месяцев</div>
            <ul className="space-y-3">
              {[
                'Разработка изолированной архитектуры БД',
                'API-сервер (Node.js/Python)',
                'Реальная система ролей и доступов',
                'Интеграция облачного файлового хранилища',
                'Система регистрации клиник (Tenant provisioning)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500">
              * Дополнительно оплачивается: серверная архитектура, домены, Wildcard SSL сертификат, резервное копирование и облачное хранилище S3.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
