import { motion } from 'framer-motion';
import Navbar from './Navbar';
import GallerySectionChina from './GallerySectionChina';
import { useTranslation } from 'react-i18next';
import { HeartIcon } from '@heroicons/react/24/outline';

const OurStoryPage = () => {
  const { t } = useTranslation();

  const storyContent = [
    {
      title: t("How We Met"),
      content: t("HowWeMet_Paragraph"),
      icon: "💫"
    },
    {
      title: t("Building Life Together"),
      content: t("BuildingLifeTogether_Paragraph"),
      icon: "🌏"
    },
    {
      title: t("The Proposal"),
      content: t("TheProposal_Paragraph"),
      icon: "💍"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="h-[80vh] relative">
        <img
          src="./3wed.jpg"
          alt="Couple together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <HeartIcon className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4">
              {t("ourStoryButton")}
            </h1>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 sm:py-32 px-4 sm:px-8 bg-gray-50">
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
              <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
                {/* Decorative Icon */}
                <div className="absolute top-8 right-8 text-6xl opacity-10">
                  {section.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-4xl">{section.icon}</span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-primary">
                      {section.title}
                    </h2>
                  </div>
                  <div className="w-20 h-1 bg-primary mb-6"></div>
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HeartIcon className="h-12 w-12 text-white mx-auto mb-4" />
            <p className="text-2xl sm:text-3xl font-serif text-white italic">
              &quot;We give all glory to God, who has been the foundation of our relationship&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50">
        <GallerySectionChina />
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

export default OurStoryPage;
