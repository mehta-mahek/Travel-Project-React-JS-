// Hotel.js
import React from 'react';
import './Hotel.css'; // Import the CSS file for styling

const Hotel = () => {
  return (
    <section className="hotels">
      <div className="container">
        <h2>Stay at Top Hotels</h2>
        <div className="hotel-grid">
          <div className="hotel-card">
            <img src="hotel1.png" alt="Hotel 1" className="hotel-image" />
            <h3>Luxury Beach Resort</h3>
            <p>A luxurious stay by the beach with five-star amenities.</p>
          </div>
          <div className="hotel-card">
            <img src="hotel2.png" alt="Hotel 2" className="hotel-image" />
            <h3>Mountain Retreat</h3>
            <p>Perfect for nature lovers looking for peace and tranquility.</p>
          </div>
          <div className="hotel-card">
            <img src="hotel3.png" alt="Hotel 3" className="hotel-image" />
            <h3>City Center Hotel</h3>
            <p>Stay in the heart of the city with easy access to attractions.</p>
          </div>
          <div className="hotel-card">
            <img src="hotel4.png" alt="Hotel 4" className="hotel-image" />
            <h3>Skyline View</h3>
            <p>Stay in the heart of the city with easy access to attractions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotel;

