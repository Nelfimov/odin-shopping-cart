import React from 'react';
import ItemsList from './ItemsList';
import propTypes from 'prop-types';
import '../styles/App.css';

const App = (props) => {
  const {addToCart} = props;

  return (
    <div className="App" id='App'>
      <ItemsList addToCart={addToCart} />
    </div>
  );
};

App.propTypes = {
  addToCart: propTypes.func.isRequired,
};

export default App;
