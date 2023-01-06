import React from 'react';
import ReactDOM from 'react-dom/client';
// import Navbar from './Components/inc/Navbar';
import {BrowserRouter} from "react-router-dom";
import App from './App';
// import Home from './Components/pages/Home';
// import About from './Components/pages/About';
// import Contact from './Components/pages/Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
);


