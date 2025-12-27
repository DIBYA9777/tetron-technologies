import React, { useState, useMemo } from 'react';
import { Search, Clock, GraduationCap, ChevronRight, BookOpen, Layers, Briefcase, Sparkles } from 'lucide-react';

interface ProgramEntry {
  id: number;
  title: string;
  category: 'SAP Modules' | 'IT Talent Acceleration' | 'Placement & HR';
  duration: string;
  eligibility: string;
}

const programsData: ProgramEntry[] = [
  // SAP Modules
  { id: 1, title: 'SAP MM', category: 'SAP Modules', duration: '3 Months', eligibility: 'B.Tech/BE, MBA (Supply Chain), B.Com/BBA' },
  { id: 2, title: 'SAP PP', category: 'SAP Modules', duration: '3 Months', eligibility: 'B.Tech/BE (Mechanical/Production/Industrial), MBA (Operations)' },
  { id: 3, title: 'SAP FICO', category: 'SAP Modules', duration: '3 Months', eligibility: 'B.Com, M.Com, MBA (Finance), CA, ICWA' },
  { id: 4, title: 'SAP SD', category: 'SAP Modules', duration: '3 Months', eligibility: 'MBA (Sales/Marketing), BBA, B.Com' },
  { id: 5, title: 'SAP HR / HCM', category: 'SAP Modules', duration: '3 Months', eligibility: 'MBA (HR), BBA (HR), MSW (HR)' },
  { id: 6, title: 'SAP EWM', category: 'SAP Modules', duration: '3 Months', eligibility: 'B.Tech/BE, MBA (Logistics), B.Com/BBA' },
  { id: 7, title: 'SuccessFactors', category: 'SAP Modules', duration: '3 Months', eligibility: 'MBA (HR), HR Professionals' },
  { id: 8, title: 'SAP PM', category: 'SAP Modules', duration: '3 Months', eligibility: 'B.Tech/BE (Mechanical, Electrical, Industrial)' },
  { id: 9, title: 'SAP ABAP', category: 'SAP Modules', duration: '3 Months', eligibility: 'B.Tech/BE (CSE/IT), BCA, MCA' },
  { id: 10, title: 'SAP BASIS', category: 'SAP Modules', duration: '3 Months', eligibility: 'B.Tech/BE (CSE/IT), BCA, MCA' },
  { id: 11, title: 'SAP ARIBA', category: 'SAP Modules', duration: '3 Months', eligibility: 'MBA (Supply Chain/Procurement), B.Com, BBA' },
  { id: 12, title: 'SAP Fiori', category: 'SAP Modules', duration: '3 Months', eligibility: 'B.Tech/BE (CSE/IT), BCA, MCA' },

  // Talent Acceleration IT
  { id: 13, title: 'Data Analytics', category: 'IT Talent Acceleration', duration: '4 Months', eligibility: 'B.Tech/BE, BCA, MCA, B.Sc./M.Sc. (CS/IT/Math/Stats)' },
  { id: 14, title: 'Data Science', category: 'IT Talent Acceleration', duration: '6 Months', eligibility: 'B.Tech/BE, MCA, M.Sc. (Math/Stats/CS/IT), B.Sc. (CS/IT/Stats)' },
  { id: 15, title: 'Python with Data Engineer', category: 'IT Talent Acceleration', duration: '4 Months', eligibility: 'B.Tech/BE, MCA, M.Sc. (CS/Stats/IT), B.Sc. IT' },
  { id: 16, title: 'Mainframe', category: 'IT Talent Acceleration', duration: '4 Months', eligibility: 'B.Tech/BE (CSE/IT/ECE), BCA, MCA' },
  { id: 17, title: 'AWS Cloud', category: 'IT Talent Acceleration', duration: '4 Months', eligibility: 'B.Tech/BE (CSE/IT/ECE), BCA, MCA' },
  { id: 18, title: 'Power BI', category: 'IT Talent Acceleration', duration: '3 Months', eligibility: 'B.Tech/BE, BCA, MCA, MBA (Analytics)' },
  { id: 19, title: 'Azure Cloud', category: 'IT Talent Acceleration', duration: '4 Months', eligibility: 'B.Tech/BE (CSE/IT/ECE), MCA, BCA' },
  { id: 20, title: 'Python Full Stack', category: 'IT Talent Acceleration', duration: '3 Months', eligibility: 'B.Tech/BE, BCA, MCA, B.Sc. (IT/CS)' },
  { id: 21, title: 'Java Full Stack', category: 'IT Talent Acceleration', duration: '4 Months', eligibility: 'B.Tech/BE (CSE/IT), MCA, BCA, B.Sc. IT' },
  { id: 22, title: 'Dot Net Fullstack', category: 'IT Talent Acceleration', duration: '4 Months', eligibility: 'B.Tech/BE (CSE/IT), MCA, BCA, B.Sc. IT' },
  { id: 23, title: 'Full Stack Dev (MERN/MEAN)', category: 'IT Talent Acceleration', duration: '3 Months', eligibility: 'B.Tech/BE (CSE/IT), MCA, BCA, B.Sc. IT' },
  { id: 24, title: 'DevOps & Automation Tools', category: 'IT Talent Acceleration', duration: '5 Months', eligibility: 'B.Tech/BE (CSE/IT), MCA, BCA' },
  { id: 25, title: 'Software Testing', category: 'IT Talent Acceleration', duration: '3 Months', eligibility: 'B.Tech/BE (Any branch), BCA, MCA, B.Sc. IT' },
  { id: 26, title: 'Digital Marketing', category: 'IT Talent Acceleration', duration: '3 Months', eligibility: 'Any Graduate (BA, B.Com, B.Sc., BBA, MBA, BCA, MCA, BTech)' },
  { id: 27, title: 'Web Development', category: 'IT Talent Acceleration', duration: '3 Months', eligibility: 'Any Graduate (BA, B.Com, B.Sc., BBA, MBA, BCA, MCA, BTech)' },

  // Train & Deployment / HR
  { id: 28, title: 'Campus to Corporate', category: 'Placement & HR', duration: '8 Months', eligibility: 'B.Tech/MCA continuing students only' },
  { id: 29, title: 'Professional Edge', category: 'Placement & HR', duration: '3 Months', eligibility: 'Any Graduate, Diploma' },
  { id: 30, title: 'Salesforce', category: 'Placement & HR', duration: '4 Months', eligibility: 'B.Tech/BE (CSE/IT/ECE), MCA, BCA' },
  { id: 31, title: 'Tech Bridge Program', category: 'Placement & HR', duration: '4 Months', eligibility: 'B.Tech/MCA with > 3 years gap in education' },
  { id: 32, title: 'HR Foundation Program', category: 'Placement & HR', duration: '3 Months', eligibility: 'Freshers / Entry-level HR Trainees' },
  { id: 33, title: 'Strategic HR & Business Partner', category: 'Placement & HR', duration: '3 Months', eligibility: 'Working Professionals' },
  { id: 34, title: 'Soft Skills & Leadership in HR', category: 'Placement & HR', duration: '3 Months', eligibility: 'Working Professionals' },
  { id: 35, title: 'Payroll & Compliance Focus', category: 'Placement & HR', duration: '3 Months', eligibility: 'Working Professionals' },
  { id: 36, title: 'Recruitment / Talent Acquisition', category: 'Placement & HR', duration: '3 Months', eligibility: 'Freshers / Entry-level HR Trainees' },
  { id: 37, title: 'General HR', category: 'Placement & HR', duration: '3 Months', eligibility: 'Freshers / Entry-level HR Trainees' },
];

