import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
      content: 'hello@leedsspacecomms.com',
      href: 'mailto:hello@leedsspacecomms.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+44 113 XXX XXXX',
      href: 'tel:+44113XXXXXXX'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Leeds, United Kingdom',
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
      handle: 'Leeds Space Comms'
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
      <section className="py-24 bg-gradient-to-br from-space-800 to-space-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Ready to launch your next mission? Let's discuss how we can help 
              connect your project to the cosmos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-space-900">
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
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  Send us a message
                </h2>
                <p className="text-white/70">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 glow-hover"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
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
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-white/70">
                  Reach out to us directly using the information below.
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
                          <h3 className="text-white font-semibold mb-1">
                            {item.title}
                          </h3>
                          <p className="text-white/70">
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
                <h3 className="text-white font-semibold mb-4">
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
                        className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <IconComponent className="w-6 h-6 text-primary-400" />
                        <div>
                          <div className="text-white font-medium">
                            {social.name}
                          </div>
                          <div className="text-white/60 text-sm">
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
                <h3 className="text-white font-semibold mb-4">
                  Our Location
                </h3>
                <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-space-600 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white/70">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-primary-400" />
                    <p>Interactive map coming soon</p>
                    <p className="text-sm">Leeds, United Kingdom</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
