// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Hotels from './components/Hotels';
import Footer from './components/Footer';
import Flights from './components/Flights';
import Blog from './components/Blog';

const App = () => {
  return (
    <>
      <Header />
      <Routes>  {/* Set up Routes here */}
        <Route path="/" element={<Hero />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
