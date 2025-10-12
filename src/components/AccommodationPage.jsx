import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';
import {
  HomeIcon,
  SparklesIcon,
  MapPinIcon,
  HeartIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  SparklesIcon as SparklesSolid
} from '@heroicons/react/24/outline';
import {
  PaintBrushIcon,
  SparklesIcon as SparklesIconSolid,
  BuildingOffice2Icon as BuildingIconSolid,
  BuildingLibraryIcon,
  HomeModernIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/solid';

const AccommodationPage = () => {
  const { t } = useTranslation();

  const luxuryHotels = [
    {
      name: "Latitude 0 Degrees",
      location: "Mobutu Road, Kampala",
      mapsUrl: "https://maps.google.com/?q=Latitude+0+Degrees+Mobutu+Road+Kampala",
      description: t("accommodation.hotels.latitude.description"),
      IconComponent: PaintBrushIcon
    },
    {
      name: "Le Petit Village Hotel & Spa",
      location: "Plot 1273 Ggaba Road, Kampala",
      mapsUrl: "https://maps.google.com/?q=Le+Petit+Village+Hotel+Spa+Plot+1273+Ggaba+Road+Kampala",
      description: t("accommodation.hotels.lePetit.description"),
      IconComponent: SparklesIconSolid
    },
    {
      name: "Four Points by Sheraton Kampala",
      location: "117516, Central Region",
      mapsUrl: "https://maps.google.com/?q=Four+Points+by+Sheraton+Kampala",
      description: t("accommodation.hotels.sheraton.description"),
      IconComponent: BuildingIconSolid
    },
    {
      name: "Protea Hotel Kampala Skyz",
      location: "Kampala, Central Region",
      mapsUrl: "https://maps.google.com/?q=Protea+Hotel+Kampala+Skyz",
      description: t("accommodation.hotels.protea.description"),
      IconComponent: BuildingLibraryIcon
    },
    {
      name: "Hotel 360° (Wedding Venue)",
      location: "Ndejje Road, Kampala, Central Region",
      mapsUrl: "https://maps.google.com/?q=Hotel+360+Ndejje+Road+Kampala+Uganda",
      description: t("accommodation.hotels.hotel360.description"),
      special: true,
      IconComponent: HomeModernIcon
    }
  ];

  const nearbyStays = [
    {
      name: "Front Page Hotel",
      location: "Namasuba",
      mapsUrl: "https://maps.google.com/?q=Front+Page+Hotel+Namasuba+Kampala",
      type: t("accommodation.nearby.frontPage.type")
    },
    {
      name: "Lovely 5-Bed House",
      location: "Ndejje",
      mapsUrl: "https://maps.google.com/?q=Ndejje+Kampala+Uganda",
      type: t("accommodation.nearby.house.type")
    },
    {
      name: "Guesthouses & Serviced Apartments",
      location: "Namasuba, Entebbe Road, Lubowa",
      mapsUrl: "https://maps.google.com/?q=Namasuba+Entebbe+Road+Kampala",
      type: t("accommodation.nearby.guesthouses.type")
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="h-[70vh] relative">
        <img
          src="./hotel-kampala.jpg"
          alt="Kampala skyline"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = './hotel360.jpg'; // Fallback image
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <HomeIcon className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4">
              {t("accommodation.title")}
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto">
              {t("accommodation.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <GlobeAltIcon className="h-12 w-12 text-primary mx-auto mb-6" />
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8">
            {t("accommodation.welcome")}
          </p>
          <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 border-l-4 border-primary">
            <MapPinIcon className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-primary mb-2">
              {t("accommodation.venue.title")}
            </h3>
            <p className="text-gray-700 text-lg font-medium">
              Hotel 360°
            </p>
            <a
              href="https://maps.google.com/?q=Hotel+360+Ndejje+Road+Kampala+Uganda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors inline-flex items-center space-x-1"
            >
              <MapPinIcon className="h-4 w-4" />
              <span>Ndejje Road, Kampala, Central Region, Uganda</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Luxury Hotels Section */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SparklesIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-4">
              {t("accommodation.luxury.title")}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t("accommodation.luxury.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {luxuryHotels.map((hotel, index) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                  hotel.special ? 'border-2 border-primary' : ''
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="p-3 rounded-xl bg-primary/10">
                          <hotel.IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-serif text-primary">
                          {hotel.name}
                        </h3>
                      </div>
                      {hotel.special && (
                        <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mb-3">
                          {t("accommodation.specialOffer")}
                        </span>
                      )}
                    </div>
                  </div>

                  <a
                    href={hotel.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80 transition-colors mb-4 w-fit"
                  >
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    <p className="text-sm underline">{hotel.location}</p>
                  </a>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {hotel.description}
                  </p>

                  {hotel.special && (
                    <div className="bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
                      <p className="text-sm text-gray-700 font-medium mb-2">
                        {t("accommodation.hotels.hotel360.discount")}
                      </p>
                      <p className="text-sm text-gray-600">
                        {t("accommodation.hotels.hotel360.rooms")}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Airbnb Section */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <HomeModernIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-4">
              House Or Rental
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <HomeModernIcon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif text-primary">
                      AIRBNB
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Airbnb provides excellent options for house rentals. Kololo, Ntinda, Muyenga and Munyonyo all provide excellent locations for rental.
              </p>

              <motion.a
                href="https://www.airbnb.com/s/Kampala--Uganda/homes"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <span>Browse Airbnb in Kampala</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nearby Stays Section */}
      {/* <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <HomeIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-4">
              {t("accommodation.nearby.title")}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyStays.map((stay, index) => (
              <motion.div
                key={stay.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-serif text-primary mb-2">
                  {stay.name}
                </h3>
                <a
                  href={stay.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-primary/80 transition-colors mb-3 w-fit"
                >
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  <p className="text-sm underline">{stay.location}</p>
                </a>
                <p className="text-sm text-gray-600 italic">{stay.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Travel Tip Section */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-br from-primary/5 to-primary/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <PaperAirplaneIcon className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-serif text-primary">
                {t("accommodation.travelTip.title")}
              </h2>
            </div>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {t("accommodation.travelTip.content")}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t("accommodation.travelTip.recommendation")}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Closing Message */}
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
              {t("accommodation.closing.message")}
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
                    {t("accommodation.closing.excitement")}
                  </p>

                  <div className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                    <p>
                      We&apos;ve carefully selected these accommodations to ensure your comfort and convenience during our special celebration.
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
                    <HomeIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium text-lg">
                      Need help with accommodation? We&apos;re here to assist!
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
                      <span className="font-medium">WhatsApp</span>
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
                      <span className="font-medium">Email Us</span>
                      <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">WhatsApp:</span> +256 761 900 722
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">Email:</span> arnolduwamz7@gmail.com
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
                  Looking forward to hosting you!
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 h-0.5 bg-primary/30"
                  ></motion.span>
                </p>
                <p className="text-xl sm:text-2xl text-gray-600 font-light flex items-center justify-center space-x-2">
                  <span>With love,</span>
                  <span className="font-serif text-primary">Arnold & Haven</span>
                  <HeartIcon className="h-5 w-5 text-primary fill-primary ml-2" />
                </p>
              </div>
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

export default AccommodationPage;
