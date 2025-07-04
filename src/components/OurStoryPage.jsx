
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const OurStoryPage = () => {
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
            className="text-6xl font-serif text-white"
          >
            Our Story
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
              <h2 className="text-3xl font-serif mb-4 text-primary">How We Met</h2>
              <p className="leading-relaxed">
              We truly found love in a hopeless place .. China.

In the midst of the COVID-19 pandemic, fate brought Arnold and Haven together while they were living in southern China. Though they had arrived for different reasons, their paths crossed.. quite unexpectedly  through a mutual friend.

At the time, Haven was working as an English teacher in Shenzhen, while Arnold was studying computer science in Guangzhou. Despite the distance between cities, they felt an instant connection and began building a friendship that quickly blossomed into something deeper.

Just five months after meeting, they officially began dating. From the beginning, Arnold had a strong sense about Haven .. telling his friends, “She’s wifey material.” Haven was drawn to Arnold’s thoughtful conversations and the way he challenged her thinking, encouraging her to reflect and grow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif mb-4 text-primary">Building Life Together</h2>
              <p className="leading-relaxed">
              In 2022, a year into their relationship, Haven felt called to return to the United States. She quit her job, moved out of her apartment, and purchased three different plane tickets. But in a series of unexpected events, she wasn’t able to board any of them. It became clear that God had other plans. With nowhere else to go, she returned to Guangzhou .. Arnold’s city.

Arnold stood by her side through it all, offering support as she navigated visa appointments, paperwork, and travel to multiple cities for documentation. Eventually, Haven found another teaching job in Guangzhou, which opened the door for them to live closer and deepen their relationship.

Together, they made the most of their time. They traveled across China, enjoyed quiet evenings watching movies, cleaned the apartment together, listened to music, tried new foods, and took long strolls through the city. They laughed with friends, woke up early for NBA games, and stayed up late for Premier League matches. They went to church, built community, and created a rhythm that felt like home.

Then in February 2023, life shifted again. Haven moved back to the United States .. this time settling in Washington, D.C. while Arnold returned to Uganda after eight years in China. The long-distance chapter began. Despite being thousands of miles apart, they spoke every single day, across time zones and continents. At one point, with Haven in Seattle and Arnold still in Guangzhou, they navigated a 15-hour time difference .. yet never stopped showing up for each other.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif mb-4 text-primary">The Proposal</h2>
              <p className="leading-relaxed">
              Then came the most beautiful surprise.

At the end of 2023, Haven had a work assignment in Kenya — a country that held personal significance for Arnold. He had already decided that Kenya would be the place where he would ask Haven to marry him.

On December 15, 2023, Arnold proposed. It was a complete shock to Haven, who said yes through tears and joy. She had long prayed for a man like Arnold, and in that moment, she saw those prayers answered.

Since then, they’ve continued to walk through life hand in hand, even as life keeps evolving. Haven began a new chapter in Washington, D.C. and Arnold started an apprenticeship program to grow professionally. Together, they’ve faced transitions, distance, and the unknown but never alone.

They give all glory to God, who has been the foundation of their relationship. It is His patience, strength, and grace that have sustained them through two years of long-distance love and continue to lead them into this next chapter, side by side.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default OurStoryPage;