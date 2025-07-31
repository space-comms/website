import { motion } from 'framer-motion';
import { Users, Target, Award, Rocket, Lightbulb, Globe } from 'lucide-react';
import usePageMetadata from '../hooks/usePageMetadata';

const About = () => {
  // SEO and AI-friendly metadata
  usePageMetadata({
    title: 'About Us - Student Space Communications Society',
    description: 'Learn about Leeds Space Communications Society - a student-led organization at the University of Leeds dedicated to advancing space communications technology through hands-on projects, CubeSat development, and educational outreach.',
    ogTitle: 'About Leeds Space Communications Society',
    ogDescription: 'Student-led space technology society building CubeSats, ground stations, and advancing space communications education',
    ogUrl: 'https://leedsspacecomms.co.uk/about',
    twitterTitle: 'About Leeds Space Comms',
    twitterDescription: 'Student society advancing space communications through practical projects and education',
    aiTags: ['about', 'student-society', 'space-communications', 'cubesat-development', 'university-leeds', 'education', 'rsgb-affiliated', 'ground-stations'],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Leeds Space Communications Society",
      "description": "Information about our student society, mission, values, and team",
      "url": "https://leedsspacecomms.co.uk/about",
      "mainEntity": {
        "@type": "Organization",
        "name": "Leeds Space Communications Society",
        "foundingDate": "2024",
        "description": "Student-led space communications society at the University of Leeds",
        "memberOf": "Radio Society of Great Britain",
        "areaServed": "University of Leeds, West Yorkshire, UK",
        "knowsAbout": ["CubeSat Development", "Ground Station Operations", "Amateur Radio", "Space Communications", "RF Engineering"]
      }
    }
  });

  const values = [
    {
      icon: Lightbulb,
      title: 'Learning',
      description: 'Hands-on education through practical space communication projects and collaborative research.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Student-driven creativity in developing CubeSats, antennas, and radio communication systems.'
    },
    {
      icon: Globe,
      title: 'Community',
      description: 'Building a supportive network of space communications enthusiasts across all university disciplines.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for high standards in our projects while fostering an inclusive learning environment.'
    }
  ];

  const team = [
    {
      name: 'William Weller',
      role: 'Society Director',
      bio: 'Electronic Engineering student passionate about all things RF',
      qualifications: 'Full Radio License',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Craig Barningham',
      role: 'Deputy Director & CubeSat GS Lead',
      bio: 'Passionate about antenna design',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sean Ezeh',
      role: 'General Secretary & CubeSat Comms Engineer',
      bio: 'EEE student managing wider administration & licensed Radio Operator',
      qualifications: 'Foundation Radio License',
      image: '/api/placeholder/300/300'
    },
  ];

  const milestones = [
    {
      year: 'Early April 2025',
      title: 'Society Founded',
      description: 'Leeds Space Communications established by passionate engineering students at the University of Leeds'
    },
        {
      year: 'May 2025',
      title: 'Ground Station Setup',
      description: 'Built our first antenna array for satellite tracking and communication experiments'
    },
    {
      year: 'June 2025',
      title: 'First CubeSat Project',
      description: 'The start of our first student-built nano-satellite development'
    },
    {
      year: 'Late June 2025',
      title: 'RSGB Recognition',
      description: 'Recognised by the Radio Society of Great Britain as an education-affiliated society'
    },
    {
      year: 'July 2025',
      title: 'APRS Network Launch',
      description: 'Deployed our amateur radio packet network covering Yorkshire region'
    },
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
              About Leeds Space Communications
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-white/80 max-w-4xl mx-auto leading-relaxed">
              A vibrant student-led society at the University of Leeds, passionate about 
              satellite communications, RF engineering, and inspiring the next generation 
              of telecommunications engineers through hands-on learning and collaboration 
              in space communications technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50 dark:bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-white/70 leading-relaxed">
                  To foster student innovation in satellite and space communications 
                  through hands-on projects, collaborative learning, and real-world 
                  experience. We aim to bridge the gap between academic study and 
                  industry practice while building a supportive community of space communications enthusiasts.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 dark:text-white/70 leading-relaxed">
                  To be the leading student society for space communications in the UK, 
                  inspiring and preparing the next generation of engineers and scientists 
                  to tackle the challenges of satellite communications and RF technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-space-600 rounded-2xl p-8 flex items-center justify-center">
                <Rocket className="w-32 h-32 text-primary-400 animate-float" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 dark:text-white/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white dark:bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
              Our Journey
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto">
              Key milestones in our mission to advance satellite communications and RF technology
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-300 rounded-full" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="glass-effect rounded-xl p-6">
                      <div className="text-primary-400 font-bold text-xl mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 dark:text-white/70">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-space-900" />
                    <div className="absolute inset-0 w-4 h-4 bg-primary-500 rounded-full animate-ping opacity-75" />
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto">
              The brilliant minds driving innovation in satellite communications and RF engineering
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-effect rounded-xl p-6 text-center card-hover">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500/30 to-primary-600/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
