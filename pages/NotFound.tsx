
import React from 'react';
// Changed import from react-router-dom to react-router to resolve missing export errors
import { Link } from 'react-router';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
      <div className="text-center">
        <div className="text-[12rem] font-black text-indigo-100 leading-none mb-4">404</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-slate-600 mb-10">Oops! The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
          <Home className="mr-2" size={20} /> Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
