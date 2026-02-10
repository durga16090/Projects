import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const ThreeDHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        setMousePosition({ x: mouseX, y: mouseY });
        
        // Calculate rotation based on mouse position
        const rotateY = (mouseX / rect.width) * 20; // Max 20 degrees
        const rotateX = -(mouseY / rect.height) * 20; // Max 20 degrees
        
        setRotation({ x: rotateX, y: rotateY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cardVariants = {
    initial: { 
      scale: 0.8,
      opacity: 0,
      rotateY: 0,
      rotateX: 0
    },
    animate: { 
      scale: 1,
      opacity: 1,
      rotateY: rotation.y,
      rotateX: rotation.x,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatingItems = [
    { id: 1, text: "AI", delay: 0 },
    { id: 2, text: "3D", delay: 0.2 },
    { id: 3, text: "UI", delay: 0.4 },
    { id: 4, text: "UX", delay: 0.6 },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-96 bg-gradient-to-br from-green-900 via-gray-900 to-emerald-900 rounded-3xl overflow-hidden perspective-1000"
      style={{ perspective: '1000px' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-emerald-500/10"
          style={{
            transform: `rotateY(${rotation.y * 0.1}deg) rotateX(${rotation.x * 0.1}deg)`
          }}
        />
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl animate-pulse animation-delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse animation-delay-2000" />
      </div>

      {/* Floating 3D cards */}
      {floatingItems.map((item, index) => (
        <motion.div
          key={item.id}
          className="absolute bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + (index % 2) * 20}%`,
            rotateY: rotation.y * 0.2,
            rotateX: rotation.x * 0.2,
          }}
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            rotate: 360, 
            opacity: 1,
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 2, 
            delay: item.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="text-2xl font-bold text-white">{item.text}</div>
        </motion.div>
      ))}

      {/* Main 3D card */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-64 bg-gradient-to-br from-white/20 to-gray-800/30 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        <div className="text-center text-white">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            animate={{ 
              scale: [1, 1.05, 1],
              textShadow: [
                "0 0 0px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.8)",
                "0 0 0px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            3D Animated UI
          </motion.h2>
          <p className="text-gray-200">Interactive 3D Experience</p>
        </div>
      </motion.div>

      {/* Grid pattern that moves with mouse */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`
        }}
      />

      {/* Glowing orb that follows mouse */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-2xl opacity-30"
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
      />
    </div>
  );
};

export default ThreeDHero;