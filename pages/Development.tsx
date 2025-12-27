
import React from 'react';
import { Laptop, Smartphone, Cloud, Shield, Database, Monitor, ChevronRight, Check, Rocket, Cpu, Layers } from 'lucide-react';

const Development: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10 animate-fade-up">
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter">
              Build <br /><span className="shimmer-text">Modern Apps</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed font-medium">
              We translate complex business logic into sleek, high-performance software.
            </p>
            <button className="px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black hover:bg-indigo-600 hover:scale-110 active:scale-95 transition-all flex items-center shadow-2xl">
              Start Project <Rocket className="ml-3" size={24} />
            </button>
          </div>
          <div className="relative animate-fade-up delay-200">
             <div className="bg-indigo-600 rounded-[4rem] p-3 overflow-hidden shadow-2xl transition-transform duration-1000">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Tech Dev" className="rounded-[3.2rem] w-full" />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 animate-float">
                <div className="text-5xl font-black text-indigo-600">50+</div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Live Enterprises</div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24 animate-fade-up">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Our Tech Stack</h2>
            <p className="text-slate-500 text-lg font-medium">Powering the next generation of digital products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <DevServiceCard 
              icon={<Laptop className="w-10 h-10" />}
              title="Web Apps"
              desc="Next.js & React ecosystems for ultimate speed."
            />
            <DevServiceCard 
              icon={<Smartphone className="w-10 h-10" />}
              title="Mobile First"
              desc="Flutter and Native development for iOS/Android."
            />
            <DevServiceCard 
              icon={<Cloud className="w-10 h-10" />}
              title="Cloud Native"
              desc="Serverless & Microservices on AWS/GCP."
            />
            <DevServiceCard 
              icon={<Shield className="w-10 h-10" />}
              title="Cyber Ops"
              desc="Military-grade security and vulnerability testing."
            />
            <DevServiceCard 
              icon={<Database className="w-10 h-10" />}
              title="Data Systems"
              desc="Modern warehousing and real-time streaming."
            />
            <DevServiceCard 
              icon={<Monitor className="w-10 h-10" />}
              title="Design Sys"
              desc="Atomic design for consistent brand experience."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[5rem] p-16 lg:p-32 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10 items-center">
              <div>
                <h2 className="text-5xl font-black mb-12 tracking-tighter">The Agile Lifecycle</h2>
                <div className="space-y-12">
                  <ProcessStep number="01" title="Blueprint" desc="Requirement mapping and system architecture." />
                  <ProcessStep number="02" title="Sprint Build" desc="Iterative development with bi-weekly updates." />
                  <ProcessStep number="03" title="Hardening" desc="Intense QA and stress testing for stability." />
                  <ProcessStep number="04" title="Launch" desc="Automated deployment and CI/CD pipelines." />
                </div>
              </div>
              <div className="hidden lg:block animate-fade-up">
                 <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-6">
                      <div className="h-64 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-[3rem] shadow-2xl animate-float flex items-center justify-center"><Cpu size={48} className="opacity-50" /></div>
                      <div className="h-48 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 flex items-center justify-center"><Layers size={48} className="opacity-50" /></div>
                   </div>
                   <div className="space-y-6 mt-16">
                      <div className="h-48 bg-cyan-500/20 backdrop-blur-md rounded-[3rem] border border-cyan-500/20 flex items-center justify-center"><Check size={48} className="text-cyan-400" /></div>
                      <div className="h-64 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-[3rem] shadow-2xl animate-float delay-500 border border-white/5 flex items-center justify-center"><Rocket size={48} className="text-indigo-500" /></div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const DevServiceCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-12 bg-white rounded-[3rem] shadow-lg border border-slate-50 hover-card-attractive transition-all group animate-fade-up">
    <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl shadow-slate-100">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium">{desc}</p>
  </div>
);

const ProcessStep = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="flex space-x-8 group">
    <div className="text-5xl font-black text-indigo-500/30 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-500">{number}</div>
    <div>
      <h4 className="text-2xl font-bold mb-2">{title}</h4>
      <p className="text-slate-400 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Development;
