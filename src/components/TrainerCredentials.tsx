
import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import SectionTitle from './SectionTitle';
import type { Trainer } from '../data/trainersData';

interface TrainerCredentialsProps {
  trainers: Trainer[];
}

const TrainerCredentials = ({ trainers }: TrainerCredentialsProps) => {
  return (
    <section className="section-padding bg-dark-gray">
      <div className="container mx-auto">
        <AnimatedElement animation="fade">
          <SectionTitle
            title="Trainer Credentials"
            subtitle="Our trainers bring years of experience and specialized certifications to help you achieve your goals"
          />
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <AnimatedElement key={trainer.id} animation="fade" delay={index * 0.1}>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{trainer.name}</h3>
                    <p className="text-teal">{trainer.specialty}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-300 font-medium">Experience:</p>
                  <p className="text-gray-400">{trainer.experience}</p>
                </div>
                
                <div>
                  <p className="text-gray-300 font-medium mb-2">Certifications:</p>
                  <ul className="text-gray-400 space-y-1">
                    {trainer.certifications.map((cert, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerCredentials;
