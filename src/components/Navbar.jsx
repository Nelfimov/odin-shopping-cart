import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div id='navbar' className='navbar'>
      <div className='left'>
        <h1>Online test shop</h1>
      </div>
      <div className='right'>
        <ul>
          <li className='navbar-item'>
            <a href="/">Home</a>
          </li>
          <li className='navbar-item'>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
