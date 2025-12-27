import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const TalentSolutions = lazy(() => import('./pages/Services')); // Keeping filename Services but component will be TalentSolutions
const Development = lazy(() => import('./pages/Development'));
const Programs = lazy(() => import('./pages/Programs'));
const Placement = lazy(() => import('./pages/Placement'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/talent-solutions" element={<TalentSolutions />} />
              <Route path="/development" element={<Development />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/placement" element={<Placement />} />
              {/* <Route path="/gallery" element={<Gallery />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;