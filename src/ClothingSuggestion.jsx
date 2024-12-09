import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const getWeather = async (location) => {
  const apiKey = '858cb622a8b44820a71100659240907';
  const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
  return response.data;
};

const getCurrencyRates = async (baseCurrency = 'USD') => {
  const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
  return response.data.rates;
};

const getNearbyPlaces = async (lat, lng, type) => {
  const response = await axios.get(`/api/places?lat=${lat}&lng=${lng}&type=${type}`);
  return response.data.results;
};

const getOutfitRecommendation = (temp, activity = 'general') => {
  let outfits = [];
  
  if (temp < 10) {
    outfits = [
      {
        name: "Winter Coat",
        description: "Stay warm with a cozy winter coat",
        imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3",
        purchaseLink: "https://www.amazon.in/s?k=winter+coat",
        price: {
          USD: 129.99,
          EUR: 120.50,
          GBP: 103.99,
          JPY: 14500
        },
        storeTypes: ['clothing_store', 'department_store']
      },
      {
        name: "Sweater",
        description: "Layer up with a warm sweater",
        imageUrl: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531",
        purchaseLink: "https://www.amazon.in/s?k=sweater",
        price: {
          USD: 49.99,
          EUR: 46.50,
          GBP: 39.99,
          JPY: 5600
        },
        storeTypes: ['clothing_store']
      },
      {
        name: "Thermal Wear",
        description: "Base layer thermal wear for extra warmth",
        imageUrl: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2",
        purchaseLink: "https://www.amazon.in/s?k=thermal+wear",
        price: {
          USD: 34.99,
          EUR: 32.50,
          GBP: 27.99,
          JPY: 3900
        },
        storeTypes: ['clothing_store', 'sporting_goods_store']
      }
    ];
  } else if (temp < 20) {
    outfits = [
      {
        name: "Light Jacket",
        description: "Perfect for mild weather",
        imageUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
        purchaseLink: "https://www.amazon.in/s?k=light+jacket",
        price: {
          USD: 79.99,
          EUR: 74.50,
          GBP: 63.99,
          JPY: 8900
        },
        storeTypes: ['clothing_store']
      },
      {
        name: "Long Sleeve Shirt",
        description: "Comfortable long sleeve shirt for cooler days",
        imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
        purchaseLink: "https://www.amazon.in/s?k=long+sleeve+shirt",
        price: {
          USD: 29.99,
          EUR: 27.50,
          GBP: 23.99,
          JPY: 3300
        },
        storeTypes: ['clothing_store']
      },
      {
        name: "Jeans",
        description: "Classic denim jeans",
        imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d",
        purchaseLink: "https://www.amazon.in/s?k=jeans",
        price: {
          USD: 59.99,
          EUR: 55.50,
          GBP: 47.99,
          JPY: 6700
        },
        storeTypes: ['clothing_store']
      }
    ];
  } else {
    outfits = [
      {
        name: "T-Shirt",
        description: "Light and breathable t-shirt",
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        purchaseLink: "https://www.amazon.in/s?k=t-shirt",
        price: {
          USD: 19.99,
          EUR: 18.50,
          GBP: 15.99,
          JPY: 2200
        },
        storeTypes: ['clothing_store']
      },
      {
        name: "Shorts",
        description: "Comfortable shorts for warm weather",
        imageUrl: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
        purchaseLink: "https://www.amazon.in/s?k=shorts",
        price: {
          USD: 24.99,
          EUR: 23.50,
          GBP: 19.99,
          JPY: 2800
        },
        storeTypes: ['clothing_store']
      },
      {
        name: "Summer Dress",
        description: "Light summer dress for hot days",
        imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
        purchaseLink: "https://www.amazon.in/s?k=summer+dress",
        price: {
          USD: 39.99,
          EUR: 37.50,
          GBP: 31.99,
          JPY: 4500
        },
        storeTypes: ['clothing_store']
      }
    ];
  }

  if (activity === 'hiking') {
    outfits.push({
      name: "Hiking Boots",
      description: "Durable hiking boots for outdoor adventures",
      imageUrl: "https://images.unsplash.com/photo-1542219550-37153d387c27",
      purchaseLink: "https://www.amazon.in/s?k=hiking+boots",
      price: {
        USD: 89.99,
        EUR: 83.50,
        GBP: 71.99,
        JPY: 10000
      },
      storeTypes: ['shoe_store', 'sporting_goods_store']
    });
  } else if (activity === 'beach') {
    outfits.push({
      name: "Swimwear",
      description: "Perfect for beach activities",
      imageUrl: "https://images.unsplash.com/photo-1574177556859-1362f72c9490",
      purchaseLink: "https://www.amazon.in/s?k=swimwear",
      price: {
        USD: 29.99,
        EUR: 27.50,
        GBP: 23.99,
        JPY: 3300
      },
      storeTypes: ['clothing_store', 'sporting_goods_store']
    });
  }

  return outfits;
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
  const [itinerary, setItinerary] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState(null);
  const [showItineraryForm, setShowItineraryForm] = useState(false);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  const [newStop, setNewStop] = useState({
    location: '',
    startDate: new Date(),
    endDate: new Date(),
    activities: []
  });

  useEffect(() => {
    const fetchRates = async () => {
      const rates = await getCurrencyRates(selectedCurrency);
      setExchangeRates(rates);
    };
    fetchRates();
  }, [selectedCurrency]);

  useEffect(() => {
    if (weatherData) {
      const { lat, lon } = weatherData.location;
      fetchNearbyPlaces(lat, lon, 'clothing_store');
    }
  }, [weatherData]);

  const fetchNearbyPlaces = async (lat, lng, type) => {
    try {
      const places = await getNearbyPlaces(lat, lng, type);
      setNearbyPlaces(places);
    } catch (error) {
      console.error('Error fetching nearby places:', error);
    }
  };

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

  const handleAddToItinerary = () => {
    if (newStop.location) {
      setItinerary([...itinerary, newStop]);
      setNewStop({
        location: '',
        startDate: new Date(),
        endDate: new Date(),
        activities: []
      });
      setShowItineraryForm(false);
    }
  };

  const convertPrice = (priceObj, currency) => {
    return priceObj[currency].toFixed(2);
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
            Travel Wardrobe Planner
          </motion.h1>

          <div className="mb-8 flex justify-end">
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white px-4 py-2"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="JPY">JPY (¥)</option>
            </select>
          </div>

          <motion.div className="mb-12">
            <motion.button
              onClick={() => setShowItineraryForm(!showItineraryForm)}
              className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all mb-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {showItineraryForm ? "Hide Itinerary Form" : "Add New Stop"}
            </motion.button>

            {showItineraryForm && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 mb-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    value={newStop.location}
                    onChange={(e) => setNewStop({...newStop, location: e.target.value})}
                    placeholder="Location"
                    className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white px-4 py-2"
                  />
                  <div className="flex gap-4">
                    <DatePicker
                      selected={newStop.startDate}
                      onChange={(date) => setNewStop({...newStop, startDate: date})}
                      className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white px-4 py-2 w-full"
                      placeholderText="Start Date"
                    />
                    <DatePicker
                      selected={newStop.endDate}
                      onChange={(date) => setNewStop({...newStop, endDate: date})}
                      className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white px-4 py-2 w-full"
                      placeholderText="End Date"
                    />
                  </div>
                  <select
                    multiple
                    value={newStop.activities}
                    onChange={(e) => setNewStop({...newStop, activities: Array.from(e.target.selectedOptions, option => option.value)})}
                    className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white px-4 py-2"
                  >
                    <option value="general">General Sightseeing</option>
                    <option value="hiking">Hiking</option>
                    <option value="beach">Beach Activities</option>
                    <option value="business">Business Meetings</option>
                  </select>
                  <motion.button
                    onClick={handleAddToItinerary}
                    className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Add to Itinerary
                  </motion.button>
                </div>
              </motion.div>
            )}

            {itinerary.length > 0 && (
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {itinerary.map((stop, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{stop.location}</h3>
                    <p className="text-white/80">
                      {new Date(stop.startDate).toLocaleDateString()} - {new Date(stop.endDate).toLocaleDateString()}
                    </p>
                    <div className="mt-4">
                      <h4 className="text-white/90 font-medium mb-2">Activities:</h4>
                      <ul className="list-disc list-inside text-white/70">
                        {stop.activities.map((activity, idx) => (
                          <li key={idx}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

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
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">
                              {selectedCurrency} {convertPrice(item.price, selectedCurrency)}
                            </span>
                            <a 
                              href={item.purchaseLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-xl hover:opacity-90 transition-opacity"
                            >
                              Shop Now
                            </a>
                          </div>
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
