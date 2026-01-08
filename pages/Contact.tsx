import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  User,
  ShieldCheck,
  Sparkles,
  Loader2,
  ChevronRight,
  MapPin,
  Building2,
  ExternalLink,
  Globe
} from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfKeukFvxJhbC2Uyfplu8ONvCWlvubYbX_x6kv5VNse9pY6Bg/formResponse";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "SAP Modules (MM, PP, FICO, SD, ABAP)",
    message: "",
    website: "", // honeypot for spam protection
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const OFFICE_ADDRESS = "703, DLF Cyber City, IDCO Info Park, Infocity Area, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024, India";
  const MAP_URL = "https://maps.google.com/maps?q=DLF%20Cyber%20City%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha%20751024&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const DIRECTIONS_URL = "https://maps.app.goo.gl/BfBheYN99xX5GVBS6";

  const submitToGoogleForm = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam protection
    if (formData.website !== "") return;

    setStatus("sending");

    const data = new FormData();
    // Using your verified entry IDs
    data.append("entry.1153114280", formData.name);     // Full Name
    data.append("entry.946541693", formData.email);    // Email
    data.append("entry.997273080", formData.phone);    // Phone
    data.append("entry.443181750", formData.interest); // Interest
    data.append("entry.2096253554", formData.message); // Message

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });
      setStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      // Fallback: still show success to user as no-cors usually obscures failure
      setStatus("success");
    }

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "SAP Modules (MM, PP, FICO, SD, ABAP)",
        message: "",
        website: "",
      });
      if (status === "success") setStatus("idle");
    }, 4000);
  };

  return (
    <div className="pt-24 bg-slate-50 min-h-screen font-sans">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-indigo-100">
              <Sparkles size={14} className="mr-2" /> Direct Inquiry Channel
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
              Get in <span className="shimmer-text italic">Touch.</span>
            </h1>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Have a question about our programs or services? Our team is here to help you navigate your professional journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info Panel */}
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <Building2 className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-black text-slate-900 mb-2">Corporate Office</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {OFFICE_ADDRESS}
                </p>
              </div>

              <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden group">
                <Globe className="absolute -right-4 -top-4 text-white/10 w-32 h-32 group-hover:rotate-12 transition-transform duration-700" />
                <h4 className="text-xl font-bold mb-4 flex items-center relative z-10">
                  <Mail className="mr-2 text-indigo-400" size={20} /> Contact Details
                </h4>
                <div className="space-y-3 relative z-10">
                  <p className="flex items-center text-sm font-medium text-slate-300">
                    <Mail size={16} className="mr-2 text-indigo-400" /> admissions@tetron.com
                  </p>
                  <p className="flex items-center text-sm font-medium text-slate-300">
                    <Phone size={16} className="mr-2 text-indigo-400" /> +91 98765 43210
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-[10px] uppercase font-black tracking-widest text-slate-500">
                    <span>Response Time</span>
                    <span className="text-green-400">&lt; 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-indigo-100/40 border border-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
                
                {status === "success" ? (
                  <div className="text-center py-16 animate-fade-in">
                    <div className="w-24 h-24 bg-green-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <ShieldCheck size={48} />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">
                      Message Sent!
                    </h2>
                    <p className="text-slate-600 text-lg font-medium">
                      Thank you for reaching out. We have received your inquiry and will contact you shortly.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-indigo-600 font-black text-sm uppercase tracking-widest hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submitToGoogleForm} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input
                            required
                            placeholder="John Doe"
                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all font-bold text-slate-900"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input
                            required
                            type="email"
                            placeholder="email@example.com"
                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all font-bold text-slate-900"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input
                            required
                            type="tel"
                            placeholder="+91"
                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all font-bold text-slate-900"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Interest Area</label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <select
                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all font-bold text-slate-900 appearance-none"
                            value={formData.interest}
                            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          >
                            <option>SAP Modules (MM, PP, FICO, SD, ABAP)</option>
                            <option>IT Talent Acceleration</option>
                            <option>Placement & HR Training Programs</option>
                            <option>Flexible & Contingent Staffing</option>
                            <option>Global Permanent Recruitment</option>
                            <option>Managed IT Services</option>
                            <option>Software Development</option>
                            <option>Campus to Corporate Partnership</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Your Message</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                        <textarea
                          rows={4}
                          placeholder="How can we help you today?"
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all font-bold text-slate-900"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Honeypot */}
                    <input
                      type="text"
                      className="hidden"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-indigo-600 shadow-2xl transition-all flex items-center justify-center group disabled:opacity-50 active:scale-95"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="animate-spin mr-2" />
                          Sending Inquiry...
                        </>
                      ) : (
                        <>
                          Send Message <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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

      {/* Map Section */}
      <section className="relative h-[550px] w-full bg-slate-100 overflow-hidden group">
        <iframe 
          title="Tetron Global HQ Bhubaneswar"
          src={MAP_URL}
          className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="absolute top-1/2 left-4 md:left-12 lg:left-24 -translate-y-1/2 max-w-sm w-full hidden sm:block">
          <div className="bg-white/90 backdrop-blur-2xl p-10 rounded-[3.5rem] shadow-2xl border border-white/50 animate-fade-up">
            <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
              <MapPin size={28} />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-none">Global Hub</h4>
            <p className="text-slate-600 font-medium text-sm leading-relaxed mb-10">
              Located in Bhubaneswar's tech corridor. Visit us for strategic workforce consultations.
            </p>
            <a 
              href={DIRECTIONS_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-indigo-600 transition-all group shadow-xl"
            >
              Get Directions <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;