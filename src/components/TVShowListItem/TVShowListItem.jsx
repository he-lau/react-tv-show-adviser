import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div
      className={s.container}
      onClick={() => {
        onClick(tvShow);
      }}
    >
      <img
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
        className={s.img}
      />
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
}
