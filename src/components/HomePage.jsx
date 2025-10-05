import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GallerySection from './GallerySection';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';
import { CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  const { t } = useTranslation();

  const [timeLeft, setTimeLeft] = useState({
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
        id="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen relative flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="./weddddd.jpg"
            alt="Wedding ceremony venue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 text-white/90 tracking-wide">
              {t('hero.title')}
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 font-serif font-bold">
              {t('hero.subtitle')}
            </h2>
            <div className="flex items-center justify-center space-x-3 mb-12">
              <CalendarIcon className="h-6 w-6 text-white/90" />
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/90">{t('hero.date')}</p>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 sm:gap-8 justify-center"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 min-w-[70px] sm:min-w-[100px]">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{value}</div>
                  <div className="text-xs sm:text-sm text-white/80 mt-2 capitalize">{unit}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 text-primary">{t("See how it all started")}</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/our-story'}
              className="bg-primary text-white px-10 py-4 text-lg font-medium hover:bg-primary/90 transition-colors rounded-full shadow-lg"
            >
              {t("ourStoryButton")}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Event Details - Ceremony */}
      <section id="details" className="min-h-screen grid md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full min-h-[400px] px-4 sm:px-8 py-12"
        >
          <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="./2wed.jpg"
              alt="Ceremony venue"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center p-8 sm:p-12 bg-white"
        >
          <div className="max-w-md">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-8 text-primary">{t('ceremony.title')}</h2>
            <div className="space-y-4 text-secondary">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">{t('ceremony.link')}</p>
                  <a href="https://phaneroo.org/ministry-profile/" target="_blank" rel="noopener noreferrer">
                    <p className="font-bold text-xl text-primary hover:text-primary/70 transition-colors">{t('ceremony.place')}</p>
                  </a>
                  <p className="mt-2 text-gray-600">{t('ceremony.location')}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Event Details - Reception */}
      <section className="min-h-screen grid md:grid-cols-2 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full min-h-[400px] px-4 sm:px-8 py-12 md:order-2"
        >
          <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="./22wed.jpg"
              alt="Reception venue"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center p-8 sm:p-12 bg-gray-50 md:order-1"
        >
          <div className="max-w-md">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-8 text-primary">{t('reception.title')}</h2>
            <div className="space-y-4 text-secondary">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">{t('reception.link')}</p>
                  <a href="https://hotel360.co.ug/" target="_blank" rel="noopener noreferrer">
                    <p className="font-bold text-xl text-primary hover:text-primary/70 transition-colors">{t('reception.place')}</p>
                  </a>
                  <p className="mt-2 text-gray-600">{t('reception.location')}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* RSVP Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen relative flex items-center justify-center"
      >
        <div className="absolute inset-0 px-4 py-12">
          <div className="relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl">
            <img
              src="./gallery/wed15.jpg"
              alt="Couple embracing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30" />
          </div>
        </div>

        <div className="relative z-10 text-center space-y-8 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white"
          >
            {t("joinUs")}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-white"
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
            className="inline-block bg-white text-primary px-12 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors rounded-full shadow-xl"
          >
            {t('rsvp')}
          </motion.a>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Travel Section */}
      <section id="travel" className="py-20 sm:py-32 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-primary">{t('travel.title')}</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Travel Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="space-y-6 text-secondary">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold mb-3 text-primary">{t('travel.airports')}</p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Entebbe International Airport</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Where to Stay */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-800 to-green-950 rounded-2xl p-8 shadow-lg text-white"
            >
              <h3 className="text-2xl sm:text-3xl font-serif mb-6">{t('travel.whereToStay')}</h3>
              <p className="mb-6 text-white/90 leading-relaxed">
                {t('travel.text1')}
              </p>
              <p className="mb-6 text-white/90">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScAzGSYder59TqJilN9iesT_NJELBSv6D6K3dpE255vYkOaBQ/viewform?usp=header" className="underline hover:text-white transition-colors">
                  {t('travel.text2')}
                </a>
              </p>
              <motion.a
                href="https://www.zola.com/wedding/arnoldandhaven"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-xl"
              >
                 {t('travel.whereToStay')}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <p className="text-sm opacity-90">
            &copy; {new Date().getFullYear()} Arnold & Haven. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
