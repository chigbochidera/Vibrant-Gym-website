
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import TestimonialCard from './TestimonialCard';
import AnimatedElement from './AnimatedElement';
import SectionTitle from './SectionTitle';
import type { Testimonial } from '../data/trainersData';

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

const TestimonialsSlider = ({ testimonials }: TestimonialsSliderProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Testimonial slider auto-rotation
  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    };

    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);

  // Update slider position when active testimonial changes
  useEffect(() => {
    if (!sliderRef.current) return;
    
    const slider = sliderRef.current;
    
    gsap.to(slider, {
      x: `${-activeTestimonial * 100}%`,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, [activeTestimonial]);

  return (
    <section className="section-padding bg-overlay bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')" }}>
      <div className="container mx-auto relative z-10">
        <AnimatedElement animation="fade">
          <SectionTitle
            title="What Our Members Say"
            subtitle="Read testimonials from members who have trained with our fitness experts"
          />
        </AnimatedElement>

        <div className="relative max-w-3xl mx-auto overflow-hidden">
          {/* Testimonials Slider */}
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-500"
            style={{ width: `${testimonials.length * 100}%` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full px-4"
                style={{ flex: `0 0 ${100 / testimonials.length}%` }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  image={testimonial.image}
                  text={testimonial.text}
                  rating={testimonial.rating}
                  position={`Training with ${testimonial.trainer}`}
                />
              </div>
            ))}
          </div>

          {/* Slider Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTestimonial(index);
                  // Reset auto slide timer
                  if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = setInterval(() => {
                      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
                    }, 5000);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonial === index
                    ? 'bg-golden-yellow w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
