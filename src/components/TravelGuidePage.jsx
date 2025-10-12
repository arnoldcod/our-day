import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import {
  GlobeAltIcon,
  DocumentCheckIcon,
  MapPinIcon,
  HeartIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  SunIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import {
  CheckCircleIcon,
  ArrowRightIcon,
  InformationCircleIcon
} from '@heroicons/react/24/solid';

const TravelGuidePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const visaOptions = [
    {
      title: t('travelGuide.visa.eastAfrican.title'),
      region: t('travelGuide.visa.eastAfrican.region'),
      icon: CheckCircleIcon,
      requirements: [
        t('travelGuide.visa.eastAfrican.req1'),
        t('travelGuide.visa.eastAfrican.req2'),
        t('travelGuide.visa.eastAfrican.req3'),
        t('travelGuide.visa.eastAfrican.req4')
      ],
      highlight: true,
      badge: t('travelGuide.visa.eastAfrican.badge')
    },
    {
      title: t('travelGuide.visa.ugandaTourist.title'),
      region: t('travelGuide.visa.ugandaTourist.region'),
      icon: DocumentCheckIcon,
      requirements: [
        t('travelGuide.visa.ugandaTourist.req1'),
        t('travelGuide.visa.ugandaTourist.req2'),
        t('travelGuide.visa.ugandaTourist.req3'),
        t('travelGuide.visa.ugandaTourist.req4')
      ]
    },
    {
      title: t('travelGuide.visa.eastAfricanTourist.title'),
      region: t('travelGuide.visa.eastAfricanTourist.region'),
      icon: SparklesIcon,
      requirements: [
        t('travelGuide.visa.eastAfricanTourist.req1'),
        t('travelGuide.visa.eastAfricanTourist.req2'),
        t('travelGuide.visa.eastAfricanTourist.req3'),
        t('travelGuide.visa.eastAfricanTourist.req4')
      ],
      recommended: true,
      badge: t('travelGuide.visa.eastAfricanTourist.badge')
    }
  ];

  const healthRequirements = [
    { item: t('travelGuide.health.yellowFever'), required: true },
    { item: t('travelGuide.health.malaria'), required: false },
    { item: t('travelGuide.health.insurance'), required: false }
  ];

  const essentialApps = [
    { name: t('travelGuide.apps.safeBoda.name'), description: t('travelGuide.apps.safeBoda.description'), icon: "🏍️" },
    { name: t('travelGuide.apps.uber.name'), description: t('travelGuide.apps.uber.description'), icon: "🚗" },
    { name: t('travelGuide.apps.maps.name'), description: t('travelGuide.apps.maps.description'), icon: "🗺️" },
    { name: t('travelGuide.apps.whatsapp.name'), description: t('travelGuide.apps.whatsapp.description'), icon: "💬" },
    { name: t('travelGuide.apps.mobileMoney.name'), description: t('travelGuide.apps.mobileMoney.description'), icon: "💰" }
  ];

  const packingList = [
    { item: t('travelGuide.packing.items.sunscreen'), importance: t('travelGuide.health.recommended'), icon: "☀️" },
    { item: t('travelGuide.packing.items.repellent'), importance: t('travelGuide.health.recommended'), icon: "🦟" },
    { item: t('travelGuide.packing.items.jacket'), importance: t('travelGuide.health.recommended'), icon: "🌧️" },
    { item: t('travelGuide.packing.items.adapter'), importance: t('travelGuide.health.recommended'), icon: "🔌" },
    { item: t('travelGuide.packing.items.shoes'), importance: t('travelGuide.health.recommended'), icon: "👟" },
    { item: t('travelGuide.packing.items.sweater'), importance: t('travelGuide.health.recommended'), icon: "🧥" }
  ];

  const culturalTips = [
    { tip: t('travelGuide.cultural.tips.greetings'), icon: "👋" },
    { tip: t('travelGuide.cultural.tips.time'), icon: "⏰" },
    { tip: t('travelGuide.cultural.tips.bargaining'), icon: "💰" },
    { tip: t('travelGuide.cultural.tips.photos'), icon: "📸" },
    { tip: t('travelGuide.cultural.tips.language'), icon: "🗣️" },
    { tip: t('travelGuide.cultural.tips.warmth'), icon: "❤️" }
  ];

  const safetyTips = [
    t('travelGuide.safety.tips.safe'),
    t('travelGuide.safety.tips.valuables'),
    t('travelGuide.safety.tips.transport'),
    t('travelGuide.safety.tips.pharmacies'),
    t('travelGuide.safety.tips.emergency')
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="h-[80vh] relative">
        <img
          src="./kampala-city.jpg"
          alt="Kampala, Uganda"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = './travelguide.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-4 max-w-5xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlobeAltIcon className="h-20 w-20 text-white mx-auto mb-6" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              {t('travelGuide.title')}
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-white text-xl sm:text-2xl md:text-3xl mb-4 font-light">
              {t('travelGuide.subtitle')}
            </p>
            <p className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto">
              {t('travelGuide.date')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-t-4 border-primary">
            <div className="flex items-center justify-center mb-8">
              <HeartIcon className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary text-center mb-6">
              {t('travelGuide.welcome.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 text-center leading-relaxed mb-6">
              {t('travelGuide.welcome.description1')} <span className="font-semibold text-primary">&ldquo;{t('travelGuide.welcome.pearlOfAfrica')}&rdquo;</span> {t('travelGuide.welcome.description2')}
            </p>
            <p className="text-lg text-gray-600 text-center">
              {t('travelGuide.welcome.description3')}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Visa & Entry Requirements Section */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <DocumentCheckIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-4">
              {t('travelGuide.visa.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('travelGuide.visa.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {visaOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  option.recommended ? 'border-3 border-primary ring-4 ring-primary/20' : ''
                } ${option.highlight ? 'border-2 border-green-500 ring-4 ring-green-100' : ''}`}
              >
                <div className={`p-6 ${option.recommended ? 'bg-primary/10' : option.highlight ? 'bg-green-50' : 'bg-gray-50'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <option.icon className={`h-10 w-10 ${option.recommended ? 'text-primary' : option.highlight ? 'text-green-600' : 'text-gray-600'}`} />
                    {option.recommended && (
                      <span className="bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {option.badge}
                      </span>
                    )}
                    {option.highlight && (
                      <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {option.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-serif text-primary mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">{option.region}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {option.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                          option.recommended ? 'text-primary' : option.highlight ? 'text-green-600' : 'text-gray-500'
                        }`} />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Application Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border-l-4 border-primary"
          >
            <div className="flex items-start space-x-4">
              <InformationCircleIcon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div className="w-full">
                <h3 className="text-2xl font-serif text-primary mb-4">{t('travelGuide.visa.applicationTips.title')}</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700 mb-6">
                  <div className="flex items-start">
                    <ArrowRightIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('travelGuide.visa.applicationTips.tip1')}</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRightIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('travelGuide.visa.applicationTips.tip2')}</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRightIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <button
                      onClick={() => navigate('/accommodation')}
                      className="text-left hover:text-primary transition-colors underline"
                    >
                      {t('travelGuide.visa.applicationTips.tip3')}
                    </button>
                  </div>
                  <div className="flex items-start">
                    <ArrowRightIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('travelGuide.visa.applicationTips.tip4')}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visa Application CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="relative bg-gradient-to-r from-primary via-primary/95 to-primary/90 rounded-3xl p-8 sm:p-10 overflow-hidden shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                  <DocumentCheckIcon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                  {t('travelGuide.visa.cta.title')}
                </h3>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  {t('travelGuide.visa.cta.description')}
                </p>
                <motion.a
                  href="https://visas.immigration.go.ug/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <span>{t('travelGuide.visa.cta.button')}</span>
                  <svg
                    className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
                <p className="text-white/70 text-sm mt-6">
                  🌐 {t('travelGuide.visa.cta.portal')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Health Requirements */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <ShieldCheckIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-4">
              {t('travelGuide.health.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-12"
          >
            <div className="space-y-4">
              {healthRequirements.map((item, index) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center justify-between p-4 rounded-xl ${
                    item.required ? 'bg-red-50 border-l-4 border-red-500' : 'bg-gray-50 border-l-4 border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`h-3 w-3 rounded-full mr-4 ${item.required ? 'bg-red-500' : 'bg-gray-400'}`}></div>
                    <span className="text-gray-800 font-medium">{item.item}</span>
                  </div>
                  <span className={`text-sm font-semibold px-4 py-1 rounded-full ${
                    item.required ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'
                  }`}>
                    {item.required ? t('travelGuide.health.required') : t('travelGuide.health.recommended')}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
              <p className="text-gray-700">
                <span className="font-semibold text-primary">{t('travelGuide.health.note')}</span> {t('travelGuide.health.noteText')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Getting to Kampala */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MapPinIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-4">
              {t('travelGuide.gettingTo.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg"
            >
              <div className="text-5xl mb-4">✈️</div>
              <h3 className="text-2xl font-serif text-primary mb-4">{t('travelGuide.gettingTo.flight.title')}</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.flight.item1')}</span>
                </p>
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.flight.item2')}</span>
                </p>
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.flight.item3')}</span>
                </p>
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.flight.item4')}</span>
                </p>
              </div>
              <div className="mt-4 p-4 bg-white/70 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">{t('travelGuide.gettingTo.flight.tip')}</span> {t('travelGuide.gettingTo.flight.tipText')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg"
            >
              <div className="text-5xl mb-4">🚌</div>
              <h3 className="text-2xl font-serif text-primary mb-4">{t('travelGuide.gettingTo.bus.title')}</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.bus.item1')}</span>
                </p>
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.bus.item2')}</span>
                </p>
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.bus.item3')}</span>
                </p>
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.bus.item4')}</span>
                </p>
              </div>
              <div className="mt-4 p-4 bg-white/70 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">{t('travelGuide.gettingTo.bus.tip')}</span> {t('travelGuide.gettingTo.bus.tipText')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Essential Apps */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <DevicePhoneMobileIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-4">
              {t('travelGuide.apps.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              {t('travelGuide.apps.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialApps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2 text-center">{app.name}</h3>
                <p className="text-gray-600 text-center text-sm">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Matters */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <CurrencyDollarIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-4">
              {t('travelGuide.money.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 sm:p-12 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-serif text-primary mb-4 flex items-center">
                  <span className="text-3xl mr-3">💵</span>
                  {t('travelGuide.money.currency.title')}
                </h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">{t('travelGuide.money.currency.name')}</span>
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {t('travelGuide.money.currency.rate')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-primary mb-4 flex items-center">
                  <span className="text-3xl mr-3">💳</span>
                  {t('travelGuide.money.payment.title')}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-semibold text-primary">{t('travelGuide.money.payment.cash')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{t('travelGuide.money.payment.cards')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{t('travelGuide.money.payment.mobile')}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-primary mb-4 flex items-center">
                  <span className="text-3xl mr-3">🏦</span>
                  {t('travelGuide.money.atm.title')}
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  <span className="font-semibold text-primary">{t('travelGuide.money.atm.forex')}</span> {t('travelGuide.money.atm.forexNote')}
                </p>
                <p className="text-gray-600 text-sm">
                  {t('travelGuide.money.atm.atmText')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-primary mb-4 flex items-center">
                  <span className="text-3xl mr-3">💡</span>
                  {t('travelGuide.money.tipping.title')}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t('travelGuide.money.tipping.text')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Pack */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SparklesIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-4">
              {t('travelGuide.packing.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packingList.map((item, index) => (
              <motion.div
                key={item.item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="text-xs px-3 py-1 rounded-full font-semibold bg-primary text-white">
                    {item.importance}
                  </span>
                </div>
                <p className="text-gray-800 font-medium">{item.item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-start space-x-4">
              <SunIcon className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-serif text-primary mb-4">{t('travelGuide.packing.weather.title')}</h3>
                <div className="grid sm:grid-cols-3 gap-6 text-gray-700">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t('travelGuide.packing.weather.daytime.label')}</p>
                    <p className="text-lg font-semibold">{t('travelGuide.packing.weather.daytime.temp')}</p>
                    <p className="text-sm">{t('travelGuide.packing.weather.daytime.desc')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t('travelGuide.packing.weather.evening.label')}</p>
                    <p className="text-lg font-semibold">{t('travelGuide.packing.weather.evening.temp')}</p>
                    <p className="text-sm">{t('travelGuide.packing.weather.evening.desc')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t('travelGuide.packing.weather.rain.label')}</p>
                    <p className="text-lg font-semibold">{t('travelGuide.packing.weather.rain.temp')}</p>
                    <p className="text-sm">{t('travelGuide.packing.weather.rain.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cultural Tips */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <UserGroupIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-4">
              {t('travelGuide.cultural.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('travelGuide.cultural.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalTips.map((tip, index) => (
              <motion.div
                key={tip.tip}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">{tip.icon}</div>
                <p className="text-gray-800 text-center leading-relaxed">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <ShieldCheckIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-4">
              {t('travelGuide.safety.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl"
          >
            <div className="space-y-4">
              {safetyTips.map((tip, index) => (
                <motion.div
                  key={tip}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start p-4 bg-green-50 rounded-xl border-l-4 border-green-500"
                >
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">{tip}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-l-4 border-red-500">
              <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">{t('travelGuide.safety.foodWater.title')}</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t('travelGuide.safety.foodWater.water')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t('travelGuide.safety.foodWater.restaurants')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t('travelGuide.safety.foodWater.rolex')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Decorative heart with pulse animation */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                <div className="relative bg-white rounded-full p-5 shadow-2xl">
                  <HeartIcon className="h-12 w-12 text-primary" />
                </div>
              </motion.div>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary mb-6">
              {t('travelGuide.personalNote.title')}
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-12"></div>

            {/* Main content card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 mb-12 border border-gray-100"
            >
              {/* Quote-style design */}
              <div className="relative">
                <svg className="absolute top-0 left-0 w-12 h-12 text-primary/20 -translate-x-2 -translate-y-2" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
                </svg>

                <div className="pt-6">
                  <p className="text-2xl sm:text-3xl text-gray-800 leading-relaxed mb-8 font-light">
                    {t('travelGuide.personalNote.pearlQuote')} <span className="font-semibold text-primary">&ldquo;{t('travelGuide.personalNote.pearlText')}&rdquo;</span> {t('travelGuide.personalNote.pearlReason')}
                  </p>

                  <div className="space-y-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
                    <p>
                      {t('travelGuide.personalNote.text1')}
                    </p>

                    <p className="text-gray-600">
                      {t('travelGuide.personalNote.text2')}
                    </p>
                  </div>
                </div>

                <svg className="absolute bottom-0 right-0 w-12 h-12 text-primary/20 translate-x-2 translate-y-2 rotate-180" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
                </svg>
              </div>

              {/* Contact encouragement */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-10 pt-10 border-t border-gray-200"
              >
                <div className="bg-primary/5 px-6 sm:px-8 py-6 rounded-2xl">
                  <div className="flex items-start space-x-3 mb-4">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium text-lg">
                      {t('travelGuide.personalNote.questions')}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                    <a
                      href="https://wa.me/256761900722"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg group"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span className="font-medium">{t('travelGuide.personalNote.whatsapp')}</span>
                      <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a
                      href="mailto:arnolduwamz7@gmail.com"
                      className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg group"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{t('travelGuide.personalNote.email')}</span>
                      <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">{t('travelGuide.personalNote.whatsappLabel')}</span> +256 761 900 722
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">{t('travelGuide.personalNote.emailLabel')}</span> arnolduwamz7@gmail.com
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="inline-block">
                <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-4 relative">
                  {t('travelGuide.personalNote.signature')}
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 h-0.5 bg-primary/30"
                  ></motion.span>
                </p>
                <p className="text-xl sm:text-2xl text-gray-600 font-light flex items-center justify-center space-x-2">
                  <span>{t('travelGuide.personalNote.closing')}</span>
                  <span className="font-serif text-primary">{t('travelGuide.personalNote.names')}</span>
                  <HeartIcon className="h-5 w-5 text-primary fill-primary ml-2" />
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary/95 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <p className="text-sm opacity-90 mb-2">
            {t('travelGuide.footer.updated')}
          </p>
          <p className="text-sm opacity-90">
            &copy; {new Date().getFullYear()} Arnold & Haven. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TravelGuidePage;
