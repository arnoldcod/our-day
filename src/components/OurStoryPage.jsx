import 'react';
import { motion } from 'framer-motion';

const OurStoryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-[70vh] relative">
        <img 
          src="./2wed.jpg" 
          alt="Couple together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-6xl font-serif text-white">Our Story</h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12 text-secondary">
            <div>
              <h2 className="text-3xl font-serif mb-4 text-primary">How We Met</h2>
              <p className="leading-relaxed">
                We met on a crisp autumn evening at a local coffee shop. What started as a chance 
                encounter turned into hours of conversation, laughter, and the beginning of our 
                beautiful journey together.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-4 text-primary">The First Date</h2>
              <p className="leading-relaxed">
                Our first date was at a cozy Italian restaurant downtown. We talked for hours about 
                our dreams, our families, and our shared love of travel and adventure.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-4 text-primary">The Proposal</h2>
              <p className="leading-relaxed">
                On a weekend getaway to the mountains, surrounded by nature&apos;s beauty, we decided 
                to make forever our promise to each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Return Home Button */}
      <section className="pb-20 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/'}
          className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          Back to Homepage
        </motion.button>
      </section>
    </div>
  );
};

export default OurStoryPage;