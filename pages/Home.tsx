
import React from 'react';
// Changed import from react-router-dom to react-router to resolve missing export errors
import { Link } from 'react-router';
import { ArrowRight, BookOpen, Users, Briefcase, Code, CheckCircle2, Star, PlayCircle, Quote, Trophy, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  const reviews = [
    { name: "Ananya Sharma", role: "Full Stack Developer", company: "Google", text: "The intensive training at Tetron helped me transition from a non-tech background to a FAANG company. The mentors are top-notch!", rating: 5, img: "https://i.pravatar.cc/150?u=ananya" },
    { name: "Rahul Verma", role: "Data Scientist", company: "Microsoft", text: "Exceptional recruitment process. They didn't just find me a job; they found me the right career path.", rating: 5, img: "https://i.pravatar.cc/150?u=rahul" },
    { name: "Sneha Reddy", role: "UI/UX Designer", company: "Amazon", text: "The hands-on projects during the training felt like working in a real production environment. Highly recommended!", rating: 5, img: "https://i.pravatar.cc/150?u=sneha" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 animate-pulse-soft"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50 animate-pulse-soft delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left animate-fade-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold border border-indigo-100">
                <Trophy size={16} className="mr-2 text-yellow-500" />
                #1 Rated Career Agency 2025
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-tight tracking-tight">
                Empowering <br />
                <span className="shimmer-text">Careers & Business</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Premium Training, Expert Staffing, Global Recruitment, and Cutting-edge IT Development solutions under one roof.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/programs" className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all flex items-center justify-center">
                  Start Training <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold hover:bg-slate-50 hover:border-indigo-200 transition-all flex items-center justify-center">
                  Hire Talent
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-up delay-200">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" alt="Students Succeeding" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" />
                <button className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white/90 p-5 rounded-full shadow-2xl transform transition hover:scale-125">
                     <PlayCircle className="w-12 h-12 text-indigo-600" />
                   </div>
                </button>
              </div>
              
              <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-float">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-lg text-green-600"><CheckCircle2 size={24} /></div>
                  <div><p className="text-2xl font-bold text-slate-900">2.5k+</p><p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Success Reviews</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
            <h2 className="text-indigo-600 font-extrabold uppercase text-sm mb-4 tracking-widest">Global Ecosystem</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">Four Pillars of Excellence</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<BookOpen size={32} />} title="IT Training" desc="Skill-based bootcamps for modern tech stacks." link="/programs" color="bg-blue-600" delay="delay-100" />
            <ServiceCard icon={<Users size={32} />} title="Staffing" desc="Rapid on-demand technical talent acquisition." link="/services" color="bg-indigo-600" delay="delay-200" />
            <ServiceCard icon={<Briefcase size={32} />} title="Recruitment" desc="Global executive and permanent hiring." link="/services" color="bg-cyan-600" delay="delay-300" />
            <ServiceCard icon={<Code size={32} />} title="IT Development" desc="High-end custom software & enterprise tools." link="/development" color="bg-violet-600" delay="delay-400" />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 animate-fade-up">
            <div className="max-w-2xl">
              <h2 className="text-indigo-600 font-bold uppercase text-sm mb-4">Success Stories</h2>
              <h3 className="text-4xl font-black text-slate-900">Hear from our <span className="shimmer-text">Champions</span></h3>
            </div>
            <Link to="/placement" className="text-indigo-600 font-bold flex items-center hover:translate-x-3 transition-transform">
              Placement Portal <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, i) => (
              <div key={i} className={`bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-100 hover-card-attractive animate-fade-up delay-${(i+1)*100}`}>
                <Quote className="absolute top-8 right-8 text-indigo-50 opacity-10 w-24 h-24" />
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <img src={rev.img} alt={rev.name} className="w-16 h-16 rounded-2xl object-cover shadow-md" />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-lg">
                      <CheckCircle2 size={12} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900">{rev.name}</h4>
                    <p className="text-sm text-slate-500">{rev.role} @ <span className="text-indigo-600 font-bold">{rev.company}</span></p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic leading-relaxed relative z-10">"{rev.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 animate-fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white shadow-2xl shadow-indigo-300">
            <div className="relative z-10">
              <Sparkles className="mx-auto mb-8 text-cyan-300 animate-pulse-soft" size={48} />
              <h2 className="text-4xl md:text-5xl font-black mb-8 italic">Ready to write your success story?</h2>
              <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">Join thousands of students who have secured their dream jobs through Tetron.</p>
              <Link to="/contact" className="px-12 py-5 bg-white text-indigo-600 rounded-2xl font-bold hover:scale-110 active:scale-95 transition-all text-lg shadow-xl inline-block">
                Apply for Next Batch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc, link, color, delay }: { icon: React.ReactNode, title: string, desc: string, link: string, color: string, delay: string }) => (
  <Link to={link} className={`group p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-2xl hover-card-attractive transition-all duration-300 animate-fade-up ${delay}`}>
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500`}>
      {icon}
    </div>
    <h4 className="text-xl font-black text-slate-900 mb-4">{title}</h4>
    <p className="text-slate-600 leading-relaxed mb-6 font-medium">{desc}</p>
    <div className="flex items-center text-indigo-600 font-black text-sm group-hover:translate-x-2 transition-transform">
      Explore Service <ArrowRight className="ml-2 w-4 h-4" />
    </div>
  </Link>
);

export default Home;
