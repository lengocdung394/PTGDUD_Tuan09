import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store1 from '../component/Bai01/Store'; // Store đầu tiên


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store1}>
      <App />
    </Provider>
  </StrictMode>
);