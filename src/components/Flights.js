// src/components/Flights.jsx
import React, { useState } from 'react';
import './Flights.css';

const Flights = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Logic for searching flights based on inputs
    console.log('Searching for flights:', { departure, destination, departureDate });
  };

  return (
    <div className="flights-container">
      <header className="flights-header">
        <h1>Flight Booking</h1>
      </header>
      <main>
        <section className="search-section">
          <h2>Find Your Perfect Flight</h2>
          <form onSubmit={handleSearch}>
            <label htmlFor="departure">Departure:</label>
            <input
              type="text"
              id="departure"
              name="departure"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              placeholder="City or Airport"
            />
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="City or Airport"
            />
            <label htmlFor="departure-date">Departure Date:</label>
            <input
              type="date"
              id="departure-date"
              name="departure-date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
            <button type="submit">Search Flights</button>
          </form>
        </section>
        <section className="flight-results">
          <h2>Available Flights</h2>
          <div className="flight-card">
            <p><strong>Flight 1:</strong> New York to Paris</p>
            <p><strong>Price:</strong> $550</p>
            <button>Book Now</button>
          </div>
          <div className="flight-card">
            <p><strong>Flight 2:</strong> Los Angeles to Tokyo</p>
            <p><strong>Price:</strong> $750</p>
            <button>Book Now</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Flights;
