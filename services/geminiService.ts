
import { GoogleGenAI } from "@google/genai";

export const getAIPersonalizedTip = async (topic: string) => {
  try {
    // Chỉ khởi tạo khi cần gọi để tránh lỗi process.env không tồn tại lúc khởi động
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API_KEY is not defined. Using fallback tip.");
      return "Hãy luôn lắng nghe khách hàng trước khi đưa ra giải pháp.";
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Bạn là một chuyên gia đào tạo môi giới BĐS cao cấp. Hãy đưa ra 1 lời khuyên ngắn gọn (dưới 50 từ) về chủ đề: ${topic}. Giọng văn chuyên nghiệp, truyền cảm hứng.`,
    });
    
    return response.text || "Thấu hiểu nhu cầu là chìa khóa của mọi giao dịch thành công.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hãy tập trung vào việc giải quyết nỗi đau của khách hàng thay vì chỉ bán đặc điểm sản phẩm.";
  }
};
