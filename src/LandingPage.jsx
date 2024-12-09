import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.4
      }
    }
  };
  

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
    >
      <div className="min-h-screen backdrop-blur-sm bg-black/20 flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            variants={itemVariants}
            className="text-center lg:text-left space-y-10"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <motion.h1 
                className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%"] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
              >
                WeatherWear
              </motion.h1>
            </motion.div>
            
            <motion.p 
              className="text-2xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Your personal AI-powered fashion assistant that adapts to the weather. Get curated outfit recommendations based on real-time weather data and your style preferences.
            </motion.p>

            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/suggest">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(147, 51, 234, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started Now
                  </motion.button>
                </Link>
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold text-lg hover:border-pink-500 transition-all duration-300"
                >
                  Watch Demo
                </motion.button>
              </div>

              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-8 pt-6"
                variants={itemVariants}
              >
                <div className="text-gray-300">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm">Active Users</div>
                </div>
                <div className="text-gray-300">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm">Satisfaction</div>
                </div>
                <div className="text-gray-300">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              animate={{ 
                rotate: [0, 3, -3, 0],
                y: [0, -8, 8, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img 
                src="https://cdn.dribbble.com/userupload/11360536/file/original-38641a95a72ace3bc86d1e7138ab056e.png?resize=1200x900" 
                alt="Fashion Model" 
                className="rounded-3xl shadow-2xl max-w-md mx-auto hover:shadow-purple-500/50 transition-shadow duration-300"
              />
              
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl"
                  >
                    <p className="text-white text-sm">AI-Powered Style Recommendations</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl -z-10"
            />
          </motion.div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
