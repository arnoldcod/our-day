import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLangMenu && !event.target.closest('.language-dropdown')) {
        setShowLangMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLangMenu]);

  const navLinks = [
    { name: t("Home"), path: '/', hash: '#hero' },
    { name: t("ourStoryButton"), path: '/our-story' },
    // { name: t("Itinerary"), path: '/itinerary' },
    { name: t("Accommodation"), path: '/accommodation' },
    { name: "Travel Guide", path: '/travel-guide' },
    // { name: t("Gallery"), path: '/', hash: '#gallery' },
    { name: t('registry.title'), path: '/registry' },
  ];

  const handleNavClick = (path, hash) => {
    setIsMobileMenuOpen(false);
    if (path === '/') {
      navigate('/');
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(path);
    }
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'rw', name: 'Kinyarwanda' },
    { code: 'ti', name: 'ትግርኛ' },
    { code: 'sw', name: 'Kiswahili' },
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg'
            : 'bg-gradient-to-b from-black/50 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className={`font-serif text-2xl font-bold ${
                isScrolled || isMobileMenuOpen
                  ? 'text-primary dark:text-primary-dark'
                  : 'text-white'
              }`}
            >
              A & H
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path, link.hash)}
                  className={`text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary-dark ${
                    isScrolled || isMobileMenuOpen
                      ? 'text-gray-700 dark:text-gray-200'
                      : 'text-white/90'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              {/* Language Switcher */}
              <div className="relative language-dropdown">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isScrolled || isMobileMenuOpen
                      ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <GlobeAltIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Languages</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${showLangMenu ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {showLangMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            i18n.changeLanguage(lang.code);
                            setShowLangMenu(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                            i18n.language === lang.code
                              ? 'bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark font-medium'
                              : 'text-gray-700 dark:text-gray-200'
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dark Mode Toggle */}
              <DarkModeToggle />

              {/* RSVP Button */}
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLScAzGSYder59TqJilN9iesT_NJELBSv6D6K3dpE255vYkOaBQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary dark:bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 dark:hover:bg-primary-dark/90 transition-colors shadow-lg"
              >
                {t("rsvp")}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors ${
                isScrolled || isMobileMenuOpen
                  ? 'text-primary dark:text-primary-dark'
                  : 'text-white'
              }`}
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-40 bg-white dark:bg-gray-900 md:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-8">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.path, link.hash)}
                    className="text-primary dark:text-primary-dark text-xl font-medium text-left hover:text-primary/70 dark:hover:text-primary-dark/70 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <DarkModeToggle />
                </div>

                {/* Mobile Language Dropdown */}
                <div className="mb-4 language-dropdown">
                  <button
                    onClick={() => setShowLangMenu(!showLangMenu)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                  >
                    <div className="flex items-center space-x-2">
                      <GlobeAltIcon className="h-5 w-5" />
                      <span className="font-medium">Languages</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">({currentLang.name})</span>
                    </div>
                    <svg
                      className={`h-5 w-5 transition-transform ${showLangMenu ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {showLangMenu && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 space-y-1">
                          {languages.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => {
                                i18n.changeLanguage(lang.code);
                                setShowLangMenu(false);
                              }}
                              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                                i18n.language === lang.code
                                  ? 'bg-primary dark:bg-primary-dark text-white font-medium'
                                  : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                              }`}
                            >
                              {lang.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLScAzGSYder59TqJilN9iesT_NJELBSv6D6K3dpE255vYkOaBQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-primary dark:bg-primary-dark text-white px-6 py-3 rounded-full text-center font-medium shadow-lg"
              >
                {t("rsvp")}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
