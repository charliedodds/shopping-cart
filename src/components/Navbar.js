import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <figure className='Navbar-logo'>
        <i className='fas fa-gamepad'></i>
      </figure>
      <ul className='Navbar-links'>
        <li className='Navbar-li'>
          <NavLink
            exact
            to='/'
            className='Navbar-link'
            activeClassName='Navbar-active'
          >
            Home
          </NavLink>
        </li>
        <li className='Navbar-li'>
          <NavLink
            exact
            to='/shop'
            className='Navbar-link'
            activeClassName='Navbar-active'
          >
            Shop
          </NavLink>
        </li>
      </ul>
      <button className='Navbar-btn'>
        <i className='fas fa-shopping-cart'></i>
        <span className='Navbar-num-items'>0</span>
      </button>
    </nav>
  );
};

export default Navbar;
