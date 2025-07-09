import React, { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginClick = () => {
    window.location.href = 'https://login.circle.so/sign_in?request_host=ai-for-hr.circle.so';
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AI for HR Community</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Features
            </a>
            <a href="#learning" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Learning
            </a>
            <a href="#community" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Community
            </a>
            <Link to="/founding-advisors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Advisors
            </Link>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </a>
            <button 
              onClick={handleLoginClick}
              className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
            >
              Login
            </button>
            <Link to="/join-waitlist" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Join the Waitlist
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Features
              </a>
              <a href="#learning" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Learning
              </a>
              <a href="#community" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Community
              </a>
              <Link to="/founding-advisors" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Advisors
              </Link>
              <a href="#pricing" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Pricing
              </a>
              <button 
                onClick={handleLoginClick}
                className="block w-full text-left border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
              >
                Login
              </button>
              <Link to="/join-waitlist" className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                Join the Waitlist
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;