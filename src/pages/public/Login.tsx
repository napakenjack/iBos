import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, UserCog, Stethoscope, Wallet, Users } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (role: string) => {
    localStorage.setItem('demoRole', role);
    navigate('/app/dashboard');
  };

  const roles = [
    { id: 'admin', name: 'Системный администратор IBOS', icon: ShieldAlert, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { id: 'clinic_boss', name: 'Руководитель клиники', icon: UserCog, color: 'text-blue-600', bg: 'bg-blue-100' },
    { id: 'clinic_admin', name: 'Администратор регистратуры', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { id: 'doctor', name: 'Врач', icon: Stethoscope, color: 'text-cyan-600', bg: 'bg-cyan-100' },
    { id: 'cashier', name: 'Кассир', icon: Wallet, color: 'text-amber-600', bg: 'bg-amber-100' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 text-center max-w-3xl">
      <h2 className="text-3xl font-extrabold tracking-tight mb-4">Вход в систему</h2>
      <p className="text-slate-600 mb-12">
        Выберите роль для входа в демонстрационную версию IBOS CRM.<br/>
        Пароль не требуется.
      </p>

      <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
        {roles.map((role) => (
          <button 
            key={role.id}
            onClick={() => handleLogin(role.id)}
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all text-left"
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${role.bg} ${role.color}`}>
              <role.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">{role.name}</div>
              <div className="text-xs text-slate-500">Войти как {role.id}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200">
         <h3 className="text-lg font-bold mb-4 text-slate-800">Кабинет Пациента (PWA)</h3>
         <button 
            onClick={() => navigate('/patient-pwa')}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
          >
            Перейти в интерфейс пациента
         </button>
      </div>
    </div>
  );
}
