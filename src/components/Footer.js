import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-8 mt-16">
      <div className="container mx-auto flex justify-between space-x-16">
        <div>
          <h3 className="text-2xl font-bold mb-4">Explore</h3>
          <ul>
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            <li><a href="/careers" className="hover:text-gray-300">Careers</a></li>
            <li><a href="/destinations" className="hover:text-gray-300">Destinations</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Support</h3>
          <ul>
            <li><a href="/faq" className="hover:text-gray-300">FAQ</a></li>
            <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-300">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
            <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-300">
        <p>&copy; 2024 Travel Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
