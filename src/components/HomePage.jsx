import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GallerySection from './GallerySection';
import Navbar from './Navbar';
import OptimizedImage from './OptimizedImage';
import { useTranslation } from 'react-i18next';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

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
    <div className="min-h-screen bg-white dark:bg-gray-900">
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
          <OptimizedImage
            src="./weddddd.jpg"
            alt="Wedding ceremony venue"
            className="w-full h-full object-cover"
            priority={true}
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
            className="flex gap-4 sm:gap-8 justify-center mb-12"
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

          {/* Prominent RSVP Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScAzGSYder59TqJilN9iesT_NJELBSv6D6K3dpE255vYkOaBQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated pulse rings */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1.4],
                  opacity: [0.7, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full bg-red-400/40"
              />
              <motion.div
                animate={{
                  scale: [1, 1.4, 1.4],
                  opacity: [0.7, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 rounded-full bg-orange-400/40"
              />

              {/* Button content */}
              <div className="relative bg-gradient-to-r from-red-500 via-orange-500 to-orange-600 text-white px-10 sm:px-14 py-4 sm:py-5 rounded-full shadow-2xl transform transition-all duration-300 group-hover:shadow-orange-500/50 group-hover:from-red-600 group-hover:via-orange-600 group-hover:to-orange-700">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-7 sm:w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xl sm:text-2xl font-bold tracking-wide">
                    {t('confirmAttendance')}
                  </span>
                  <motion.svg
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-7 sm:w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </div>

                {/* Shine effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12"
                />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Theme Verse Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-8 overflow-hidden bg-white dark:bg-gray-900">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-10 left-10 w-48 h-48 bg-primary dark:bg-primary-dark rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary dark:bg-primary-dark rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Main Verse Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="./ecc.jpg"
                alt="Theme background"
                className="w-full h-full object-cover"
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10">
              {/* Scripture Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mb-6"
              >
                <p className="text-lg sm:text-xl md:text-2xl font-serif text-gray-800 dark:text-gray-100 leading-relaxed mb-4 italic">
                  &ldquo;{t('theme.verse')}&rdquo;
                </p>
                <cite className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 not-italic font-light">
                  — {t('theme.reference')}
                </cite>
              </motion.blockquote>

              {/* Decorative Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center my-6"
              >
                <div className="h-px bg-gray-300 dark:bg-gray-600 flex-1 max-w-xs"></div>
                <div className="mx-4">
                  <svg className="w-5 h-5 text-primary/60 dark:text-primary-dark/60" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                </div>
                <div className="h-px bg-gray-300 dark:bg-gray-600 flex-1 max-w-xs"></div>
              </motion.div>

              {/* Theme Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-primary dark:text-primary-dark mb-2">
                  {t('theme.title')}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 font-light tracking-wide">
                  {t('theme.subtitle')}
                </p>
              </motion.div>

              {/* Animated Three Strands Visual */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                className="flex justify-center items-center mt-8 space-x-2"
              >
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 60 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="w-1 bg-primary/60 dark:bg-primary-dark/60 rounded-full"
                ></motion.div>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 80 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  viewport={{ once: true }}
                  className="w-1.5 bg-primary dark:bg-primary-dark rounded-full"
                ></motion.div>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 60 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  viewport={{ once: true }}
                  className="w-1 bg-primary/60 dark:bg-primary-dark/60 rounded-full"
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating Animation Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary dark:bg-primary-dark rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary dark:bg-primary-dark rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary dark:bg-primary-dark rounded-full blur-sm"
        ></motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 text-primary dark:text-primary-dark">{t("See how it all started")}</h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto mb-8"></div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/our-story'}
              className="bg-primary dark:bg-primary-dark text-white px-10 py-4 text-lg font-medium hover:bg-primary/90 dark:hover:bg-primary-dark/90 transition-colors rounded-full shadow-lg"
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
          className="flex items-center justify-center p-8 sm:p-12 bg-white dark:bg-gray-900"
        >
          <div className="max-w-md">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-8 text-primary dark:text-primary-dark">{t('ceremony.title')}</h2>
            <div className="space-y-4 text-secondary dark:text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-6 w-6 text-primary dark:text-primary-dark mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('ceremony.link')}</p>
                  <a href="https://phaneroo.org/ministry-profile/" target="_blank" rel="noopener noreferrer">
                    <p className="font-bold text-xl text-primary dark:text-primary-dark hover:text-primary/70 dark:hover:text-primary-dark/70 transition-colors">{t('ceremony.place')}</p>
                  </a>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{t('ceremony.location')}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Event Details - Reception */}
      <section className="min-h-screen grid md:grid-cols-2 bg-gray-50 dark:bg-gray-800">
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
          className="flex items-center justify-center p-8 sm:p-12 bg-gray-50 dark:bg-gray-800 md:order-1"
        >
          <div className="max-w-md">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-8 text-primary dark:text-primary-dark">{t('reception.title')}</h2>
            <div className="space-y-4 text-secondary dark:text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-6 w-6 text-primary dark:text-primary-dark mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('reception.link')}</p>
                  <a href="https://hotel360.co.ug/" target="_blank" rel="noopener noreferrer">
                    <p className="font-bold text-xl text-primary dark:text-primary-dark hover:text-primary/70 dark:hover:text-primary-dark/70 transition-colors">{t('reception.place')}</p>
                  </a>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{t('reception.location')}</p>
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
            className="inline-block bg-white dark:bg-gray-100 text-primary dark:text-primary-dark px-12 py-4 text-lg font-semibold hover:bg-gray-100 dark:hover:bg-white transition-colors rounded-full shadow-xl"
          >
            {t('rsvp')}
          </motion.a>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Travel Section */}
      <section id="travel" className="py-20 sm:py-32 px-4 sm:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-primary dark:text-primary-dark">{t('travel.title')}</h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Travel Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
            >
              <div className="space-y-6 text-secondary dark:text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-6 w-6 text-primary dark:text-primary-dark mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold mb-3 text-primary dark:text-primary-dark">{t('travel.airports')}</p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary dark:bg-primary-dark rounded-full"></span>
                        <a
                          href="https://www.google.com/maps/place/Entebbe+International+Airport/@0.0418629,32.4435261,17z"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary dark:hover:text-primary-dark transition-colors cursor-pointer underline"
                        >
                          Entebbe International Airport
                        </a>
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
              className="bg-gradient-to-br from-green-800 to-green-950 dark:from-green-900 dark:to-green-950 rounded-2xl p-8 shadow-lg text-white"
            >
              <h3 className="text-2xl sm:text-3xl font-serif mb-6">{t('travel.whereToStay')}</h3>
              <p className="mb-6 text-white/90 dark:text-white/95 leading-relaxed">
                {t('travel.text1')}
              </p>
              <p className="mb-6 text-white/90 dark:text-white/95">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScAzGSYder59TqJilN9iesT_NJELBSv6D6K3dpE255vYkOaBQ/viewform?usp=header" className="underline hover:text-white transition-colors">
                  {t('travel.text2')}
                </a>
              </p>
              <motion.button
                onClick={() => window.location.href = '/accommodation'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white dark:bg-gray-100 text-primary dark:text-primary-dark font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-xl"
              >
                 {t('travel.whereToStay')}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary dark:bg-primary-dark text-white">
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
