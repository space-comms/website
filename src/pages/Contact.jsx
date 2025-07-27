import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Globe, ExternalLink, Clock, Radio, Zap, Signal } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this to a backend service
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@leedsspacecomms.co.uk',
      href: 'mailto:info@leedsspacecomms.co.uk'
    },
    {
      icon: MapPin,
      title: 'Find Us',
      content: 'Engineering Building, University of Leeds',
      href: 'https://maps.google.com/?q=University+of+Leeds+Engineering+Building'
    },
    {
      icon: Clock,
      title: 'Weekly Meetings',
      content: 'Wednesday 6 PM',
      href: null
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/leedsspacecomms',
      icon: Globe,
      handle: '@leedsspacecomms'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/leedsspacecomms',
      icon: ExternalLink,
      handle: 'Leeds Space Communications'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 dark:bg-gradient-to-br dark:from-space-800 dark:to-space-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white">
              Become an Operator
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-white/80 max-w-4xl mx-auto leading-relaxed">
              Join our frequency and transmit your passion for space communications. 
              Welcome to the Leeds Space Communications society - where every student becomes an operator.
            </p>
            
            {/* Radio Wave Animation */}
            <motion.div
              className="flex justify-center items-center space-x-8 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="relative"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Radio className="w-8 h-8 text-primary-400" />
                
                {/* Radio Wave Ripples */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`wave-${i}`}
                    className="absolute inset-0 border-2 border-primary-400/30 rounded-full"
                    initial={{ scale: 1, opacity: 0.7 }}
                    animate={{ 
                      scale: [1, 2, 3],
                      opacity: [0.7, 0.3, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeOut"
                    }}
                    style={{
                      left: '-50%',
                      top: '-50%',
                      width: '200%',
                      height: '200%'
                    }}
                  />
                ))}
              </motion.div>
              
              <motion.div
                className="text-primary-300 text-sm font-mono tracking-wider"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                73 de LEEDS SPACE COMMUNICATIONS
              </motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Signal className="w-8 h-8 text-green-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-3">
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 0 rgba(59, 130, 246, 0)",
                        "0 0 20px rgba(59, 130, 246, 0.5)",
                        "0 0 0 rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center"
                  >
                    <Zap className="w-5 h-5 text-primary-400" />
                  </motion.div>
                  <span>Get Your Call Sign</span>
                </h2>
                <p className="text-gray-700 dark:text-white/70">
                  Ready to join the frequency? Tell us about your interest in space communications and RF. 
                  We&apos;ll get back to you with meeting details, project opportunities, and your operator credentials.
                </p>
                
                {/* Frequency Display */}
                <motion.div
                  className="mt-4 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/30"
                  animate={{ 
                    borderColor: [
                      "rgba(34, 197, 94, 0.3)",
                      "rgba(59, 130, 246, 0.3)",
                      "rgba(34, 197, 94, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-mono text-sm">FREQ:</span>
                    <motion.span
                      className="text-green-300 font-mono font-bold"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      145.500 MHz
                    </motion.span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-blue-400 font-mono text-sm">STATUS:</span>
                    <motion.span
                      className="text-blue-300 font-mono"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      RECEIVING APPLICATIONS
                    </motion.span>
                  </div>
                </motion.div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/90 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/90 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-800 dark:text-white mb-2 flex items-center space-x-2">
                    <span>Course of Study</span>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Radio className="w-4 h-4 text-primary-400" />
                    </motion.div>
                  </label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="e.g., Electronic Engineering, Computer Science, Physics"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-white mb-2">
                    Your Radio Background & Interests *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your interest in space communications, radio, satellites, or RF engineering. Any previous experience with electronics, programming, amateur radio, or satellite technology? What projects excite you most?"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden"
                >
                  {/* Transmitting Animation Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                  
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ 
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                  <span>Transmit Application</span>
                  <motion.span
                    className="text-xs font-mono opacity-70"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    73!
                  </motion.span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-3">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Radio className="w-8 h-8 text-green-400" />
                  </motion.div>
                  <span>Control Station</span>
                </h2>
                <p className="text-gray-700 dark:text-white/70">
                  Your direct link to Leeds Space Communications HQ. Reach out using any of these channels.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const IconComponent = item.icon;
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: contactInfo.indexOf(item) * 0.1 }}
                      className="glass-effect rounded-xl p-6 card-hover"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary-400" />
                        </div>
                        <div>
                          <h3 className="text-gray-900 dark:text-white font-semibold mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-700 dark:text-white/70">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );

                  return item.href ? (
                    <a key={item.title} href={item.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={item.title}>
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
                  Follow Us
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-white/5 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                      >
                        <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        <div>
                          <div className="text-gray-900 dark:text-white font-medium">
                            {social.name}
                          </div>
                          <div className="text-gray-700 dark:text-white/60 text-sm">
                            {social.handle}
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
                  Our Location
                </h3>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 dark:bg-gradient-to-br dark:from-primary-500/20 dark:to-space-600 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-700 dark:text-white/70">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-primary-600 dark:text-primary-400" />
                    <p>Interactive map coming soon</p>
                    <p className="text-sm">Leeds, United Kingdom</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operator Status Board */}
      <section className="py-16 bg-gray-100 dark:bg-gradient-to-br dark:from-space-800 dark:to-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Operator Status Board
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Current operational status of Leeds Space Communications society activities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Active Operators */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-900 dark:text-white font-semibold">Active Operators</h3>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-400 rounded-full"
                />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">24+</div>
              <div className="text-white/60 text-sm">Society members</div>
            </motion.div>

            {/* Projects Active */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-900 dark:text-white font-semibold">Projects QRV</h3>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Radio className="w-5 h-5 text-blue-400" />
                </motion.div>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-white/60 text-sm">Active projects</div>
            </motion.div>

            {/* Next Meeting */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Next QSO</h3>
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 0 rgba(251, 191, 36, 0)",
                      "0 0 20px rgba(251, 191, 36, 0.5)",
                      "0 0 0 rgba(251, 191, 36, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-5 h-5 bg-yellow-400 rounded-full"
                />
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">Wed</div>
              <div className="text-white/60 text-sm">6 PM - Eng Building</div>
            </motion.div>
          </div>

          {/* Radio Frequency Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 glass-effect rounded-xl p-8"
          >
            <div className="text-center">
              <h3 className="text-white font-semibold mb-6">Society Frequency Monitor</h3>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <div className="text-green-400 font-mono text-lg font-bold">145.500</div>
                  <div className="text-white/60 text-sm">Primary</div>
                </div>
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="flex space-x-1"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 bg-green-400 rounded-full signal-strength"
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        height: `${20 + i * 10}px`
                      }}
                    />
                  ))}
                </motion.div>
                <div className="text-center">
                  <div className="text-blue-400 font-mono text-lg font-bold">QRT</div>
                  <div className="text-white/60 text-sm">Status</div>
                </div>
              </div>
              <motion.div
                className="mt-4 text-primary-300 font-mono text-sm call-sign"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                73 DE G0LSC - LEEDS SPACE COMMUNICATIONS SOCIETY - QRT
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
