import React from 'react';
import propTypes from 'prop-types';
import CartItems from './CartItems';

const Cart = (props) => {
  const {cart, deleteFromCart} = props;

  return (
    <div id='cart' className='cart-container'>
      <h2>Cart summary</h2>
      <CartItems cart={cart} deleteFromCart={deleteFromCart} />
    </div>
  );
};

Cart.propTypes = {
  cart: propTypes.object.isRequired,
  deleteFromCart: propTypes.func.isRequired,
};

export default Cart;
