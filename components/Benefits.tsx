
import React from 'react';

const benefits = [
  {
    title: "Hiểu Thấu Khách Hàng",
    description: "Khám phá nỗi sợ và khao khát thực sự của khách hàng sau mỗi câu hỏi.",
    icon: "🎯"
  },
  {
    title: "Tiết Kiệm Thời Gian",
    description: "Loại bỏ khách hàng không tiềm năng chỉ sau 7 phút trò chuyện đầu tiên.",
    icon: "⏳"
  },
  {
    title: "Chuyên Nghiệp Hóa",
    description: "Xây dựng hình ảnh chuyên gia thay vì người chào mời săn đuổi khách hàng.",
    icon: "💼"
  },
  {
    title: "Tăng Tỷ Lệ Chốt",
    description: "Đưa ra giải pháp đúng 'tâm lý' giúp khách hàng dễ dàng đưa ra quyết định.",
    icon: "📈"
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl mb-4 tracking-tight">Giá Trị Bạn Nhận Được</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Tài liệu thực chiến giúp bạn thay đổi hoàn toàn cách tiếp cận khách hàng tiềm năng.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
