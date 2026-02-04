
import React from 'react';

interface HeroProps {
  onScrollToForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-blue-400 mb-6 border border-blue-500/20">
          🎁 QUÀ TẶNG MIỄN PHÍ DÀNH CHO SALES BĐS
        </div>
        
        <h1 className="mx-auto max-w-4xl text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Sở Hữu Bí Quyết <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Thấu Hiểu Khách Hàng</span> Chỉ Sau 7 Phút
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed">
          Loại bỏ tình trạng bị khách hàng từ chối. Nhận ngay bộ <strong className="text-white">11 câu hỏi khai thác nhu cầu</strong> giúp bạn làm chủ mọi cuộc đối thoại và chốt đơn hiệu quả hơn.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-5">
          <button
            onClick={onScrollToForm}
            className="group relative flex h-16 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-blue-600 px-10 font-black text-lg text-white transition-all hover:bg-blue-700 active:scale-95 shadow-2xl shadow-blue-600/30 w-full max-w-xs"
          >
            NHẬN TÀI LIỆU NGAY
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
            <span className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User avatar" />
                </div>
              ))}
            </span>
            <span>Hơn 5,000+ sales đã đăng ký thành công</span>
          </div>
        </div>

        <div className="mt-16 flex justify-center float-animation">
            <div className="relative max-w-4xl w-full">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-xl"></div>
                <img 
                    src="https://picsum.photos/id/20/1200/675" 
                    alt="Bản xem trước tài liệu 11 câu hỏi vàng" 
                    className="relative rounded-2xl shadow-2xl border border-white/5 w-full h-auto"
                    // @ts-ignore
                    fetchpriority="high"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
