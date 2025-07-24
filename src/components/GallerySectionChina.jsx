import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

const GallerySectionChina = () => {
  const { t, i18n } = useTranslation();
  
  // Array of gallery images with their details
  const galleryImages = [
    {
      id: 1,
      src: './gallery1/china11.jpg',
      // alt: 'Couple at sunset',
    },
    {
      id: 2,
      src: './gallery1/china12.jpg',
      // alt: 'Engagement photo',
    },
    {
      id: 3,
      src: './gallery1/china13.jpg',
      // alt: 'First date location',
    },
    {
      id: 4,
      src: './gallery1/china14.jpg',
      // alt: 'Traveling together',
    },
    {
      id: 5,
      src: './gallery1/china16.jpg',
      // alt: 'Proposal moment',
    },
    {
      id: 6,
      src: './gallery1/china17.jpg',
      // alt: 'Casual couple photo',
    },
    // {
    //   id: 7,
    //   src: './gallery1/china18.jpg',
    //   // alt: 'Casual couple photo',
    // },
    // {
    //   id: 8,
    //   src: './gallery1/china19.jpg',
    //   // alt: 'Casual couple photo',
    // },
    // {
    //   id: 9,
    //   src: './gallery1/china20.jpg',
    //   // alt: 'Casual couple photo',
    // }
  ];

  return (
    <section id="gallery" className="py-20 px-8">
      <h2 className="text-4xl font-serif mb-12 text-center text-primary">{t("Our Photos in China")}</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-lg group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Optional hover overlay with caption */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white p-4 text-sm">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySectionChina;