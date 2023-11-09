import axios from "axios";

const BASE_URL = "http://localhost:3000/api/items";

export const searchItems = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
