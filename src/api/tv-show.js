import axios from "axios";
import { API_KEY, BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL } from "../config";
import { TVShowDetails } from "../components/TVShowDetails/TVShowDetails";

export class TVShowAPI {
  // Méthode statique pour récupèrer l'ensemble des programme TV populaire
  static async fetchPopulars() {
    try {
      const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
      //console.log("fetchPopulars", response.data.results);
      return response.data.results;
    } catch (error) {
      alert("Erreur : recherche séries populaires", error);
    }
  }

  // Recuperer les recommendations faîtes par TMDB
  static async fetchRecommendations(tvShowId) {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
      );
      //console.log("fetchRecommendations", response.data.results);
      return response.data.results;
    } catch (error) {
      alert("Erreur : recherche des recommendations", error);
    }
  }

  // Recuperer les informations d'un show à partir de son nom
  static async fetchByTitle(title) {
    try {
      const response = await axios.get(
        `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
      );
      return response.data.results;
    } catch (error) {
      alert("Erreur : recherche par titre", error);
    }
  }
}
