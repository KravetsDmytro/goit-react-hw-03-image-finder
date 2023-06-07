import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35566012-73194189fcef75c31768f8916';

export const getGalleryImages = async (query, page) => {
  const params = new URLSearchParams({
    q: query,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
};
