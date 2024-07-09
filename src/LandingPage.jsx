import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 h-[90vh]">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">WeatherWear</h1>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">Outfit Suggestions</h2>
              <p className="text-lg mb-6">
                Get personalized outfit recommendations based on current weather conditions.
              </p>
              <Link to={"/suggest"} className="bg-white text-blue-500 py-2 px-6 rounded-full hover:bg-blue-100">
                Get Suggestions
              </Link>
            </div>
            <div className="text-center">
              <img src="https://cdn.dribbble.com/userupload/11360536/file/original-38641a95a72ace3bc86d1e7138ab056e.png?resize=1200x900" alt="Fashion Model" className="mx-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
  

      {/* Footer Section */}
      <footer className="bg-gray-800 py-8 text-white ">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <p>&copy; 2024 WeatherWear. All rights reserved.</p>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
