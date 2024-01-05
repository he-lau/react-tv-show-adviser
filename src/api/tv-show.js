import axios from "axios";
import { API_KEY, BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL } from "../config";
import { TVShowDetails } from "../components/TVShowDetails/TVShowDetails";

export class TVShowAPI {
  // Méthode statique pour récupèrer l'ensemble des programme TV populaire
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    console.log("fetchPopulars", response.data.results);
    return response.data.results;
  }
}
