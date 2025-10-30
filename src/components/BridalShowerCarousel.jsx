import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const BridalShowerCarousel = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  // Generate array of all 23 bridal shower images
  const bridalShowerImages = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    src: `./s/s${i + 1}.jpeg`
  }));

  return (
    <>
      <section id="bridal-shower" className="py-20 sm:py-32 px-4 sm:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-primary dark:text-primary-dark">
              {t("bridalShower.title")}
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("bridalShower.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="bridal-shower-swiper"
            >
              {bridalShowerImages.map((image) => (
                <SwiperSlide key={image.id} className="!w-[280px] sm:!w-[400px] md:!w-[500px]">
                  <div
                    className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer shadow-xl"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={`Bridal shower moment ${image.id}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            src={selectedImage.src}
            alt="Selected bridal shower photo"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
          >
            ×
          </button>
        </motion.div>
      )}

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .bridal-shower-swiper {
          padding: 40px 0 60px;
        }

        .bridal-shower-swiper .swiper-button-next,
        .bridal-shower-swiper .swiper-button-prev {
          color: var(--primary-color, #10b981);
        }

        .bridal-shower-swiper .swiper-pagination-bullet-active {
          background-color: var(--primary-color, #10b981);
        }

        @media (max-width: 640px) {
          .bridal-shower-swiper {
            padding: 20px 0 50px;
          }
        }
      `}</style>
    </>
  );
};

export default BridalShowerCarousel;
