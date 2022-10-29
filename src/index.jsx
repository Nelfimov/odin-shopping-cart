import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import RouteSwitch from './RouteSwitch';
import Navbar from './components/Navbar';
import CartSticky from './components/CartSticky';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Navbar />
      <RouteSwitch />
      <CartSticky />
    </React.StrictMode>,
);
