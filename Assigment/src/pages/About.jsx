import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, BoltIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const About = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: 'Years Experience', value: '15+', icon: BoltIcon },
    { label: 'Products', value: '100+', icon: CheckCircleIcon },
    { label: 'Dealers', value: '500+', icon: UserGroupIcon },
    { label: 'Projects', value: '1000+', icon: ShieldCheckIcon }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section id="hero" className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isVisible.hero ? "visible" : "hidden"}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Green Power Tech
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leading the renewable energy revolution with innovative solutions designed for dealers and professionals.
            </p>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible.stats ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Company Story */}
        <section id="story" className="mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isVisible.story ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2008, Green Power Tech began with a simple mission: to make sustainable energy solutions 
                accessible and affordable for everyone. What started as a small team of passionate engineers has 
                grown into a leading provider of renewable energy products.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Today, we partner with over 500 dealers worldwide to bring cutting-edge green technology to homes 
                and businesses. Our commitment to innovation, quality, and sustainability drives everything we do.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We believe that the future of energy is clean, renewable, and accessible to all. Through our 
                comprehensive product range and dealer support programs, we're making that future a reality today.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section id="mission-vision" className="mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible['mission-vision'] ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To accelerate the adoption of sustainable energy solutions by providing innovative products, 
                comprehensive dealer support, and exceptional customer service. We strive to make clean energy 
                accessible, reliable, and affordable for communities worldwide.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be the global leader in sustainable energy solutions, empowering dealers to transform the way 
                people think about and use energy. We envision a world powered entirely by clean, renewable sources, 
                where every home and business has access to reliable green energy.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isVisible.certifications ? "visible" : "hidden"}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Certifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['ISO 9001:2015', 'IEC 61215', 'UL 1703', 'CE Mark'].map((cert, index) => (
                <div key={cert} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{cert}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Quality Certified</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Dealer Focus */}
        <section id="dealer-focus" className="mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isVisible['dealer-focus'] ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Dealer-Focused Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Training Programs',
                  description: 'Comprehensive training to help dealers understand and present our products effectively.'
                },
                {
                  title: 'Marketing Materials',
                  description: 'Professional marketing resources to support dealers in promoting our solutions.'
                },
                {
                  title: 'Technical Support',
                  description: 'Dedicated technical support team for dealers and their customers.'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <UserGroupIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;