import React from 'react';
import { motion } from 'framer-motion';
import { Satellite, Radio, Cpu, Antenna, Shield, Zap, ExternalLink } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      icon: Satellite,
      title: 'Leeds CubeSat-1',
      description: 'Our flagship 3U CubeSat mission for space communications research and education',
      features: ['3U CubeSat platform', 'UHF/VHF transceivers', 'Onboard data logging', 'Solar power system', 'Attitude determination', 'Educational payload'],
      status: 'Active',
      github: 'https://github.com/space-comms/leeds-cubesat-1'
    },
    {
      icon: Radio,
      title: 'APRS Gateway Network',
      description: 'Yorkshire regional APRS digipeater network for emergency communications',
      features: ['APRS packet radio', 'GPS tracking integration', 'Weather station data', 'Emergency messaging', 'Multi-hop routing', 'Web interface'],
      status: 'Completed',
      github: 'https://github.com/space-comms/aprs-gateway'
    },
    {
      icon: Antenna,
      title: 'Ground Station Control',
      description: 'Automated antenna tracking system for satellite communication',
      features: ['Az/El rotator control', 'Real-time satellite tracking', 'Doppler shift correction', 'Multiple antenna support', 'Web-based interface', 'Scheduling system'],
      status: 'Active',
      github: 'https://github.com/space-comms/ground-station'
    },
    {
      icon: Cpu,
      title: 'SDR Signal Processor',
      description: 'Software-defined radio framework for space communications',
      features: ['GNU Radio integration', 'Real-time DSP', 'Protocol demodulation', 'Spectrum analysis', 'Recording capabilities', 'Python API'],
      status: 'Testing',
      github: 'https://github.com/space-comms/sdr-processor'
    },
    {
      icon: Shield,
      title: 'Educational Beacon',
      description: 'HF/VHF beacon for teaching RF fundamentals and propagation',
      features: ['Multi-frequency transmission', 'Morse code ID', 'WSPR protocol support', 'Power level control', 'Remote monitoring', 'Learning modules'],
      status: 'Development',
      github: 'https://github.com/space-comms/edu-beacon'
    },
    {
      icon: Zap,
      title: 'Space Weather Monitor',
      description: 'IoT network for real-time ionospheric and space weather monitoring',
      features: ['Ionospheric sounding', 'Solar activity tracking', 'Magnetic field sensors', 'Data visualization', 'Research collaboration', 'Open data API'],
      status: 'Planning',
      github: 'https://github.com/space-comms/space-weather'
    },
    {
      icon: Radio,
      title: 'Satellite Decoder',
      description: 'Universal satellite signal decoder for various protocols and missions',
      features: ['Multi-protocol support', 'Real-time decoding', 'Data packet analysis', 'Telemetry extraction', 'Image reconstruction', 'Mission database'],
      status: 'Active',
      github: 'https://github.com/space-comms/sat-decoder'
    },
    {
      icon: Antenna,
      title: 'Phased Array Prototype',
      description: 'Student-built phased array antenna for advanced beamforming',
      features: ['8-element array', 'Digital beamforming', 'Real-time steering', 'Pattern optimization', 'Research platform', 'Educational demos'],
      status: 'Development',
      github: 'https://github.com/space-comms/phased-array'
    },
    {
      icon: Satellite,
      title: 'CanSat Competition',
      description: 'Competition-ready CanSat for atmospheric research missions',
      features: ['Atmospheric sensors', 'Recovery system', 'Real-time telemetry', 'Mission control', 'Data analysis', 'Competition ready'],
      status: 'Completed',
      github: 'https://github.com/space-comms/cansat-2024'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-500/20 text-green-400 border-green-400/30',
      'Completed': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
      'Testing': 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
      'Development': 'bg-orange-500/20 text-orange-400 border-orange-400/30',
      'Planning': 'bg-purple-500/20 text-purple-400 border-purple-400/30'
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
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Explore our student-led space communications projects hosted on GitHub. 
              All projects are open source (except competition projects which are released after) and available for collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Open Source Projects
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              All our projects are open source and available on GitHub. Students can contribute, 
              learn from the code, and build upon our work for their own space communications projects.
            </p>
          </motion.div>

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
                  <div className="glass-effect rounded-xl p-8 card-hover h-full flex flex-col">
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
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-medium text-white/90 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {tech.features.map((feature) => (
                          <li key={`${tech.title.toLowerCase().replace(/\s+/g, '-')}-${feature.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center text-sm text-white/70">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* GitHub Link */}
                    {tech.github && (
                      <div className="mt-auto">
                        <a
                          href={tech.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View on GitHub</span>
                        </a>
                      </div>
                    )}
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
