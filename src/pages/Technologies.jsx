import React from 'react';
import { motion } from 'framer-motion';
import { Satellite, Radio, Cpu, Antenna, Shield, Zap } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      icon: Satellite,
      title: 'Advanced Satellite Systems',
      description: 'Next-generation satellites with enhanced capabilities for global communications',
      features: ['Ultra-low latency', 'High-throughput processing', 'Autonomous operation', 'Extended lifespan'],
      status: 'Deployed'
    },
    {
      icon: Radio,
      title: 'RF Communications',
      description: 'Cutting-edge radio frequency systems for reliable signal transmission',
      features: ['Multi-band support', 'Adaptive modulation', 'Interference resistance', 'Software-defined radio'],
      status: 'Production'
    },
    {
      icon: Cpu,
      title: 'AI-Powered Processing',
      description: 'Machine learning algorithms for intelligent network optimization',
      features: ['Predictive maintenance', 'Traffic optimization', 'Anomaly detection', 'Real-time adaptation'],
      status: 'Beta'
    },
    {
      icon: Antenna,
      title: 'Phased Array Antennas',
      description: 'Electronically steered antennas for precise beam control',
      features: ['Electronic steering', 'Multi-beam capability', 'Low profile design', 'Weather resistant'],
      status: 'Development'
    },
    {
      icon: Shield,
      title: 'Quantum Encryption',
      description: 'Quantum-secured communications for ultimate data protection',
      features: ['Unbreakable encryption', 'Key distribution', 'Tamper detection', 'Future-proof security'],
      status: 'Research'
    },
    {
      icon: Zap,
      title: 'Power Management',
      description: 'Advanced power systems for extended satellite operations',
      features: ['Solar efficiency', 'Battery optimization', 'Power harvesting', 'Thermal management'],
      status: 'Deployed'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Deployed': 'bg-green-500/20 text-green-400 border-green-400/30',
      'Production': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
      'Beta': 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
      'Development': 'bg-orange-500/20 text-orange-400 border-orange-400/30',
      'Research': 'bg-purple-500/20 text-purple-400 border-purple-400/30'
    };
    return colors[status] || 'bg-gray-500/20 text-gray-400 border-gray-400/30';
  };

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
              Our Technologies
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Discover the cutting-edge innovations powering the future of space communications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-24 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass-effect rounded-xl p-8 card-hover h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                        <IconComponent className="w-8 h-8 text-primary-400" />
                      </div>
                      <span className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(tech.status)}`}>
                        {tech.status}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {tech.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {tech.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white/90 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {tech.features.map((feature) => (
                          <li key={`${tech.name.toLowerCase().replace(/\s+/g, '-')}-${feature.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center text-sm text-white/70">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Technologies;
