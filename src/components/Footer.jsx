import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-300">About NPCC</Link></li>
              <li><Link to="/services" className="hover:text-gray-300">Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
              <li><Link to="/resources" className="hover:text-gray-300">Industry Resources</Link></li>
              <li><Link to="/publications" className="hover:text-gray-300">Publications</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/membership" className="hover:text-gray-300">Become a Member</Link></li>
              <li><Link to="/volunteer" className="hover:text-gray-300">Volunteer</Link></li>
              <li><Link to="/donate" className="hover:text-gray-300">Make a Donation</Link></li>
              <li><Link to="/advocacy" className="hover:text-gray-300">Join Our Advocacy</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Federal Ministry of Justices, 20, Marina Road, Lagos Island</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>[Insert Phone Number]</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>[Insert Email]</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and updates</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2  text-gray-900"
              />
              <button
                type="submit"
                className="w-full bg-[#7cc3a1] text-white py-2  hover:bg-[#6ab38f]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Nigerian Ports Consultative Council. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;