import React from 'react';
import ReactDOM from 'react-dom/client';
import emailjs from '@emailjs/browser';
import App from './App';
import { EJS_PUBLIC_KEY } from './emailjsConfig';
import './index.css';

emailjs.init(EJS_PUBLIC_KEY);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
