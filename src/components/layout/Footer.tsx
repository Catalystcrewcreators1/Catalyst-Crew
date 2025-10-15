import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const Footer = () => {

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Design Studio', path: '/services/design' },
        { name: 'Web Development', path: '/services/development' },
        { name: 'Media Production', path: '/services/media' },
        { name: 'Event Management', path: '/services/events' },
        { name: 'Marketing', path: '/services/marketing' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/about#team' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Case Studies', path: '/portfolio/case-studies' },
        { name: 'Events', path: '/events' },
        { name: 'Tools Hub', path: '/tools' },
        { name: 'Support', path: '/contact' },
      ]
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/catalystcrewcreators/',
      label: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/catalystcrewcreators/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://x.com/CrewCatalyst5?t=x_hwj4ozl5KJQ5f3hszrqA&s=09',
      label: 'Twitter/X'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/people/Catalyst-Crew',
      label: 'Facebook'
    },
  ];

  return (
    <footer className="bg-black border-t border-red-500/20 relative z-40 mt-auto" style={{ backgroundColor: '#0B0B0B' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="https://ik.imagekit.io/7cknsz6it/CATALYST%20CREW/catalyst%20crew%20logo.jpg?updatedAt=1758447247413"
                alt="Catalyst Crew Logo"
                className="w-10 h-10 rounded-lg object-contain"
              />
              <span className="text-2xl font-heading font-bold">
                <span style={{ color: '#ffffff' }}>Catalyst </span>
                <span style={{ color: '#D71B1B' }}>Crew</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md" style={{ color: '#d1d5db' }}>
              We're a passionate team of designers and developers creating extraordinary digital experiences that elevate your brand to new heights.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-300" style={{ color: '#d1d5db' }}>
                <Mail className="h-4 w-4 text-red-600" style={{ color: '#D71B1B' }} />
                <span>catalystcrewcreators@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300" style={{ color: '#d1d5db' }}>
                <Phone className="h-4 w-4 text-red-600" style={{ color: '#D71B1B' }} />
                <span>+91-9235823255</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300" style={{ color: '#d1d5db' }}>
                <MapPin className="h-4 w-4 text-red-600" style={{ color: '#D71B1B' }} />
                <span>Kanpur, Uttar Pradesh</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4" style={{ color: '#ffffff' }}>{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-red-600 transition-colors duration-200"
                      style={{ color: '#d1d5db' }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-red-500/20 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-300 mb-4 md:mb-0" style={{ color: '#d1d5db' }}>
              © 2025 Catalyst Crew. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-red-600 hover:bg-red-600/20 transition-colors duration-200"
                    style={{ backgroundColor: '#1A1A1A', color: '#d1d5db' }}
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
