import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/team', label: 'Our Team' },
    { to: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Dent Master <span className="text-orange-500">Aberdeenshire</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-orange-500 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleLinkClick}
                  className="text-gray-700 hover:text-orange-600 transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors text-center"
              >
                Get a Quote
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-2 text-sm text-gray-600">
                  <a href="tel:+447763459923" className="flex items-center hover:text-orange-600">
                    <Phone size={16} className="mr-2" />
                    +44 7763459923
                  </a>
                  <a href="mailto:Dent.Master.Aberdeenshire@gmail.com" className="flex items-center hover:text-orange-600">
                    <Mail size={16} className="mr-2" />
                    Dent.Master.Aberdeenshire@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

