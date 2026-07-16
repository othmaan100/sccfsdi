import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'What We Do', href: '/programs' },
    { name: 'Where We Work', href: '/where-we-work' },
    { name: 'Our Impact', href: '/impact' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'News & Resources', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-glass border-b border-[var(--color-sahel-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white p-1 rounded-xl transition-transform duration-300 group-hover:rotate-6 shadow-md flex items-center justify-center w-12 h-12 overflow-hidden border border-[var(--color-sahel-border)]">
              <img src="/images/logo.jpeg" alt="SCCFSDI Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-sahel-dark leading-none block">
                SAHEL CLIMATE CHANGE 
              </span>
              <span className="text-xs text-primary font-medium tracking-wider uppercase block">
                &amp; FOOD SECURITY DEVELOPMENT INITIATIVE (SCCFSDI)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-sahel-dark/80 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/get-involved"
              className="ml-4 bg-accent hover:bg-accent/90 text-sahel-dark font-semibold px-5 py-2.5 rounded-xl transition-smooth shadow-md hover:shadow-lg active:scale-95"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-sahel-dark hover:text-primary hover:bg-primary/5 transition-smooth focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-glass border-b border-[var(--color-sahel-border)] animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-smooth ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10 font-semibold'
                    : 'text-sahel-dark/80 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-3">
              <Link
                to="/get-involved"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-accent hover:bg-accent/90 text-sahel-dark font-semibold py-3 rounded-xl transition-smooth shadow-md"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
