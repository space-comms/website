import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <section className="py-24 bg-gradient-to-br from-space-800 to-space-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Take a look at what we can do for YOU.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-xl p-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Services Page Coming Soon
            </h2>
            <p className="text-white/70">
              We&apos;re working on detailed service offerings. Check back soon!
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