const Programs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'SAP Modules' | 'IT Talent Acceleration' | 'Placement & HR'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrograms = useMemo(() => {
    return programsData.filter(program => {
      const matchesCategory = activeCategory === 'All' || program.category === activeCategory;
      const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            program.eligibility.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-indigo-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-800/50 skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-black uppercase tracking-widest mb-6 border border-cyan-400/30">
              <Sparkles size={14} className="mr-2" /> Global Training Standards
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              The Path to <br /> <span className="text-cyan-400 italic">Professional Mastery.</span>
            </h1>
            <p className="text-indigo-100 text-xl font-medium leading-relaxed mb-10">
              Select from our 37 specialized industry-led programs designed for immediate employment and career scaling.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
            {['All', 'SAP Modules', 'IT Talent Acceleration', 'Placement & HR'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-6 py-2.5 rounded-2xl text-sm font-black whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 scale-105' 
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200 border border-transparent hover:scale-105'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search technology or eligibility..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-[1.25rem] outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all font-medium"
            />
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program, index) => (
                <div 
                  key={program.id} 
                  className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 hover:border-indigo-100 transition-all duration-500 flex flex-col min-h-[420px] animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6 duration-500 ${
                      program.category === 'SAP Modules' ? 'bg-indigo-50 text-indigo-600' :
                      program.category === 'IT Talent Acceleration' ? 'bg-cyan-50 text-cyan-600' :
                      'bg-violet-50 text-violet-600'
                    }`}>
                      {program.category === 'SAP Modules' ? <Layers size={28} /> : 
                       program.category === 'IT Talent Acceleration' ? <BookOpen size={28} /> : 
                       <Briefcase size={28} />}
                    </div>
                    <span className="px-3 py-1 bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest rounded-lg border border-slate-100">
                      ID: #{program.id < 10 ? `0${program.id}` : program.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors leading-tight min-h-[3rem]">
                    {program.title}
                  </h3>

                  <div className="space-y-5 flex-grow">
                    <div className="flex items-center text-slate-500 font-bold text-sm">
                      <Clock size={16} className="mr-3 text-indigo-500" />
                      <span>Duration: {program.duration}</span>
                    </div>
                    <div className="flex items-start text-slate-600 text-sm leading-relaxed">
                      <GraduationCap size={18} className="mr-3 text-indigo-500 shrink-0 mt-0.5" />
                      <div className="font-medium">
                        <span className="text-slate-400 text-[10px] block uppercase tracking-wider font-black mb-1">Eligibility</span>
                        <span className="text-slate-900 block font-bold">{program.eligibility}</span>
                      </div>
                    </div>
                  </div>

                  <button className="mt-8 w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-indigo-600 hover:translate-y-[-4px] active:translate-y-0 transition-all flex items-center justify-center group/btn shadow-xl shadow-slate-100">
                    Apply Now <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center bg-white rounded-[3rem] border border-dashed border-slate-300 animate-fade-in">
                <p className="text-slate-400 text-xl font-bold">No matching programs found.</p>
                <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="mt-4 text-indigo-600 font-black hover:underline transition-all">Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Commitment Banner */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="grid grid-cols-10 h-full">
                  {[...Array(50)].map((_, i) => <div key={i} className="border border-white/10 aspect-square"></div>)}
                </div>
             </div>
             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">100% Deployment Guarantee</h2>
                  <p className="text-indigo-200 text-lg max-w-xl font-medium leading-relaxed">Selected programs include guaranteed placement support and corporate relocation across major tech hubs like Bangalore, Hyderabad, and Pune.</p>
                </div>
                <div className="shrink-0 flex items-center space-x-6">
                   <div className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 text-center min-w-[170px] hover:bg-white/10 transition-colors group">
                      <div className="text-4xl font-black text-cyan-400 group-hover:scale-110 transition-transform">94%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-indigo-200 mt-2">Placement Rate</div>
                   </div>
                   <div className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 text-center min-w-[170px] hover:bg-white/10 transition-colors group">
                      <div className="text-4xl font-black text-indigo-400 group-hover:scale-110 transition-transform">300+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-indigo-200 mt-2">Hiring Partners</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;