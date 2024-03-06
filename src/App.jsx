import "./global.css";
import s from "./style.module.css";

import { TVShowAPI } from "./api/tv-show.js";
import { useEffect } from "react";
import { useState } from "react";
import { BACKDROP_BASE_URL } from "./config.js";

import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails.jsx";

import { Logo } from "./components/Logo/Logo.jsx";
import logo from "./assets/images/logo.png";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem.jsx";
import { TVShowList } from "./components/TVShowList/TVShowList.jsx";
import { SearchBar } from "./components/SearchBar/SearchBar.jsx";

export function App() {
  const [currentTVShow, seCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  //
  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();

    // série la plus populaire
    if (populars.length > 0) {
      seCurrentTVShow(populars[0]);
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
    if (recommendations.length > 0) {
      setRecommendationList(recommendations.slice(0, 10));
    }
  }

  // executer APRES premier render
  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  /*
  console.log("currentTVShow", currentTVShow);

  currentTVShow
    ? console.log("imgUrl", BACKDROP_BASE_URL + currentTVShow.backdrop_path)
    : console.log("");
*/

  console.log("recommendationList", recommendationList);

  console.log(process.env.API_KEY);
  console.log(process.env.BASE_URL);

  async function searchTVShow(tvShowName) {
    const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);

    console.log("searchResponse", searchResponse);

    if (searchResponse.length > 0) {
      seCurrentTVShow(searchResponse[0]);
    }
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center /cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logo}
              title={"Watowatch"}
              subTitle={"Find a show you may like"}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <SearchBar onSubmit={searchTVShow} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className={s.recommendations}>
        {recommendationList && recommendationList.length > 0 && (
          <TVShowList
            recommendationList={recommendationList}
            onClickItem={seCurrentTVShow}
          />
        )}
      </div>
    </div>
  );
}

export default App;
