export type Role = 'admin' | 'clinic_boss' | 'clinic_admin' | 'doctor' | 'cashier' | 'patient';

export interface Clinic {
  id: string;
  name: string;
  city: string;
  subdomain: string;
  status: 'active' | 'pending' | 'suspended';
  enabledModules: string[];
  dbStatus: 'active' | 'provisioning' | 'error';
  usersCount: number;
}

export interface Patient {
  id: string;
  name: string;
  phone: string;
  birthDate: string;
  lastVisit: string;
  source: string;
  status: 'active' | 'inactive';
  assignedDoctorId?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  workload: number;
  status: 'active' | 'inactive';
  nextAppointments: number;
}

export interface Staff {
  id: string;
  name: string;
  position: string;
  department: string;
  dateHired: string;
  experience: string;
  status: 'active' | 'inactive';
  avatarUrl?: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  service: string;
  datetime: string;
  status: 'planned' | 'arrived' | 'no-show' | 'canceled' | 'completed';
}

export interface Request {
  id: string;
  patientName: string;
  service: string;
  desiredDatetime: string;
  complaint: string;
  source: string;
  status: 'new' | 'processing' | 'confirmed' | 'rejected';
}

export interface Task {
  id: string;
  title: string;
  responsibleId: string;
  dueDate: string;
  status: 'new' | 'in_progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  article: string;
  unit: string;
  price: number;
  stock: number;
  status: 'ok' | 'low' | 'out';
  lastUpdate: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  responsibleId: string;
  status: 'draft' | 'review' | 'approved' | 'rejected';
  createdDate: string;
}

export interface CashboxOperation {
  id: string;
  patientId: string;
  service: string;
  amount: number;
  method: 'cash' | 'card' | 'transfer' | 'other';
  status: 'paid' | 'unpaid';
  date: string;
  cashierId: string;
}
