import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1a4731] via-[#2d5a3f] to-[#1a4731]"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 100; // percentage
          const randomY = Math.random() * 100; // percentage
          const randomDuration = Math.random() * 3 + 2;
          const randomDelay = Math.random() * 2;

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                y: [-20, 100],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
              }}
            >
              <HeartIcon className="w-4 h-4 text-red-500" />
            </motion.div>
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <HeartIcon className="w-6 h-6 text-red-500" />
            </motion.div>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            >
              <HeartIcon className="w-6 h-6 text-red-500" />
            </motion.div>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            >
              <HeartIcon className="w-6 h-6 text-red-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Initials with animated ampersand */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-6 text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-8xl md:text-9xl font-serif"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                type: "spring",
                stiffness: 200
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <HeartIcon className="w-16 h-16 text-red-500" />
                <div
                  className="absolute inset-0 flex items-center justify-center text-2xl font-light text-[#1a4731]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  &
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-8xl md:text-9xl font-serif"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              H
            </motion.div>
          </div>
        </div>

        {/* Wedding date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-white text-xl md:text-2xl tracking-widest font-light mb-8"
        >
          02.14.2026
        </motion.div>

        {/* Loading spinner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center"
        >
          <div className="relative w-16 h-16">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-transparent border-t-white border-r-white rounded-full"
            ></motion.div>
            {/* Inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 border-4 border-transparent border-b-pink-200 border-l-pink-200 rounded-full"
            ></motion.div>
            {/* Center heart */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <HeartIcon className="w-6 h-6 text-red-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-8 text-white text-sm tracking-wider uppercase"
        >
          Preparing something special...
        </motion.div>

        {/* Decorative bottom element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
