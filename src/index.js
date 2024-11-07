import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "./styles/fonts.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);