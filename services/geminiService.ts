
import { GoogleGenAI } from "@google/genai";

export const getAIPersonalizedTip = async (topic: string) => {
  try {
    // Kiểm tra an toàn biến môi trường
    const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : "";
    
    if (!apiKey) {
      console.warn("API_KEY is missing. Returning fallback.");
      return "Lắng nghe là nền tảng của sự thấu hiểu khách hàng.";
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Bạn là một chuyên gia đào tạo môi giới BĐS. Hãy đưa ra 1 lời khuyên ngắn gọn (dưới 50 từ) về: ${topic}.`,
    });
    
    return response.text || "Hãy tập trung vào giá trị thay vì giá cả.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hãy luôn đặt mình vào vị trí của khách hàng để tư vấn.";
  }
};
