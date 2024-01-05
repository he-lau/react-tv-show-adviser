import "./global.css";
import s from "./style.module.css";

import { TVShowAPI } from "./api/tv-show.js";
import { useEffect } from "react";
import { useState } from "react";
import { BACKDROP_BASE_URL } from "./config.js";

import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails.jsx";

export function App() {
  const [currentTVShow, seCurrentTVShow] = useState();

  //
  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();

    // série la plus populaire
    if (populars.length > 0) {
      seCurrentTVShow(populars[0]);
    }
  }

  // executer APRES premier render
  useEffect(() => {
    fetchPopulars();
  }, []);

  console.log("currentTVShow", currentTVShow);

  currentTVShow
    ? console.log("imgUrl", BACKDROP_BASE_URL + currentTVShow.backdrop_path)
    : console.log("");

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
            <div>Logo</div>
            <div>Subtitle</div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className={s.recommendations}>Recommendations</div>
    </div>
  );
}

export default App;
