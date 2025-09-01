import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';

const RegistryPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="h-[70vh] relative">
        <img 
          src="./1wed.jpg" 
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
            {t('registry.title')}
          </motion.h1>
        </div>
      </section>

      {/* Registry Section */}
      <section id="registry" className="bg-primary/5 py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8 text-primary">{t('registry.title')}</h2>

          <p className="text-secondary mb-6">
            {t('registry.text')}
          </p>

          <p className="text-secondary mb-6">
            {t('registry.text1')}
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 inline-block mt-4 text-left">
            <h3 className="text-xl text-primary font-semibold mb-2">{t('registry.text2')}</h3>

            <p className="text-secondary">
              <strong>{t('registry.text3')}</strong> Bank Of Kigali
            </p>
            <p className="text-secondary">
              <strong>{t('registry.text4')}</strong> Arnold Uwamwezi
            </p>
            <p className="text-secondary">
              <strong>{t('registry.text5')}</strong> 1002 2778 9818
            </p>
            <p className="text-secondary">
              <strong>{t('registry.text6')}</strong> Remera Branch, Kigali
            </p>
            <p className="text-secondary">
              <strong>{t('registry.text7')}</strong> RW18040100227789818646
            </p>
            <p className="text-secondary">
              <strong>{t('registry.text8')}</strong> BKIGRWRW
            </p>

            <p className="my-4 text-secondary italic">
              {/* {t('registry.contactNote')} */}
            </p>

            <p className="text-secondary">
              <strong>{t('registry.text9')}</strong>: Arnold Uwamwezi  +250 7940 017 26
            </p>

            <p className="text-secondary">
              <strong>{t('registry.text99')}</strong>: Arnold Uwamwezi  +256 749 002 710
            </p>

            <p className="text-secondary mt-4 italic">
              {t('registry.text10')} <br /> Arnold & Haven
            </p>
          </div>
        </div>
      </section>

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

export default RegistryPage;
