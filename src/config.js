const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY_PARAM = `?api_key=${API_KEY}`;
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";
const SMALL_IMG_COVER_BASE_URL = "https://image.tmdb.org/t/p/w300/";

export {
  API_KEY,
  BASE_URL,
  API_KEY_PARAM,
  BACKDROP_BASE_URL,
  SMALL_IMG_COVER_BASE_URL,
};
