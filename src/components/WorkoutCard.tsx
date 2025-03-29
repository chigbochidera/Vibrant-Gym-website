
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';

interface WorkoutCardProps {
  title: string;
  image: string;
  description: string;
  duration: string;
  level: string;
  trainer: string;
}

const WorkoutCard = ({ title, image, description, duration, level, trainer }: WorkoutCardProps) => {
  return (
    <div className="group bg-dark-gray rounded-lg overflow-hidden shadow-lg border border-gray-800 transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-teal text-white px-3 py-1 m-2 text-sm font-semibold rounded">
          {level}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-gray-400">
            <Clock size={16} className="mr-2 text-teal" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <User size={16} className="mr-2 text-teal" />
            <span>{trainer}</span>
          </div>
        </div>
        
        <Link 
          to="/workouts" 
          className="block text-center bg-bright-red text-white py-2 rounded-md hover:bg-opacity-90 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default WorkoutCard;
