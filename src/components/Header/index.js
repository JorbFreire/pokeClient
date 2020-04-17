import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => (
  <header>
    <Link to='/login'>
      <h2>Login</h2>
    </Link>

    <Link to='/'>
      <h1>PokeClient</h1>
    </Link>
  </header>
);

export default Header;
