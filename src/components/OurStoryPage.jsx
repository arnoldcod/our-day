
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import GallerySectionChina from './GallerySectionChina';

import { useTranslation } from 'react-i18next';



const OurStoryPage = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-[70vh] relative">
        <img 
          src="./3wed.jpg" 
          alt="Couple together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif text-white"
          >
            {t("ourStoryButton")}
          </motion.h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12 text-secondary">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif mb-4 text-primary">{t("How We Met")}</h2>
              <p className="leading-relaxed">
              {t("HowWeMet_Paragraph")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif mb-4 text-primary">{t("Building Life Together")}</h2>
              <p className="leading-relaxed">
              {t("BuildingLifeTogether_Paragraph")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif mb-4 text-primary">{t("The Proposal")}</h2>
              <p className="leading-relaxed">
              {t("TheProposal_Paragraph")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Gallery Section */}
       
       <GallerySectionChina />

      {/* Return Home Button */}
      {/* <section className="pb-20 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/'}
          className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          Back to Homepage
        </motion.button>
      </section> */}

      {/* Footer */}
      <footer className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-secondary text-sm">
            &copy; {new Date().getFullYear()} Arnold & Haven. All rights reserved.
          </p>
        </div>
      </footer>
      
    </div>
  );
};

export default OurStoryPage;