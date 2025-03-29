
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleColor?: string;
  subtitleColor?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  titleColor = 'text-white',
  subtitleColor = 'text-gray-400',
}: SectionTitleProps) => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (!titleElement) return;

    const title = titleElement.querySelector('h2');
    const subtitle = titleElement.querySelector('p');
    const line = titleElement.querySelector('.line');

    gsap.set([title, line, subtitle], { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: titleElement,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(title, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
        gsap.to(line, { opacity: 1, width: '60px', duration: 0.8, delay: 0.3, ease: 'power2.out' });
        if (subtitle) {
          gsap.to(subtitle, { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: 'power2.out' });
        }
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === titleElement) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div 
      ref={titleRef} 
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      <div className={`line h-1 bg-teal mb-4 ${centered ? 'mx-auto' : ''}`} style={{ width: '0px' }} />
      {subtitle && (
        <p className={`text-lg ${subtitleColor} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
