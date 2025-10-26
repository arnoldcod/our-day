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

  // Helper function to render primary color SVG icons
  const renderIcon = (iconType, size = "h-16 w-16") => {
    const icons = {
      motorcycle: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
        </svg>
      ),
      car: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      ),
      map: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
        </svg>
      ),
      food: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
        </svg>
      ),
      chat: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
      ),
      money: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      sun: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
        </svg>
      ),
      bug: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/>
        </svg>
      ),
      rain: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.5 20c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm0-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm5 2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm0-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm-2 2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm0-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19.35 8.35C18.67 6.59 16.64 5 14.5 5c-1.48 0-2.79.62-3.73 1.61C10.53 6.23 10.03 6 9.5 6 8.12 6 7 7.12 7 8.5c0 .17.03.33.05.5H6.5C5.12 9 4 10.12 4 11.5S5.12 14 6.5 14h12c1.93 0 3.5-1.57 3.5-3.5 0-1.77-1.32-3.23-3.04-3.46-.02-.21-.06-.42-.11-.69z"/>
        </svg>
      ),
      plug: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.48 3L14 5.48 18.52 10 21 7.52 16.48 3zM13 6.5L5.5 14 3 11.5 2 12.5l4 4-3 3c-1.5 1.5-1.5 3.5 0 5s3.5 1.5 5 0l3-3 4 4 1-1-2.5-2.5 7.5-7.5L13 6.5z"/>
        </svg>
      ),
      shoe: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 13c0-1.1-.9-2-2-2h-.54l-.95-9.49c-.09-.9-.83-1.51-1.73-1.51h-.17c-.72 0-1.33.52-1.45 1.23l-.56 3.27-.16 1-.14.78L13 3h-.75c-.72 0-1.33.52-1.45 1.23l-.14.78-.16 1-.56 3.27c-.12.71-.73 1.23-1.45 1.23h-.98v1h1.5l.25-.24.75-.76c.39-.39.9-.6 1.44-.6H14l1.32 7H17c1.1 0 2 .9 2 2h2c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-.54zM10.59 6.24c.13-.74-.28-1.45-1.02-1.57-.74-.13-1.45.28-1.57 1.02L7.46 8.5 7 11H4c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-4.05l1.09-6.73c.13-.74-.28-1.45-1.02-1.57z"/>
        </svg>
      ),
      jacket: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4l1.29 1.29-2.5 2.5L16 9V4zM19 19h1V8.5l-3-3V2h-2.55L12 4.45 9.55 2H7v3.5l-3 3V19h1v3h5v-3h2v3h5v-3zM9 6.21L12 3.21 15 6.21V19H9V6.21z"/>
        </svg>
      ),
      hand: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      ),
      clock: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      ),
      coins: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 16c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-3-11c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      camera: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
          <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
        </svg>
      ),
      language: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
        </svg>
      ),
      heart: (
        <svg className={`${size} text-primary dark:text-primary-dark`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
    };
    return icons[iconType] || <div className="text-5xl text-center text-primary dark:text-primary-dark">{iconType}</div>;
  };

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
    {
      name: t('travelGuide.apps.safeBoda.name'),
      description: t('travelGuide.apps.safeBoda.description'),
      icon: "🏍️",
      links: {
        ios: "https://apps.apple.com/ug/app/safeboda-with-safecar/id1274389246",
        android: "https://play.google.com/store/apps/details?id=com.safeboda.passenger"
      }
    },
    {
      name: "Uber",
      description: t('travelGuide.apps.uber.description'),
      icon: "car",
      links: {
        ios: "https://apps.apple.com/us/app/uber-request-a-ride/id368677368",
        android: "https://play.google.com/store/apps/details?id=com.ubercab"
      }
    },
    {
      name: t('travelGuide.apps.maps.name'),
      description: t('travelGuide.apps.maps.description'),
      icon: "🗺️",
      links: {
        ios: "https://apps.apple.com/us/app/google-maps/id585027354",
        android: "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"
      }
    },
    {
      name: "Glovo",
      description: "Food & grocery delivery",
      icon: "food",
      links: {
        ios: "https://apps.apple.com/ug/app/glovo-food-grocery-delivery/id951812684",
        android: "https://play.google.com/store/apps/details?id=com.glovo"
      }
    },
    { name: t('travelGuide.apps.whatsapp.name'), description: t('travelGuide.apps.whatsapp.description'), icon: "💬" },
    { name: t('travelGuide.apps.mobileMoney.name'), description: t('travelGuide.apps.mobileMoney.description'), icon: "money" }
  ];

  const packingList = [
    { item: t('travelGuide.packing.items.sunscreen'), importance: t('travelGuide.health.recommended'), icon: "sun" },
    { item: t('travelGuide.packing.items.repellent'), importance: t('travelGuide.health.recommended'), icon: "🦟" },
    { item: t('travelGuide.packing.items.jacket'), importance: t('travelGuide.health.recommended'), icon: "rain" },
    { item: t('travelGuide.packing.items.adapter'), importance: t('travelGuide.health.recommended'), icon: "🔌" },
    { item: t('travelGuide.packing.items.shoes'), importance: t('travelGuide.health.recommended'), icon: "👟" },
    { item: t('travelGuide.packing.items.sweater'), importance: t('travelGuide.health.recommended'), icon: "🧥" }
  ];

  const culturalTips = [
    { tip: t('travelGuide.cultural.tips.greetings'), icon: "hand" },
    { tip: t('travelGuide.cultural.tips.time'), icon: "clock" },
    { tip: t('travelGuide.cultural.tips.bargaining'), icon: "💰" },
    { tip: t('travelGuide.cultural.tips.photos'), icon: "camera" },
    { tip: t('travelGuide.cultural.tips.language'), icon: "language" },
    { tip: t('travelGuide.cultural.tips.warmth'), icon: "heart" }
  ];

  const safetyTips = [
    t('travelGuide.safety.tips.safe'),
    t('travelGuide.safety.tips.valuables'),
    t('travelGuide.safety.tips.transport'),
    t('travelGuide.safety.tips.pharmacies'),
    t('travelGuide.safety.tips.emergency')
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white dark:text-white mb-6 leading-tight">
              {t('travelGuide.title')}
            </h1>
            <div className="w-32 h-1 bg-white dark:bg-gray-300 mx-auto mb-8"></div>
            <p className="text-white dark:text-gray-100 text-xl sm:text-2xl md:text-3xl mb-4 font-light">
              {t('travelGuide.subtitle')}
            </p>
            <p className="text-white/90 dark:text-gray-200 text-lg sm:text-xl max-w-3xl mx-auto">
              {t('travelGuide.date')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-primary/5 via-white to-primary/5 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 border-t-4 border-primary dark:border-primary-dark">
            <div className="flex items-center justify-center mb-8">
              <HeartIcon className="h-16 w-16 text-primary dark:text-primary-dark" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary dark:text-primary-dark text-center mb-6">
              {t('travelGuide.welcome.title')}
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 dark:text-gray-200 text-center leading-relaxed mb-6">
              {t('travelGuide.welcome.description1')} <span className="font-semibold text-primary dark:text-primary-dark">&ldquo;{t('travelGuide.welcome.pearlOfAfrica')}&rdquo;</span> {t('travelGuide.welcome.description2')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
              {t('travelGuide.welcome.description3')}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Visa & Entry Requirements Section */}
      <section className="py-20 px-4 sm:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <DocumentCheckIcon className="h-16 w-16 text-primary dark:text-primary-dark mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary dark:text-primary-dark mb-4">
              {t('travelGuide.visa.title')}
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  option.recommended ? 'border-3 border-primary dark:border-primary-dark ring-4 ring-primary/20 dark:ring-primary-dark/20' : ''
                } ${option.highlight ? 'border-2 border-green-500 dark:border-green-400 ring-4 ring-green-100 dark:ring-green-900/30' : ''}`}
              >
                <div className={`p-6 ${option.recommended ? 'bg-primary/10 dark:bg-primary-dark/20' : option.highlight ? 'bg-green-50 dark:bg-green-900/20' : 'bg-gray-50 dark:bg-gray-700'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <option.icon className={`h-10 w-10 ${option.recommended ? 'text-primary dark:text-primary-dark' : option.highlight ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-300'}`} />
                    {option.recommended && (
                      <span className="bg-primary dark:bg-primary-dark text-white dark:text-gray-100 text-xs px-3 py-1 rounded-full font-semibold">
                        {option.badge}
                      </span>
                    )}
                    {option.highlight && (
                      <span className="bg-green-600 dark:bg-green-700 text-white dark:text-gray-100 text-xs px-3 py-1 rounded-full font-semibold">
                        {option.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-serif text-primary dark:text-primary-dark mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">{option.region}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {option.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                          option.recommended ? 'text-primary dark:text-primary-dark' : option.highlight ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'
                        }`} />
                        <span className="text-gray-700 dark:text-gray-200">{req}</span>
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
            className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary-dark/20 dark:to-primary-dark/10 rounded-2xl p-8 border-l-4 border-primary dark:border-primary-dark"
          >
            <div className="flex items-start space-x-4">
              <InformationCircleIcon className="h-8 w-8 text-primary dark:text-primary-dark flex-shrink-0 mt-1" />
              <div className="w-full">
                <h3 className="text-2xl font-serif text-primary dark:text-primary-dark mb-4">{t('travelGuide.visa.applicationTips.title')}</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-200 mb-6">
                  <div className="flex items-start">
                    <ArrowRightIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('travelGuide.visa.applicationTips.tip1')}</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRightIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('travelGuide.visa.applicationTips.tip2')}</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRightIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                    <button
                      onClick={() => navigate('/accommodation')}
                      className="text-left hover:text-primary dark:hover:text-primary-dark transition-colors underline"
                    >
                      {t('travelGuide.visa.applicationTips.tip3')}
                    </button>
                  </div>
                  <div className="flex items-start">
                    <ArrowRightIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
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
            <div className="relative bg-gradient-to-r from-primary via-primary/95 to-primary/90 dark:from-primary-dark dark:via-primary-dark/95 dark:to-primary-dark/90 rounded-3xl p-8 sm:p-10 overflow-hidden shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 dark:bg-black/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 dark:bg-black/10 rounded-full -ml-24 -mb-24"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 dark:bg-black/20 rounded-full mb-6">
                  <DocumentCheckIcon className="h-10 w-10 text-white dark:text-gray-100" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif text-white dark:text-gray-100 mb-4">
                  {t('travelGuide.visa.cta.title')}
                </h3>
                <p className="text-white/90 dark:text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
                  {t('travelGuide.visa.cta.description')}
                </p>
                <motion.a
                  href="https://visas.immigration.go.ug/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center space-x-3 bg-white dark:bg-gray-100 text-primary dark:text-primary-dark px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
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
                <p className="text-white/70 dark:text-gray-300 text-sm mt-6">
                  🌐 {t('travelGuide.visa.cta.portal')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Health Requirements */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <ShieldCheckIcon className="h-16 w-16 text-primary dark:text-primary-dark mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary dark:text-primary-dark mb-4">
              {t('travelGuide.health.title')}
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-12"
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
                    item.required ? 'bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400' : 'bg-gray-50 dark:bg-gray-700 border-l-4 border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`h-3 w-3 rounded-full mr-4 ${item.required ? 'bg-red-500 dark:bg-red-400' : 'bg-gray-400 dark:bg-gray-500'}`}></div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{item.item}</span>
                  </div>
                  <span className={`text-sm font-semibold px-4 py-1 rounded-full ${
                    item.required ? 'bg-red-500 dark:bg-red-600 text-white dark:text-gray-100' : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200'
                  }`}>
                    {item.required ? t('travelGuide.health.required') : t('travelGuide.health.recommended')}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 dark:bg-primary-dark/20 rounded-xl border-l-4 border-primary dark:border-primary-dark">
              <p className="text-gray-700 dark:text-gray-200">
                <span className="font-semibold text-primary dark:text-primary-dark">{t('travelGuide.health.note')}</span> {t('travelGuide.health.noteText')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Getting to Kampala */}
      <section className="py-20 px-4 sm:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MapPinIcon className="h-16 w-16 text-primary dark:text-primary-dark mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary dark:text-primary-dark mb-4">
              {t('travelGuide.gettingTo.title')}
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 shadow-lg"
            >
              <div className="mb-4">
                <svg className="h-16 w-16 text-primary dark:text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-primary dark:text-primary-dark mb-4">{t('travelGuide.gettingTo.flight.title')}</h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-200">
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.flight.item1')}</span>
                </p>
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.flight.item2')}</span>
                </p>
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.flight.item3')}</span>
                </p>
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.flight.item4')}</span>
                </p>
              </div>
              <div className="mt-4 p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">{t('travelGuide.gettingTo.flight.tip')}</span> {t('travelGuide.gettingTo.flight.tipText')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-8 shadow-lg"
            >
              <div className="mb-4">
                <svg className="h-16 w-16 text-primary dark:text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-primary dark:text-primary-dark mb-4">{t('travelGuide.gettingTo.bus.title')}</h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-200">
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.bus.item1')}</span>
                </p>
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.bus.item2')}</span>
                </p>
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.bus.item3')}</span>
                </p>
                <p className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('travelGuide.gettingTo.bus.item4')}</span>
                </p>
              </div>
              <div className="mt-4 p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">{t('travelGuide.gettingTo.bus.tip')}</span> {t('travelGuide.gettingTo.bus.tipText')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Essential Apps */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <DevicePhoneMobileIcon className="h-16 w-16 text-primary dark:text-primary-dark mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary dark:text-primary-dark mb-4">
              {t('travelGuide.apps.title')}
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
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
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* App Icon */}
                <div className="mb-4 flex justify-center">
                  {typeof app.icon === 'string' && app.icon.match(/[\u{1F000}-\u{1F9FF}]/u) ? (
                    <div className="text-5xl text-center">{app.icon}</div>
                  ) : (
                    renderIcon(app.icon)
                  )}
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-primary-dark mb-2 text-center">{app.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-4">{app.description}</p>

                {app.links && (
                  <div className="flex flex-col gap-2 mt-4">
                    <a
                      href={app.links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md border border-gray-300 dark:border-gray-600"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                      </svg>
                      <span>App Store</span>
                    </a>
                    <a
                      href={app.links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-green-600 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-600 text-white dark:text-gray-100 px-4 py-2 rounded-lg transition-colors text-sm font-medium shadow-sm hover:shadow-md"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <span>Google Play</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Matters */}
      <section className="py-20 px-4 sm:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <CurrencyDollarIcon className="h-16 w-16 text-primary dark:text-primary-dark mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary dark:text-primary-dark mb-4">
              {t('travelGuide.money.title')}
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 sm:p-12 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-serif text-primary dark:text-primary-dark mb-4 flex items-center">
                  <span className="text-3xl mr-3">💵</span>
                  {t('travelGuide.money.currency.title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">
                  <span className="font-semibold">{t('travelGuide.money.currency.name')}</span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {t('travelGuide.money.currency.rate')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-primary dark:text-primary-dark mb-4 flex items-center">
                  <span className="text-3xl mr-3">💳</span>
                  {t('travelGuide.money.payment.title')}
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-semibold text-primary dark:text-primary-dark">{t('travelGuide.money.payment.cash')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{t('travelGuide.money.payment.cards')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{t('travelGuide.money.payment.mobile')}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-primary dark:text-primary-dark mb-4 flex items-center">
                  <span className="text-3xl mr-3">🏦</span>
                  {t('travelGuide.money.atm.title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
                  <span className="font-semibold text-primary dark:text-primary-dark">{t('travelGuide.money.atm.forex')}</span> {t('travelGuide.money.atm.forexNote')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('travelGuide.money.atm.atmText')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-primary dark:text-primary-dark mb-4 flex items-center">
                  <span className="text-3xl mr-3">💡</span>
                  {t('travelGuide.money.tipping.title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  {t('travelGuide.money.tipping.text')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Pack */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SparklesIcon className="h-16 w-16 text-primary dark:text-primary-dark mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary dark:text-primary-dark mb-4">
              {t('travelGuide.packing.title')}
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packingList.map((item, index) => (
              <motion.div
                key={item.item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    {typeof item.icon === 'string' && item.icon.match(/[\u{1F000}-\u{1F9FF}]/u) ? (
                      <span className="text-4xl">{item.icon}</span>
                    ) : (
                      renderIcon(item.icon, "h-12 w-12")
                    )}
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full font-semibold bg-primary dark:bg-primary-dark text-white dark:text-gray-100">
                    {item.importance}
                  </span>
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">{item.item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-start space-x-4">
              <SunIcon className="h-12 w-12 text-primary dark:text-primary-dark flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-serif text-primary dark:text-primary-dark mb-4">{t('travelGuide.packing.weather.title')}</h3>
                <div className="grid sm:grid-cols-3 gap-6 text-gray-700 dark:text-gray-200">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('travelGuide.packing.weather.daytime.label')}</p>
                    <p className="text-lg font-semibold">{t('travelGuide.packing.weather.daytime.temp')}</p>
                    <p className="text-sm">{t('travelGuide.packing.weather.daytime.desc')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('travelGuide.packing.weather.evening.label')}</p>
                    <p className="text-lg font-semibold">{t('travelGuide.packing.weather.evening.temp')}</p>
                    <p className="text-sm">{t('travelGuide.packing.weather.evening.desc')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('travelGuide.packing.weather.rain.label')}</p>
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
      <section className="py-20 px-4 sm:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <UserGroupIcon className="h-16 w-16 text-primary dark:text-primary-dark mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary dark:text-primary-dark mb-4">
              {t('travelGuide.cultural.title')}
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary-dark/20 dark:to-primary-dark/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {typeof tip.icon === 'string' && tip.icon.match(/[\u{1F000}-\u{1F9FF}]/u) ? (
                    <div className="text-5xl">{tip.icon}</div>
                  ) : (
                    renderIcon(tip.icon)
                  )}
                </div>
                <p className="text-gray-800 dark:text-gray-200 text-center leading-relaxed">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <ShieldCheckIcon className="h-16 w-16 text-primary dark:text-primary-dark mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary dark:text-primary-dark mb-4">
              {t('travelGuide.safety.title')}
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-xl"
          >
            <div className="space-y-4">
              {safetyTips.map((tip, index) => (
                <motion.div
                  key={tip}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-500 dark:border-green-400"
                >
                  <CheckCircleIcon className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200">{tip}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border-l-4 border-red-500 dark:border-red-400">
              <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">{t('travelGuide.safety.foodWater.title')}</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-red-600 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t('travelGuide.safety.foodWater.water')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-red-600 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t('travelGuide.safety.foodWater.restaurants')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-red-600 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-primary/5 via-white to-primary/10 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 dark:bg-primary-dark/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary-dark/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

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
                <div className="absolute inset-0 bg-primary/20 dark:bg-primary-dark/20 rounded-full blur-xl"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-full p-5 shadow-2xl">
                  <HeartIcon className="h-12 w-12 text-primary dark:text-primary-dark" />
                </div>
              </motion.div>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary dark:text-primary-dark mb-6">
              {t('travelGuide.personalNote.title')}
            </h2>
            <div className="w-32 h-1 bg-primary dark:bg-primary-dark mx-auto mb-12"></div>

            {/* Main content card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 mb-12 border border-gray-100 dark:border-gray-700"
            >
              {/* Quote-style design */}
              <div className="relative">
                <svg className="absolute top-0 left-0 w-12 h-12 text-primary/20 dark:text-primary-dark/20 -translate-x-2 -translate-y-2" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
                </svg>

                <div className="pt-6">
                  <p className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8 font-light">
                    {t('travelGuide.personalNote.pearlQuote')} <span className="font-semibold text-primary dark:text-primary-dark">&ldquo;{t('travelGuide.personalNote.pearlText')}&rdquo;</span> {t('travelGuide.personalNote.pearlReason')}
                  </p>

                  <div className="space-y-6 text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                    <p>
                      {t('travelGuide.personalNote.text1')}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300">
                      {t('travelGuide.personalNote.text2')}
                    </p>
                  </div>
                </div>

                <svg className="absolute bottom-0 right-0 w-12 h-12 text-primary/20 dark:text-primary-dark/20 translate-x-2 translate-y-2 rotate-180" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
                </svg>
              </div>

              {/* Contact encouragement */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="bg-primary/5 dark:bg-primary-dark/20 px-6 sm:px-8 py-6 rounded-2xl">
                  <div className="flex items-start space-x-3 mb-4">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary dark:text-primary-dark flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-200 font-medium text-lg">
                      {t('travelGuide.personalNote.questions')}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                    <a
                      href="https://wa.me/256761900722"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700 text-white dark:text-gray-100 px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg group"
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
                      className="inline-flex items-center space-x-2 bg-primary dark:bg-primary-dark hover:bg-primary/90 dark:hover:bg-primary-dark/90 text-white dark:text-gray-100 px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg group"
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
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium">{t('travelGuide.personalNote.whatsappLabel')}</span> +256 761 900 722
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
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
                <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary dark:text-primary-dark mb-4 relative">
                  {t('travelGuide.personalNote.signature')}
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 h-0.5 bg-primary/30 dark:bg-primary-dark/30"
                  ></motion.span>
                </p>
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-light flex items-center justify-center space-x-2">
                  <span>{t('travelGuide.personalNote.closing')}</span>
                  <span className="font-serif text-primary dark:text-primary-dark">{t('travelGuide.personalNote.names')}</span>
                  <HeartIcon className="h-5 w-5 text-primary dark:text-primary-dark fill-primary dark:fill-primary-dark ml-2" />
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary/95 dark:bg-primary-dark/95 text-white dark:text-gray-100">
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
