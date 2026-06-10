import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Link, useNavigate } from 'react-router-dom';
import { Building, CheckCircle2 } from 'lucide-react';

export default function RegisterClinic() {
  const [subdomain, setSubdomain] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    localStorage.setItem('demoRole', 'clinic_boss');
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-24 max-w-md text-center space-y-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold">Демо-клиника создана</h2>
        <p className="text-slate-600">
          Поддомен: <strong className="text-slate-900">{subdomain || 'demo-clinic'}.ibos.kz</strong>
        </p>
        <p className="text-sm text-slate-500 mb-8">
          База данных успешно инициализирована. Вы вошли как руководитель клиники.
        </p>
        <Button size="lg" className="w-full" onClick={() => navigate('/app/dashboard')}>
          Перейти в CRM Demo
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-lg">
      <Card>
        <CardHeader className="text-center pb-8 border-b border-slate-100">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Building className="w-6 h-6" />
          </div>
          <CardTitle className="text-2xl">Регистрация клиники</CardTitle>
          <p className="text-sm text-slate-500 mt-2">
            Создайте рабочее пространство для вашей клиники за 1 минуту
          </p>
        </CardHeader>
        <CardContent className="pt-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Название клиники</label>
              <Input required placeholder="Например: Astana Dent" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Город</label>
                <Input required placeholder="Астана" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">БИН/ИИН</label>
                <Input placeholder="Необязательно" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Контактное лицо</label>
              <Input required placeholder="Имя Фамилия" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Желаемый поддомен</label>
              <div className="flex rounded-md shadow-sm">
                <Input 
                  required 
                  className="rounded-r-none focus:z-10 bg-slate-50" 
                  placeholder="astana-dent" 
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-slate-200 bg-slate-100 text-slate-500 text-sm">
                  .ibos.kz
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full">Создать клинику</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
