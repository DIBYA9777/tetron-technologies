import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, Globe, TrendingUp, Award, CheckCircle2, IndianRupee, 
  MapPin, ArrowRight, Sparkles, Building2, Quote, PlayCircle, Heart,
  Lightbulb, ShieldCheck, Target, Zap, Microscope, Star, Coffee, GraduationCap,
  Layers, Briefcase, UserCheck, MessageSquare, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router';

const AnimatedCounter: React.FC<{ end: number; suffix?: string; title: string; color?: string }> = ({ end, suffix = "", title, color = "text-indigo-600" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) setHasStarted(true);
    }, { threshold: 0.5 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      let startTime: number | null = null;
      const duration = 2000;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [hasStarted, end]);

  return (
    <div ref={elementRef} className="text-center group p-10 bg-white border-r border-slate-100 last:border-r-0 lg:border-r md:last:border-r-0 lg:last:border-r-0 hover:bg-slate-50 transition-colors duration-500">
      <div className={`text-5xl md:text-6xl font-black ${color} mb-4 group-hover:scale-110 transition-transform duration-500`}>
        {count}{suffix}
      </div>
      <p className="text-[12px] font-black text-slate-400 uppercase tracking-[0.25em]">{title}</p>
    </div>
  );
};

const OurImpact: React.FC = () => {
  const testimonials = [
    {
      name: "ABHISHEK GHOSH",
      role: "Telesales Relationship Executive",
      content: "I joined Tetron right after my graduation. From the first day, my teacher was very kind and cooperative, and the way she taught us is very appreciable. Then, after completing 70% of my training, I received calls from my Placement Manager, where he helped me a lot in getting the job. With his help, I got placed in IndusInd Bank. Thanks a lot Tetron Solutions Pvt. Ltd. for your help and guidance!",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "GAYATHRI MR",
      role: "Analyst",
      content: "Thank you very much to the Tetron team for improving my technical skills and for improving my interview and communication skills and for always providing me with a bunch of knowledge which has helped me make my career path. I would also like to thank the Placement team for their guidance, for providing me with timely information and for being supportive. I am very sure that no other platform provides this much support from start till you actually land the job. They provide good opportunities and have a great team. They are the best I have ever seen!",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "BINDUSHREE B R",
      role: "Analyst",
      content: "Since our batch began with Tetron, our trainer gave equal importance to all. He taught us front-end and basic Java and I am thankful for this valuable training full of practical sessions with theory. I had a great learning experience! During my interview at Capgemini, the team helped a lot during my interview process and stayed with me through onboarding process as well! I thank the entire Team at Tetron for providing me with this experience and making my career path easier and fruitful! I can now support my family financially and also save for my future. I am definitely going back in few months to upgrade myself with advance courses and become better at my job here! I highly recommend Tetron to all who are serious about building a life and career!",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "DEVARA VIJAY KUMAR",
      role: "Analyst",
      content: "I would like to thank my placement manager for helping me get a job in my dream company. Thank you for being so helpful and kind with your time and energy. I also would like to thank my trainers for their very valuable training. I really enjoyed it and appreciated that they made it fun. I feel much more prepared to deal with uncomfortable issues. Once again, I would like to thank the entire placement team. Without them I wouldn't have been able to achieve my goals.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "KAUSALYA K",
      role: "Analyst",
      content: "Learners were given their own login credentials to access the Tetron online portal, which helped in keeping track of our own activities and progress. It also provided various study resources which armed us with requisite confidence on the subject. Each lesson concluded with an assignment or assessment, that allowed us to gauge our knowledge. In addition to the training, Tetron allowed me to interact with guest lecturers and industry mentors. This has helped me acquire insights on other aspects of a career and job as well. The Mock Interviews conducted during the training, were the most helpful, and helped me to land the job I am at currently.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "NABANIT BORO",
      role: "Analyst",
      content: "My name is Nabanit Boro from Tezpur (Assam). I undertook a microfinance course from Tetron which was referred to me by one of friends. Our Trainer taught us several aspect of finance and the financial sector. Those sessions proved to be very informative and our trainer was very supportive. He tried to enlighten us with appropriate work culture for which I will be forever grateful. I even got placed at IndusInd bank as Telesales Relationship Executive in Tezpur (Assam) because Tetron provided us with various opportunities. I was also guided immensely by the placement team during the process. I am very delighted and satisfied with the service provided to me by Tetron as it has turned my career in a new direction.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <div className="pt-20 bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100/30 rounded-full blur-[120px] animate-pulse-soft"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-[0.3em] mb-12 border border-indigo-100 animate-fade-up">
            <TrendingUp size={14} className="mr-2" /> Global Impact Report 2025
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-10 leading-[0.9] tracking-tighter animate-fade-up">
            Powering <br />
            <span className="text-indigo-600 italic">Global Careers.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed animate-fade-up delay-100 px-4 italic border-l-4 border-indigo-600/20 py-2">
            "Tetron is committed to transforming the workforce through high-impact learning and direct corporate placement, creating economic mobility at scale."
          </p>
        </div>
      </section>

      {/* Our Impact at a Glance */}
      <section className="py-20 bg-white relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Our Impact <span className="text-indigo-600">at a Glance</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-100/50 border border-slate-100 animate-fade-up delay-200">
            <AnimatedCounter end={500} suffix="K+" title="Learners Trained" color="text-slate-900" />
            <AnimatedCounter end={150} suffix="K+" title="Careers Transformed" color="text-indigo-600" />
            <AnimatedCounter end={1} suffix="K+" title="Cities Reached" color="text-slate-900" />
            <AnimatedCounter end={500} suffix="+" title="Hiring Partners" color="text-indigo-600" />
          </div>
        </div>
      </section>

      {/* The Tetron Experience - Animated Pillar Format */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24 animate-fade-up">
            <h2 className="text-indigo-600 font-black uppercase text-xs tracking-[0.4em] mb-4">The Tetron Advantage</h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">The Tetron <span className="text-indigo-600 italic">Experience.</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Experience Pillar 1 */}
            <div className="group space-y-10 animate-fade-up hover:translate-y-[-10px] transition-transform duration-500">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden relative shadow-2xl border border-slate-100">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Learn" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/20 to-transparent"></div>
                <div className="absolute bottom-12 left-10">
                  <div className="w-16 h-16 bg-white text-indigo-600 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-indigo-900/50">
                    <GraduationCap size={32} />
                  </div>
                  <h4 className="text-3xl font-black text-white leading-tight tracking-tighter">Hybrid <br />Learning</h4>
                </div>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed px-6 border-l-2 border-indigo-100">
                Access a blend of industry-led online modules and intensive offline bootcamps. Our curriculum is co-created with Fortune 500 tech leads to ensure real-world readiness.
              </p>
            </div>

            {/* Experience Pillar 2 */}
            <div className="group space-y-10 animate-fade-up delay-100 hover:translate-y-[-10px] transition-transform duration-500">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden relative shadow-2xl border border-slate-100">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Career Support" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/20 to-transparent"></div>
                <div className="absolute bottom-12 left-10">
                  <div className="w-16 h-16 bg-white text-indigo-600 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-indigo-900/50">
                    <UserCheck size={32} />
                  </div>
                  <h4 className="text-3xl font-black text-white leading-tight tracking-tighter">Career <br />Mentorship</h4>
                </div>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed px-6 border-l-2 border-indigo-100">
                Personalized 1-on-1 coaching sessions focused on resume optimization, soft skills, and simulated technical interviews for high-pressure corporate environments.
              </p>
            </div>

            {/* Experience Pillar 3 */}
            <div className="group space-y-10 animate-fade-up delay-200 hover:translate-y-[-10px] transition-transform duration-500">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden relative shadow-2xl border border-slate-100">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Placement" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/20 to-transparent"></div>
                <div className="absolute bottom-12 left-10">
                  <div className="w-16 h-16 bg-white text-indigo-600 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-indigo-900/50">
                    <Briefcase size={32} />
                  </div>
                  <h4 className="text-3xl font-black text-white leading-tight tracking-tighter">Guaranteed <br />Placement</h4>
                </div>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed px-6 border-l-2 border-indigo-100">
                Direct integration into our premium hiring portal. We don't just find you a job; we connect you with the right organizational culture for long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Marquee - LIGHT THEME */}
      <section className="py-24 bg-slate-50 overflow-hidden relative border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 mb-20 relative z-10 text-center">
           <h2 className="text-indigo-600 font-black uppercase text-xs tracking-[0.4em] mb-4">Journey of Success</h2>
           <h3 className="text-4xl md:text-6xl font-black text-slate-900 italic tracking-tighter">Voices of <span className="text-indigo-600">Growth</span></h3>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group">
          <div className="py-12 animate-marquee flex whitespace-nowrap group-hover:pause-animation">
            {[...testimonials, ...testimonials].map((testi, i) => (
              <div 
                key={i} 
                className="mx-6 w-[400px] md:w-[550px] bg-white p-10 rounded-[3rem] border border-slate-200 flex flex-col hover:shadow-2xl transition-all duration-500 whitespace-normal"
              >
                <div className="mb-8">
                  <Quote className="text-indigo-600/10 w-16 h-16 mb-[-2.5rem]" />
                  <p className="text-slate-600 text-lg leading-relaxed font-medium italic relative z-10">
                    "{testi.content}"
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-5">
                  <img src={testi.img} alt={testi.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-500 shadow-xl" />
                  <div>
                    <h5 className="font-black text-slate-900 text-lg tracking-tight">{testi.name}</h5>
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 80s linear infinite;
          }
          .pause-animation {
            animation-play-state: paused;
          }
        `}} />
      </section>

      {/* Hiring Partner Ecosystem */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="text-indigo-600 font-black uppercase text-xs tracking-[0.4em] mb-4">Network of Excellence</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">Our Hiring <span className="shimmer-text">Partners.</span></h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 grayscale opacity-40 hover:opacity-100 transition-opacity duration-1000">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-500 group">
                <div className="font-black text-slate-300 text-xl tracking-tighter uppercase group-hover:text-indigo-600 transition-colors">Partner</div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center animate-fade-up">
            <p className="text-slate-400 font-bold mb-10 tracking-widest uppercase text-xs">...and 480+ other global enterprises</p>
            <Link to="/contact" className="inline-flex items-center bg-indigo-600 text-white px-12 py-6 rounded-2xl font-black text-lg hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-indigo-100">
              Partner with Tetron <ArrowRight size={20} className="ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-indigo-600 rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-2xl animate-fade-up">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <Sparkles className="mx-auto mb-10 text-cyan-300 animate-pulse-soft" size={64} />
              <h3 className="text-5xl md:text-8xl font-black mb-10 italic tracking-tighter leading-none">Scaling Impact. <br />Changing Lives.</h3>
              <p className="text-xl md:text-2xl text-indigo-100 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
                Whether you're an institutional partner or a career seeker, let's create the next global success story together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <Link to="/programs" className="px-16 py-6 bg-white text-indigo-600 rounded-2xl font-black text-xl hover:scale-110 transition-all shadow-2xl shadow-indigo-900/50">
                  Start Learning
                </Link>
                <Link to="/contact" className="px-16 py-6 border-2 border-white/30 text-white rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
                  Hire from Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurImpact;