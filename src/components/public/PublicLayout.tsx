import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LogIn, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function PublicLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-3 transition-colors hover:text-sky-600">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]">
                <span className="font-bold text-lg leading-none">I</span>
              </div>
              IBOS <span className="text-sky-500 font-light text-sm uppercase ml-1">CRM</span>
            </Link>
            <nav className="hidden md:flex gap-6 text-sm font-bold text-slate-500 uppercase tracking-wider">
              <Link to="/features" className={`hover:text-sky-600 transition-colors ${location.pathname === '/features' ? 'text-sky-600' : ''}`}>Модули</Link>
              <Link to="/architecture" className={`hover:text-sky-600 transition-colors ${location.pathname === '/architecture' ? 'text-sky-600' : ''}`}>Архитектура</Link>
              <Link to="/pricing" className={`hover:text-sky-600 transition-colors ${location.pathname === '/pricing' ? 'text-sky-600' : ''}`}>Стоимость</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-slate-500 gap-2 uppercase tracking-wider text-[10px]">
                <LogIn className="w-4 h-4" />
                Вход для клиник
              </Button>
            </Link>
            <Link to="/register-clinic">
              <Button size="sm" className="gap-2 uppercase tracking-wider text-[10px] bg-slate-900 border border-slate-800 shadow-xl shadow-slate-900/10 text-white hover:bg-slate-800">
                Создать DWH (СУБД)
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-slate-500 text-sm">
            © 2026 IBOS — Единая SaaS-платформа для управления частными клиниками.
          </p>
          <div className="flex justify-center space-x-4 text-xs text-slate-400">
            <span>demo only</span>
            <span>no real medical data</span>
            <span>created for commercial proposal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
