
import React from 'react';

const SuccessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 flex flex-col items-center animate-in fade-in duration-700">
      {/* Progress Bar Container */}
      <div className="w-full max-w-md mb-8">
        <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200 shadow-inner">
          <div className="h-full bg-red-600 w-[95%] rounded-full shadow-[0_0_12px_rgba(220,38,38,0.4)] animate-pulse"></div>
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl md:text-4xl font-black text-red-600 text-center mb-10 tracking-tight uppercase">
        ĐÃ GỬI TÀI LIỆU THÀNH CÔNG!
      </h1>

      {/* Instruction Card */}
      <div className="w-full max-w-3xl bg-white rounded-xl border-2 border-blue-500 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden relative mb-12">
        {/* Card Header */}
        <div className="px-6 py-5 flex items-center gap-3">
          <div className="bg-slate-800 p-1.5 rounded text-white shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-blue-700 font-bold uppercase tracking-wide text-base">HƯỚNG DẪN NHẬN TÀI LIỆU</h2>
          
          {/* Decorative Email Icon at top right */}
          <div className="absolute top-2 right-4 opacity-10 hidden md:block pointer-events-none">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
             </svg>
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 pb-10 md:px-10">
          {/* Main Visual Guide Image */}
          <div className="bg-white rounded-2xl mb-8 border border-slate-100 overflow-hidden">
            <img 
              src="https://i.postimg.cc/KzGX5zLD/123123.png" 
              alt="Hướng dẫn 3 bước check mail" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text Instructions List */}
          <div className="space-y-3">
            <div className="flex gap-4 items-center bg-blue-50/40 p-5 rounded-xl border border-blue-50">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</span>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Kiểm tra hộp thư <strong className="text-slate-900 font-bold">Inbox (Hộp thư đến)</strong> hoặc tab <strong className="text-slate-900 font-bold">Promotions (Quảng cáo)</strong>.
              </p>
            </div>
            
            <div className="flex gap-4 items-center bg-blue-50/40 p-5 rounded-xl border border-blue-50">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">2</span>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Nếu không thấy, vui lòng kiểm tra mục <strong className="text-slate-900 font-bold">Spam (Thư rác)</strong>.
              </p>
            </div>

            <div className="flex gap-4 items-start bg-red-50/30 p-5 rounded-xl border border-red-50">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm mt-1">3</span>
              <div className="flex-1">
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  <strong className="text-red-600 font-black uppercase text-xs block mb-1">QUAN TRỌNG:</strong>
                  Nếu mail nằm trong Spam, hãy bấm nút <strong className="text-slate-900 font-bold">"Report not spam"</strong> (Báo cáo không phải spam) để đảm bảo bạn nhận được trọn bộ tài liệu.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-slate-400 text-[11px] italic font-medium">
            * Hệ thống đã gửi email tự động. Có thể mất 1-2 phút để email đến hộp thư của bạn.
          </p>
        </div>
      </div>

      <footer className="w-full text-center border-t border-slate-100 pt-8 pb-12">
        <p className="text-slate-400 text-xs font-medium">© Nguyễn Nam BĐS - All rights reserved</p>
      </footer>
    </div>
  );
};

export default SuccessPage;
