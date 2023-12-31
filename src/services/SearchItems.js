import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const searchItems = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
