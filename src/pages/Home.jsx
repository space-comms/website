import { motion } from 'framer-motion';
import { ArrowRight, Satellite, Radio, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Satellite,
      title: 'CubeSat Projects',
      description: 'Design, build, and deploy nano-satellites with fellow students'
    },
    {
      icon: Radio,
      title: 'Radio Experiments',
      description: 'APRS networks, beacons, and experimental communication systems'
    },
    {
      icon: Globe,
      title: 'Ground Stations',
      description: 'Antenna design and satellite tracking for real-world experience'
    },
    {
      icon: Zap,
      title: 'Workshops',
      description: 'Hands-on learning in RF design, programming, and satellite communications technology'
    }
  ];

  const stats = [
    { label: 'Active Members', value: '15+' },
    { label: 'Projects Completed', value: '4+' },
    { label: 'Workshop Hours', value: '200+' },
    //{ label: 'University Awards', value: '3' }
    { label: 'Radio waves sent (approx)', value: '∞'}
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
          <div className="w-full h-full bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 dark:bg-gradient-to-br dark:from-space-800 dark:via-space-700 dark:to-space-600 relative">
            {/* Animated particles and radio waves */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-gray-400 dark:bg-white rounded-full"
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

            {/* Radio Signal Waves */}
            <div className="absolute top-1/4 left-1/4 opacity-20">
              <motion.div
                className="w-32 h-32 border-2 border-primary-400 rounded-full"
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.div
                className="absolute inset-0 w-32 h-32 border-2 border-primary-300 rounded-full"
                animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5, ease: "easeOut" }}
              />
              <motion.div
                className="absolute inset-0 w-32 h-32 border-2 border-primary-200 rounded-full"
                animate={{ scale: [1, 3, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeOut" }}
              />
            </div>

            {/* Radio Signal Waves - Right Side */}
            <div className="absolute bottom-1/3 right-1/4 opacity-20">
              <motion.div
                className="w-24 h-24 border-2 border-space-cyan rounded-full"
                animate={{ scale: [1, 2.2, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.div
                className="absolute inset-0 w-24 h-24 border-2 border-space-cyan/70 rounded-full"
                animate={{ scale: [1, 2.8, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.7, ease: "easeOut" }}
              />
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
              <span className="bg-gradient-to-r from-gray-800 via-primary-500 to-primary-700 dark:from-white dark:via-primary-300 dark:to-primary-500 bg-clip-text text-transparent">
                Leeds University Space Communications
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">Special Interest Group</span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Building the future of satellite communications and RF technology through student-led CubeSat projects, 
              radio experiments, and hands-on learning. Join our community of satellite communications 
              enthusiasts at the University of Leeds.
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
                <span>View Our Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="group border border-gray-300 dark:border-white/30 hover:border-primary-400 text-gray-800 dark:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                <span>Join Our Society</span>
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
      <section className="py-24 bg-gray-50 dark:bg-space-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto">
              Hands-on learning through exciting satellite communication projects 
              and collaborative student initiatives
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
                  <div className="glass-effect rounded-xl p-8 text-center card-hover h-full relative overflow-hidden">
                    {/* Radio frequency background effect */}
                    <div className="absolute inset-0 opacity-5">
                      <motion.div
                        className="w-full h-full"
                        animate={{
                          background: [
                            "radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 70% 70%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)"
                          ]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>

                    <motion.div 
                      className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/30 transition-colors relative"
                      whileHover={{ scale: 1.1 }}
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(14, 165, 233, 0.4)",
                          "0 0 0 10px rgba(14, 165, 233, 0)",
                          "0 0 0 0 rgba(14, 165, 233, 0.4)"
                        ]
                      }}
                      transition={{ 
                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeOut" },
                        scale: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-primary-400" />
                      
                      {/* Signal dots for communication icons */}
                      {(feature.title === 'Radio Experiments' || feature.title === 'Ground Stations') && (
                        <>
                          <motion.div
                            className="absolute -top-1 -right-1 w-2 h-2 bg-primary-400 rounded-full"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div
                            className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-400 rounded-full"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                          />
                          <motion.div
                            className="absolute top-1/2 -right-2 w-1 h-1 bg-primary-400 rounded-full"
                            animate={{ 
                              x: [0, 10, 0],
                              opacity: [0, 1, 0] 
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                          />
                        </>
                      )}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-white/70 leading-relaxed">
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
      <section className="py-24 bg-gradient-to-br from-blue-100/50 to-indigo-200/50 dark:bg-gradient-to-br dark:from-primary-900/20 dark:to-space-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
              Growing Community
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto">
              Join our thriving society of radio and telecommunications enthusiasts at the University of Leeds
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
                className="text-center relative"
              >
                {/* Signal strength bars for telecommunications theme */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-30">
                  {[1, 2, 3, 4].map((bar) => (
                    <motion.div
                      key={bar}
                      className="w-1 bg-primary-400 rounded-full"
                      style={{ height: `${bar * 4}px` }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: bar * 0.2 + index * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-primary-400 mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(14, 165, 233, 0.5)",
                      "0 0 20px rgba(14, 165, 233, 0.8)",
                      "0 0 5px rgba(14, 165, 233, 0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 dark:text-white/70 font-medium">
                  {stat.label}
                </div>

                {/* Radio wave effect under each stat */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-2 opacity-20">
                  <motion.div
                    className="w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent"
                    animate={{ 
                      scaleX: [0, 1, 0],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.4,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-100 dark:bg-space-800 relative overflow-hidden">
        {/* Animated radio tower in background */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-10">
          <motion.div className="relative">
            {/* Radio tower */}
            <div className="w-1 h-32 bg-primary-400 mx-auto"></div>
            
            {/* Radio waves emanating from tower */}
            <motion.div
              className="absolute top-8 left-1/2 transform -translate-x-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {[1, 2, 3, 4, 5, 6].map((waveId) => (
                <motion.div
                  key={`radio-wave-${waveId}`}
                  className="absolute w-16 h-16 border border-primary-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{ 
                    scale: [0, 2 + (waveId - 1) * 0.5],
                    opacity: [0.8, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: (waveId - 1) * 0.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
            
            {/* Signal strength indicators */}
            <div className="absolute -right-8 top-4 flex flex-col space-y-1">
              {[1, 2, 3, 4].map((bar) => (
                <motion.div
                  key={bar}
                  className="w-1 bg-primary-400 rounded"
                  style={{ height: `${bar * 3}px` }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: bar * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              Whether you&apos;re studying engineering, physics, computer science, or just 
              curious about radio and satellite technology, there&apos;s a place for you in our society.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 glow-hover relative overflow-hidden group"
              >
                {/* Data transmission animation background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                <span className="relative z-10">Join Leeds Space Communications</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
                
                {/* Signal dots */}
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                  {[1, 2, 3].map((dotId) => (
                    <motion.div
                      key={`signal-dot-${dotId}`}
                      className="w-1 h-1 bg-white rounded-full absolute"
                      style={{ right: `${(dotId - 1) * 4}px` }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: (dotId - 1) * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
