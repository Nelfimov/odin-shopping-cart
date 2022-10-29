import React from 'react';
import items from '../assets/items.json';

const ITEMS_LIST = items.items;

const ItemsList = () => {
  return (
    <div id='items-list'>
      {ITEMS_LIST.map((item) => (
        <div className='item-container' key={item.id}>
          <a>{item.name}</a>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
