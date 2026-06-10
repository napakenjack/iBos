import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { PublicLayout } from './components/public/PublicLayout';
import { AppLayout } from './components/app/AppLayout';

import Home from './pages/public/Home';
import Features from './pages/public/Features';
import Architecture from './pages/public/Architecture';
import Pricing from './pages/public/Pricing';
import RegisterClinic from './pages/public/RegisterClinic';
import Login from './pages/public/Login';
import PatientPWA from './pages/PatientPWA';

import Dashboard from './pages/app/Dashboard';
import Patients from './pages/app/Patients';
import Tasks from './pages/app/Tasks';
import Inventory from './pages/app/Inventory';

// App pages fallback for now
const Placeholder = ({title}: {title: string}) => (
  <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-slate-500">Страница в разработке (демо).</p>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="architecture" element={<Architecture />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="register-clinic" element={<RegisterClinic />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/patient-pwa" element={<PatientPWA />} />

      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Navigate to="/app/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="clinics" element={<Placeholder title="Клиники (IBOS Admin)" />} />
        <Route path="patients" element={<Patients />} />
        <Route path="doctors" element={<Placeholder title="Врачи" />} />
        <Route path="staff" element={<Placeholder title="Персонал" />} />
        <Route path="appointments" element={<Placeholder title="Календарь" />} />
        <Route path="requests" element={<Placeholder title="Заявки с PWA" />} />
        <Route path="medical-records" element={<Placeholder title="Медкарты" />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="processes" element={<Placeholder title="Бизнес-процессы" />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="documents" element={<Placeholder title="Документы" />} />
        <Route path="cashbox" element={<Placeholder title="Касса" />} />
        <Route path="marketing" element={<Placeholder title="Маркетинг" />} />
        <Route path="analytics" element={<Placeholder title="Аналитика" />} />
        <Route path="settings" element={<Placeholder title="Настройки" />} />
      </Route>
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

