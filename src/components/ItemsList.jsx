import React from 'react';
import items from '../assets/items.json';
import propTypes from 'prop-types';
import '../styles/ItemsList.css';

const ITEMS_LIST = items.items;

const ItemsList = (props) => {
  const {addToCart} = props;

  return (
    <div className='items-container'>
      {ITEMS_LIST.map((item) => (
        <div className='item-card' key={item.id} id={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button type='button' onClick={addToCart}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

ItemsList.propTypes = {
  addToCart: propTypes.func.isRequired,
};

export default ItemsList;
