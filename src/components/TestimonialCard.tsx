
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image: string;
  text: string;
  rating: number;
  position?: string;
}

const TestimonialCard = ({ name, image, text, rating, position }: TestimonialCardProps) => {
  return (
    <div className="bg-dark-gray p-6 rounded-lg shadow-lg border border-gray-800 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          {position && <p className="text-gray-400 text-sm">{position}</p>}
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-golden-yellow fill-golden-yellow" : "text-gray-600"}
          />
        ))}
      </div>
      
      <p className="text-gray-300 italic flex-grow">{text}</p>
    </div>
  );
};

export default TestimonialCard;
