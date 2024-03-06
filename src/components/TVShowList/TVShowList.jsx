import s from "./style.module.css";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

export function TVShowList({ recommendationList, onClickItem }) {
  //console.log("a", recommendationList);

  return (
    <div>
      <div className={s.title}>You may also like : </div>
      <div className={s.list}>
        {/* retourne la liste*/}
        {recommendationList.map((tvShow) => (
          <span key={tvShow.id} className={s.tv_show_list_item}>
            <TVShowListItem
              key={tvShow.id}
              tvShow={tvShow}
              onClick={onClickItem}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
