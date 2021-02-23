import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';

const Navbar = ({ numItems }) => {
	return (
		<nav className='Navbar'>
			<figure className='Navbar-logo'>
				<i className='fas fa-gamepad'></i>
			</figure>
			<ul className='Navbar-links'>
				<li className='Navbar-li'>
					<NavLink
						exact
						to='/shopping-cart/'
						className='Navbar-link'
						activeClassName='Navbar-active'
					>
						Home
					</NavLink>
				</li>
				<li className='Navbar-li'>
					<NavLink
						exact
						to='/shopping-cart/shop'
						className='Navbar-link'
						activeClassName='Navbar-active'
					>
						Shop
					</NavLink>
				</li>
			</ul>
			<NavLink
				exact
				to='/shopping-cart/checkout'
				activeClassName='Navbar-active'
			>
				<button className='Navbar-btn'>
					<i className='fas fa-shopping-cart'></i>
					<span className='Navbar-num-items'>{numItems}</span>
				</button>
			</NavLink>
		</nav>
	);
};

export default Navbar;
