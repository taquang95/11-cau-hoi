
import React, { useEffect, useState } from 'react';
import { getAIPersonalizedTip } from '../services/geminiService';

const Author: React.FC = () => {
  const [tip, setTip] = useState('Đang lấy lời khuyên từ chuyên gia...');

  useEffect(() => {
    const fetchTip = async () => {
      const result = await getAIPersonalizedTip("kỹ năng giao tiếp trong bất động sản");
      setTip(result || '');
    };
    fetchTip();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-blue-100 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://picsum.photos/id/64/600/600" 
                alt="Nguyễn Nam BĐS" 
                className="relative rounded-2xl shadow-xl w-full aspect-square object-cover"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">CHỦ TÀI LIỆU</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Nguyễn Nam BĐS</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>Với hơn 10 năm kinh nghiệm trong lĩnh vực Bất Động Sản, Nguyễn Nam đã giúp hơn 2.000 môi giới cải thiện kỹ năng bán hàng và tư vấn.</p>
              <p>Triết lý của Nam là: <strong className="text-slate-900">"Bán hàng không phải là nỗ lực thuyết phục, mà là quá trình thấu hiểu."</strong> Bộ tài liệu này là một phần nhỏ trong quy trình đào tạo thực chiến mà Nam muốn dành tặng cộng đồng Sales BĐS.</p>
            </div>

            <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-xs font-bold text-blue-800 uppercase">Lời khuyên hôm nay (AI Powered)</span>
              </div>
              <p className="text-blue-900 font-medium italic">"{tip}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
