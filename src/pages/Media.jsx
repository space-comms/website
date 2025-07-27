import { motion } from 'framer-motion';

const Media = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 dark:bg-gradient-to-br dark:from-space-800 dark:to-space-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white">
              Media Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-white/80 max-w-4xl mx-auto leading-relaxed">
              Explore our visual journey through space communications
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-xl p-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Media Gallery Coming Soon
            </h2>
            <p className="text-gray-700 dark:text-white/70">
              Our media gallery with high-quality images and videos is in development.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Media;
