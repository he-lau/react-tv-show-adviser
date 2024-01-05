import s from "./style.module.css";

export function Logo({ image, title, subTitle }) {
  return (
    <div>
      <div className={s.container}>
        <img className={s.image} src={image} alt="" />
        <span className={s.title}>{title}</span>
      </div>

      <span className={s.subTitle}>{subTitle}</span>
    </div>
  );
}
