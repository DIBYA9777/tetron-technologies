import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, Briefcase, CheckCircle2, ArrowRight, Zap, Target, Globe, 
  ShieldCheck, Sparkles, TrendingUp, Cpu, Factory, HeartPulse, 
  Landmark, Microscope, Truck, Building2, Quote, Boxes, MousePointer2,
  Settings, ClipboardList, Headset, ExternalLink, FileJson, Layers
} from 'lucide-react';
import { Link } from 'react-router';

// Reusable Counter Component for the "Scroll to Update" effect
const AnimatedCounter: React.FC<{ end: number; suffix?: string; title: string }> = ({ end, suffix = "", title }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      let startTime: number | null = null;
      const duration = 2000; // 2 seconds animation

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [hasStarted, end]);

  return (
    <div ref={elementRef} className="text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-500">
      <div className="text-5xl md:text-6xl font-black text-indigo-600 mb-2 tracking-tighter">
        {count}{suffix}
      </div>
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{title}</p>
    </div>
  );
};

const TalentSolutions: React.FC = () => {
  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-indigo-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-800 skew-x-[-15deg] translate-x-1/4 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-black uppercase tracking-[0.2em] mb-8 border border-cyan-400/30">
              <Sparkles size={14} className="mr-2" /> Strategic Workforce Partner
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Finding The Right Talent Is <br />
              <span className="text-cyan-400 italic font-medium">Humanly Possible.</span>
            </h1>
            <p className="text-indigo-100 text-xl font-medium leading-relaxed mb-12 max-w-2xl">
              We help organizations develop and maintain agility in their workforces, enabling them to respond to changing business demands and market fluctuations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-10 py-5 bg-white text-indigo-900 rounded-2xl font-black text-lg hover:bg-cyan-50 transition-all shadow-2xl flex items-center justify-center">
                Hire Talent Now <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats with Scroll Update */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={10} suffix="k+" title="Global Placements" />
            <AnimatedCounter end={500} suffix="+" title="Enterprise Clients" />
            <AnimatedCounter end={98} suffix="%" title="Satisfaction Rate" />
            <AnimatedCounter end={24} suffix="/7" title="Dedicated Support" />
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mb-20 animate-fade-up">
            <h2 className="text-indigo-600 font-black uppercase text-xs tracking-[0.3em] mb-4">Domain Knowledge</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">Areas of <span className="shimmer-text">Expertise</span></h3>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              With a deep knowledge of the skills each sector demands, our consultants and talent agents understand business challenges now and of the future. Combined with our talent retention and upskilling programs, our expertise will help you achieve your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Business Professionals", 
                icon: <Users />, 
                desc: "From customer facing jobs such as call centers or sales to specialized roles in HR or Marketing, access our growing network of motivated and skilled professionals to keep your organization running smoothly." 
              },
              { 
                title: "Engineering", 
                icon: <Cpu />, 
                desc: "The acceleration of your automation plan depends on your ability to access skilled talent who can implement and operate those technologies. Tetron has the expertise and community to connect you with the talent you need." 
              },
              { 
                title: "Finance", 
                icon: <Landmark />, 
                desc: "Employment in the finance and accounting sector continues to rise while many organizations experience a shrinking talent pool. We identify, re-skill and retain the talent organizations need." 
              },
              { 
                title: "Life Science", 
                icon: <Microscope />, 
                desc: "With a deep understanding of key industries, our consultants can quickly identify the expert talent you need, from lab technicians to healthcare professionals. Tapping existing and new talent pools, we deliver specialized talent to fill those in-demand roles." 
              },
              { 
                title: "Supply Chain", 
                icon: <Truck />, 
                desc: "One small change in the market can cause reverberating effects throughout your supply chain. Organizations rely on Tetron to gain agility and cost control on business-critical projects." 
              },
              { 
                title: "Human Resources", 
                icon: <ShieldCheck />, 
                desc: "Strategic HR leadership and talent acquisition specialists tailored to your organizational culture and long-term retention goals." 
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  {/* Fixed TypeScript error by casting to React.ReactElement<any> to allow the 'size' prop which exists on Lucide icons */}
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Services & Project Delivery - NEW SECTION */}
      <section className="py-32 bg-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="text-indigo-600 font-black uppercase text-xs tracking-[0.3em] mb-4">Operational Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Managed Services & <span className="shimmer-text">Project Delivery</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<ClipboardList size={28} />}
              title="Project Management"
              desc="Comprehensive oversight of IT and enterprise initiatives, ensuring milestones are met through rigorous planning, resource allocation, and quality control."
            />
            <ServiceCard 
              icon={<Settings size={28} />}
              title="Supply & AMC Services"
              desc="End-to-end supply of IT-es products combined with professional Annual Maintenance Contracts to ensure your technological infrastructure remains resilient."
            />
            <ServiceCard 
              icon={<Headset size={28} />}
              title="Help-Desk Solution"
              desc="Scalable L1/L2 technical support infrastructure tailored to provide rapid resolution for your workforce, minimizing downtime and optimizing performance."
            />
            <ServiceCard 
              icon={<ExternalLink size={28} />}
              title="Application Roll-Out"
              desc="Strategic handholding and support during critical application deployments, ensuring seamless transition and high user adoption rates across your organization."
            />
            <ServiceCard 
              icon={<FileJson size={28} />}
              title="SAP Specialization"
              desc="Expert-led SAP Implementation, Migration, and BPC (Business Planning and Consolidation) support to streamline your enterprise financial and operational processes."
            />
            <ServiceCard 
              icon={<Layers size={28} />}
              title="Infrastructure Support"
              desc="High-availability managed services for server environments, cloud migration, and network security monitoring for global enterprise networks."
            />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
            <div className="animate-fade-up">
              <h3 className="text-indigo-600 font-black uppercase text-xs tracking-widest mb-4">Capability Spectrum</h3>
              <h4 className="text-5xl font-black mb-10 leading-tight">Our <span className="text-indigo-600">Services</span></h4>
              <p className="text-slate-600 text-lg font-medium leading-relaxed mb-12">
                We help organizations develop and maintain agility in their workforces, enabling them to respond to changing business demands and market fluctuations, and keep pace as the future of work evolves.
              </p>
              
              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><Target size={28} /></div>
                  <div>
                    <h5 className="text-xl font-black text-slate-900 mb-2">Direct Hire</h5>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                      We take great pride in having built a strong community network of great workers. Our recruitment process has been honed over decades of experience, so we know how to match the right person to fill your needs—and we can hire them directly into your team.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><Zap size={28} /></div>
                  <div>
                    <h5 className="text-xl font-black text-slate-900 mb-2">Flexible Staffing</h5>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                      Whether you need a single experienced professional for a short-term project or 50 bilingual representatives for a new initiative, Tetron can provide the talent you need. Our contingent workforce solutions give you increased flexibility to weather seasonal highs and lows.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><Building2 size={28} /></div>
                  <div>
                    <h5 className="text-xl font-black text-slate-900 mb-2">Onsite Management</h5>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                      Our onsite services drive organizational performance, seamlessly integrating contingent workforce solutions into your company culture and processes. Faster access to highly qualified candidates so you can focus on achieving your business objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-up delay-200">
               <div className="rounded-[4rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Workforce Collaboration" 
                    className="w-full h-[650px] object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-900/10"></div>
               </div>
               <div className="absolute -bottom-10 -right-10 bg-indigo-600 p-12 rounded-[3rem] text-white shadow-2xl max-w-xs border-8 border-white">
                  <QuoteIcon className="w-12 h-12 mb-6 opacity-30" />
                  <p className="text-lg font-bold italic mb-6">"Tetron's contract-to-permanent solution let us assess fit before committing to a hiring decision."</p>
                  <p className="text-xs font-black uppercase tracking-widest text-indigo-200">— Operations Lead, Tech Global</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-4 bg-slate-900">
        <div className="max-w-5xl mx-auto text-center animate-fade-up">
           <h2 className="text-indigo-400 font-black uppercase text-xs tracking-[0.5em] mb-12">The Global Philosophy</h2>
           <p className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
             Finding The Right Talent Is <br />
             <span className="text-indigo-500">Humanly Possible.</span>
           </p>
           <div className="mt-20 flex flex-wrap justify-center gap-16 grayscale opacity-40">
             <div className="text-white font-black text-2xl tracking-tighter flex items-center gap-2"><Globe size={20} /> SAP</div>
             <div className="text-white font-black text-2xl tracking-tighter flex items-center gap-2"><Cpu size={20} /> ORACLE</div>
             <div className="text-white font-black text-2xl tracking-tighter flex items-center gap-2"><Boxes size={20} /> ADOBE</div>
             <div className="text-white font-black text-2xl tracking-tighter flex items-center gap-2"><Building2 size={20} /> INTUIT</div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-indigo-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <MousePointer2 className="mx-auto mb-8 text-cyan-300 animate-bounce" size={56} />
              <h3 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter">Optimize Your Workforce <br /> Strategy Today.</h3>
              <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto font-medium">
                Connect with our expert talent consultants to solve your most complex hiring challenges.
              </p>
              <Link to="/contact" className="px-16 py-6 bg-white text-indigo-600 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl inline-block">
                Consult with Experts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:border-indigo-100 transition-all duration-500 group animate-fade-up">
    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
      {icon}
    </div>
    <h4 className="text-xl font-black text-slate-900 mb-4">{title}</h4>
    <p className="text-slate-500 font-medium text-sm leading-relaxed">{desc}</p>
  </div>
);

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H3.017V21H5.017Z" />
  </svg>
);

export default TalentSolutions;
