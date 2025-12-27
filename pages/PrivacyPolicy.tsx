
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
        <p className="text-lg">Last updated: October 2024</p>
        <p>At Tetron Solutions, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our website or services.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account, apply for a program, or contact us for support. This may include your name, email, phone number, and professional history.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8">2. How We Use Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and process applications for our training and placement programs.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Data Sharing</h2>
        <p>We do not share your personal data with third parties except as necessary to provide our services, such as with partner companies during recruitment processes, or when required by law.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
