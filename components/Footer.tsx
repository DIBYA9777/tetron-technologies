import React from 'react';
import { Link } from 'react-router';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const ADDRESS = "703, DLF Cyber City, IDCO Info Park, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024, India";

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-bold text-white">Tetron</span>
          </div>
          <p className="text-slate-400 leading-relaxed font-medium">
            Empowering next-gen professionals through expert-led training and connecting top talent with industry-leading companies globally.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/programs" className="hover:text-indigo-400 transition-colors flex items-center font-medium"><ChevronRight size={14} className="mr-2" /> Training Programs</Link></li>
            <li><Link to="/development" className="hover:text-indigo-400 transition-colors flex items-center font-medium"><ChevronRight size={14} className="mr-2" /> IT Development</Link></li>
            <li><Link to="/talent-solutions" className="hover:text-indigo-400 transition-colors flex items-center font-medium"><ChevronRight size={14} className="mr-2" /> Talent Solutions</Link></li>
            <li><Link to="/placement" className="hover:text-indigo-400 transition-colors flex items-center font-medium"><ChevronRight size={14} className="mr-2" /> Placement Portal</Link></li>
            <li><Link to="/gallery" className="hover:text-indigo-400 transition-colors flex items-center font-medium"><ChevronRight size={14} className="mr-2" /> Campus Gallery</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Support</h3>
          <ul className="space-y-4 font-medium">
            <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center">Download Brochure <ExternalLink size={14} className="ml-1" /></a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center">Employee Login <ExternalLink size={14} className="ml-1" /></a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Get in Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin className="text-indigo-500 shrink-0 mt-1" size={20} />
              <span className="text-sm font-medium leading-relaxed">{ADDRESS}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-indigo-500 shrink-0" size={20} />
              <span className="font-bold">+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-indigo-500 shrink-0" size={20} />
              <span className="font-bold">admissions@tetron.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-xs font-medium text-center text-slate-500">
        <p>&copy; {currentYear} Tetron Solutions Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;