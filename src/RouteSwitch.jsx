import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import App from './components/App';
import About from './components/About';
import Cart from './components/Cart';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
