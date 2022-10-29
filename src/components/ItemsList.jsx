import React from 'react';
import items from '../assets/items.json';
import propTypes from 'prop-types';
import '../styles/ItemsList.css';

const ITEMS_LIST = items.items;

const ItemsList = (props) => {
  const {addToCard} = props;

  return (
    <div className='items-container'>
      {ITEMS_LIST.map((item) => (
        <div className='item-card' key={item.id} onClick={addToCard}>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

ItemsList.propTypes = {
  addToCard: propTypes.func.isRequired,
};

export default ItemsList;
