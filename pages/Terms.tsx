
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
      <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
        <p className="text-lg">Effective Date: January 1, 2024</p>
        <p>By accessing or using the services provided by Tetron Solutions, you agree to be bound by these terms.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Use of Services</h2>
        <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Intellectual Property</h2>
        <p>All content, including curriculum materials, software code, and design elements, provided through our programs are the intellectual property of Tetron Solutions.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Fees and Refunds</h2>
        <p>Program fees are non-refundable unless specified otherwise in the specific program agreement. We reserve the right to change our pricing at any time.</p>
      </div>
    </div>
  );
};

export default Terms;
