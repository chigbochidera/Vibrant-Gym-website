
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  quote?: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const HeroSection = ({
  title,
  subtitle,
  quote,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroSectionProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const text = textRef.current;
    
    if (!hero || !text) return;
    
    const tl = gsap.timeline();
    
    tl.fromTo(
      hero,
      { opacity: 0.7, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }
    );
    
    tl.fromTo(
      text.querySelectorAll('h1, p, .cta-button'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power2.out' },
      '-=1'
    );
    
    return () => {
      tl.kill();
    };
  }, []);
  
  return (
    <div
      ref={heroRef}
      className="bg-overlay min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div 
        ref={textRef}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto opacity-0">
          {subtitle}
        </p>
        
        {quote && (
          <p className="text-lg md:text-xl font-light italic text-white mb-8 max-w-2xl mx-auto opacity-0">
            "{quote}"
          </p>
        )}
        
        <Link
          to={ctaLink}
          className="cta-button inline-flex items-center bg-golden-yellow text-dark-gray px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all opacity-0 text-lg group"
        >
          {ctaText}
          <ArrowRight size={18} className="ml-2 group-hover:animate-slide-right" />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
