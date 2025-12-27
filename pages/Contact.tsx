import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Briefcase, ShieldCheck, Sparkles, Loader2, AlertCircle, ExternalLink, ChevronRight } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    website: '' // Honeypot field (hidden)
  });
  
  const [status, setStatus] = useState<'idle' | 'drafting' | 'handshake' | 'ready' | 'success' | 'error'>('idle');
  const [aiLoading, setAiLoading] = useState(false);

  const RECIPIENT_EMAIL = "dibyakishorparida@gmail.com";
  const OFFICE_ADDRESS = "703, DLF Cyber City, IDCO Info Park, Infocity Area, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024, India";
  
  // Updated MAP_URL to use a specific query for Bhubaneswar to avoid Delhi confusion
  const MAP_URL = "https://maps.google.com/maps?q=DLF%20Cyber%20City%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha%20751024&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const DIRECTIONS_URL = "https://maps.app.goo.gl/BfBheYN99xX5GVBS6";

  const handleSendMail = () => {
    const subject = encodeURIComponent(`Tetron Inquiry: ${formData.interest} - ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Interest: ${formData.interest}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus('success');
    
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', phone: '', interest: 'IT Training Programs', message: '', website: '' });
    }, 3000);
  };

  const processSecureSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website !== '') return;

    setStatus('handshake');
    
    if (formData.message.length < 20) {
        setAiLoading(true);
        try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `Draft a professional business inquiry to Tetron Solutions for the user ${formData.name} who is interested in ${formData.interest}. Use their notes: "${formData.message}". Keep it under 150 words.`,
          });
          const text = response.text;
          if (text) setFormData(prev => ({ ...prev, message: text }));
        } catch (e) { console.error(e); }
        finally { setAiLoading(false); }
    }

    setTimeout(() => {
        setStatus('ready');
    }, 1500);
  };

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black uppercase tracking-[0.2em] mb-6 border border-indigo-100">
              <Sparkles size={14} className="mr-2" /> Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-none">
              Connect <span className="shimmer-text italic">Securely</span>
            </h1>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Your inquiry will be sent directly to our admissions team at <br className="hidden md:block" />
              <span className="font-bold text-slate-900 border-b-2 border-indigo-200">{RECIPIENT_EMAIL}</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Security & Info */}
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <ShieldCheck className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-black text-slate-900 mb-2">Direct Routing</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 font-medium">We use your device's native mail client to ensure data integrity without middle-man servers.</p>
                <div className="flex items-center space-x-2 text-green-600 font-bold text-xs uppercase tracking-widest">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>End-to-End Verified</span>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                <Sparkles className="absolute -right-4 -top-4 text-white/10 w-32 h-32 group-hover:rotate-12 transition-transform duration-700" />
                <h4 className="text-xl font-bold mb-4 flex items-center relative z-10">
                  <Sparkles className="mr-2 text-cyan-400" size={20} /> Smart Dispatch
                </h4>
                <p className="text-indigo-100/80 text-sm mb-0 relative z-10 leading-relaxed font-medium">Our AI assistant polishes your message for better engagement from our recruitment specialists.</p>
              </div>

              <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600 shrink-0"><MapPin size={22} /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Office Address</p>
                    <p className="text-sm font-bold text-slate-900 leading-tight">{OFFICE_ADDRESS}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200/60 border border-white relative min-h-[600px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-600"></div>
                
                {status === 'ready' ? (
                  <div className="py-12 text-center animate-fade-in">
                    <div className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner">
                      <Mail size={44} className="animate-float" />
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Secure Payload Ready</h3>
                    <p className="text-slate-600 mb-10 max-w-sm mx-auto font-medium text-lg">Your inquiry is processed. Click below to open your mail app and transmit.</p>
                    <button 
                      onClick={handleSendMail}
                      className="px-12 py-6 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-indigo-600 shadow-2xl transition-all flex items-center justify-center mx-auto group active:scale-95"
                    >
                      Dispatch Now <ExternalLink size={24} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <button onClick={() => setStatus('idle')} className="mt-8 text-indigo-600 font-black text-sm hover:underline">Revise information</button>
                  </div>
                ) : status === 'success' ? (
                  <div className="py-12 text-center animate-fade-in">
                    <div className="w-24 h-24 bg-green-500 text-white rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-100">
                      <ShieldCheck size={48} />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tighter">Inquiry Dispatched</h2>
                    <p className="text-slate-600 font-medium">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={processSecureSubmission} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input 
                            required 
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all font-medium"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input 
                            required 
                            type="email" 
                            placeholder="john@example.com" 
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all font-medium"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input 
                            required 
                            type="tel" 
                            placeholder="+91 98765 43210" 
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all font-medium"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-1">I'm interested in</label>
                        <div className="relative">
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <select 
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all font-medium appearance-none"
                            value={formData.interest}
                            onChange={(e) => setFormData({...formData, interest: e.target.value})}
                          >
                            <option>IT Training Programs</option>
                            <option>Staffing Solutions</option>
                            <option>Permanent Recruitment</option>
                            <option>IT Development Services</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Message / Requirements</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                        <textarea 
                          rows={4} 
                          placeholder="Tell us about your requirements..." 
                          className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all font-medium"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                      </div>
                    </div>

                    <input type="text" className="hidden" value={formData.website} onChange={(e) => setFormData({...formData, website: e.target.value})} />

                    <button 
                      type="submit" 
                      disabled={status === 'handshake' || aiLoading}
                      className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-indigo-600 shadow-2xl transition-all flex items-center justify-center group disabled:opacity-50"
                    >
                      {status === 'handshake' || aiLoading ? (
                        <>
                          <Loader2 className="mr-3 animate-spin" size={24} />
                          {aiLoading ? 'AI Polishing...' : 'Processing...'}
                        </>
                      ) : (
                        <>
                          Request Secure Link <ChevronRight size={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Map Section */}
      <section className="relative h-[600px] w-full bg-slate-100 overflow-hidden">
        <iframe 
          title="Tetron Global HQ Location"
          src={MAP_URL}
          className="w-full h-full border-0 transition-all duration-700"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Glassmorphism Floating Map Card */}
        <div className="absolute top-1/2 left-4 md:left-12 lg:left-24 -translate-y-1/2 max-w-sm w-full hidden sm:block">
          <div className="bg-white/80 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl border border-white/50 animate-fade-up">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
              <MapPin size={24} />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-none">Tetron Global HQ</h4>
            <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8">
              {OFFICE_ADDRESS}
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href={DIRECTIONS_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-indigo-600 transition-all group shadow-xl"
              >
                Get Directions <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;