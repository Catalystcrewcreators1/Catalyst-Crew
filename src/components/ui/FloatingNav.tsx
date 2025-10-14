import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const FloatingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = useMemo(() => [
    { name: 'Home', path: '/', section: 'home' },
    { name: 'About', path: '/about', section: 'about' },
    { name: 'Services', path: '/services', section: 'services' },
    { name: 'Portfolio', path: '/portfolio', section: 'portfolio' },
    { name: 'Blog', path: '/blog', section: 'blog' },
    { name: 'Contact', path: '/contact', section: 'contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.section);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          // setActiveSection(section); // Commented out since not used
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]); // Fixed dependency array

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        fixed top-6 left-1/2 transform -translate-x-1/2 z-50
        transition-all duration-500 ease-in-out
        ${isScrolled
          ? 'w-[90%] max-w-4xl'
          : 'w-[95%] max-w-6xl'
        }
      `}
    >
      <div className={`
        relative rounded-2xl backdrop-blur-md border transition-all duration-500
        ${isScrolled
          ? 'bg-black/80 border-catalyst-red/30 shadow-2xl shadow-catalyst-red/10'
          : 'bg-black/40 border-white/10'
        }
      `}>
        {/* Glow effect */}
        <motion.div
          animate={isScrolled ? { opacity: 0.6 } : { opacity: 0.3 }}
          className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-catalyst-red/20 to-transparent opacity-30 blur-sm"
        />

        <div className="relative px-6 py-4 z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-catalyst-red to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-10 h-10 border-2 border-catalyst-red/50 rounded-xl"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-catalyst-red to-white bg-clip-text text-transparent">
                  Catalyst
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`
                      relative px-4 py-2 rounded-xl font-medium transition-all duration-300
                      ${location.pathname === item.path
                        ? 'text-catalyst-red bg-catalyst-red/10'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-catalyst-red/20 rounded-xl"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="hidden md:block px-6 py-2 bg-gradient-to-r from-catalyst-red to-red-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-catalyst-red/25 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        block px-4 py-3 rounded-xl font-medium transition-all duration-300
                        ${location.pathname === item.path
                          ? 'text-catalyst-red bg-catalyst-red/10'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full mt-4 px-4 py-3 bg-gradient-to-r from-catalyst-red to-red-600 text-white rounded-xl font-semibold text-center"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default FloatingNav;
