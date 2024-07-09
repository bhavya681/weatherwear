

// import { useState } from 'react';
// import axios from 'axios';
// import clothingSuggestions from './data';
// import './index.css';

// const getWeather = async (location) => {
//   const apiKey = '858cb622a8b44820a71100659240907';
//   const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
//   return response.data;
// };

// const getOutfitRecommendation = (temp) => {
//   for (let suggestion of clothingSuggestions) {
//     if (temp >= suggestion.tempRange[0] && temp < suggestion.tempRange[1]) {
//       return suggestion.suggestions;
//     }
//   }
//   return [];
// };

// const App = () => {
//   const [location, setLocation] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [outfit, setOutfit] = useState([]);

//   const handleFetchWeather = async () => {
//     try {
//       const weather = await getWeather(location);
//       setWeatherData(weather);
//       const temp = weather.current.temp_c;
//       const recommendation = getOutfitRecommendation(temp);
//       setOutfit(recommendation);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
//       <h1 className="text-5xl font-bold text-white mb-6">Outfit Recommendation System</h1>
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
//         <div className="flex flex-col items-center mb-4">
//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             placeholder="Enter location"
//             className="p-3 border border-gray-300 rounded mb-3 w-full"
//           />
//           <button
//             onClick={handleFetchWeather}
//             className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
//           >
//             Get Weather
//           </button>
//         </div>
//         {weatherData && (
//           <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full mt-4">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">Weather in {weatherData.location.name}</h2>
//             <p className="text-lg">Temperature: {weatherData.current.temp_c}°C</p>
//             <p className="text-lg">Condition: {weatherData.current.condition.text}</p>
//             <h3 className="text-2xl font-bold text-gray-800 mt-4">Outfit Recommendation:</h3>
//             <ul className="space-y-4 mt-4">
//               {outfit.map((item, index) => (
//                 <li key={index} className="flex items-center space-x-4">
//                   <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded" />
//                   <div>
//                     <p className="font-bold text-lg">{item.name}</p>
//                     <p className="text-gray-600">{item.description}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ClothingSuggestion from './ClothingSuggestion';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/suggest" element={<ClothingSuggestion />} />
      </Routes>
    </Router>
  );
};

export default App;
