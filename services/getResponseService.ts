
/**
 * Service gửi dữ liệu tới GetResponse qua GAS Proxy.
 * Đã tối ưu cho việc deploy lên Vercel.
 */

const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwi9N23UruujncuJ6k4HChCxXe7RG_1c4PPMrh5QR7GUbtEl2PGdm4e-FbqK2f0dQ6z/exec';

export const addLeadToGetResponse = async (name: string, email: string) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

  try {
    const response = await fetch(GAS_WEB_APP_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({ name, email }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error('Máy chủ đang bận, vui lòng thử lại sau.');
    }

    const result = await response.json();
    
    if (result.status === 202 || result.status === 201 || result.status === 200) {
      return true;
    } else {
      const body = typeof result.body === 'string' ? JSON.parse(result.body) : result.body;
      if (result.status === 409) {
        throw new Error('Email này đã được đăng ký trước đó.');
      }
      throw new Error(body?.message || 'Có lỗi xảy ra từ phía dịch vụ.');
    }
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('Kết nối quá lâu. Vui lòng kiểm tra mạng và thử lại.');
    }
    
    // Fallback demo cho dev/preview
    if (GAS_WEB_APP_URL.includes('YOUR_SCRIPT_ID')) {
       await new Promise(r => setTimeout(r, 1000));
       return true; 
    }
    
    throw error;
  }
};
