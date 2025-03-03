import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="INEYAB SOLICITORS" />
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li className={active === 'home' ? 'active' : ''} onClick={() => { setActive('home'); closeMenu(); }}>
            <Link to="/">Home</Link>
          </li>
          <li className={active === 'services' ? 'active' : ''} onClick={() => { setActive('services'); closeMenu(); }}>
            <Link to="/Services">Services</Link>
          </li>
          <li className={active === 'charges' ? 'active' : ''} onClick={() => { setActive('charges'); closeMenu(); }}>
            <Link to="/Charges">Our Charges</Link>
          </li>
          <li className={active === 'contact' ? 'active' : ''} onClick={() => { setActive('contact'); closeMenu(); }}>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <Link to="/Contact" className="nav-button" onClick={closeMenu}>
          Talk to us
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
