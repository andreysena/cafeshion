import React from 'react';
import ReactDOM from 'react-dom/client';
import  { BrowserRouter as Router } from 'react-router-dom';
import './assets/fonts/The-Beardy.ttf';
import './assets/fonts/Roboto-Regular.ttf';
import './assets/fonts/Roboto-Light.ttf';
import './assets/fonts/Roboto-Medium.ttf';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);