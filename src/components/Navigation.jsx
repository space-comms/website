import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import lightLogo from '../assets/light_logo.png';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../hooks/useTheme';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/technologies' },
    { name: 'Activities', path: '/services' },
    { name: 'Gallery', path: '/media' },
    { name: 'News', path: '/news' },
    { name: 'Join Us', path: '/contact' },
  ];

  const socialLinks = [
    { 
      name: 'Instagram',
      url: 'https://instagram.com/leedsspacecomms',
      icon: Globe
    },
    { 
      name: 'LinkedIn',
      url: 'https://linkedin.com/leedsspacecomms',
      icon: Mail
    }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur border-b border-white/10 dark:border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={theme === 'light' ? lightLogo : logo} 
                alt="Leeds Space Comms Logo" 
                className="w-8 h-8" 
              />
              <span className="font-display font-bold text-xl bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Leeds Space Comms
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-200 hover:text-primary-400 ${
                  location.pathname === item.path
                    ? 'text-primary-400'
                    : 'text-gray-700 dark:text-white/80'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNavItem"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-400"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Social Links & Theme Toggle - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-gray-500 dark:text-white/70 hover:text-primary-400 transition-colors duration-200"
                >
                  <IconComponent className="w-5 h-5" />
                </motion.a>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-white/80 hover:text-primary-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-gray-200 dark:border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block font-medium transition-colors duration-200 hover:text-primary-400 ${
                      location.pathname === item.path
                        ? 'text-primary-400'
                        : 'text-gray-700 dark:text-white/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Social Links & Theme Toggle */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-500 dark:text-white/70 hover:text-primary-400 transition-colors duration-200"
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
