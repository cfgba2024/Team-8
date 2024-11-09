import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Activity } from '../types';
import { Calendar, Clock, User } from 'lucide-react';

interface KanbanCardProps {
  activity: Activity;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ activity }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: activity.id.toString(),
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  const getCategoryImage = (category: string) => {
    const images: { [key: string]: string } = {
      bovinos: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80",
      porcinos: "https://images.unsplash.com/photo-1604848698030-c434ba08ece1?auto=format&fit=crop&q=80",
      granos: "https://th.bing.com/th/id/R.5058dea9ced17d8d27241deaa000868e?rik=E8IrNeDvHuKGEA&riu=http%3a%2f%2fwww.infoescola.com%2fwp-content%2fuploads%2f2010%2f12%2ftrigo.jpg&ehk=QxwiVjnoKjrZmRNRRNNi0KwVc86IZq4f%2bGJZCBqX3I0%3d&risl=&pid=ImgRaw&r=0",
      apicultura: "https://baldoni.com.br/wp-content/uploads/2022/02/apicultura_1132051784.jpg"
    };
    return images[category] || "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80";
  };

  if (isDragging) {
    return <div ref={setNodeRef} style={style} className="opacity-50" />;
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white rounded-lg shadow-sm p-4 cursor-grab active:cursor-grabbing"
    >
      <div className="relative">
        <img
          src={getCategoryImage(activity.category)}
          alt={activity.title}
          className="w-full h-32 object-cover rounded-md mb-3"
        />
        <span className="absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded-full bg-white">
          {activity.category}
        </span>
      </div>

      <h4 className="font-semibold text-gray-800 mb-2">{activity.title}</h4>
      <p className="text-sm text-gray-600 mb-3">{activity.description}</p>

      <div className="space-y-2 text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span>{new Date(activity.startDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4" />
          <span>{activity.hours}h</span>
        </div>
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4" />
          <span>{activity.teacher}</span>
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;