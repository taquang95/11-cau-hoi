
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIPersonalizedTip = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Bạn là một chuyên gia đào tạo môi giới BĐS cao cấp. Hãy đưa ra 1 lời khuyên ngắn gọn (dưới 50 từ) về chủ đề: ${topic}. Giọng văn chuyên nghiệp, truyền cảm hứng.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hãy luôn lắng nghe khách hàng trước khi đưa ra giải pháp.";
  }
};
