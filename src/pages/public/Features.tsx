import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
       <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Доступные модули</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Платформа IBOS состоит из набора интегрированных модулей. Данные свободно перетекают между регистратурой, врачом, складом и кассой.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { t: 'Админ-панель IBOS', d: 'Централизованное управление клиниками-клиентами, создание поддоменов.'},
          { t: 'Пациенты', d: 'Полная база, история визитов, контактные данные.'},
          { t: 'Врачи и Персонал', d: 'Расписание, нагрузка, KPI, управление доступом.'},
          { t: 'Календарь', d: 'Интерактивная запись, статусы приемов, загрузка кабинетов.'},
          { t: 'PWA-кабинет', d: 'Запись на прием прямо со смартфона пациента, история заявок.'},
          { t: 'Электронная медкарта', d: 'Осмотры, диагнозы, назначения, история болезни.'},
          { t: 'Задачи Kanban', d: 'Простые задачи в формате досок для персонала клиники.'},
          { t: 'Склад-реестр', d: 'Контроль остатков расходных материалов и медикаментов.'},
          { t: 'Внутренняя касса', d: 'Учет оплат (MVP без интеграции с банками).'}
        ].map((item, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{item.t}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">{item.d}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
