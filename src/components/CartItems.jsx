import React from 'react';
import propTypes from 'prop-types';

const CartItems = (props) => {
  const {items} = props;

  return (
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>Item name</td>
          <td>Quantity</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

CartItems.propTypes = {
  items: propTypes.arrayOf(propTypes.shape).isRequired,
};

export default CartItems;
