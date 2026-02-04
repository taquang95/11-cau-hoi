
import React, { useState } from 'react';
import { FormStatus } from '../types';
import { addLeadToGetResponse } from '../services/getResponseService';

interface LeadFormProps {
  onSuccess?: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === FormStatus.LOADING) return;

    setStatus(FormStatus.LOADING);
    setErrorMessage('');
    
    try {
      await addLeadToGetResponse(name, email);
      setStatus(FormStatus.SUCCESS);
      setEmail('');
      setName('');
      // Gọi callback thành công sau 1 giây để người dùng thấy trạng thái loading
      if (onSuccess) {
        setTimeout(onSuccess, 800);
      }
    } catch (error: any) {
      setStatus(FormStatus.ERROR);
      setErrorMessage(error.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  return (
    <section id="download-form" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container mx-auto px-4 max-w-xl relative z-10">
        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-slate-200/50 border border-white">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Tải tài liệu</h2>
            <p className="text-slate-600 text-lg">
              Nhập thông tin để nhận bộ <span className="font-bold text-blue-600">11 câu hỏi khai thác nhu cầu</span> qua Email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {status === FormStatus.ERROR && (
              <div className="p-4 bg-red-50 text-red-700 rounded-2xl text-sm border border-red-100 flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{errorMessage}</span>
              </div>
            )}
            
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 ml-1">Họ và tên</label>
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Ví dụ: Nguyễn Nam"
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all bg-white text-slate-900"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 ml-1">Email nhận quà</label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="name@email.com"
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all bg-white text-slate-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={status === FormStatus.LOADING}
              className={`group relative w-full py-5 rounded-2xl font-black text-lg text-white shadow-xl transition-all active:scale-[0.98] 
                ${status === FormStatus.LOADING 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20'}`}
            >
              {status === FormStatus.LOADING ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Đang gửi dữ liệu...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  TẢI TÀI LIỆU MIỄN PHÍ
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </button>
            
            <div className="flex items-center justify-center gap-2 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <p className="text-[10px] font-medium uppercase tracking-widest">Powered by Google Cloud & GetResponse</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
