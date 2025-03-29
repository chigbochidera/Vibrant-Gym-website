
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-3xl font-bold mb-6 inline-block">
              <span className="text-teal">VIBRANT</span>
              <span className="text-bright-red">GYM</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming lives through fitness, health, and community in Tamale, Ghana. Join us on the journey to a better you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-golden-yellow transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/workouts" className="text-gray-400 hover:text-golden-yellow transition-colors">Workouts</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-golden-yellow transition-colors">Membership</Link>
              </li>
              <li>
                <Link to="/trainers" className="text-gray-400 hover:text-golden-yellow transition-colors">Trainers</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-golden-yellow transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-golden-yellow transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Working Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>5:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>6:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Holidays:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-teal shrink-0 mr-3 mt-1" />
                <span className="text-gray-400">123 Fitness Street, Tamale, Ghana</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-teal shrink-0 mr-3" />
                <span className="text-gray-400">+233 53 343 4741</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-teal shrink-0 mr-3" />
                <span className="text-gray-400">info@vibrantgym.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vibrant Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
