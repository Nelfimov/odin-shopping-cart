import React from 'react';
import propTypes from 'prop-types';

const CartItems = (props) => {
  const {cart, deleteFromCart} = props;
  const {items, total} = cart;

  return (
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>Item name</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Delete?</td>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>
              <button type='button' id={item.id} onClick={deleteFromCart}>
                X
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan='3'>TOTAL</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  );
};

CartItems.propTypes = {
  cart: propTypes.object.isRequired,
  deleteFromCart: propTypes.func.isRequired,
};

export default CartItems;
