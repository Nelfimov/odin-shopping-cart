import React from 'react';
import items from '../assets/items.json';
import '../styles/ItemsList.css';

const ITEMS_LIST = items.items;

const ItemsList = () => {
  return (
    <div className='items-container'>
      {ITEMS_LIST.map((item) => (
        <div className='item-card' key={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
