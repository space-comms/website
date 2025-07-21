import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Satellite, Radio, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Satellite,
      title: 'Advanced Satellites',
      description: 'Next-generation satellite technology for global communications'
    },
    {
      icon: Radio,
      title: 'RF Solutions',
      description: 'Cutting-edge radio frequency systems and signal processing'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide coverage with low-latency communication networks'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Ultra-fast data transmission with 99.9% reliability'
    }
  ];

  const stats = [
    { label: 'Satellites Deployed', value: '50+' },
    { label: 'Countries Served', value: '25+' },
    { label: 'Data Transmitted', value: '10PB+' },
    { label: 'Uptime Guarantee', value: '99.9%' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background with Video Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-overlay z-10" />
          {/* Placeholder for hero video/image */}
          <div className="w-full h-full bg-gradient-to-br from-space-800 via-space-700 to-space-600 relative">
            {/* Animated particles */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                    opacity: 0
                  }}
                  animate={{
                    y: [null, -100],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-primary-300 to-primary-500 bg-clip-text text-transparent">
                Connecting Earth
              </span>
              <br />
              <span className="text-white">to the Cosmos</span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Pioneering the future of space communications with revolutionary 
              satellite technology and innovative solutions that bridge the gap 
              between terrestrial and cosmic networks.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <Link
                to="/technologies"
                className="group bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2 glow-hover"
              >
                <span>Explore Technologies</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="group border border-white/30 hover:border-primary-400 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                <span>Get In Touch</span>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-white/60 rounded-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-space-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Revolutionary Technology
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our cutting-edge solutions push the boundaries of what's possible 
              in space communications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass-effect rounded-xl p-8 text-center card-hover h-full">
                    <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/30 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900/20 to-space-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Trusted Worldwide
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our impact across the globe speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-space-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Ready to Launch Your Project?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Join the space communications revolution. Let's discuss how our 
              technology can transform your connectivity needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 glow-hover"
            >
              <span>Start Your Mission</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
