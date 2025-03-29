
import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-left' | 'slide-right' | 'slide-up' | 'scale';
  delay?: number;
  className?: string;
  threshold?: number;
}

const AnimatedElement = ({
  children,
  animation = 'fade',
  delay = 0,
  className = '',
  threshold = 0.3,
}: AnimatedElementProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animationProps = {};

    switch (animation) {
      case 'fade':
        animationProps = { opacity: 0 };
        break;
      case 'slide-left':
        animationProps = { opacity: 0, x: -50 };
        break;
      case 'slide-right':
        animationProps = { opacity: 0, x: 50 };
        break;
      case 'slide-up':
        animationProps = { opacity: 0, y: 50 };
        break;
      case 'scale':
        animationProps = { opacity: 0, scale: 0.9 };
        break;
      default:
        animationProps = { opacity: 0 };
    }

    gsap.set(element, animationProps);

    const animateIn = () => {
      gsap.to(element, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay,
        ease: 'power2.out',
      });
    };

    if (window.innerWidth < 768) {
      // On mobile, simply animate the element with a delay
      animateIn();
    } else {
      // On desktop, use ScrollTrigger
      ScrollTrigger.create({
        trigger: element,
        start: `top ${threshold * 100}%`,
        onEnter: animateIn,
        once: true,
      });
    }

    return () => {
      // Clean up ScrollTrigger instance
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, delay, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default AnimatedElement;
