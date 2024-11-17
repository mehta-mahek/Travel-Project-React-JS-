// Destination.js
import React from 'react';
import './Destination.css'; // Import the CSS file for styling

const Destination = () => {
  return (
    <section className="destinations">
      <div className="container">
        <h2>Explore Top Destinations</h2>
        <div className="destination-grid">
          <div className="destination-card">
            <img src="paris.png" alt="Paris" className="destination-image" />
            <h3>Paris</h3>
            <p>The city of light, perfect for romance and culture lovers.</p>
          </div>
          <div className="destination-card">
            <img src="bali.png" alt="Bali" className="destination-image" />
            <h3>Bali</h3>
            <p>Explore serene beaches and vibrant culture in this Indonesian paradise.</p>
          </div>
          <div className="destination-card">
            <img src="newyork.png" alt="New York" className="destination-image" />
            <h3>New York</h3>
            <p>Experience the pulse of a global city with endless attractions.</p>
          </div>
          <div className="destination-card">
            <img src="india.png" alt="India" className="destination-image" />
            <h3>New York</h3>
            <p>Stand in awe of love eternal, etched in marble at the Taj Mahal.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
