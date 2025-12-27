import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronRight, Zap, Globe, Cpu, ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'IT Development', path: '/development' },
    { name: 'Talent Solutions', path: '/talent-solutions' },
    { name: 'Our Impact', path: '/placement' },
    // { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO AREA - Choose your favorite variant below */}
          <Link to="/" className="group">
            
            {/* VARIANT 1: The Modern Prism (Current Active) */}
            <div className="flex items-center">
              <div className="relative w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-500">
                <div className="w-5 h-5 border-2 border-white/50 rounded-sm rotate-45 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="ml-3 flex flex-col leading-tight">
                <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
                  Tetron<span className="text-indigo-600">.</span>
                </span>
                <span className="text-[10px] font-black text-indigo-500 tracking-[0.3em] uppercase opacity-80">Solutions</span>
              </div>
            </div>

            {/* VARIANT 2: The Connected Node (Uncomment to use)
            <div className="flex items-center">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-indigo-100 rounded-full animate-pulse-soft"></div>
                <Globe className="relative text-indigo-600 w-7 h-7" />
              </div>
              <span className="ml-2 text-2xl font-black text-indigo-950 tracking-tight">TETRON</span>
            </div>
            */}

            {/* VARIANT 3: Modern Minimalist Box (Uncomment to use)
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-slate-900 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl">
                <span className="text-white text-2xl font-black -rotate-3 group-hover:rotate-0 transition-transform">T</span>
              </div>
              <span className="ml-3 text-2xl font-extrabold text-slate-900 tracking-tighter">Tetron</span>
            </div>
            */}

            {/* VARIANT 4: The Tech Pulse (Uncomment to use)
            <div className="flex items-center space-x-2">
              <div className="bg-indigo-600 p-2.5 rounded-full shadow-inner">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-slate-900 italic tracking-tighter">tetron</span>
            </div>
            */}

            {/* VARIANT 5: The Shield (Uncomment to use)
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 border-2 border-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                <ShieldCheck className="text-indigo-600 group-hover:text-white transition-colors" size={20} />
              </div>
              <span className="text-xl font-black text-slate-900 tracking-widest uppercase">Tetron</span>
            </div>
            */}

          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-all hover:text-indigo-600 relative py-1 group/link ${isActive(link.path) ? 'text-indigo-600' : 'text-slate-600'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'}`}></span>
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-2xl text-sm font-black hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95 flex items-center shadow-xl shadow-indigo-100"
            >
              Apply Now
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-50 text-slate-600 hover:text-indigo-600 transition-all shadow-sm"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden fixed inset-x-0 top-[72px] transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-slate-100 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between text-lg font-black p-4 rounded-2xl transition-all ${isActive(link.path) ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              {link.name}
              <ChevronRight size={18} className={`${isActive(link.path) ? 'opacity-100' : 'opacity-0'}`} />
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-xl shadow-2xl shadow-indigo-100"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;