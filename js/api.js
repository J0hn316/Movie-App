import { API_KEY } from './config.js';

// Fetch data from TMDB API
export const fetchAPIData = async (endpoint) => {
  const API_URL = 'https://api.themoviedb.org/3/';

  const res = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await res.json();

  return data;
};
