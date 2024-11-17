import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation Menu */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/hotels">Hotels</Link></li>
            <li><Link to="/flights">Flights</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
          <button>Sign Up</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
