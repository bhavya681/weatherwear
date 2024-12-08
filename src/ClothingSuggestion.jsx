import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const getWeather = async (location) => {
  const apiKey = '858cb622a8b44820a71100659240907';
  const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
  return response.data;
};

const getOutfitRecommendation = (temp) => {
  if (temp < 10) {
    return [
      {
        name: "Winter Coat",
        description: "Stay warm with a cozy winter coat",
        imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3",
        purchaseLink: "https://www.amazon.in/s?k=winter+coat"
      },
      {
        name: "Sweater",
        description: "Layer up with a warm sweater",
        imageUrl: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531",
        purchaseLink: "https://www.amazon.in/s?k=sweater" 
      },
      {
        name: "Thermal Wear",
        description: "Base layer thermal wear for extra warmth",
        imageUrl: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2",
        purchaseLink: "https://www.amazon.in/s?k=thermal+wear"
      }
    ];
  } else if (temp < 20) {
    return [
      {
        name: "Light Jacket",
        description: "Perfect for mild weather",
        imageUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
        purchaseLink: "https://www.amazon.in/s?k=light+jacket"
      },
      {
        name: "Long Sleeve Shirt",
        description: "Comfortable long sleeve shirt for cooler days",
        imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
        purchaseLink: "https://www.amazon.in/s?k=long+sleeve+shirt"
      },
      {
        name: "Jeans",
        description: "Classic denim jeans",
        imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d",
        purchaseLink: "https://www.amazon.in/s?k=jeans"
      }
    ];
  } else {
    return [
      {
        name: "T-Shirt",
        description: "Light and breathable t-shirt",
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        purchaseLink: "https://www.amazon.in/s?k=t-shirt"
      },
      {
        name: "Shorts",
        description: "Comfortable shorts for warm weather",
        imageUrl: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
        purchaseLink: "https://www.amazon.in/s?k=shorts"
      },
      {
        name: "Summer Dress",
        description: "Light summer dress for hot days",
        imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
        purchaseLink: "https://www.amazon.in/s?k=summer+dress"
      }
    ];
  }
};

const defaultLocations = [
  "London, UK",
  "New York, US", 
  "Tokyo, Japan",
  "Paris, France",
  "Sydney, Australia"
];

const ClothingSuggestion = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [outfit, setOutfit] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchWeather = async (loc = location) => {
    if (!loc) return;
    
    setIsLoading(true);
    try {
      const weather = await getWeather(loc);
      setWeatherData(weather);
      const temp = weather.current.temp_c;
      const recommendation = getOutfitRecommendation(temp);
      setOutfit(recommendation);
      setLocation(loc);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900"
    >
      <div className="min-h-screen backdrop-blur-sm bg-black/10 px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10"
        >
          <motion.h1 
            className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Weather-Based Wardrobe
          </motion.h1>

          <div className="space-y-8">
            <motion.div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleFetchWeather()}
                  placeholder="Enter your location..."
                  className="w-full px-8 py-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-lg"
                />
                <motion.button
                  onClick={() => handleFetchWeather()}
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-5 rounded-2xl font-medium text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mx-auto"
                    />
                  ) : (
                    "Get Your Perfect Outfit"
                  )}
                </motion.button>

                <motion.div 
                  className="mt-6 flex flex-wrap justify-center gap-3"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {defaultLocations.map((loc, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleFetchWeather(loc)}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-white/90 border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {loc}
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              {weatherData && (
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-8"
                >
                  <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-white">
                    <motion.div 
                      className="text-center md:text-left mb-6 md:mb-0"
                      whileHover={{ scale: 1.05 }}
                    >
                      <h2 className="text-3xl font-bold mb-2">{weatherData.location.name}</h2>
                      <p className="text-lg opacity-80">{weatherData.current.condition.text}</p>
                    </motion.div>
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {weatherData.current.temp_c}°C
                      </p>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.15
                        }
                      }
                    }}
                  >
                    {outfit.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/10"
                      >
                        <motion.div className="relative overflow-hidden">
                          <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-64 object-cover"
                          />
                        </motion.div>
                        <div className="p-6 text-white">
                          <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                            {item.name}
                          </h3>
                          <p className="text-base opacity-90 leading-relaxed mb-4">{item.description}</p>
                          <a 
                            href={item.purchaseLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-xl hover:opacity-90 transition-opacity"
                          >
                            Shop Now
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ClothingSuggestion;
