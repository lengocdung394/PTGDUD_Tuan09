import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';  // Import từ react-dom/client
import './index.css';
import { Provider } from 'react-redux'; // Import Provider từ react-redux
import App from './App';
import store from '../component/Bai01/Store'; // Import store

const root = ReactDOM.createRoot(document.getElementById('root'));  // Tạo root container
root.render(
  <StrictMode>
    <Provider store={store}>  {/* Bọc toàn bộ ứng dụng trong Provider */}
      <App />
    </Provider>
  </StrictMode>
);
