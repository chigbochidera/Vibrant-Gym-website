
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, Trophy, Users, Heart, Dumbbell } from 'lucide-react';

import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';
import WorkoutCard from '../components/WorkoutCard';
import TrainerCard from '../components/TrainerCard';
import TestimonialCard from '../components/TestimonialCard';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<HTMLSpanElement[]>([]);

  // Feature animations
  useEffect(() => {
    const featuresContainer = document.querySelector('.features-grid');
    if (!featuresContainer) return;

    const features = featuresContainer.querySelectorAll('.feature-card');

    gsap.from(features, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: featuresContainer,
        start: 'top 80%',
      },
    });
  }, []);

  // Stats counter animation
  useEffect(() => {
    if (!statsRef.current) return;

    const counterElements = counterRefs.current;
    const values = [3800, 42, 25, 95];

    counterElements.forEach((counter, index) => {
      const value = values[index];
      
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to({value: 0}, {
            value,
            duration: 3,
            ease: 'power2.out',
            onUpdate: function() {
              counter.textContent = Math.floor(this.targets()[0].value).toString();
            },
          });
        },
        once: true,
      });
    });
  }, []);

  const addCounterRef = (el: HTMLSpanElement | null) => {
    if (el && !counterRefs.current.includes(el)) {
      counterRefs.current.push(el);
    }
  };

  return (
    <>
      <HeroSection
        title="Transform Your Body, Transform Your Life"
        subtitle="Join the community that's changing the way people think about fitness"
        quote="The difference between trying and triumph is a little umph."
        ctaText="Start Your Journey"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Features Section */}
      <section className="section-padding bg-dark-gray">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Why Choose Us"
              subtitle="We offer more than just a gym – we provide a supportive community and personalized approach to help you achieve your fitness goals"
            />
          </AnimatedElement>

          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="feature-card p-6 bg-gray-900 rounded-lg border border-gray-800 text-center hover:border-teal transition-all">
              <div className="w-16 h-16 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell size={28} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Modern Equipment</h3>
              <p className="text-gray-400">State-of-the-art fitness equipment for effective workouts</p>
            </div>

            <div className="feature-card p-6 bg-gray-900 rounded-lg border border-gray-800 text-center hover:border-teal transition-all">
              <div className="w-16 h-16 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={28} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Trainers</h3>
              <p className="text-gray-400">Professional trainers to guide you through your fitness journey</p>
            </div>

            <div className="feature-card p-6 bg-gray-900 rounded-lg border border-gray-800 text-center hover:border-teal transition-all">
              <div className="w-16 h-16 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={28} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Diverse Classes</h3>
              <p className="text-gray-400">Wide range of classes for all fitness levels and interests</p>
            </div>

            <div className="feature-card p-6 bg-gray-900 rounded-lg border border-gray-800 text-center hover:border-teal transition-all">
              <div className="w-16 h-16 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Focus</h3>
              <p className="text-gray-400">Supportive community to keep you motivated and engaged</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="slide-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="About EnergyFit" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-teal p-4 rounded-lg shadow-lg hidden md:block">
                  <p className="text-white font-bold text-lg">10+ Years Experience</p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-left">
              <SectionTitle
                title="About EnergyFit"
                subtitle="Creating stronger bodies and minds since 2013"
                centered={false}
              />
              <p className="text-gray-400 mb-6">
                At EnergyFit, we believe fitness is about more than just physical strength—it's about mental wellbeing, community support, and sustainable lifestyle changes. Our mission is to create a space where everyone feels welcome and empowered to reach their goals.
              </p>
              <p className="text-gray-400 mb-8">
                Founded by a team of passionate fitness professionals, our gym has evolved into a hub for health enthusiasts of all levels. We pride ourselves on our supportive environment, expert guidance, and state-of-the-art facilities.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-teal text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all group"
              >
                Learn More About Us
                <ArrowRight size={18} className="ml-2 group-hover:animate-slide-right" />
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-teal">
        <div ref={statsRef} className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <span ref={addCounterRef}>0</span>+
              </h3>
              <p className="text-white text-opacity-80">Happy Members</p>
            </div>

            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <span ref={addCounterRef}>0</span>+
              </h3>
              <p className="text-white text-opacity-80">Expert Trainers</p>
            </div>

            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <span ref={addCounterRef}>0</span>+
              </h3>
              <p className="text-white text-opacity-80">Fitness Programs</p>
            </div>

            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <span ref={addCounterRef}>0</span>%
              </h3>
              <p className="text-white text-opacity-80">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Workouts */}
      <section className="section-padding bg-dark-gray">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Featured Workouts"
              subtitle="Discover our most popular workout programs designed to help you achieve your fitness goals"
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedElement animation="slide-up" delay={0.1}>
              <WorkoutCard
                title="HIIT Intensity"
                image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                description="High-intensity interval training to maximize calorie burn and improve cardiovascular health in short, efficient sessions."
                duration="45 min"
                level="Advanced"
                trainer="Alex Johnson"
              />
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={0.2}>
              <WorkoutCard
                title="Strength Foundations"
                image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                description="Build core strength and develop proper form with this foundational strength training program suitable for all levels."
                duration="60 min"
                level="Beginner"
                trainer="Sarah Miller"
              />
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={0.3}>
              <WorkoutCard
                title="Yoga Flow"
                image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80"
                description="Improve flexibility, balance, and mental wellbeing with our dynamic yoga flow sessions that connect breath with movement."
                duration="75 min"
                level="Intermediate"
                trainer="Maya Patel"
              />
            </AnimatedElement>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/workouts"
              className="inline-flex items-center bg-bright-red text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all group"
            >
              View All Workouts
              <ArrowRight size={18} className="ml-2 group-hover:animate-slide-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Trainers */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Meet Our Trainers"
              subtitle="Our expert trainers are here to guide you on your fitness journey with personalized support and motivation"
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrainerCard
              name="Alex Johnson"
              image="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              specialty="HIIT & CrossFit Specialist"
              bio="Alex has 8+ years of experience in high-intensity training and helps clients push their limits safely and effectively."
              facebook="#"
              instagram="#"
              twitter="#"
              index={0}
            />

            <TrainerCard
              name="Sarah Miller"
              image="https://images.unsplash.com/photo-1609899537878-88d5ba429bbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80"
              specialty="Strength & Nutrition Coach"
              bio="Sarah combines strength training with nutrition advice to help clients build muscle and improve overall health."
              facebook="#"
              instagram="#"
              twitter="#"
              index={1}
            />

            <TrainerCard
              name="Maya Patel"
              image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              specialty="Yoga & Mindfulness Expert"
              bio="Maya's holistic approach to fitness integrates physical practice with mindfulness techniques for total wellbeing."
              facebook="#"
              instagram="#"
              twitter="#"
              index={2}
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/trainers"
              className="inline-flex items-center bg-teal text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all group"
            >
              Meet All Trainers
              <ArrowRight size={18} className="ml-2 group-hover:animate-slide-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-overlay bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}>
        <div className="container mx-auto relative z-10">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Success Stories"
              subtitle="Hear what our members have to say about their experience with EnergyFit"
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedElement animation="slide-up" delay={0.1}>
              <TestimonialCard
                name="James Wilson"
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                text="The trainers at EnergyFit have completely transformed my approach to fitness. I've lost 30lbs and gained so much confidence. The community here is amazing!"
                rating={5}
                position="Member for 2 years"
              />
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={0.2}>
              <TestimonialCard
                name="Emily Rodriguez"
                image="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
                text="I was intimidated by gyms before joining EnergyFit. The staff made me feel welcome from day one, and the variety of classes keeps me motivated and coming back."
                rating={5}
                position="Member for 1 year"
              />
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={0.3}>
              <TestimonialCard
                name="David Chen"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                text="As a busy professional, I appreciate how efficient the workouts are at EnergyFit. I get maximum results in minimum time, and the 24/7 access fits my schedule perfectly."
                rating={4}
                position="Member for 6 months"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal">
        <div className="container mx-auto text-center px-4">
          <AnimatedElement animation="fade">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Fitness Journey?</h2>
            <p className="text-white text-opacity-90 text-lg max-w-3xl mx-auto mb-8">
              Join EnergyFit today and take the first step towards a healthier, stronger you. Get access to expert trainers, state-of-the-art equipment, and a supportive community.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-golden-yellow text-dark-gray px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all group"
            >
              Join Now
              <ArrowRight size={20} className="ml-2 group-hover:animate-slide-right" />
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default Home;
