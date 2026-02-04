
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical error: Root element not found.");
} else {
  const root = ReactDOM.createRoot(rootElement);
  
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Rendering Error:", error);
    rootElement.innerHTML = `<div style="padding: 20px; text-align: center;"><h1>Đã có lỗi xảy ra</h1><p>Vui lòng tải lại trang.</p></div>`;
  }
}
