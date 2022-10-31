import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import App from './components/App';
import About from './components/About';
import Cart from './components/Cart';
import propTypes from 'prop-types';

const RouteSwitch = (props) => {
  const {addToCart, deleteFromCart, cart} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} deleteFromCart={deleteFromCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

RouteSwitch.propTypes = {
  addToCart: propTypes.func.isRequired,
  deleteFromCart: propTypes.func.isRequired,
  cart: propTypes.object.isRequired,
};

export default RouteSwitch;
