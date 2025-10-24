import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const originalNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Events', path: '/events' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const mobileNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Events', path: '/events' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-red-500/20" style={{ backgroundColor: 'rgba(11, 11, 11, 0.9)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/catalyst%20crew%20logo.jpg?updatedAt=1758447247413"
                alt="Catalyst Crew Logo"
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="text-xl font-heading font-bold">
                <span style={{ color: '#ffffff' }}>Catalyst </span>
                <span style={{ color: '#D71B1B' }}>Crew</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {originalNavItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="px-3 py-2 text-sm font-medium text-white transition-colors duration-200 flex items-center"
                      style={{ color: '#ffffff !important' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#D71B1B';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#ffffff';
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-900 hover:shadow-xl hover:scale-105 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 border border-red-600 hover:border-red-900"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800 transition-colors duration-200"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#D71B1B';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-red-500/20 fixed top-16 left-0 right-0 z-40 overflow-hidden" style={{ backgroundColor: '#1A1A1A', borderColor: 'rgba(215, 27, 27, 0.2)' }}
          >
            <div className="flex flex-col h-full">
              <div className="px-4 py-3 border-b border-red-500/20 flex-shrink-0" style={{ borderColor: 'rgba(215, 27, 27, 0.2)' }}>
                <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <img
                    src="https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/catalyst%20crew%20logo.jpg?updatedAt=1758447247413"
                    alt="Catalyst Crew Logo"
                    className="w-6 h-6 rounded-lg object-contain"
                  />
                  <span className="text-lg font-heading font-bold">
                    <span style={{ color: '#ffffff' }}>Catalyst </span>
                    <span style={{ color: '#D71B1B' }}>Crew</span>
                  </span>
                </Link>
              </div>
              <div className="flex-1 overflow-y-auto px-2 pt-2 pb-3 space-y-1 min-h-0">
                {mobileNavItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className="block px-3 py-2 text-base font-medium text-white hover:bg-black/50 transition-colors duration-200 rounded-md"
                      style={{ color: '#ffffff' }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-red-500/20 flex-shrink-0" style={{ borderColor: 'rgba(215, 27, 27, 0.2)' }}>
                <Link
                  to="/contact"
                  className="block w-full bg-red-600 hover:bg-red-900 hover:shadow-xl hover:scale-105 text-white px-4 py-2 rounded-lg font-medium text-center transition-all duration-300 border border-red-600 hover:border-red-900"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
