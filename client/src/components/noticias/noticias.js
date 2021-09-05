import React from "react";
import style from "./noticias.module.css";

const Noticias = (post) => {
  return (
    <div className={style.Container}>
      <div className={style.Notice}>
        <div className={style.Title}>{post.title}</div>
        <div className={style.ContainerPhoto}>
          {" "}
          <img src={post.Img} className={style.PhotoNotice} />
        </div>
        <div className={style.Content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset.
        </div>
      </div>
      <div className={style.Author}>
        <div className={style.PhotoAutor}></div>
        <h4 className={style.About}>Nunito</h4>
        <h4 className={style.About}>Acerca de: </h4>
        <div className={style.AboutAuthor}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </div>
      </div>
    </div>
  );
};

export default Noticias;
