import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GallerySection from './GallerySection';

import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  const { t, i18n } = useTranslation();

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
          <div className=" text-white/50 md:flex  top-4 items-center space-x-4">
  <button onClick={() => i18n.changeLanguage('en')} className="text-sm px-2">EN</button>
  <span className="text-white/50 px-1">|</span>
  <button onClick={() => i18n.changeLanguage('fr')} className="text-sm px-2">FR</button>
</div>

              <a href="./our-story" className="text-white/50 hover:text-secondary transition-colors"> {t("ourStoryButton")}</a>
              {/* <a href="#details" className="text-white/50 hover:text-secondary transition-colors">Details</a> */}
              <a href="#gallery" className="text-white/50 hover:text-secondary transition-colors">{t("Gallery")}</a>
              {/* <a href="#registry" className="text-white/50 hover:text-secondary transition-colors">Registry</a> */}
              <a href="#travel" className="text-white/50 hover:text-secondary transition-colors">{t("travel.title")}</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScAzGSYder59TqJilN9iesT_NJELBSv6D6K3dpE255vYkOaBQ/viewform?usp=header" className="bg-primary text-white px-6 py-1 rounded-full text-lg">
                {t("rsvp")}
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
            <a href="#details" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">
  {t("Home")}
</a>
              <a href="/our-story" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">{t("ourStoryButton")}</a>
              
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">{t("Gallery")}</a>
              {/* <a href="#registry" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">Registry</a> */}
              <a href="#travel" onClick={() => setIsMobileMenuOpen(false)} className="text-primary text-lg">{t("travel.title")}</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScAzGSYder59TqJilN9iesT_NJELBSv6D6K3dpE255vYkOaBQ/viewform?usp=header" className="bg-primary text-white px-6 py-2 rounded-full text-lg">
              {t("rsvp")}
              </a>

              <div className="flex justify-end p-4">
  <select
    onChange={(e) => i18n.changeLanguage(e.target.value)}
    className="border rounded p-1"
  >
    <option value="en">🇺🇸 English</option>
    <option value="fr">🇫🇷 French</option>
    {/* <option value="sw">🇰🇪 Swahili</option> */}
  </select>
</div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HomePage = () => {

  const { t, i18n } = useTranslation();

  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date('2026-02-14').getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      setTimeLeft({
        months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
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
            src="./weddddd.jpg" 
            alt="Wedding ceremony venue" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
        </div>

        <div className="relative z-10 text-center p-8">
          <h1 className="text-2xl font-serif mb-14 text-white">{t('hero.title')}
</h1>
          <p className="text-4xl  text-white/90 mb-10 font-serif ">{t('hero.subtitle')}</p>
          <p className="text-2xl font-normal text-white/90 mb-10"> {t('hero.date')}</p>
          
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
            <h2 className="text-3xl font-serif mb-8">{t("See how it all started")}</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/our-story'}
              className="bg-primary text-white px-8 py-3 text-lg hover:bg-black/90 transition-colors"
            >
              {t("ourStoryButton")}
            </motion.button>
          </div>
          <div className="w-1/4 h-px bg-gray-300"></div>
        </div>
      </section>

      {/* // Update the Event Details section in the HomePage component: */}


      {/* Event Details - Ceremony */}
      <section id="details" className="min-h-screen grid md:grid-cols-2">
        <div className="relative h-full min-h-[400px] px-8 py-12">
          <div className="relative h-full w-full overflow-hidden">
            <img 
              src="./2wed.jpg" 
              alt="Ceremony venue" 
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center p-12 bg-white">
          <div className="max-w-md">
            <h2 className="text-5xl font-serif mb-8 text-primary">{t('ceremony.title')}</h2>
            <div className="space-y-2 text-secondary">
              {/* <p className="text-2xl mb-6">10:00 AM</p> */}
              {t('ceremony.link')}: <a href="https://phaneroo.org/ministry-profile/"><p className="font-bold  text-primary" > {t('ceremony.place')}</p></a>
            
              <p className="mb-6">{t('ceremony.location')}</p>
              {/* <a href="#map" className="text-primary hover:text-secondary underline transition-colors">
                Map
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Event Details - Reception */}
      <section className="min-h-screen grid md:grid-cols-2">
        <div className="relative h-full min-h-[400px] px-8 py-12 md:order-2">
          <div className="relative h-full w-full overflow-hidden">
            <img 
              src="./22wed.jpg" 
              alt="Reception venue" 
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center p-12 bg-white md:order-1">
          <div className="max-w-md">
            <h2 className="text-5xl font-serif mb-8 text-primary">{t('reception.title')}</h2>
            <div className="space-y-2 text-secondary">
              {/* <p className="text-2xl mb-6">4:30 PM - 11:00 PM</p> */}
              {t('reception.link')}:<a href="https://hotel360.co.ug/"><p className="  font-bold  text-primary" >{t('reception.place')}</p></a>
              <p className="mb-6">{t('reception.location')}</p>
              {/* <a href="#map" className="text-primary hover:text-secondary underline transition-colors">
                Map
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="min-h-screen relative flex items-center justify-center"
>
  <div className="absolute inset-0 px-4 py-12">
    <div className="relative h-full w-full overflow-hidden">
      <img 
        src="./gallery/wed15.jpg"
        alt="Couple embracing"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  </div>
  
  <div className="relative z-10 text-center space-y-6">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-4xl font-light text-white"
    >
      {t("joinUs")}
    </motion.h2>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 2, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-3xl font-serif text-white"
    >
      {t('hope')}
    </motion.h1>
    <motion.a
      href="https://docs.google.com/forms/d/e/1FAIpQLScAzGSYder59TqJilN9iesT_NJELBSv6D6K3dpE255vYkOaBQ/viewform?usp=header"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: 0.6 }}
      className="inline-block bg-white text-primary px-12 py-3 text-lg font-medium hover:bg-gray-100 transition-colors rounded-full"
    >
      {t('rsvp')}
    </motion.a>
  </div>
</motion.section>


      {/* Gallery Section */}
      <GallerySection />

      {/* Registry Section */}
      {/* <section id="registry" className="bg-primary/5 py-20 px-8">
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
      </section> */}

      {/* Travel Section */}
      <section id="travel" className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center text-primary">{t('travel.title')}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* <h3 className="text-2xl text-primary">{t('travel.gettingHere')}</h3> */}
              <div className="space-y-4 text-secondary">
                <p>{t('travel.airports')}:</p>
                <ul className="list-disc pl-5">
                  <li>Entebbe International Airport</li>
                  {/* <li>Regional Airport (10 miles)</li> */}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <a href=""> <h3 className="text-2xl text-primary">{t('travel.whereToStay')}</h3></a>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-lg">
                  <a href="https://www.zola.com/wedding/arnoldandhaven"> <h4 className="text-white bg-primary">{t('travel.click')}</h4></a>
                  
                  {/* <p className="text-secondary">Special rate: $199/night</p> */}
                </div>
                <div className="">
                  {/* <h4 className="text-primary">Boutique Inn</h4>
                  <p className="text-secondary">Special rate: $159/night</p> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default HomePage;