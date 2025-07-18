// Navbar.js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-white/50 font-serif text-xl">A&H</a>
            
            <div className="hidden md:flex items-center space-x-8">
              {/* <a href="/our-story" className="text-white/50 hover:text-secondary transition-colors">Our Story</a> */}
              <a href="/#details" className="text-white/50 hover:text-secondary transition-colors">Details</a>
              <a href="/#gallery" className="text-white/50 hover:text-secondary transition-colors">Gallery</a>
              {/* <a href="#registry" className="text-white/50 hover:text-secondary transition-colors">Registry</a> */}
              <a href="/#travel" className="text-white/50 hover:text-secondary transition-colors">Travel</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScAzGSYder59TqJilN9iesT_NJELBSv6D6K3dpE255vYkOaBQ/viewform?usp=header" className="bg-primary text-white px-6 py-2 rounded-full text-lg">
                RSVP
              </a>
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white/50"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-16 md:hidden"
          >
            <div className="flex flex-col items-center space-y-6 p-8">
              <a href="/our-story" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">Our Story</a>
              {/* <a href="/details" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">Details</a> */}
              <a href="/#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">Gallery</a>
              {/* <a href="#registry" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">Registry</a> */}
              {/* <a href="#travel" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">Travel</a> */}
              {/* <button className="bg-primary text-white px-6 py-2 rounded-full text-lg">
                RSVP
              </button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;