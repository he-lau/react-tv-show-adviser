import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    let targetValue = e.target.value.trim();

    //
    if (e.key === "Enter" && targetValue !== "") {
      console.log("Submit targetValue", targetValue);
      onSubmit(targetValue);
    }
  }

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        type="text"
        className={s.input}
        placeholder="Search a TV show..."
      />
    </>
  );
}
