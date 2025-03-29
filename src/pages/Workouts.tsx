
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, User, Calendar, Dumbbell, Heart } from 'lucide-react';

import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

gsap.registerPlugin(ScrollTrigger);

// Types for workouts and schedules
interface Workout {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  level: string;
  trainer: string;
}

interface ScheduleItem {
  id: number;
  title: string;
  day: string;
  time: string;
  trainer: string;
  category: string;
}

// Categories for filtering
const categories = ['All', 'Strength', 'Cardio', 'HIIT', 'Yoga', 'Pilates', 'CrossFit'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Workouts = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeDay, setActiveDay] = useState('Monday');
  
  // Sample workout data
  const workouts: Workout[] = [
    {
      id: 1,
      title: 'HIIT Intensity',
      description: 'High-intensity interval training to maximize calorie burn and improve cardiovascular health in short, efficient sessions.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'HIIT',
      duration: '45 min',
      level: 'Advanced',
      trainer: 'Alex Johnson',
    },
    {
      id: 2,
      title: 'Strength Foundations',
      description: 'Build core strength and develop proper form with this foundational strength training program suitable for all levels.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'Strength',
      duration: '60 min',
      level: 'Beginner',
      trainer: 'Sarah Miller',
    },
    {
      id: 3,
      title: 'Yoga Flow',
      description: 'Improve flexibility, balance, and mental wellbeing with our dynamic yoga flow sessions that connect breath with movement.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80',
      category: 'Yoga',
      duration: '75 min',
      level: 'Intermediate',
      trainer: 'Maya Patel',
    },
    {
      id: 4,
      title: 'Cardio Blast',
      description: 'Elevate your heart rate and boost your metabolism with this high-energy cardio workout designed to torch calories.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'Cardio',
      duration: '50 min',
      level: 'Intermediate',
      trainer: 'James Wilson',
    },
    {
      id: 5,
      title: 'CrossFit Challenge',
      description: 'Push your limits with our CrossFit-inspired workout that combines strength, cardio, and functional movements.',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      category: 'CrossFit',
      duration: '60 min',
      level: 'Advanced',
      trainer: 'Alex Johnson',
    },
    {
      id: 6,
      title: 'Pilates Core',
      description: 'Strengthen your core and improve posture with our Pilates-based workout focusing on controlled, precise movements.',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'Pilates',
      duration: '55 min',
      level: 'Beginner',
      trainer: 'Emily Rodriguez',
    }
  ];

  // Weekly schedule data
  const schedule: ScheduleItem[] = [
    { id: 1, title: 'HIIT Intensity', day: 'Monday', time: '6:00 AM - 6:45 AM', trainer: 'Alex Johnson', category: 'HIIT' },
    { id: 2, title: 'Strength Foundations', day: 'Monday', time: '8:00 AM - 9:00 AM', trainer: 'Sarah Miller', category: 'Strength' },
    { id: 3, title: 'Cardio Blast', day: 'Monday', time: '5:30 PM - 6:20 PM', trainer: 'James Wilson', category: 'Cardio' },
    { id: 4, title: 'Yoga Flow', day: 'Monday', time: '7:00 PM - 8:15 PM', trainer: 'Maya Patel', category: 'Yoga' },
    
    { id: 5, title: 'CrossFit Challenge', day: 'Tuesday', time: '6:00 AM - 7:00 AM', trainer: 'Alex Johnson', category: 'CrossFit' },
    { id: 6, title: 'Pilates Core', day: 'Tuesday', time: '9:00 AM - 9:55 AM', trainer: 'Emily Rodriguez', category: 'Pilates' },
    { id: 7, title: 'Strength Foundations', day: 'Tuesday', time: '5:30 PM - 6:30 PM', trainer: 'Sarah Miller', category: 'Strength' },
    { id: 8, title: 'HIIT Intensity', day: 'Tuesday', time: '7:00 PM - 7:45 PM', trainer: 'Alex Johnson', category: 'HIIT' },
    
    { id: 9, title: 'Yoga Flow', day: 'Wednesday', time: '6:30 AM - 7:45 AM', trainer: 'Maya Patel', category: 'Yoga' },
    { id: 10, title: 'Cardio Blast', day: 'Wednesday', time: '8:30 AM - 9:20 AM', trainer: 'James Wilson', category: 'Cardio' },
    { id: 11, title: 'Strength Foundations', day: 'Wednesday', time: '5:30 PM - 6:30 PM', trainer: 'Sarah Miller', category: 'Strength' },
    { id: 12, title: 'CrossFit Challenge', day: 'Wednesday', time: '7:00 PM - 8:00 PM', trainer: 'Alex Johnson', category: 'CrossFit' },
    
    { id: 13, title: 'HIIT Intensity', day: 'Thursday', time: '6:00 AM - 6:45 AM', trainer: 'Alex Johnson', category: 'HIIT' },
    { id: 14, title: 'Pilates Core', day: 'Thursday', time: '9:00 AM - 9:55 AM', trainer: 'Emily Rodriguez', category: 'Pilates' },
    { id: 15, title: 'Yoga Flow', day: 'Thursday', time: '5:30 PM - 6:45 PM', trainer: 'Maya Patel', category: 'Yoga' },
    { id: 16, title: 'Cardio Blast', day: 'Thursday', time: '7:15 PM - 8:05 PM', trainer: 'James Wilson', category: 'Cardio' },
    
    { id: 17, title: 'CrossFit Challenge', day: 'Friday', time: '6:00 AM - 7:00 AM', trainer: 'Alex Johnson', category: 'CrossFit' },
    { id: 18, title: 'Strength Foundations', day: 'Friday', time: '8:00 AM - 9:00 AM', trainer: 'Sarah Miller', category: 'Strength' },
    { id: 19, title: 'HIIT Intensity', day: 'Friday', time: '5:30 PM - 6:15 PM', trainer: 'Alex Johnson', category: 'HIIT' },
    { id: 20, title: 'Yoga Flow', day: 'Friday', time: '7:00 PM - 8:15 PM', trainer: 'Maya Patel', category: 'Yoga' },
    
    { id: 21, title: 'Cardio Blast', day: 'Saturday', time: '8:00 AM - 8:50 AM', trainer: 'James Wilson', category: 'Cardio' },
    { id: 22, title: 'Yoga Flow', day: 'Saturday', time: '9:30 AM - 10:45 AM', trainer: 'Maya Patel', category: 'Yoga' },
    { id: 23, title: 'CrossFit Challenge', day: 'Saturday', time: '11:30 AM - 12:30 PM', trainer: 'Alex Johnson', category: 'CrossFit' },
    
    { id: 24, title: 'Pilates Core', day: 'Sunday', time: '9:00 AM - 9:55 AM', trainer: 'Emily Rodriguez', category: 'Pilates' },
    { id: 25, title: 'Strength Foundations', day: 'Sunday', time: '10:30 AM - 11:30 AM', trainer: 'Sarah Miller', category: 'Strength' },
    { id: 26, title: 'HIIT Intensity', day: 'Sunday', time: '4:00 PM - 4:45 PM', trainer: 'Alex Johnson', category: 'HIIT' },
  ];

  // Filter workouts based on category
  const filteredWorkouts = activeCategory === 'All' 
    ? workouts 
    : workouts.filter(workout => workout.category === activeCategory);

  // Filter schedule based on day
  const filteredSchedule = schedule.filter(item => item.day === activeDay);

  // Animation for category tabs
  useEffect(() => {
    const categories = document.querySelectorAll('.category-tab');
    
    gsap.from(categories, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, []);

  return (
    <>
      <HeroSection
        title="Our Workout Programs"
        subtitle="Discover a variety of classes designed to challenge and inspire you at every fitness level"
        ctaText="View Schedule"
        ctaLink="#schedule"
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Workout Programs Section */}
      <section className="section-padding bg-dark-gray">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Workout Programs"
              subtitle="Find the perfect workout program to match your fitness goals and experience level"
            />
          </AnimatedElement>

          {/* Categories Filter */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`category-tab px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-teal text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Workouts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkouts.map((workout, index) => (
              <AnimatedElement key={workout.id} animation="slide-up" delay={index * 0.1}>
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800 h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={workout.image} 
                      alt={workout.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-0 right-0 bg-teal text-white px-3 py-1 m-2 text-sm font-semibold rounded">
                      {workout.level}
                    </div>
                    <div className="absolute top-0 left-0 bg-bright-red text-white px-3 py-1 m-2 text-sm font-semibold rounded">
                      {workout.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{workout.title}</h3>
                    <p className="text-gray-400 mb-4">{workout.description}</p>
                    
                    <div className="mt-auto space-y-3 pt-4 border-t border-gray-800">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-400">
                          <Clock size={16} className="mr-2 text-teal" />
                          <span>{workout.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <User size={16} className="mr-2 text-teal" />
                          <span>{workout.trainer}</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-bright-red text-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Weekly Schedule"
              subtitle="Plan your week with our comprehensive class schedule"
            />
          </AnimatedElement>

          {/* Days Filter */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(day)}
                className={`px-3 py-2 md:px-5 md:py-2 rounded-md text-sm md:text-base font-semibold transition-all ${
                  activeDay === day
                    ? 'bg-golden-yellow text-dark-gray'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule Table */}
          <div className="bg-dark-gray border border-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="px-6 py-4 text-left text-white">Time</th>
                    <th className="px-6 py-4 text-left text-white">Class</th>
                    <th className="px-6 py-4 text-left text-white">Trainer</th>
                    <th className="px-6 py-4 text-left text-white">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchedule.length > 0 ? (
                    filteredSchedule.map((item) => (
                      <tr key={item.id} className="border-t border-gray-800 hover:bg-gray-900/50 transition-colors">
                        <td className="px-6 py-4 text-gray-300">{item.time}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <Dumbbell size={16} className="mr-2 text-teal" />
                            <span className="text-white font-medium">{item.title}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-300">{item.trainer}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.category === 'HIIT' ? 'bg-red-500/20 text-red-500' :
                            item.category === 'Strength' ? 'bg-blue-500/20 text-blue-500' :
                            item.category === 'Cardio' ? 'bg-orange-500/20 text-orange-500' :
                            item.category === 'Yoga' ? 'bg-purple-500/20 text-purple-500' :
                            item.category === 'Pilates' ? 'bg-pink-500/20 text-pink-500' :
                            'bg-green-500/20 text-green-500'
                          }`}>
                            {item.category}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-gray-400">
                        No classes scheduled for this day.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">Want to try a class?</p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-golden-yellow text-dark-gray px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
            >
              Book a Free Trial Class
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-teal">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Benefits of Our Workouts"
              subtitle="Experience the transformative power of our diverse workout programs"
              titleColor="text-white"
              subtitleColor="text-white text-opacity-90"
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedElement animation="slide-up" delay={0.1}>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <Heart size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Improved Cardiovascular Health</h3>
                <p className="text-white text-opacity-80">
                  Our cardio and HIIT workouts strengthen your heart, improve blood circulation, and boost overall endurance.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={0.2}>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <Dumbbell size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Increased Strength & Muscle Tone</h3>
                <p className="text-white text-opacity-80">
                  Build lean muscle mass, improve functional strength, and enhance your physical appearance with our strength programs.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={0.3}>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <Calendar size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Consistency & Accountability</h3>
                <p className="text-white text-opacity-80">
                  Our scheduled classes and supportive community help you stay consistent and accountable to your fitness goals.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workouts;
