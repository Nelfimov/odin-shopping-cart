import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import RouteSwitch from './RouteSwitch';
import Navbar from './components/Navbar';
import CartSticky from './components/CartSticky';
import {useState} from 'react';
import items from './assets/items.json';

const ITEMS_LIST = items.items;

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });

  const addToCart = (e) => {
    const addItem = ITEMS_LIST.find((item) => (
      item.id === e.target.parentElement.id));

    setCart((prevState) => {
      let result;
      if (prevState.items.some((item) => item.id === addItem.id)) {
        result = {items: prevState.items.map((item) => item.id === addItem.id ?
          {...item, quantity: item.quantity += 1} :
           item)};
      } else {
        result = {items: prevState.items.concat({...addItem, quantity: 1})};
      }
      result = {...result, total: prevState.total + addItem.price};
      console.log(result);
      return result;
    });
  };

  return (
    <React.StrictMode>
      <Navbar />
      <RouteSwitch addToCart={addToCart} cart={cart}/>
      <CartSticky count={cart.items.length} />
    </React.StrictMode>
  );
};

root.render(<Index />);
