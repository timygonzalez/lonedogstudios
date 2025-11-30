import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import Logo from './Logo';

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-sm font-medium transition-colors duration-200 ${
        isActive ? 'text-brand-blue' : 'text-slate-600 hover:text-brand-navy'
      }`}
    >
      {children}
    </Link>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex-shrink-0">
              <Logo className="h-10" />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 items-center">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
              <Link 
                to="/contact" 
                className="bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm hover:shadow-md"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Gradient Line */}
        <div className="h-1 w-full bg-gradient-to-r from-brand-blue to-brand-green"></div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 shadow-lg z-40">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <Link 
                to="/" 
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/pricing" 
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-3 mt-4 text-center rounded-md text-base font-medium bg-brand-blue text-white hover:bg-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-600 pt-16 pb-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              {/* Use colored logo instead of white/light */}
              <Logo className="h-8 mb-4" />
              <p className="text-slate-500 text-sm leading-relaxed">
                Websites for entrepreneurs. We build clean, modern, and effective digital experiences that help your business grow.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-brand-navy mb-4">Studio</h3>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="/about" className="hover:text-brand-blue transition-colors">Our Story</Link></li>
                <li><Link to="/pricing" className="hover:text-brand-blue transition-colors">Services & Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Start a Project</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-brand-navy mb-4">Connect</h3>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:timygonzalez@gmail.com" className="hover:text-brand-blue transition-colors">timygonzalez@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; {currentYear} Lone Dog Studios. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built in React & Tailwind</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;