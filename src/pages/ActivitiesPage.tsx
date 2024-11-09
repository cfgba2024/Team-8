import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import KanbanBoard from '../components/KanbanBoard';
import { Activity } from '../types';

const mockActivities: Activity[] = [
  {
    id: 1,
    title: "Manejo de Bovinos Lecheros",
    description: "Prácticas de ordeñe y manejo sanitario del tambo",
    status: "pending",
    hours: 120,
    startDate: "2024-03-01",
    endDate: "2024-06-01",
    school: "Escuela Agrotécnica N°1",
    category: "bovinos",
    teacher: "Dr. Carlos Rodríguez"
  },
  {
    id: 2,
    title: "Cultivo de Trigo",
    description: "Siembra y seguimiento del cultivo de trigo",
    status: "in_progress",
    hours: 80,
    startDate: "2024-03-15",
    endDate: "2024-07-15",
    school: "Instituto Agrario N°23",
    category: "granos",
    teacher: "Ing. María González"
  },
  {
    id: 3,
    title: "Producción Apícola",
    description: "Manejo de colmenas y producción de miel",
    status: "completed",
    hours: 60,
    startDate: "2024-02-01",
    endDate: "2024-05-01",
    school: "Escuela Rural N°5",
    category: "apicultura",
    teacher: "Prof. Ana Martínez"
  }
];

const ActivitiesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-400 to-green-500">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Historia Academica</h1>
          <p className="text-green-50 mt-2">Arrastra las actividades para actualizar su estado</p>
        </div>

        <KanbanBoard activities={mockActivities} />
      </main>

      <Footer />
    </div>
  );
};

export default ActivitiesPage;