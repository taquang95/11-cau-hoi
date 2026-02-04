
import React from 'react';

const SchemaMarkup: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://your-domain.vercel.app/#website",
        "url": "https://your-domain.vercel.app/",
        "name": "Nguyễn Nam BĐS - Tài liệu Đào tạo Môi giới",
        "description": "Nền tảng cung cấp tài liệu kỹ năng chuyên sâu cho môi giới Bất Động Sản."
      },
      {
        "@type": "Person",
        "name": "Nguyễn Nam BĐS",
        "jobTitle": "Chuyên gia đào tạo Bất Động Sản",
        "url": "https://your-domain.vercel.app/",
        "image": "https://picsum.photos/id/64/600/600"
      },
      {
        "@type": "Book",
        "name": "11 Câu Hỏi Vàng Trong Giao Dịch BĐS",
        "author": {
          "@type": "Person",
          "name": "Nguyễn Nam BĐS"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "VND",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default SchemaMarkup;
