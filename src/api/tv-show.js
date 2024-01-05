import axios from "axios";
import { API_KEY } from "./credentials";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY_PARAM = `?api_key=${API_KEY}`;

export class TVShowAPI {
  // Méthode statique pour récupèrer l'ensemble des programme TV populaire
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}/tv/popular${API_KEY_PARAM}`);
    console.log("fetchPopulars", response.data.results);
    return response.data.results;
  }
}
