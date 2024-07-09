import axios from 'axios';

const API_KEY = '858cb622a8b44820a71100659240907';
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

export const getWeather = async (location) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: location,
    }
  });
  return response.data;
};
