import { motion } from 'framer-motion';
import Navbar from './Navbar';

const RsvpPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="h-[70vh] relative">
        <img 
          src="./gallery/wed11.jpg" 
          alt="Wedding invite background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-serif text-white dark:text-gray-100"
          >
            RSVP
          </motion.h1>
        </div>
      </section>

      {/* RSVP Form Embed */}
      <section className="py-20 px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScAzGSYder59TqJilN9iesT_NJELBSv6D6K3dpE255vYkOaBQ/viewform?usp=header"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="rounded-xl shadow-xl dark:shadow-2xl dark:shadow-gray-800/50"
              title="RSVP Form"
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </section>

      {/* Return Home Button */}
      {/* <section className="pb-20 text-center bg-white dark:bg-gray-900">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/'}
          className="bg-primary dark:bg-primary-dark text-white dark:text-gray-100 px-8 py-3 rounded-full hover:bg-primary/90 dark:hover:bg-primary-dark/90 transition-colors"
        >
          Back to Homepage
        </motion.button>
      </section> */}
    </div>
  );
};

export default RsvpPage;
