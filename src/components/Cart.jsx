import React from 'react';
import propTypes from 'prop-types';
import CartItems from './CartItems';

const Cart = (props) => {
  const {items} = props;

  return (
    <div id='cart' className='cart-container'>
      <h2>Cart summary</h2>
      <CartItems items={items} />
    </div>
  );
};

Cart.propTypes = {
  items: propTypes.arrayOf(propTypes.shape),
};

export default Cart;
