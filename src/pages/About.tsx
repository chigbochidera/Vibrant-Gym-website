
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Heart, Users, Clock } from 'lucide-react';

import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Timeline animation
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length === 0) return;
    
    gsap.from(timelineItems, {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 70%',
      },
    });
  }, []);

  return (
    <>
      <HeroSection
        title="About EnergyFit"
        subtitle="Creating stronger bodies and minds since 2013"
        ctaText="Our Mission"
        ctaLink="#mission"
        backgroundImage="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
      />

      {/* Mission Section */}
      <section id="mission" className="section-padding bg-dark-gray">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="slide-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Our Mission" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-teal p-4 rounded-lg shadow-lg hidden md:block">
                  <p className="text-white font-bold text-lg">Established 2013</p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-left">
              <SectionTitle
                title="Our Mission & Values"
                subtitle="Transforming lives through fitness, community, and wellbeing"
                centered={false}
              />
              <p className="text-gray-400 mb-6">
                At EnergyFit, we believe fitness is about more than just physical strength—it's about mental wellbeing, community support, and sustainable lifestyle changes. Our mission is to create a space where everyone feels welcome and empowered to reach their goals.
              </p>
              <p className="text-gray-400 mb-8">
                Founded by a team of passionate fitness professionals, our gym has evolved into a hub for health enthusiasts of all levels. We pride ourselves on our supportive environment, expert guidance, and state-of-the-art facilities.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart size={18} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Inclusivity</h3>
                    <p className="text-gray-400">We welcome members of all fitness levels, backgrounds, and abilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Award size={18} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Excellence</h3>
                    <p className="text-gray-400">We are committed to providing the highest quality facilities, programs, and guidance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Users size={18} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Community</h3>
                    <p className="text-gray-400">We foster a supportive community that motivates and uplifts each member.</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Our Journey"
              subtitle="The EnergyFit story from humble beginnings to where we are today"
            />
          </AnimatedElement>

          <div ref={timelineRef} className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal"></div>

            {/* Timeline items */}
            <div className="space-y-24">
              <div className="timeline-item relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-teal border-4 border-dark-gray"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-white font-bold text-2xl mb-2">2013</h3>
                    <h4 className="text-teal font-semibold mb-3">The Beginning</h4>
                    <p className="text-gray-400">
                      EnergyFit started as a small studio with just two trainers and a vision to create a different kind of fitness experience focused on community and personalized support.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" 
                      alt="EnergyFit Beginning" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="timeline-item relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-teal border-4 border-dark-gray"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <img 
                      src="https://images.unsplash.com/photo-1598136490941-30d885318abd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                      alt="EnergyFit Expansion" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-white font-bold text-2xl mb-2">2016</h3>
                    <h4 className="text-teal font-semibold mb-3">First Expansion</h4>
                    <p className="text-gray-400">
                      After three successful years, we moved to a larger facility, expanded our team to 10 trainers, and introduced a wider range of specialized fitness programs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-teal border-4 border-dark-gray"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-white font-bold text-2xl mb-2">2019</h3>
                    <h4 className="text-teal font-semibold mb-3">Community Growth</h4>
                    <p className="text-gray-400">
                      EnergyFit became known for its strong community focus, hosting fitness challenges, wellness workshops, and charity events that brought members together.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="EnergyFit Community Growth" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="timeline-item relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-teal border-4 border-dark-gray"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <img 
                      src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                      alt="EnergyFit Today" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-white font-bold text-2xl mb-2">Today</h3>
                    <h4 className="text-teal font-semibold mb-3">A Fitness Revolution</h4>
                    <p className="text-gray-400">
                      Now with state-of-the-art facilities, a team of 20+ expert trainers, and thousands of active members, EnergyFit continues to lead the way in innovative fitness solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-dark-gray">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Our Facilities"
              subtitle="Explore our state-of-the-art gym facilities designed for optimal fitness experiences"
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedElement animation="slide-up" delay={0.1}>
              <div className="group overflow-hidden rounded-lg shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Strength Training Area" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gray-900">
                  <h3 className="text-white font-bold text-xl mb-2">Strength Training Area</h3>
                  <p className="text-gray-400">
                    Our comprehensive strength area features free weights, machines, and functional training equipment for all levels.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={0.2}>
              <div className="group overflow-hidden rounded-lg shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Cardio Zone" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gray-900">
                  <h3 className="text-white font-bold text-xl mb-2">Cardio Zone</h3>
                  <p className="text-gray-400">
                    Our cardio area includes treadmills, ellipticals, bikes, and rowing machines with entertainment options.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={0.3}>
              <div className="group overflow-hidden rounded-lg shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Group Exercise Studios" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gray-900">
                  <h3 className="text-white font-bold text-xl mb-2">Group Exercise Studios</h3>
                  <p className="text-gray-400">
                    Dedicated spaces for various group classes including yoga, HIIT, spinning, and dance fitness.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={0.4}>
              <div className="group overflow-hidden rounded-lg shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80" 
                    alt="Functional Training Area" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gray-900">
                  <h3 className="text-white font-bold text-xl mb-2">Functional Training Area</h3>
                  <p className="text-gray-400">
                    Open space equipped with kettlebells, battle ropes, TRX, and other functional training tools.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={0.5}>
              <div className="group overflow-hidden rounded-lg shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1570440828762-a24d358b1463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                    alt="Recovery Area" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gray-900">
                  <h3 className="text-white font-bold text-xl mb-2">Recovery Area</h3>
                  <p className="text-gray-400">
                    Dedicated space for stretching, foam rolling, and recovery with guided assistance available.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={0.6}>
              <div className="group overflow-hidden rounded-lg shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1578762836385-e25082a56004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Locker Rooms" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gray-900">
                  <h3 className="text-white font-bold text-xl mb-2">Locker Rooms</h3>
                  <p className="text-gray-400">
                    Modern locker rooms with showers, saunas, and amenities for comfort and convenience.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Our Leadership Team"
              subtitle="Meet the dedicated professionals who guide EnergyFit's vision and operations"
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedElement animation="fade" delay={0.1}>
              <div className="bg-dark-gray p-6 rounded-lg shadow-lg border border-gray-800 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                    alt="Michael Reynolds" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-xl mb-1">Michael Reynolds</h3>
                <p className="text-teal mb-4">Founder & CEO</p>
                <p className="text-gray-400">
                  Former Olympic athlete with a passion for making fitness accessible to everyone. Michael founded EnergyFit with a vision to create a supportive fitness community.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay={0.2}>
              <div className="bg-dark-gray p-6 rounded-lg shadow-lg border border-gray-800 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" 
                    alt="Jennifer Martinez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-xl mb-1">Jennifer Martinez</h3>
                <p className="text-teal mb-4">Director of Training</p>
                <p className="text-gray-400">
                  With 15+ years in fitness education, Jennifer oversees our training programs and ensures the highest quality standards across all classes and sessions.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay={0.3}>
              <div className="bg-dark-gray p-6 rounded-lg shadow-lg border border-gray-800 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="David Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-xl mb-1">David Chen</h3>
                <p className="text-teal mb-4">Operations Manager</p>
                <p className="text-gray-400">
                  David ensures our facilities run smoothly and efficiently, managing day-to-day operations and continually enhancing the member experience.
                </p>
              </div>
            </AnimatedElement>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/trainers"
              className="inline-flex items-center bg-teal text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all group"
            >
              Meet Our Trainers
              <ArrowRight size={18} className="ml-2 group-hover:animate-slide-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="section-padding bg-dark-gray">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Hours & Location"
              subtitle="Visit us at our convenient location with flexible opening hours"
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedElement animation="slide-right">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 h-full">
                <h3 className="text-white font-bold text-xl mb-4 flex items-center">
                  <Clock size={20} className="mr-2 text-teal" />
                  Operating Hours
                </h3>
                
                <div className="space-y-3 text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium text-white">5:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium text-white">6:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium text-white">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Holidays:</span>
                    <span className="font-medium text-white">8:00 AM - 6:00 PM</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-white font-bold mb-3">Special Hours & Closures</h4>
                  <p className="text-gray-400">
                    EnergyFit is closed on December 25th and January 1st. We operate with reduced hours on all major holidays - check our social media for updates.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-white font-bold mb-3">24/7 Access</h4>
                  <p className="text-gray-400">
                    Premium and VIP members enjoy 24/7 access to the facility with their secure key fob. Staff hours are as listed above.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-left">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 h-full">
                <h3 className="text-white font-bold text-xl mb-4 flex items-center">
                  <Clock size={20} className="mr-2 text-teal" />
                  Our Location
                </h3>
                
                <div className="mb-6">
                  <p className="text-white font-medium mb-1">EnergyFit Gym</p>
                  <p className="text-gray-400">123 Fitness Street</p>
                  <p className="text-gray-400">Gym City, GC 12345</p>
                  <p className="text-gray-400 mt-2">Phone: (123) 456-7890</p>
                  <p className="text-gray-400">Email: info@energyfit.com</p>
                </div>
                
                <div className="rounded-lg overflow-hidden h-64 mb-6">
                  {/* Google Maps iframe would go here */}
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <p className="text-gray-400">Google Maps Integration</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-3">Getting Here</h4>
                  <p className="text-gray-400 mb-2">
                    Located in downtown Gym City with easy access to public transportation and ample parking.
                  </p>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Public Transit: Bus routes 5, 12, and 18 stop directly in front of our facility</li>
                    <li>• Parking: Free parking available for members in our dedicated lot</li>
                    <li>• Bike Storage: Secure bike racks available at the entrance</li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal">
        <div className="container mx-auto text-center px-4">
          <AnimatedElement animation="fade">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Come Experience EnergyFit For Yourself</h2>
            <p className="text-white text-opacity-90 text-lg max-w-3xl mx-auto mb-8">
              Join us for a free trial session and discover how EnergyFit can help you achieve your fitness goals in a supportive, motivating environment.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-golden-yellow text-dark-gray px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all group"
            >
              Book a Free Trial
              <ArrowRight size={20} className="ml-2 group-hover:animate-slide-right" />
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default About;
