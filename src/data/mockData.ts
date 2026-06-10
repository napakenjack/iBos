import { Clinic, Patient, Doctor, Staff, Appointment, Request, Task, InventoryItem, Document, CashboxOperation } from '../types';

export const mockClinics: Clinic[] = [
  { id: '1', name: 'Astana Clinic', city: 'Астана', subdomain: 'astana-clinic', status: 'active', enabledModules: ['patients', 'doctors', 'calendar'], dbStatus: 'active', usersCount: 12 },
  { id: '2', name: 'Shymkent Dentist', city: 'Шымкент', subdomain: 'shymkent-dentist', status: 'active', enabledModules: ['patients', 'doctors', 'calendar', 'inventory'], dbStatus: 'active', usersCount: 8 },
  { id: '3', name: 'Almaty Med Center', city: 'Алматы', subdomain: 'almaty-med', status: 'pending', enabledModules: ['patients', 'doctors', 'calendar'], dbStatus: 'provisioning', usersCount: 0 },
  { id: '4', name: 'Aqtobe Dental Pro', city: 'Актобе', subdomain: 'aqtobe-dental', status: 'active', enabledModules: ['patients', 'doctors'], dbStatus: 'active', usersCount: 5 },
];

export const mockPatients: Patient[] = [
  { id: '1', name: 'Айдос Нурланов', phone: '+7 701 123 4567', birthDate: '1985-04-12', lastVisit: '2023-10-15', source: 'Instagram', status: 'active', assignedDoctorId: '1' },
  { id: '2', name: 'Мария Смирнова', phone: '+7 702 234 5678', birthDate: '1992-08-22', lastVisit: '2023-10-20', source: '2GIS', status: 'active', assignedDoctorId: '2' },
  { id: '3', name: 'Ерлан Сакенов', phone: '+7 705 345 6789', birthDate: '1978-11-05', lastVisit: '2023-09-10', source: 'Рекомендация', status: 'inactive' },
  { id: '4', name: 'Асель Омарова', phone: '+7 777 456 7890', birthDate: '2001-02-15', lastVisit: '2023-10-25', source: 'Google', status: 'active', assignedDoctorId: '1' },
];

export const mockDoctors: Doctor[] = [
  { id: '1', name: 'Д-р Арман Бауыржанов', specialization: 'Терапевт', workload: 85, status: 'active', nextAppointments: 4 },
  { id: '2', name: 'Д-р Елена Попова', specialization: 'Стоматолог', workload: 95, status: 'active', nextAppointments: 6 },
  { id: '3', name: 'Д-р Тимур Хасенов', specialization: 'Хирург', workload: 60, status: 'active', nextAppointments: 2 },
  { id: '4', name: 'Д-р Динара Алиева', specialization: 'Педиатр', workload: 40, status: 'inactive', nextAppointments: 0 },
];

export const mockStaff: Staff[] = [
  { id: '1', name: 'Светлана Иванова', position: 'Главный администратор', department: 'Регистратура', dateHired: '2021-03-10', experience: '5 лет', status: 'active' },
  { id: '2', name: 'Максат Тулегенов', position: 'Бухгалтер', department: 'Финансы', dateHired: '2022-01-15', experience: '8 лет', status: 'active' },
  { id: '3', name: 'Алина Ким', position: 'Медсестра', department: 'Процедурный кабинет', dateHired: '2023-05-20', experience: '2 года', status: 'active' },
];

export const mockAppointments: Appointment[] = [
  { id: '1', patientId: '1', doctorId: '1', service: 'Первичный прием', datetime: '2023-10-26T10:00:00Z', status: 'planned' },
  { id: '2', patientId: '2', doctorId: '2', service: 'Консультация', datetime: '2023-10-26T11:30:00Z', status: 'arrived' },
  { id: '3', patientId: '4', doctorId: '1', service: 'Повторный прием', datetime: '2023-10-26T14:00:00Z', status: 'completed' },
  { id: '4', patientId: '3', doctorId: '3', service: 'Перевязка', datetime: '2023-10-27T09:00:00Z', status: 'planned' },
];

