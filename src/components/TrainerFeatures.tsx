
import { Star, Users } from 'lucide-react';
import AnimatedElement from './AnimatedElement';
import SectionTitle from './SectionTitle';

const TrainerFeatures = () => {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="slide-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Our Trainers in Action" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-teal p-4 rounded-lg shadow-lg hidden md:flex items-center">
                <Users size={20} className="text-white mr-2" />
                <p className="text-white font-bold">Certified Experts</p>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-left">
            <SectionTitle
              title="Why Choose Our Trainers"
              subtitle="Our trainers make the difference in your fitness journey"
              centered={false}
            />
            
            <div className="space-y-6">
              <div className="flex">
                <div className="w-12 h-12 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Star size={20} className="text-teal" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-2">Certified Professionals</h3>
                  <p className="text-gray-400">All our trainers hold multiple national and international certifications in their areas of expertise.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Star size={20} className="text-teal" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-2">Personalized Approach</h3>
                  <p className="text-gray-400">Our trainers create customized programs tailored to your specific goals, fitness level, and preferences.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Star size={20} className="text-teal" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-2">Continuous Education</h3>
                  <p className="text-gray-400">We invest in our trainers' ongoing education to ensure they stay updated with the latest fitness research and techniques.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Star size={20} className="text-teal" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-2">Passionate Motivation</h3>
                  <p className="text-gray-400">Our trainers are genuinely passionate about fitness and committed to helping you succeed in your journey.</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default TrainerFeatures;
