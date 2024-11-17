import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Discover Your Next Adventure</h1>
        <p className="hero-subtitle">Find the perfect destination for your next trip</p>
        <div className="search-bar">
          <input type="text" placeholder="Search destinations" className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
