import s from "./style.module.css";

import {
  StarFill,
  Star as StarEmpty,
  StarHalf,
  Star,
} from "react-bootstrap-icons";

export function FiveStarRating({ rating, maxRating }) {
  // jsx qu'on veux afficher
  const starList = [];
  // nb étoile pleine
  const starFillCount = Math.floor(rating);
  // demi étoile
  const hasStarHalf = rating - starFillCount >= 0.5;
  // nb étoile vide
  const emptyStarCount = maxRating - starFillCount - (hasStarHalf ? 1 : 0);

  /*
  console.log("starFillCount", starFillCount);
  console.log("hasStarHalf", hasStarHalf);
  console.log("emptyStarCount", emptyStarCount);
*/

  for (let i = 0; i < starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }

  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }

  for (let i = 0; i < emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starList}</div>;
}
