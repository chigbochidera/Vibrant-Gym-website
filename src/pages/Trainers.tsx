
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import TrainerCard from '../components/TrainerCard';
import AnimatedElement from '../components/AnimatedElement';
import TrainerCredentials from '../components/TrainerCredentials';
import TrainerFeatures from '../components/TrainerFeatures';
import TestimonialsSlider from '../components/TestimonialsSlider';
import TrainerCTA from '../components/TrainerCTA';
import { trainers, testimonials } from '../data/trainersData';

gsap.registerPlugin(ScrollTrigger);

const Trainers = () => {
  useEffect(() => {
    // Clean up ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <HeroSection
        title="Meet Our Expert Trainers"
        subtitle="Our certified trainers are passionate about helping you achieve your fitness goals"
        ctaText="Book a Session"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />

      {/* Trainers Section */}
      <section className="section-padding bg-dark-gray">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Our Fitness Experts"
              subtitle="Meet the dedicated professionals who will guide you on your fitness journey"
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <TrainerCard
                key={trainer.id}
                name={trainer.name}
                image={trainer.image}
                specialty={trainer.specialty}
                bio={trainer.bio}
                facebook={trainer.facebook}
                instagram={trainer.instagram}
                twitter={trainer.twitter}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Trainers Section */}
      <TrainerFeatures />

      {/* Trainer Details Section */}
      <TrainerCredentials trainers={trainers} />

      {/* Testimonials Section */}
      <TestimonialsSlider testimonials={testimonials} />

      {/* CTA Section */}
      <TrainerCTA />
    </>
  );
};

export default Trainers;
