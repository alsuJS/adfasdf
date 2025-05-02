import style from "./card.module.css";

export const Card = (ugu) => {
  return (
    <div className={style.bg}>
      <div className={style.bg1}>
        <img src={ugu.Ugugdul.cover_image} className={style.zurag} alt="" />
      </div>
      <div className={style.bg2}>
        <button className={style.btn}>{ugu.Ugugdul.tag_list[0]}</button>
        <h1 className={style.pra}>{ugu.Ugugdul.description}</h1>
        <p>{ugu.Ugugdul.published_at.slice(0,10)}</p>
      </div>
    </div>
  );
};
