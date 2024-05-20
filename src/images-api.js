import axios from "axios";

const API_KEY = 'ITsSPcSKgTRDulMl6wo-JLHsYpFKItindBXoDSrXasU';
const BASE_URL = 'https://api.unsplash.com';

axios.defaults.baseURL = BASE_URL;

export const getImages = async (query, page) => {

    const response = await axios.get("/search/photos", {
      params: {
        client_id: API_KEY,
        query,
        page,
        per_page: 12,
        orientation: 'landscape',
      },
    });
    return response.data.results;
};