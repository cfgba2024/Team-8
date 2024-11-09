import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Activity } from '../types';
import KanbanCard from './KanbanCard';

interface KanbanColumnProps {
  id: string;
  title: string;
  color: string;
  activities: Activity[];
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ id, title, color, activities }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`rounded-lg p-4 ${color}`}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-between">
        {title}
        <span className="bg-white text-sm py-1 px-2 rounded-full">
          {activities.length}
        </span>
      </h3>

      <div className="space-y-4">
        {activities.map(activity => (
          <KanbanCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;