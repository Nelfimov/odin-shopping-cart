import React from 'react';
import CartIcon from '../assets/cart.svg';
import propTypes from 'prop-types';
import '../styles/CartSticky.css';

const CartSticky = ({count}) => {
  return (
    <div className='cart-sticky' id='cart-sticky'>
      <a href="/cart">
        <img src={CartIcon} alt="cart-icon" />
        { count > 0 && (<p className='counter'>{count}</p>)}
      </a>
    </div>
  );
};

CartSticky.propTypes = {
  count: propTypes.number.isRequired,
};

export default CartSticky;
