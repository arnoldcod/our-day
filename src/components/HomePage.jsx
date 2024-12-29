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
            <a href="#" className="text-white/50 font-serif text-xl">A&H</a>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="./our-story" className="text-white/50 hover:text-secondary transition-colors">Our Story</a>
              <a href="#details" className="text-white/50 hover:text-secondary transition-colors">Details</a>
              <a href="#gallery" className="text-white/50 hover:text-secondary transition-colors">Gallery</a>
              <a href="#registry" className="text-white/50 hover:text-secondary transition-colors">Registry</a>
              <a href="#travel" className="text-white/50 hover:text-secondary transition-colors">Travel</a>
              <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
                RSVP
              </button>
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
              <a href="#story" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">Our Story</a>
              <a href="#details" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">Details</a>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">Gallery</a>
              <a href="#registry" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">Registry</a>
              <a href="#travel" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">Travel</a>
              <button className="bg-primary text-white px-6 py-2 rounded-full text-lg">
                RSVP
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date('2026-02-26').getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen relative flex items-center justify-center"
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="./wedwed.jpg" 
            alt="Wedding ceremony venue" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
        </div>

        <div className="relative z-10 text-center p-8">
          <h1 className="text-6xl font-serif mb-4 text-white">Arnold & Haven</h1>
          <p className="text-2xl text-white/90 mb-8">26th February 2026</p>
          
          {/* Countdown Timer */}
          <div className="flex gap-8 justify-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-4xl font-bold text-white">{value}</div>
                <div className="text-white/90 capitalize">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="w-1/4 h-px bg-gray-300"></div>
          <div className="px-8 text-center">
            <h2 className="text-3xl font-serif mb-8">See how it all started</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/our-story'}
              className="bg-black text-white px-8 py-3 text-lg hover:bg-black/90 transition-colors"
            >
              Our Story
            </motion.button>
          </div>
          <div className="w-1/4 h-px bg-gray-300"></div>
        </div>
      </section>

      {/* // Update the Event Details section in the HomePage component: */}


      {/* Event Details - Ceremony */}
      <section id="details" className="min-h-screen grid md:grid-cols-2">
        <div className="relative h-full min-h-[400px]">
          <img 
            src="./2wed.jpg" 
            alt="Ceremony venue" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center p-12 bg-white">
          <div className="max-w-md">
            <h2 className="text-5xl font-serif mb-8 text-primary">Ceremony</h2>
            <div className="space-y-2 text-secondary">
              <p className="text-2xl mb-6">4:00 PM</p>
              <p>Grace Church</p>
              <p>123 Demo St.</p>
              <p className="mb-6">Flagstaff, AZ 12345</p>
              <a href="#map" className="text-primary hover:text-secondary underline transition-colors">
                Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details - Reception */}
      <section className="min-h-screen grid md:grid-cols-2">
        <div className="relative h-full min-h-[400px] md:order-2">
          <img 
            src="./2wed.jpg" 
            alt="Reception venue" 
            className="absolute inset-0 w-full h-full object-cover filter grayscale"
          />
        </div>
        <div className="flex items-center justify-center p-12 bg-white md:order-1">
          <div className="max-w-md">
            <h2 className="text-5xl font-serif mb-8 text-primary">Reception</h2>
            <div className="space-y-2 text-secondary">
              <p className="text-2xl mb-6">4:30 PM - 10:00 PM</p>
              <p>The Barrel Keg</p>
              <p>123 Demo St.</p>
              <p className="mb-6">Flagstaff, AZ 12345</p>
              <a href="#map" className="text-primary hover:text-secondary underline transition-colors">
                Map
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-8">
        <h2 className="text-4xl font-serif mb-12 text-center text-primary">Our Gallery</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={`./1wed.jpg`}
                alt={`Gallery image ${index}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Registry Section */}
      <section id="registry" className="bg-primary/5 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8 text-primary">Gift Registry</h2>
          <p className="text-secondary mb-12">Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we&apos;ve registered at the following stores:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Crate & Barrel', 'Williams-Sonoma', 'Amazon'].map((store) => (
              <motion.div
                key={store}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-xl mb-4 text-primary">{store}</h3>
                <button className="text-secondary hover:text-primary transition-colors">
                  View Registry
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Section */}
      <section id="travel" className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center text-primary">Travel & Accommodation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl text-primary">Getting Here</h3>
              <div className="space-y-4 text-secondary">
                <p>Nearest Airports:</p>
                <ul className="list-disc pl-5">
                  <li>International Airport (20 miles)</li>
                  <li>Regional Airport (10 miles)</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl text-primary">Where to Stay</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-lg">
                  <h4 className="text-primary">The Grand Hotel</h4>
                  <p className="text-secondary">Special rate: $199/night</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-lg">
                  <h4 className="text-primary">Boutique Inn</h4>
                  <p className="text-secondary">Special rate: $159/night</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RSVP Button */}
      <section className="py-20 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-12 py-4 rounded-full text-lg hover:bg-primary/90 transition-colors"
        >
          RSVP Now
        </motion.button>
      </section>
    </div>
  );
};

export default HomePage;