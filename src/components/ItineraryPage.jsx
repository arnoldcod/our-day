import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';
import {
  ClockIcon,
  MusicalNoteIcon,
  CakeIcon,
  SparklesIcon,
  MicrophoneIcon,
  UserGroupIcon,
  HeartIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const ItineraryPage = () => {
  const { t } = useTranslation();

  const itineraryEvents = [
    {
      time: '5:00 PM',
      title: 'Guest Arrival & Seating',
      description: 'Welcome! Please make yourself comfortable as we prepare for a magical evening. Enjoy drinks and background music while we await the bridal party.',
      icon: UserGroupIcon,
      color: 'from-rose-400 to-pink-500',
      details: [
        'Guests enter and are seated',
        'Background music playing',
        'MC welcomes guests',
        'Drinks served while waiting'
      ]
    },
    {
      time: '5:30 - 5:40 PM',
      title: 'Bridal Party Entrance',
      description: 'Experience the joy as our bridal party makes their grand entrance with a traditional Tigrinya song, followed by the couple dancing in!',
      icon: HeartIcon,
      color: 'from-amber-400 to-orange-500',
      details: [
        'Traditional Tigrinya song procession',
        'Bridal party enters with music',
        'Couple enters dancing',
        'Guests join the celebration'
      ]
    },
    {
      time: '6:00 PM',
      title: 'Welcome of Guests',
      description: 'Our MC will warmly welcome all guests in three languages, celebrating our diverse cultures and unity.',
      icon: MicrophoneIcon,
      color: 'from-emerald-400 to-teal-500',
      details: [
        'MC welcome in 3 languages',
        'Celebration of diverse cultures'
      ]
    },
    {
      time: '6:15 PM',
      title: 'Prayer Over Food',
      description: 'An elder or family member will bless the meal and our union.',
      icon: SparklesIcon,
      color: 'from-purple-400 to-purple-600',
      details: [
        'Elder/family blessing',
        'Prayer of thanksgiving'
      ]
    },
    {
      time: '6:20 PM',
      title: 'Dinner Service',
      description: 'Enjoy a delicious feast! Tables will be called one by one. Be delighted by Rwandan dancers performing during dinner.',
      icon: UserGroupIcon,
      color: 'from-blue-400 to-indigo-500',
      details: [
        'Bridal party served first',
        'Tables called for dinner service',
        'Rwandan dancers perform',
        'Enjoy the cultural entertainment'
      ]
    },
    {
      time: '7:30 PM',
      title: 'Special Dances',
      description: 'Witness our first dance as a married couple, followed by a touching father-daughter dance.',
      icon: MusicalNoteIcon,
      color: 'from-pink-400 to-rose-500',
      details: [
        'Bride & groom first dance',
        'Father-daughter dance'
      ]
    },
    {
      time: '7:45 PM',
      title: 'Costume Change',
      description: 'The bride will change into her second dress for the cultural celebrations!',
      icon: SparklesIcon,
      color: 'from-fuchsia-400 to-pink-500',
      details: [
        'Bride changes to second dress',
        'Brief intermission'
      ]
    },
    {
      time: '7:50 PM',
      title: 'Cultural Dance Set',
      description: 'Celebrate our rich heritage! Experience traditional dances from Rwanda, Eritrea, and Congo.',
      icon: MusicalNoteIcon,
      color: 'from-orange-400 to-red-500',
      details: [
        'Rwandan song & dance',
        'Eritrean song & dance',
        'Congolese song & dance'
      ]
    },
    {
      time: '8:15 PM',
      title: 'Cake Cutting',
      description: 'Join us for the sweet moment as we cut our wedding cake together!',
      icon: CakeIcon,
      color: 'from-cyan-400 to-blue-500',
      details: [
        'Couple cuts the cake',
        'Cake served to all guests',
        'Family served by waiters'
      ]
    },
    {
      time: '8:30 PM',
      title: 'Speeches & Toasts',
      description: 'Heartfelt words from our beloved bridal party and family. Grab your cake and enjoy!',
      icon: MicrophoneIcon,
      color: 'from-violet-400 to-purple-500',
      details: [
        'Bridal party speeches',
        'Family toasts',
        'Enjoy cake while listening'
      ]
    },
    {
      time: '9:15 PM',
      title: 'Photo Time',
      description: 'Capture memories! Family portraits and table groups, come dance floor for photos with the newlyweds.',
      icon: SparklesIcon,
      color: 'from-teal-400 to-emerald-500',
      details: [
        'Family portraits',
        'Table group photos',
        'Photos with bride & groom'
      ]
    },
    {
      time: '10:00 PM',
      title: 'Dance Party Begins!',
      description: 'The dance floor is OPEN! Get ready for Afrobeat, cultural hits, and amazing vibes. This is your mini pre-party!',
      icon: MusicalNoteIcon,
      color: 'from-red-400 to-orange-500',
      details: [
        'Dance floor opens',
        'Afrobeat & cultural hits',
        'DJ keeps the vibe alive',
        'MC hypes up the energy'
      ]
    },
    {
      time: '10:20 PM',
      title: 'Fun & Games',
      description: 'Time for some fun! Play "How Well Do You Know the Couple?" and catch the bouquet!',
      icon: HeartIcon,
      color: 'from-pink-400 to-fuchsia-500',
      details: [
        'Mini music break',
        'MC leads couple trivia game',
        'Bride tosses bouquet',
        'Single ladies, get ready!'
      ]
    },
    {
      time: '10:35 PM',
      title: 'Full Dance Party',
      description: 'Non-stop dancing! A spectacular mix of Eritrean, Rwandan, Congolese, Afrobeat, and global favorites!',
      icon: FireIcon,
      color: 'from-orange-500 to-red-600',
      details: [
        'Non-stop music mix',
        'Eritrean, Rwandan, Congolese',
        'Afrobeat & global hits',
        'Dance until you drop!'
      ]
    },
    {
      time: '12:00 AM',
      title: 'Grand Finale',
      description: 'Thank you for celebrating with us! Final dance, farewell, and a spectacular fireworks display!',
      icon: SparklesIcon,
      color: 'from-yellow-400 to-amber-500',
      details: [
        'MC thanks guests (3 languages)',
        'Final dance together',
        'Heartfelt farewells',
        'Fireworks & sparklers!'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="./hotel360.jpg"
            alt="Wedding background"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-green-800/40 to-emerald-900/50"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mb-6"
          >
            <ClockIcon className="h-20 w-20 text-white" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 font-bold">
            Reception Itinerary
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-2">
            February 14, 2026
          </p>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl">
            Join us for an unforgettable evening of love, culture, and celebration
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-12"
          >
            <div className="text-white/60">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6">
              Welcome, Dear Guests!
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
              We are thrilled to have you join us for this special celebration! This itinerary will guide you
              through an evening filled with love, laughter, delicious food, and joyful dancing.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Experience the beautiful blend of our cultures through traditional dances, music, and customs.
              Get ready for an unforgettable night!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {itineraryEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline connector */}
                {index !== itineraryEvents.length - 1 && (
                  <div className="absolute left-6 sm:left-12 top-20 w-0.5 h-full bg-gradient-to-b from-primary/30 to-transparent hidden md:block"></div>
                )}

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Time Badge */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`bg-gradient-to-br ${event.color} rounded-2xl p-4 shadow-lg`}
                      >
                        <event.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="mt-3 text-center">
                        <p className="text-sm font-bold text-primary whitespace-nowrap">{event.time}</p>
                      </div>
                    </div>
                  </div>

                  {/* Event Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-orange-100"
                  >
                    <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {event.details && event.details.length > 0 && (
                      <ul className="space-y-2">
                        {event.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${event.color} flex-shrink-0`}></span>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-rose-100 via-orange-100 to-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <HeartIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6">
              We Can't Wait to Celebrate With You!
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              This evening is about love, joy, and bringing our families and cultures together.
              Please come ready to eat, dance, laugh, and make unforgettable memories with us!
            </p>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-2xl sm:text-3xl font-serif text-primary italic">
                See you on the dance floor! 💃🕺
              </p>
            </motion.div>
          </motion.div>
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

export default ItineraryPage;
