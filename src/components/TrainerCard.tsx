
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface TrainerCardProps {
  name: string;
  image: string;
  specialty: string;
  bio: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  index: number;
}

const TrainerCard = ({
  name,
  image,
  specialty,
  bio,
  facebook,
  instagram,
  twitter,
  index,
}: TrainerCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const imageContainer = imageRef.current;
    
    if (!card || !imageContainer) return;

    gsap.set(card, { y: 50, opacity: 0 });
    
    gsap.to(card, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.2 * index,
      ease: 'power2.out',
    });

    // Image hover effect
    card.addEventListener('mouseenter', () => {
      gsap.to(imageContainer.querySelector('img'), {
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(imageContainer.querySelector('img'), {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    return () => {
      card.removeEventListener('mouseenter', () => {});
      card.removeEventListener('mouseleave', () => {});
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="bg-dark-gray rounded-lg overflow-hidden shadow-lg border border-gray-800 h-full flex flex-col"
    >
      <div 
        ref={imageRef}
        className="h-72 overflow-hidden"
      >
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-teal font-semibold mb-4">{specialty}</p>
        <p className="text-gray-400 mb-6 flex-grow">{bio}</p>
        
        <div className="flex space-x-4">
          {facebook && (
            <a 
              href={facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal transition-colors"
            >
              <Facebook size={20} />
            </a>
          )}
          
          {instagram && (
            <a 
              href={instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal transition-colors"
            >
              <Instagram size={20} />
            </a>
          )}
          
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal transition-colors"
            >
              <Twitter size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
