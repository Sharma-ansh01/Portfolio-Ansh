import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <Logo />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-base font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
                isActive 
                  ? 'text-purple-600 dark:text-purple-400' 
                  : 'text-gray-800 dark:text-gray-200'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `text-base font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
                isActive 
                  ? 'text-purple-600 dark:text-purple-400' 
                  : 'text-gray-800 dark:text-gray-200'
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-base font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
                isActive 
                  ? 'text-purple-600 dark:text-purple-400' 
                  : 'text-gray-800 dark:text-gray-200'
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-base font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
                isActive 
                  ? 'text-purple-600 dark:text-purple-400' 
                  : 'text-gray-800 dark:text-gray-200'
              }`
            }
          >
            Contact
          </NavLink>
          
          <div className="flex items-center space-x-4 ml-4">
            <a 
              href="https://github.com/Sharma-ansh01" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ansh-sharma-a21915257/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/humpy_07?igsh=MWhvcThjbzh6enlhaw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
            
            <button 
              onClick={toggleTheme} 
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleTheme} 
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 top-[60px] bg-white dark:bg-gray-900 z-40"
        >
          <div className="flex flex-col h-full">
            <nav className="flex flex-col p-6 space-y-6">
              <NavLink 
                to="/" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `text-xl font-medium ${
                    isActive 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-800 dark:text-gray-200'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/projects" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `text-xl font-medium ${
                    isActive 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-800 dark:text-gray-200'
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `text-xl font-medium ${
                    isActive 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-800 dark:text-gray-200'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `text-xl font-medium ${
                    isActive 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-800 dark:text-gray-200'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>
            
            <div className="mt-auto p-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex justify-center space-x-8">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                  className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://instagram.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;