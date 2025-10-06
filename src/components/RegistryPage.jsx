import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';
import { GiftIcon, BanknotesIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const RegistryPage = () => {
  const { t } = useTranslation();

  const bankDetails = [
    { label: t('registry.text3'), value: 'Bank Of Kigali', icon: BanknotesIcon },
    { label: t('registry.text4'), value: 'Arnold Uwamwezi' },
    { label: t('registry.text5'), value: '1002 2778 9818' },
    { label: t('registry.text6'), value: 'Remera Branch, Kigali' },
    { label: t('registry.text7'), value: 'RW18040100227789818646' },
    { label: t('registry.text8'), value: 'BKIGRWRW' },
  ];

  const mobileMoneyOptions = [
    {
      label: t('registry.text9'),
      value: 'Arnold Uwamwezi  +250 7940 017 26',
      icon: DevicePhoneMobileIcon,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      label: t('registry.text99'),
      value: 'Arnold Uwamwezi  +256 749 002 710',
      icon: DevicePhoneMobileIcon,
      color: 'from-red-400 to-red-700'
    },
  ];

  const zelleDetails = {
    email: 'havengezai@gmail.com',
    contact: 'Haven Gezai +1 206 446 7390'
  };

  return (
    <div className="min-h-screen bg-white text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="h-[80vh] relative">
        <img
          src="./1wed.jpg"
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
            <GiftIcon className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4">
              {t('registry.title')}
            </h1>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Registry Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <GiftIcon className="h-12 w-12 text-primary mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed">
              {t('registry.text')}
            </p>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {t('registry.text1')}
            </p>
          </motion.div>

          {/* Bank Transfer Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 mb-12"
          >
            <div className="flex items-center space-x-3 mb-8">
              <BanknotesIcon className="h-8 w-8 text-primary" />
              <h3 className="text-2xl sm:text-3xl text-primary font-serif">
                {t('registry.text2')}
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {bankDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-4 border-primary pl-4 py-2"
                >
                  <p className="text-sm text-gray-500 mb-1">{detail.label}</p>
                  <p className="text-lg font-semibold text-gray-800">{detail.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Money Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {mobileMoneyOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${option.color} bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-white`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <option.icon className="h-8 w-8" />
                  <h4 className="text-xl font-semibold">{option.label}</h4>
                </div>
                <p className="text-lg font-medium">{option.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Zelle Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-black rounded-3xl shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/40 rounded-full blur-2xl"></div>

              <div className="relative z-10 p-8 sm:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4"
                    >
                      <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
                        {t('registry.zelle')}
                      </h3>
                      <p className="text-purple-200 text-sm mt-1">Fast & Easy Payment</p>
                    </div>
                  </div>

                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden sm:block"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-30 blur-xl"></div>
                  </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <svg className="h-6 w-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-purple-200 text-sm font-medium">{t('registry.zelleEmail')}</p>
                    </div>
                    <p className="text-white text-lg font-semibold break-all">{zelleDetails.email}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <svg className="h-6 w-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-purple-200 text-sm font-medium">{t('registry.zelleContact')}</p>
                    </div>
                    <p className="text-white text-lg font-semibold">{zelleDetails.contact}</p>
                  </motion.div>
                </div>

                {/* Animated bottom accent */}
                <motion.div
                  animate={{
                    scaleX: [0.8, 1, 0.8],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-8 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Closing Message */}
          <div className="text-center py-16">
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-serif italic mb-8 text-primary"
            >
              {t('registry.text10')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative inline-block"
            >
              <motion.p
                animate={{
                  textShadow: [
                    "0 0 20px rgba(0,0,0,0.1)",
                    "0 0 30px rgba(0,0,0,0.2)",
                    "0 0 20px rgba(0,0,0,0.1)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-xl sm:text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
              >
                Arnold & Haven
              </motion.p>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
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

export default RegistryPage;
