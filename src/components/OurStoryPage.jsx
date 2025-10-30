import { motion } from 'framer-motion';
import Navbar from './Navbar';
import GallerySectionChina from './GallerySectionChina';
import BridalShowerCarousel from './BridalShowerCarousel';
import { useTranslation } from 'react-i18next';
import { HeartIcon } from '@heroicons/react/24/outline';

const OurStoryPage = () => {
  const { t } = useTranslation();

  const storyContent = [
    {
      title: t("How We Met"),
      content: t("HowWeMet_Paragraph"),
      icon: ""
    },
    {
      title: t("Building Life Together"),
      content: t("BuildingLifeTogether_Paragraph"),
      icon: ""
    },
    {
      title: t("The Proposal"),
      content: t("TheProposal_Paragraph"),
      icon: ""
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="h-[80vh] relative">
        <img
          src="./3wed.jpg"
          alt="Couple together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 dark:from-black/70 dark:via-black/60 dark:to-black/80 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            {/* Animated Heart Icon Container */}
            <div className="relative inline-flex items-center justify-center mb-6">
              {/* Outer pulsing glow */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-red-500/40 rounded-full blur-2xl"
              ></motion.div>

              {/* Middle glow ring */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
                className="absolute inset-0 bg-pink-400/30 rounded-full blur-xl"
              ></motion.div>

              {/* Floating particles */}
              <motion.div
                animate={{
                  y: [-20, -40, -20],
                  x: [-5, 5, -5],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 left-1/4 w-2 h-2 bg-white rounded-full"
              ></motion.div>
              <motion.div
                animate={{
                  y: [-15, -35, -15],
                  x: [5, -5, 5],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -top-6 right-1/4 w-2 h-2 bg-pink-300 rounded-full"
              ></motion.div>
              <motion.div
                animate={{
                  y: [-10, -30, -10],
                  x: [0, -8, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -top-4 left-1/2 w-1.5 h-1.5 bg-red-300 rounded-full"
              ></motion.div>

              {/* Main heart icon with pulse and fill animation */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Filled heart background */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    type: "spring"
                  }}
                  className="absolute inset-0"
                >
                  <HeartIcon className="h-16 w-16 text-red-500 fill-red-500/20" />
                </motion.div>

                {/* Outline heart */}
                <HeartIcon className="h-16 w-16 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
              </motion.div>

              {/* Sparkle effects */}
              <motion.div
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }}
                className="absolute -right-4 -top-4 text-white text-2xl"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, -180, -360],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute -left-4 -bottom-4 text-white text-xl"
              >
                ✨
              </motion.div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white dark:text-gray-100 mb-4">
              {t("ourStoryButton")}
            </h1>
            <div className="w-24 h-1 bg-white dark:bg-gray-200 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 sm:py-32 px-4 sm:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          {storyContent.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-20 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
            >
              <div className="bg-white dark:bg-gray-700 rounded-3xl shadow-xl dark:shadow-2xl p-8 sm:p-12 relative overflow-hidden">
                {/* Decorative Icon */}
                <div className="absolute top-8 right-8 text-6xl opacity-10 dark:opacity-5">
                  {section.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-4xl">{section.icon}</span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-primary dark:text-primary-dark">
                      {section.title}
                    </h2>
                  </div>
                  <div className="w-20 h-1 bg-primary dark:bg-primary-dark mb-6"></div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-emerald-50/40 via-green-50/30 to-teal-50/40 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200/40 dark:bg-emerald-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-200/40 dark:bg-green-900/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-200/40 dark:bg-teal-900/10 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Animated Heart with elegant styling */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative inline-block mb-6"
            >
              {/* Soft glow effect */}
              <div className="absolute inset-0 blur-xl opacity-40">
                <HeartIcon className="h-16 w-16 text-emerald-400 dark:text-emerald-300 fill-emerald-400 dark:fill-emerald-300" />
              </div>
              {/* Main heart icon */}
              <HeartIcon className="relative h-16 w-16 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-900/30 mx-auto drop-shadow-lg" />
            </motion.div>

            {/* Decorative line above quote */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center mb-6"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-300/60 dark:via-emerald-600/60 to-transparent w-full max-w-md"></div>
            </motion.div>

            {/* Quote text with elegant styling */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-700 dark:text-gray-200 italic leading-relaxed px-4"
            >
              <span className="text-emerald-600 dark:text-emerald-400 text-5xl leading-none">&ldquo;</span>
              We give all glory to God, who has been the foundation of our relationship
              <span className="text-emerald-600 dark:text-emerald-400 text-5xl leading-none">&rdquo;</span>
            </motion.p>

            {/* Decorative line below quote */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center mt-6"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-300/60 dark:via-emerald-600/60 to-transparent w-full max-w-md"></div>
            </motion.div>

            {/* Optional: Small decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex justify-center gap-2"
            >
              <span className="text-emerald-400 dark:text-emerald-500 text-sm">✦</span>
              <span className="text-green-400 dark:text-green-500 text-sm">✦</span>
              <span className="text-teal-400 dark:text-teal-500 text-sm">✦</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <GallerySectionChina />
      </section>

      {/* Bridal Shower Section */}
      <BridalShowerCarousel />

      {/* Footer */}
      <footer className="py-12 bg-primary dark:bg-primary-dark text-white dark:text-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <p className="text-sm opacity-90 dark:opacity-80">
            &copy; {new Date().getFullYear()} Arnold & Haven. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OurStoryPage;
