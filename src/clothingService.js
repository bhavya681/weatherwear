import axios from 'axios';

const CLOTHING_API_URL = 'https://api.storerestapi.com/products/running-sneaker';

export const getClothingSuggestions = async () => {
  const response = await axios.get(CLOTHING_API_URL);
  return response.data;
};
