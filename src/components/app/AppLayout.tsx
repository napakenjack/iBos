import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Building2, Users, UserRound, Stethoscope, 
  CalendarDays, MessageSquareHeart, FolderOpen, CheckSquare, 
  GitMerge, PackageOpen, FileText, Wallet, PieChart, 
  Settings, LogOut, Search, Bell
} from 'lucide-react';

export function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const role = localStorage.getItem('demoRole') || 'admin';
  const roleLabels: Record<string, string> = {
    admin: 'Администратор системы',
    clinic_boss: 'Руководитель клиники',
    clinic_admin: 'Администратор',
    doctor: 'Врач',
    cashier: 'Кассир',
  };

  const navItems = [
    { to: '/app/dashboard', icon: LayoutDashboard, label: 'Рабочий стол' },
    { to: '/app/clinics', icon: Building2, label: 'Клиники (Admin)', adminOnly: true },
    { to: '/app/patients', icon: Users, label: 'Пациенты' },
    { to: '/app/doctors', icon: UserRound, label: 'Врачи' },
    { to: '/app/staff', icon: Stethoscope, label: 'Персонал' },
    { to: '/app/appointments', icon: CalendarDays, label: 'Календарь' },
    { to: '/app/requests', icon: MessageSquareHeart, label: 'Заявки PWA', badge: '+3' },
    { to: '/app/medical-records', icon: FolderOpen, label: 'Медкарты' },
    { to: '/app/tasks', icon: CheckSquare, label: 'Задачи' },
    { to: '/app/processes', icon: GitMerge, label: 'Бизнес-процессы' },
    { to: '/app/inventory', icon: PackageOpen, label: 'Склад' },
    { to: '/app/documents', icon: FileText, label: 'Документы' },
    { to: '/app/cashbox', icon: Wallet, label: 'Касса' },
    { to: '/app/marketing', icon: PieChart, label: 'Маркетинг' },
    { to: '/app/analytics', icon: PieChart, label: 'Аналитика' },
    { to: '/app/settings', icon: Settings, label: 'Настройки' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 flex flex-col hidden md:flex border-r border-slate-800 z-20">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.4)]">
            <span className="font-bold text-lg leading-none text-white">I</span>
          </div>
          <Link to="/" className="text-xl font-bold text-white tracking-tight hover:text-sky-400 transition-colors">
            IBOS <span className="text-sky-400 font-light text-sm uppercase ml-1">CRM</span>
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {navItems.map((item) => {
            if (item.adminOnly && role !== 'admin') return null;
            const isActive = location.pathname === item.to || (location.pathname === '/app' && item.to === '/app/dashboard');
            const Icon = item.icon;
            
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 rounded-xl p-3 transition-colors ${
                  isActive 
                    ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' 
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className={`text-sm ${isActive ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-rose-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 mt-auto border-t border-slate-800">
          <div className="bg-slate-800/50 rounded-xl p-4">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2">Текущая клиника</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-white text-xs font-semibold truncate">astana-clinic.ibos.kz</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shadow-sm z-10 shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold text-slate-800 hidden sm:block">Панель управления</h1>
            <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-md border border-slate-200 hidden sm:block font-medium">Роль: {roleLabels[role]}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Поиск по клинике..."
                className="bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 text-xs w-64 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-2.5" />
            </div>
            <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
              <button className="relative text-slate-400 hover:text-slate-600 transition-colors mr-2">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-slate-900">Демо Пользователь</div>
                <div className="text-[10px] text-slate-500">{roleLabels[role]}</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center border-2 border-white shadow-sm shrink-0">
                <span className="text-sky-600 font-bold text-sm">ДП</span>
              </div>
              <Link to="/login" title="Выйти" className="text-slate-400 hover:text-rose-500 ml-2 transition-colors">
                <LogOut className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
