import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Stethoscope, Calendar, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function PatientPWA() {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    // In a real app we'd save to localStorage here to sync with CRM demo
  };

  if (isSuccess) {
    return (
      <div className="bg-slate-50 min-h-screen text-slate-900 font-sans p-6 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 flex items-center justify-center rounded-full mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Заявка отправлена</h2>
        <p className="text-slate-600 mb-8 max-w-sm">
          Ваша заявка успешно отправлена в клинику. Администратор свяжется с вами для подтверждения времени.
        </p>
        <Link to="/">
          <Button variant="outline">Вернуться на главную IBOS</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans max-w-md mx-auto shadow-2xl relative overflow-hidden flex flex-col">
      <div className="bg-blue-600 text-white p-6 pb-12 rounded-b-3xl shrink-0">
        <div className="flex items-center justify-between mb-8">
          <Link to="/login" className="text-blue-100 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="font-semibold px-3 py-1 bg-white/20 rounded-full text-sm">
            Astana Clinic
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">Запись на прием</h1>
        <p className="text-blue-100 text-sm">Выберите специалиста и удобное время</p>
      </div>

      <div className="flex-1 p-6 -mt-8 relative z-10 overflow-y-auto">
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-800">1. Направление</label>
              <div className="grid grid-cols-2 gap-3">
                {['Терапевт', 'Стоматолог', 'Невролог', 'Анализы'].map((srv, i) => (
                  <label key={i} className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-colors ${i === 0 ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600'}`}>
                    <input type="radio" name="service" className="hidden" defaultChecked={i === 0} />
                    <Stethoscope className="w-4 h-4 shrink-0" />
                    <span className="text-sm font-medium">{srv}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-800">2. Желаемая дата</label>
              <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-600">
                <Calendar className="w-5 h-5 text-slate-400" />
                <Input type="date" required className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 shadow-none" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-800">3. Ваши данные</label>
              <Input required placeholder="Фамилия Имя" className="rounded-xl h-12" />
              <Input required type="tel" placeholder="+7 (___) ___-__-__" className="rounded-xl h-12" />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-800">4. Жалоба (кратко)</label>
              <textarea 
                required
                placeholder="Что вас беспокоит?"
                className="w-full flex min-h-[80px] rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 resize-none"
              ></textarea>
            </div>

            <Button type="submit" size="lg" className="w-full rounded-xl h-14 text-base shadow-lg shadow-blue-600/20">
              Подтвердить запись
            </Button>
          </form>
        </div>

        <div className="text-center text-xs text-slate-400 mb-8">
          <p>PWA-версия для пациента.</p>
          <p>Можно установить на экран телефона.</p>
        </div>
      </div>
    </div>
  );
}
