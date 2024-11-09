import React from 'react';
import { Activity } from '../types';
// import { Clock, User } from 'lucide-react';

interface ActivityGridProps {
  activities: Activity[];
}

const ActivityGrid: React.FC<ActivityGridProps> = ({ activities }) => {
  const getCategoryImage = (category: string) => {
    const images: { [key: string]: string } = {
      bovinos: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80",
      porcinos: "https://images.unsplash.com/photo-1604848698030-c434ba08ece1?auto=format&fit=crop&q=80",
      granos: "https://th.bing.com/th/id/R.5058dea9ced17d8d27241deaa000868e?rik=E8IrNeDvHuKGEA&riu=http%3a%2f%2fwww.infoescola.com%2fwp-content%2fuploads%2f2010%2f12%2ftrigo.jpg&ehk=QxwiVjnoKjrZmRNRRNNi0KwVc86IZq4f%2bGJZCBqX3I0%3d&risl=&pid=ImgRaw&r=0",
      apicultura: "https://baldoni.com.br/wp-content/uploads/2022/02/apicultura_1132051784.jpg"
    };
    return images[category] || "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {activities.map((activity) => (
        <div key={activity.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={getCategoryImage(activity.category)}
            alt={activity.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
            <div className="space-y-2 text-sm text-gray-500">
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityGrid;