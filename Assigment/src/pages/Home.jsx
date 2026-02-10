import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCircleIcon, LightBulbIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import ParticleBackground from '../components/ParticleBackground';
import ImageGallery from '../components/ImageGallery';
import ThreeDHero from '../components/ThreeDHero';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Sample gallery images for demonstration
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1509390541618-730d25d2d834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Solar Panel Installation',
      description: 'Professional solar panel installation in progress'
    },
    {
      src: 'https://images.unsplash.com/photo-1589883661920-e62dc20858b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Modern Battery Storage System',
      description: 'Advanced lithium battery storage solutions'
    },
    {
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'EV Charging Station',
      description: 'Fast electric vehicle charging infrastructure'
    },
    {
      src: 'https://images.unsplash.com/photo-1592840500050-257b3bdd0368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Solar Farm',
      description: 'Large-scale solar energy generation facility'
    },
    {
      src: 'https://images.unsplash.com/photo-1621377523170-03c3706d30d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Smart Home Energy System',
      description: 'Integrated home energy management solutions'
    },
    {
      src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Wind and Solar Hybrid System',
      description: 'Combined renewable energy generation systems'
    }
  ];

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const categoryCards = [
    {
      id: 1,
      name: 'Solar Panels',
      description: 'High-efficiency solar panels for residential and commercial use',
      image: 'https://images.unsplash.com/photo-1509390541618-730d25d2d834?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      path: '/products',
      icon: <LightBulbIcon className="h-8 w-8 text-yellow-500" />
    },
    {
      id: 2,
      name: 'Inverters',
      description: 'Advanced inverters for optimal energy conversion',
      image: 'https://images.unsplash.com/photo-1589883661920-e62dc20858b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      path: '/products',
      icon: <ChartBarIcon className="h-8 w-8 text-blue-500" />
    },
    {
      id: 3,
      name: 'Battery Storage',
      description: 'Energy storage solutions for round-the-clock power',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      path: '/products',
      icon: <ShieldCheckIcon className="h-8 w-8 text-green-500" />
    },
    {
      id: 4,
      name: 'EV Chargers',
      description: 'Fast and reliable electric vehicle charging stations',
      image: 'https://images.unsplash.com/photo-1592840500050-257b3bdd0368?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      path: '/products',
      icon: <CheckCircleIcon className="h-8 w-8 text-purple-500" />
    }
  ];

  const features = [
    {
      icon: <LightBulbIcon className="h-10 w-10 text-green-500" />,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology designed for maximum efficiency and sustainability.'
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10 text-green-500" />,
      title: 'Quality Assured',
      description: 'Rigorous testing and certification to ensure reliability and safety.'
    },
    {
      icon: <ChartBarIcon className="h-10 w-10 text-green-500" />,
      title: 'Proven Results',
      description: 'Thousands of successful installations with measurable benefits.'
    },
    {
      icon: <CheckCircleIcon className="h-10 w-10 text-green-500" />,
      title: 'Dealer Support',
      description: 'Comprehensive training and marketing materials for dealers.'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen relative">
        {/* Particle Background */}
        <ParticleBackground className="dark:opacity-30" />
        
        {/* Hero Section with 3D Animation */}
        <section 
          id="hero" 
          data-animate="true"
          className="relative pt-32 pb-10 overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-10"
              variants={heroVariants}
              initial="hidden"
              animate={isVisible.hero ? "visible" : "hidden"}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Powering Tomorrow with
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #16a34a, #059669, #16a34a)',
                    backgroundSize: '200% 100%'
                  }}
                >
                  {' '}Sustainable Energy
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                Professional-grade renewable energy solutions designed for dealers to showcase to their customers. 
                Our comprehensive digital catalog makes it easy to present innovative green technology.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                variants={staggerContainer}
                initial="hidden"
                animate={isVisible.hero ? "visible" : "hidden"}
              >
                <motion.div variants={scaleIn}>
                  <Link
                    to="/products"
                    className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    Explore Products
                    <ArrowRightIcon className="ml-3 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div variants={scaleIn}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-10 py-4 bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 font-bold rounded-xl border-2 border-green-600 dark:border-green-400 hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 3D Hero Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ThreeDHero />
          </div>
        </section>

        {/* Image Gallery Section */}
        <section 
          id="gallery" 
          data-animate="true"
          className="py-20 bg-white dark:bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible.gallery ? "visible" : "hidden"}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                variants={fadeInUp}
              >
                Our Projects Gallery
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                Explore our successful renewable energy installations and projects
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible.gallery ? "visible" : "hidden"}
            >
              <ImageGallery images={galleryImages} />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section 
          id="about" 
          data-animate="true"
          className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible.about ? "visible" : "hidden"}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                variants={fadeInUp}
              >
                Why Choose Green Power Tech?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                We provide dealers with professional tools to showcase sustainable energy solutions to their customers.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible.about ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <motion.div 
                    className="flex justify-center mb-6"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    whileHover={{ y: -2 }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Product Categories */}
        <section 
          id="categories" 
          data-animate="true"
          className="py-20 bg-white dark:bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible.categories ? "visible" : "hidden"}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                variants={fadeInUp}
              >
                Product Categories
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                Browse our comprehensive range of sustainable energy solutions
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible.categories ? "visible" : "hidden"}
            >
              {categoryCards.map((category, index) => (
                <motion.div
                  key={category.id}
                  className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 dark:border-gray-700"
                  variants={scaleIn}
                  whileHover={{ 
                    y: -15,
                    scale: 1.03,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 h-56 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center z-10"
                      whileHover={{ scale: 1.2 }}
                    >
                      {category.icon}
                    </motion.div>
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden items-center justify-center absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
                      <span className="text-gray-500 font-medium">{category.name}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {category.name}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                      whileHover={{ y: -2 }}
                    >
                      {category.description}
                    </motion.p>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        to={category.path}
                        className="inline-flex items-center text-green-600 dark:text-green-400 font-bold hover:text-green-700 dark:hover:text-green-300 transition-colors group"
                      >
                        View Products
                        <motion.div
                          className="ml-2"
                          animate={isVisible.categories ? { x: [0, 5, 0] } : {}}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRightIcon className="h-5 w-5" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Dealer Benefits */}
        <section 
          id="benefits" 
          data-animate="true"
          className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible.benefits ? "visible" : "hidden"}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                variants={fadeInUp}
              >
                How Dealers Can Use This Catalogue
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto"
                variants={fadeInUp}
              >
                Our digital catalog is specifically designed to help dealers present products professionally to customers
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible.benefits ? "visible" : "hidden"}
            >
              {[
                {
                  title: 'Professional Presentation',
                  description: 'Share polished product information that builds customer confidence in your expertise.',
                  icon: <CheckCircleIcon className="h-14 w-14 text-green-500" />,
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'Easy Sharing',
                  description: 'Quickly share specific products or categories via links with potential customers.',
                  icon: <LightBulbIcon className="h-14 w-14 text-yellow-500" />,
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  title: 'Technical Details',
                  description: 'Access comprehensive specifications and features to answer customer questions.',
                  icon: <ShieldCheckIcon className="h-14 w-14 text-blue-500" />,
                  color: 'from-blue-500 to-indigo-500'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group text-center p-10 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <motion.div 
                    className={`flex justify-center mb-8 p-6 rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, 10, -10, 0],
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {benefit.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    whileHover={{ y: -2 }}
                  >
                    {benefit.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;