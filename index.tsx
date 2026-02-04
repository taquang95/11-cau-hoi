
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical error: Root element not found.");
} else {
  const root = createRoot(rootElement);
  
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Rendering Error:", error);
    rootElement.innerHTML = `
      <div style="padding: 40px; text-align: center; font-family: sans-serif;">
        <h1 style="color: #e11d48;">Hệ thống đang bảo trì</h1>
        <p>Vui lòng quay lại sau vài phút hoặc tải lại trang.</p>
      </div>
    `;
  }
}
