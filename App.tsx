
import React, { useRef, useState } from 'react';
import Hero from './components/Hero.tsx';
import Benefits from './components/Benefits.tsx';
import LeadForm from './components/LeadForm.tsx';
import Author from './components/Author.tsx';
import Footer from './components/Footer.tsx';
import SchemaMarkup from './components/SchemaMarkup.tsx';
import SuccessPage from './components/SuccessPage.tsx';

const App: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSuccess = () => {
    setIsSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen">
        <SuccessPage />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SchemaMarkup />
      
      {/* Header/Nav - Simple & High Conversion */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-extrabold text-xl text-slate-900">NGUYỄN NAM <span className="text-blue-600">BĐS</span></div>
          <button 
            onClick={scrollToForm}
            className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition-colors"
          >
            Tải tài liệu
          </button>
        </div>
      </nav>

      <main className="pt-16">
        <Hero onScrollToForm={scrollToForm} />
        <Benefits />
        <Author />
        <div ref={formRef}>
          <LeadForm onSuccess={handleSuccess} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
