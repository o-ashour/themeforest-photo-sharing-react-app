import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import "uikit/dist/js/uikit.min.js"; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