export const mockRequests: Request[] = [
  { id: '1', patientName: 'Жанна Муратова', service: 'УЗИ брюшной полости', desiredDatetime: 'Завтра утром', complaint: 'Боли в животе', source: 'PWA', status: 'new' },
  { id: '2', patientName: 'Антон Чехов', service: 'Удаление зуба', desiredDatetime: 'Сегодня', complaint: 'Сильная зубная боль', source: 'PWA', status: 'processing' },
  { id: '3', patientName: 'Камила Серикова', service: 'Консультация педиатра', desiredDatetime: '30 октября', complaint: 'Температура у ребенка', source: 'Website', status: 'confirmed' },
];

export const mockTasks: Task[] = [
  { id: '1', title: 'Получить лицензию на новый аппарат', responsibleId: '1', dueDate: '2023-11-15', status: 'new', priority: 'high' },
  { id: '2', title: 'Закупка расходников (шприцы, перчатки)', responsibleId: '2', dueDate: '2023-10-30', status: 'in_progress', priority: 'medium' },
  { id: '3', title: 'Проверить договор поставщика ТОО "МедСнаб"', responsibleId: '2', dueDate: '2023-10-28', status: 'review', priority: 'medium' },
  { id: '4', title: 'Обновить прайс услуг на ноябрь', responsibleId: '1', dueDate: '2023-10-25', status: 'done', priority: 'low' },
];

export const mockInventory: InventoryItem[] = [
  { id: '1', name: 'Бинт стерильный', category: 'Расходники', article: 'RS-001', unit: 'шт', price: 150, stock: 450, status: 'ok', lastUpdate: '2023-10-20' },
  { id: '2', name: 'Лейкопластырь', category: 'Расходники', article: 'RS-002', unit: 'уп', price: 500, stock: 120, status: 'ok', lastUpdate: '2023-10-21' },
  { id: '3', name: 'Шприцы 5 мл', category: 'Инструменты', article: 'IN-005', unit: 'шт', price: 35, stock: 80, status: 'low', lastUpdate: '2023-10-25' },
  { id: '4', name: 'Перчатки нитриловые', category: 'СИЗ', article: 'SZ-010', unit: 'кор', price: 2500, stock: 0, status: 'out', lastUpdate: '2023-10-25' },
  { id: '5', name: 'Маски медицинские', category: 'СИЗ', article: 'SZ-011', unit: 'кор', price: 1200, stock: 35, status: 'low', lastUpdate: '2023-10-22' },
];

export const mockDocuments: Document[] = [
  { id: '1', name: 'Договор поставщика ТОО "Фарма"', type: 'Договор', responsibleId: '2', status: 'draft', createdDate: '2023-10-25' },
  { id: '2', name: 'Изменения в штатном расписании', type: 'Приказ', responsibleId: '1', status: 'review', createdDate: '2023-10-24' },
  { id: '3', name: 'Акт выполненных работ №45', type: 'Акт', responsibleId: '2', status: 'approved', createdDate: '2023-10-20' },
  { id: '4', name: 'Заявка на отпуск (Иванова С.)', type: 'Заявление', responsibleId: '1', status: 'rejected', createdDate: '2023-10-22' },
];

export const mockCashbox: CashboxOperation[] = [
  { id: '1', patientId: '1', service: 'Первичный прием терапевта', amount: 8000, method: 'card', status: 'paid', date: '2023-10-26T10:45:00Z', cashierId: '1' },
  { id: '2', patientId: '2', service: 'Удаление зуба (сложное)', amount: 25000, method: 'cash', status: 'paid', date: '2023-10-26T12:15:00Z', cashierId: '1' },
  { id: '3', patientId: '4', service: 'Анализ крови', amount: 4500, method: 'transfer', status: 'paid', date: '2023-10-25T15:30:00Z', cashierId: '2' },
  { id: '4', patientId: '3', service: 'МРТ', amount: 35000, method: 'card', status: 'unpaid', date: '2023-10-26T09:00:00Z', cashierId: '1' },
];
