import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ isLoading, onAnimationComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isLoading) {
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setShowContent(true);
              setTimeout(() => {
                onAnimationComplete();
              }, 1500);
            }, 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isLoading, onAnimationComplete]);

  if (!isLoading) return null;

  const containerVariants = {
    initial: { 
      opacity: 1,
      scale: 1
    },
    animate: { 
      opacity: 1,
      scale: 1
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    initial: { 
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    animate: { 
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    initial: { 
      opacity: 0,
      y: 30
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  const progressBarVariants = {
    initial: { 
      width: 0,
      opacity: 0
    },
    animate: { 
      width: `${progress}%`,
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const floatingElements = [...Array(12)].map((_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-gradient-to-br from-green-900 via-gray-900 to-emerald-900 flex items-center justify-center overflow-hidden"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Floating animated elements */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-green-400/30 to-emerald-500/30 blur-md"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            initial={{ 
              scale: 0,
              opacity: 0,
              x: (Math.random() - 0.5) * 100,
              y: (Math.random() - 0.5) * 100
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0],
              x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
              y: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Main content */}
        <div className="text-center relative z-10 max-w-2xl px-8">
          {/* Logo/Brand Animation */}
          <motion.div
            className="mb-12"
            variants={logoVariants}
            initial="initial"
            animate={["animate", "pulse"]}
          >
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-green-400/50"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Inner ring */}
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-emerald-300/50"
                animate={{ 
                  rotate: -360,
                  scale: [1, 0.9, 1]
                }}
                transition={{ 
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Center logo */}
              <div className="relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl">
                <div className="text-4xl font-bold text-green-600">⚡</div>
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            Green Power
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #4ade80, #34d399, #4ade80)',
                backgroundSize: '200% 100%'
              }}
            >
              Tech
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-lg mx-auto"
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.7 }}
          >
            Sustainable Energy Solutions for a Brighter Tomorrow
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            className="w-full max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                variants={progressBarVariants}
                initial="initial"
                animate="animate"
              />
            </div>
            <motion.p 
              className="text-gray-400 text-sm"
              animate={{ opacity: progress < 100 ? 1 : 0 }}
            >
              Loading... {Math.round(progress)}%
            </motion.p>
          </motion.div>

          {/* Animated text when content is ready */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <motion.h2 
                  className="text-2xl font-bold text-white"
                  animate={{ 
                    y: [0, -10, 0],
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0.5)",
                      "0 0 20px rgba(255,255,255,0.8)",
                      "0 0 0px rgba(255,255,255,0.5)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Welcome to Green Power Tech
                </motion.h2>
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Your journey to sustainable energy begins now
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        </div>

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;