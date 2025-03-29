
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form animation
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    
    const formElements = form.querySelectorAll('input, textarea, select, button');
    
    gsap.from(formElements, {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: form,
        start: 'top 80%',
      },
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    try {
      const formData = new FormData(e.currentTarget);
      
      // Add your Web3Forms access key here
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setResult("Message Sent Successfully");
        setSubmitted(true);
        e.currentTarget.reset();
        
        toast({
          title: "Message Sent Successfully",
          description: "We'll get back to you as soon as possible!",
          variant: "default",
        });
        
        // Reset submitted state after a delay
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        console.log("Error", data);
        setResult(data.message);
        
        toast({
          title: "Error Sending Message",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
      
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We're here to answer your questions and help you start your fitness journey"
        ctaText="Get In Touch"
        ctaLink="#contact-form"
        backgroundImage="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Contact Info Section */}
      <section className="section-padding bg-dark-gray">
        <div className="container mx-auto">
          <AnimatedElement animation="fade">
            <SectionTitle
              title="Get In Touch"
              subtitle="Have questions? We're here to help! Reach out using any of the methods below."
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedElement animation="fade" delay={0.1}>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center h-full">
                <div className="w-14 h-14 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} className="text-teal" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Phone</h3>
                <p className="text-gray-400">Call us directly</p>
                <a href="tel:+233533434741" className="text-teal font-medium block mt-2 hover:underline">
                  +233 53 343 4741
                </a>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay={0.2}>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center h-full">
                <div className="w-14 h-14 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} className="text-teal" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Email</h3>
                <p className="text-gray-400">Send us an email</p>
                <a href="mailto:info@vibrantgym.com" className="text-teal font-medium block mt-2 hover:underline">
                  info@vibrantgym.com
                </a>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay={0.3}>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center h-full">
                <div className="w-14 h-14 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} className="text-teal" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Address</h3>
                <p className="text-gray-400">Tamale</p>
                <p className="text-gray-400">Ghana</p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay={0.4}>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center h-full">
                <div className="w-14 h-14 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={24} className="text-teal" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Hours</h3>
                <p className="text-gray-400">Mon-Fri: 5AM - 10PM</p>
                <p className="text-gray-400">Sat: 6AM - 9PM</p>
                <p className="text-gray-400">Sun: 7AM - 8PM</p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedElement animation="slide-right">
              <div className="h-full">
                <SectionTitle
                  title="Send Us a Message"
                  subtitle="Fill out the form and we'll get back to you as soon as possible"
                  centered={false}
                />
                
                <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <input type="hidden" name="subject" value="New message from Vibrant Gym website" />
                  <input type="hidden" name="from_name" value="Vibrant Gym Website" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-dark-gray border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-dark-gray border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full bg-dark-gray border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="membership" className="block text-white font-medium mb-2">Interested in Membership</label>
                      <select
                        id="membership"
                        name="membership"
                        className="w-full bg-dark-gray border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal"
                      >
                        <option value="no-preference">No preference</option>
                        <option value="basic">Basic Plan</option>
                        <option value="premium">Premium Plan</option>
                        <option value="vip">VIP Plan</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-dark-gray border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center w-full md:w-auto px-8 py-3 rounded-full font-bold text-lg transition-all ${
                      submitted
                        ? 'bg-teal text-white'
                        : 'bg-bright-red text-white hover:bg-opacity-90'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <Check size={20} className="mr-2" />
                        Sent Successfully
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  {result && !isSubmitting && !submitted && (
                    <div className="text-red-500 mt-2">{result}</div>
                  )}
                </form>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-left">
              <div className="h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-white font-bold text-2xl mb-6">Location & Directions</h3>
                  
                  <div className="rounded-lg overflow-hidden h-80 mb-8">
                    {/* Google Maps iframe for Tamale, Ghana */}
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.47265772862!2d-0.9076536837044888!3d9.403161543138214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd43c93b58af379%3A0x5ceafb0bc866613c!2sTamale%2C%20Ghana!5e0!3m2!1sen!2sus!4v1636469447096!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title="Vibrant Gym Location"
                    ></iframe>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-bold text-lg mb-3">Our Address</h4>
                      <p className="text-gray-400 flex items-start">
                        <MapPin size={18} className="text-teal mr-2 mt-1 flex-shrink-0" />
                        <span>
                          Vibrant Gym<br />
                          Tamale<br />
                          Ghana
                        </span>
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-bold text-lg mb-3">Getting Here</h4>
                      <p className="text-gray-400 mb-2">
                        Located in Tamale with easy access to public transportation and ample parking.
                      </p>
                      <ul className="text-gray-400 space-y-1">
                        <li className="flex items-start">
                          <span className="text-teal mr-2">•</span>
                          <span>Public Transit: Bus routes available that stop directly in front of our facility</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal mr-2">•</span>
                          <span>Parking: Free parking available for members in our dedicated lot</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal mr-2">•</span>
                          <span>Bike Storage: Secure bike racks available at the entrance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
