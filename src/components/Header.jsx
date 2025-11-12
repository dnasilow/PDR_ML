import React from 'react';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-orange-500 flex items-center">
            <span className="mr-2">PDR</span> Point
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/services" className="hover:text-orange-500 transition-colors">Services</a>
          <a href="/about" className="hover:text-orange-500 transition-colors">About Us</a>
          <a href="/knowledge-zone" className="hover:text-orange-500 transition-colors">Knowledge Zone</a>
          <a href="/realizations" className="hover:text-orange-500 transition-colors">Realizations</a>
          <a href="/contact" className="hover:text-orange-500 transition-colors">Contact</a>
          <a href="/get-quote" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-colors flex items-center">
            Get a Quote
          </a>
          <a href="https://facebook.com/pdrpoint" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com/pdrpoint" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
            <Instagram size={20} />
          </a>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

