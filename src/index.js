// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <App />
//   </Router>
// );
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router> {/* Only wrap the app with BrowserRouter here */}
    <App />
  </Router>
);
