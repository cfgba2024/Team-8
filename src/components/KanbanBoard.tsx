import React, { useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { Activity } from '../types';
import KanbanColumn from './KanbanColumn';
import KanbanCard from './KanbanCard';

interface KanbanBoardProps {
  activities: Activity[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ activities: initialActivities }) => {
  const [activities, setActivities] = useState(initialActivities);
  const [activeActivity, setActiveActivity] = useState<Activity | null>(null);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  const handleDragStart = (event: DragStartEvent) => {
    const activity = activities.find(a => a.id.toString() === event.active.id);
    if (activity) setActiveActivity(activity);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      setActivities(activities.map(activity => {
        if (activity.id.toString() === active.id) {
          return {
            ...activity,
            status: over.id as 'pending' | 'in_progress' | 'completed'
          };
        }
        return activity;
      }));
    }
    
    setActiveActivity(null);
  };

  const columns = [
    { id: 'pending', title: 'Por Hacer', color: 'bg-gray-100' },
    { id: 'in_progress', title: 'En Progreso', color: 'bg-blue-50' },
    { id: 'completed', title: 'Completado', color: 'bg-green-50' }
  ];

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map(column => (
          <KanbanColumn
            key={column.id}
            id={column.id}
            title={column.title}
            color={column.color}
            activities={activities.filter(a => a.status === column.id)}
          />
        ))}
      </div>

      <DragOverlay>
        {activeActivity ? (
          <div className="w-[calc(100vw-4rem)] md:w-[350px]">
            <KanbanCard activity={activeActivity} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default KanbanBoard;