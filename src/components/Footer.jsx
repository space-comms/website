import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Satellite, Globe, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Society',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Projects', path: '/technologies' },
        { name: 'Activities', path: '/services' },
        { name: 'News & Events', path: '/news' },
      ]
    },
    {
      title: 'Get Involved',
      links: [
        { name: 'Join Us', path: '/contact' },
        { name: 'Student Projects', path: '/media' },
        { name: 'Meetings & Events', path: '/contact' },
        { name: 'Workshops', path: '/services' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'GitHub Projects', href: 'https://github.com/space-comms', external: true },
        { name: 'University of Leeds', href: 'https://leeds.ac.uk', external: true },
        { name: 'Student Societies', href: 'https://leedsuniversityunion.org.uk', external: true },
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'info@leedsspacecomms.co.uk',
      href: 'mailto:info@leedsspacecomms.co.uk'
    },
    {
      icon: MapPin,
      text: 'University of Leeds, Leeds, UK',
      href: 'https://maps.google.com/?q=University+of+Leeds'
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/leedsspacecomms',
      icon: Globe
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/leedsspacecomms',
      icon: ExternalLink
    }
  ];

  return (
    <footer className="relative bg-space-900 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <Satellite className="w-8 h-8 text-primary-500" />
                <span className="font-display font-bold text-xl bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  Leeds Space Comms
                </span>
              </div>

              {/* Mission Statement */}
              <p className="text-white/70 text-sm leading-relaxed max-w-md">
                Student-led satellite and space communications society at the University of Leeds. 
                Building CubeSats, experimenting with radio communications, and inspiring the next 
                generation of space enthusiasts through hands-on learning and collaboration.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((item) => {
                  const IconComponent = item.icon;
                  const content = (
                    <div className="flex items-center space-x-3 text-white/60 hover:text-primary-400 transition-colors duration-200">
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  );

                  return item.href ? (
                    <a key={item.text} href={item.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={item.text}>
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-200"
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center space-x-1"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-white/60 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-space-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Leeds Space Comms — Student Satellite & Space Communications Society
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <a 
                href="https://github.com/space-comms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors flex items-center space-x-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://leeds.ac.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
              >
                University of Leeds
              </a>
              <a 
                href="mailto:leedsspacecomms@leeds.ac.uk"
                className="hover:text-primary-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/5 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;
