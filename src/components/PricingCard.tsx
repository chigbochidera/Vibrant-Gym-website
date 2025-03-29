
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { gsap } from 'gsap';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  frequency: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
  index: number;
}

const PricingCard = ({
  title,
  price,
  frequency,
  features,
  isPopular = false,
  ctaText = "Get Started",
  ctaLink = "/contact",
  index,
}: PricingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.set(card, { y: 50, opacity: 0 });
    
    gsap.to(card, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.2 * index,
      ease: 'power2.out',
    });

    if (isPopular) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });
      tl.to(card, { y: -10, duration: 0.5, ease: 'power2.out' })
        .to(card, { y: 0, duration: 0.5, ease: 'power2.in' });
      
      return () => {
        tl.kill();
      };
    }
  }, [index, isPopular]);

  return (
    <div 
      ref={cardRef}
      className={`rounded-xl overflow-hidden transition-all duration-300 ${
        isPopular
          ? 'border-2 border-golden-yellow shadow-xl shadow-golden-yellow/20 bg-dark-gray'
          : 'border border-gray-800 bg-dark-gray hover:border-teal'
      }`}
    >
      {isPopular && (
        <div className="bg-golden-yellow text-dark-gray text-center py-1 text-sm font-bold">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <div className="mb-6">
          <span className="text-3xl md:text-4xl font-bold text-white">${price}</span>
          <span className="text-gray-400">/{frequency}</span>
        </div>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <Check 
                size={18} 
                className={`mr-3 mt-0.5 flex-shrink-0 ${feature.included ? 'text-teal' : 'text-gray-600'}`} 
              />
              <span className={feature.included ? 'text-gray-300' : 'text-gray-500 line-through'}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        
        <Link 
          to={ctaLink}
          className={`block text-center py-3 px-4 rounded-lg font-bold transition-colors ${
            isPopular
              ? 'bg-bright-red text-white hover:bg-opacity-90'
              : 'bg-teal text-white hover:bg-opacity-90'
          }`}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
