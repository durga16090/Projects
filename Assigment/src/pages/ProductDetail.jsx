import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ArrowDownTrayIcon, ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { products } from '../data/products';
import ImageGallery from '../components/ImageGallery';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSpec, setSelectedSpec] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h2>
          <Link 
            to="/products" 
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: product.category, path: `/products?category=${product.category}` },
    { name: product.name, path: '#' }
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

  const specVariants = {
    closed: { 
      height: 0,
      opacity: 0
    },
    open: { 
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 }
      }
    }
  };

  // 3D floating elements effect
  useEffect(() => {
    const interval = setInterval(() => {
      const floatingElements = document.querySelectorAll('.floating-element');
      floatingElements.forEach(el => {
        const currentX = parseFloat(el.style.left || 0);
        const currentY = parseFloat(el.style.top || 0);
        el.style.left = `${currentX + (Math.random() - 0.5) * 2}px`;
        el.style.top = `${currentY + (Math.random() - 0.5) * 2}px`;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24 relative overflow-hidden">
      {/* 3D Floating Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="floating-element absolute w-20 h-20 bg-gradient-to-r from-green-400/10 to-emerald-500/10 rounded-2xl blur-lg"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.7 + 0.3
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
            rotate: [0, 360],
            scale: [null, Math.random() * 0.5 + 0.5]
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            zIndex: 0
          }}
        />
      ))}

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <svg className="h-4 w-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                {item.path === '#' ? (
                  <span className="text-gray-900 dark:text-white font-medium">{item.name}</span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back Button */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Products
          </button>
        </motion.div>

        {/* Product Header */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12"
          variants={itemVariants}
          whileHover={{ 
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            rotateY: 2,
            rotateX: 2
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
            {/* Product Images */}
            <div className="space-y-6">
              <motion.div
                className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl overflow-hidden aspect-square flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                  <span className="text-gray-500 font-medium text-center px-4">{product.name}</span>
                </div>
                
                {/* Fullscreen toggle */}
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-4 right-4 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
                >
                  <ArrowsPointingOutIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </button>
              </motion.div>

              {/* Image Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {product.gallery.slice(0, 4).map((image, index) => (
                  <motion.div
                    key={index}
                    className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                      <span className="text-gray-500 text-xs">{index + 1}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between">
              <div>
                <motion.div 
                  className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-bold mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  {product.category}
                </motion.div>
                
                <motion.h1 
                  className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {product.name}
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {product.description}
                </motion.p>
                
                <motion.div 
                  className="grid grid-cols-2 gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {Object.entries(product.specs).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-200 dark:border-gray-600"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                        rotateY: 5
                      }}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1 capitalize">{key}</dt>
                      <dd className="text-lg font-bold text-gray-900 dark:text-white">{value}</dd>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button 
                  className="flex-1 flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  Download Brochure
                </motion.button>
                <motion.button 
                  className="flex-1 px-8 py-4 bg-white dark:bg-gray-700 text-green-600 dark:text-green-400 font-bold rounded-xl border-2 border-green-600 dark:border-green-400 hover:bg-green-50 dark:hover:bg-gray-600 transition-colors shadow-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Sales
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Product Gallery Modal */}
        <AnimatePresence>
          {isFullscreen && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-4xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="absolute top-4 right-4 z-10 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6 text-white" />
                </button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Detailed Specifications */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 mb-12"
          variants={itemVariants}
          whileHover={{ 
            y: -3,
            boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
            rotateX: 1
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Detailed Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(product.detailedSpecs).map(([category, specs], categoryIndex) => (
              <motion.div
                key={category}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * categoryIndex }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  {category}
                </h3>
                <div className="space-y-3">
                  {Object.entries(specs).map(([specName, specValue], specIndex) => (
                    <motion.div
                      key={specName}
                      className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (categoryIndex + specIndex + 1) }}
                      whileHover={{ 
                        x: 5,
                        backgroundColor: "rgba(34, 197, 94, 0.1)",
                        borderColor: "rgb(34, 197, 94)",
                        scale: 1.02
                      }}
                      onClick={() => setSelectedSpec(selectedSpec === specName ? null : specName)}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <span className="font-medium text-gray-700 dark:text-gray-300">{specName}</span>
                      <span className="font-bold text-green-600 dark:text-green-400">{specValue}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8"
          variants={itemVariants}
          whileHover={{ 
            y: -3,
            boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
            rotateY: 1
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Additional Information</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <span className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Applications</h3>
              <ul className="space-y-3">
                {product.applications.map((application, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <span className="flex-shrink-0 w-2 h-2 mt-2 bg-emerald-500 rounded-full mr-3"></span>
                    <span className="text-gray-600 dark:text-gray-300">{application}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductDetail;