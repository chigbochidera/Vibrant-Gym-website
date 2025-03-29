
import { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import PricingCard from '../components/PricingCard';
import AnimatedElement from '../components/AnimatedElement';

gsap.registerPlugin(ScrollTrigger);

// Types for pricing data
interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  id: number;
  title: string;
  price: number;
  frequency: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
}

const Pricing = () => {
  const [frequency, setFrequency] = useState<'monthly' | 'yearly'>('monthly');

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      title: 'Basic Plan',
      price: frequency === 'monthly' ? 29 : 290,
      frequency: frequency === 'monthly' ? 'month' : 'year',
      features: [
        { text: 'Access to gym equipment', included: true },
        { text: 'Locker room access', included: true },
        { text: 'Fitness assessment', included: true },
        { text: '2 group classes per week', included: true },
        { text: 'Personal training sessions', included: false },
        { text: 'Nutrition consultation', included: false },
        { text: '24/7 gym access', included: false },
        { text: 'Access to premium classes', included: false },
      ],
      ctaText: 'Get Started',
    },
    {
      id: 2,
      title: 'Premium Plan',
      price: frequency === 'monthly' ? 59 : 590,
      frequency: frequency === 'monthly' ? 'month' : 'year',
      features: [
        { text: 'Access to gym equipment', included: true },
        { text: 'Locker room access', included: true },
        { text: 'Fitness assessment', included: true },
        { text: 'Unlimited group classes', included: true },
        { text: '2 personal training sessions/month', included: true },
        { text: 'Nutrition consultation', included: true },
        { text: '24/7 gym access', included: true },
        { text: 'Access to premium classes', included: false },
      ],
      isPopular: true,
      ctaText: 'Choose Premium',
    },
    {
      id: 3,
      title: 'VIP Plan',
      price: frequency === 'monthly' ? 99 : 990,
      frequency: frequency === 'monthly' ? 'month' : 'year',
      features: [
        { text: 'Access to gym equipment', included: true },
        { text: 'Locker room access', included: true },
        { text: 'Fitness assessment', included: true },
        { text: 'Unlimited group classes', included: true },
        { text: '4 personal training sessions/month', included: true },
        { text: 'Nutrition consultation', included: true },
        { text: '24/7 gym access', included: true },
        { text: 'Access to premium classes', included: true },
      ],
      ctaText: 'Choose VIP',
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: 'Is there a joining fee?',
      answer: 'No, we don\'t charge any joining fees or hidden costs. The price you see is the price you pay.'
    },
    {
      question: 'Can I cancel my membership at any time?',
      answer: 'Yes, you can cancel your membership at any time. For monthly plans, we require a 30-day notice. Yearly plans are non-refundable but can be transferred to another person.'
    },
    {
      question: 'Do you offer family discounts?',
      answer: 'Yes, we offer a 10% discount for each additional family member who joins under the same address.'
    },
    {
      question: 'Are there any age restrictions?',
      answer: 'Members must be at least 16 years old. Members aged 16-17 require parental consent and can only access the gym during staffed hours.'
    },
    {
      question: 'Can I freeze my membership?',
      answer: 'Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel at no extra cost.'
    },
    {
      question: 'Do you offer corporate membership plans?',
      answer: 'Yes, we offer special corporate rates for businesses with 5 or more employees joining. Contact us for more details.'
    },
  ];

  return (
    <>
      <HeroSection
        title="Membership Plans"
        subtitle="Choose the perfect membership plan to fit your fitness goals and budget"
        ctaText="View Plans"
        ctaLink="#pricing-plans"
        backgroundImage="https://images.unsplash.com/photo-1639241441355-fad3ddc7150b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Pricing Plans Section */}
      <section id="pricing-plans" className="section-padding bg-dark-gray">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Membership Plans"
              subtitle="Flexible pricing options to suit your fitness journey"
            />
  
            {/* Billing frequency toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-800 p-1 rounded-full inline-flex">
                <button
                  onClick={() => setFrequency('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    frequency === 'monthly'
                      ? 'bg-teal text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setFrequency('yearly')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    frequency === 'yearly'
                      ? 'bg-teal text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Yearly <span className="text-xs ml-1">(Save 20%)</span>
                </button>
              </div>
            </div>
          </AnimatedElement>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                title={plan.title}
                price={plan.price}
                frequency={plan.frequency}
                features={plan.features}
                isPopular={plan.isPopular}
                ctaText={plan.ctaText}
                ctaLink="/contact"
                index={index}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              All plans include access to locker rooms, showers, and basic amenities. <br />
              Not sure which plan is right for you?
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-golden-yellow text-dark-gray px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all group"
            >
              Contact Us For Help
              <ArrowRight size={18} className="ml-2 group-hover:animate-slide-right" />
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Plan Comparison"
              subtitle="Compare our membership plans to find the one that's right for you"
            />
          </AnimatedElement>

          <AnimatedElement animation="fade">
            <div className="bg-dark-gray border border-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="px-6 py-4 text-left text-white">Features</th>
                      <th className="px-6 py-4 text-center text-white">Basic</th>
                      <th className="px-6 py-4 text-center text-white bg-golden-yellow/5 border-x border-golden-yellow/20">Premium</th>
                      <th className="px-6 py-4 text-center text-white">VIP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-800">
                      <td className="px-6 py-4 text-gray-300">Gym Access Hours</td>
                      <td className="px-6 py-4 text-center text-gray-300">5 AM - 10 PM</td>
                      <td className="px-6 py-4 text-center text-white bg-golden-yellow/5 border-x border-golden-yellow/20">24/7 Access</td>
                      <td className="px-6 py-4 text-center text-gray-300">24/7 Access</td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="px-6 py-4 text-gray-300">Group Classes</td>
                      <td className="px-6 py-4 text-center text-gray-300">2 per week</td>
                      <td className="px-6 py-4 text-center text-white bg-golden-yellow/5 border-x border-golden-yellow/20">Unlimited</td>
                      <td className="px-6 py-4 text-center text-gray-300">Unlimited</td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="px-6 py-4 text-gray-300">Personal Training</td>
                      <td className="px-6 py-4 text-center text-gray-300">
                        <X size={20} className="inline-block text-bright-red" />
                      </td>
                      <td className="px-6 py-4 text-center text-white bg-golden-yellow/5 border-x border-golden-yellow/20">
                        2 sessions/month
                      </td>
                      <td className="px-6 py-4 text-center text-gray-300">4 sessions/month</td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="px-6 py-4 text-gray-300">Nutrition Consultation</td>
                      <td className="px-6 py-4 text-center text-gray-300">
                        <X size={20} className="inline-block text-bright-red" />
                      </td>
                      <td className="px-6 py-4 text-center text-white bg-golden-yellow/5 border-x border-golden-yellow/20">
                        <Check size={20} className="inline-block text-teal" />
                      </td>
                      <td className="px-6 py-4 text-center text-gray-300">
                        <Check size={20} className="inline-block text-teal" />
                      </td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="px-6 py-4 text-gray-300">Premium Classes</td>
                      <td className="px-6 py-4 text-center text-gray-300">
                        <X size={20} className="inline-block text-bright-red" />
                      </td>
                      <td className="px-6 py-4 text-center text-white bg-golden-yellow/5 border-x border-golden-yellow/20">
                        <X size={20} className="inline-block text-bright-red" />
                      </td>
                      <td className="px-6 py-4 text-center text-gray-300">
                        <Check size={20} className="inline-block text-teal" />
                      </td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="px-6 py-4 text-gray-300">Guest Passes</td>
                      <td className="px-6 py-4 text-center text-gray-300">1 per month</td>
                      <td className="px-6 py-4 text-center text-white bg-golden-yellow/5 border-x border-golden-yellow/20">2 per month</td>
                      <td className="px-6 py-4 text-center text-gray-300">4 per month</td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="px-6 py-4 text-gray-300">Fitness Assessment</td>
                      <td className="px-6 py-4 text-center text-gray-300">1 per year</td>
                      <td className="px-6 py-4 text-center text-white bg-golden-yellow/5 border-x border-golden-yellow/20">Quarterly</td>
                      <td className="px-6 py-4 text-center text-gray-300">Monthly</td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="px-6 py-4 text-gray-300">Price</td>
                      <td className="px-6 py-4 text-center font-bold text-white">${frequency === 'monthly' ? '29' : '290'}</td>
                      <td className="px-6 py-4 text-center font-bold text-golden-yellow bg-golden-yellow/5 border-x border-golden-yellow/20">
                        ${frequency === 'monthly' ? '59' : '590'}
                      </td>
                      <td className="px-6 py-4 text-center font-bold text-white">${frequency === 'monthly' ? '99' : '990'}</td>
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-center">
                        <a 
                          href="/contact" 
                          className="inline-block bg-teal text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                        >
                          Choose
                        </a>
                      </td>
                      <td className="px-6 py-4 text-center bg-golden-yellow/5 border-x border-golden-yellow/20">
                        <a 
                          href="/contact" 
                          className="inline-block bg-bright-red text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                        >
                          Choose
                        </a>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <a 
                          href="/contact" 
                          className="inline-block bg-teal text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                        >
                          Choose
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-gray">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about our membership plans"
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <AnimatedElement key={index} animation="fade" delay={index * 0.1}>
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Don't see your question answered here?</p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-teal text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal">
        <div className="container mx-auto text-center px-4">
          <AnimatedElement animation="fade">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Fitness Journey?</h2>
            <p className="text-white text-opacity-90 text-lg max-w-3xl mx-auto mb-8">
              Join EnergyFit today and take the first step towards a healthier, stronger you. Sign up now to get your first week free!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-golden-yellow text-dark-gray px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all group"
            >
              Join Now
              <ArrowRight size={20} className="ml-2 group-hover:animate-slide-right" />
            </a>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default Pricing;
