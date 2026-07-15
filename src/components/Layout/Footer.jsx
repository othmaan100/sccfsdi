import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sahel-dark text-white border-t-4 border-primary">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-primary text-white p-2 rounded-xl">
                <Sprout size={24} />
              </div>
              <div>
                <span className="font-display font-bold text-lg leading-none block">
                  SAHEL CLIMATE CHANGE 
                </span>
                <span className="text-xs text-accent font-medium tracking-wider uppercase block">
                  &amp; FOOD SECURITY DEVELOPMENT INITIATIVE (SCCFSDI)
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Dedicated to reversing land degradation, securing food resources, and supporting resilient communities across Northern Nigeria and the Sahel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Programs & Operations', href: '/programs' },
                { name: 'Where We Work', href: '/where-we-work' },
                { name: 'Impact Case Studies', href: '/impact' },
                { name: 'Careers & Volunteering', href: '/get-involved' },
                { name: 'Latest Field News', href: '/news' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/75 hover:text-accent text-sm transition-smooth flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-accent">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-white/75">
                <MapPin size={18} className="text-primary mr-3 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">HQ Office:</strong>
                  No.124 Adamu Jajere Layout, Tudun-Wada, Dogo- Nini Potiskum LGA, Yobe State.
                </div>
              </li>
              <li className="flex items-start text-sm text-white/75">
                <MapPin size={18} className="text-primary mr-3 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Yobe Field Office:</strong>
                  Potiskum LGA, Yobe State, Nigeria
                </div>
              </li>
              <li className="flex items-start text-sm text-white/75">
                <MapPin size={18} className="text-primary mr-3 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Jigawa Office Address:</strong>
                  No. 07 Ibrahim Aminu Jaga Street,
                  Zango Quarters. Gumel Jigawa State.
                  732101 Postal code.
                </div>
              </li>
              <li className="flex items-center text-sm text-white/75">
                <Phone size={18} className="text-primary mr-3 shrink-0" />
                <span>0703 680 3864, 0803 708 4353</span>
              </li>
              <li className="flex items-center text-sm text-white/75">
                <Mail size={18} className="text-primary mr-3 shrink-0" />
                <span>sahelccfsdi@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-accent">Stay Informed</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Subscribe to receive latest reports, publications, and updates from our field offices.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/10 text-white placeholder-white/50 px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-primary text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/95 text-white font-semibold py-3 rounded-xl transition-smooth shadow-md text-sm active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-black/25 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 space-y-4 md:space-y-0">
          <div>
            &copy; {currentYear} SAHEL CLIMATE CHANGE &amp;FOOD SECURITY DEVELOPMENT INITIATIVE (SCCFSDI). All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-smooth">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
