
// import React, { useState } from 'react';
// import { Maximize2, X } from 'lucide-react';

// const galleryItems = [
//   { id: 1, title: 'Smart Classroom', category: 'Campus', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800' },
//   { id: 2, title: 'Hackathon 2024', category: 'Events', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800' },
//   { id: 3, title: 'Project Discussion', category: 'Life', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800' },
//   { id: 4, title: 'Certification Ceremony', category: 'Events', url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800' },
//   { id: 5, title: 'Innovation Lab', category: 'Campus', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
//   { id: 6, title: 'Mock Interviews', category: 'Life', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800' },
//   { id: 7, title: 'Library Lounge', category: 'Campus', url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800' },
//   { id: 8, title: 'Sports Day', category: 'Events', url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800' },
// ];

// const Gallery: React.FC = () => {
//   const [filter, setFilter] = useState('All');
//   const [selectedImg, setSelectedImg] = useState<string | null>(null);

//   const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter);

//   return (
//     <div className="pt-24 pb-20">
//       <section className="py-20 text-center">
//         <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Experience <span className="text-indigo-600">Tetron
// </span></h1>
//         <p className="text-slate-600 max-w-2xl mx-auto mb-12">A glimpse into our vibrant campus, high-tech labs, and life-changing events.</p>
        
//         <div className="flex justify-center space-x-4 mb-16">
//           {['All', 'Campus', 'Events', 'Life'].map(cat => (
//             <button 
//               key={cat} 
//               onClick={() => setFilter(cat)}
//               className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredItems.map(item => (
//             <div 
//               key={item.id} 
//               className="relative aspect-square overflow-hidden rounded-3xl group cursor-pointer"
//               onClick={() => setSelectedImg(item.url)}
//             >
//               <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
//                 <Maximize2 className="text-white mb-2" size={32} />
//                 <h4 className="text-white font-bold">{item.title}</h4>
//                 <p className="text-indigo-100 text-sm">{item.category}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Lightbox */}
//       {selectedImg && (
//         <div className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedImg(null)}>
//           <button className="absolute top-8 right-8 text-white hover:text-indigo-400 transition-colors">
//             <X size={48} />
//           </button>
//           <img src={selectedImg} className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border-4 border-white/10" alt="Full view" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;
