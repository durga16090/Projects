import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from '../assets/icons';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactInfo = [
    { icon: EnvelopeIcon, label: 'Email', value: 'info@greenpowertech.com' },
    { icon: PhoneIcon, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPinIcon, label: 'Address', value: '123 Green Energy Blvd, Eco City' },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-20"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white font-bold text-xl">GP</span>
              </motion.div>
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                Green Power Tech
              </motion.span>
            </div>
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Leading provider of sustainable energy solutions. We help dealers showcase innovative 
              green technology products to their customers with our professional digital catalog.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -2,
                    backgroundColor: "#374151"
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-semibold mb-6 relative inline-block"
              whileHover={{ x: 5 }}
            >
              Quick Links
              <motion.div 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  variants={itemVariants}
                  custom={index}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-semibold mb-6 relative inline-block"
              whileHover={{ x: 5 }}
            >
              Contact Info
              <motion.div 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="text-gray-300 flex items-start group"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="p-2 rounded-lg bg-gray-800 mr-3 group-hover:bg-green-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="h-4 w-4" />
                  </motion.div>
                  <div>
                    <strong className="text-white block">{item.label}:</strong>
                    <span className="group-hover:text-green-400 transition-colors">{item.value}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          variants={itemVariants}
        >
          <motion.p 
            className="text-gray-400"
            whileHover={{ scale: 1.02 }}
          >
            &copy; {currentYear} Green Power Tech. All rights reserved. 
            <span className="block mt-1 text-sm">Designed for dealers and professionals.</span>
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;