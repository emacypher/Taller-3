import React from "react";
import style from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={style.Container}>
      <div className={style.Navbar}>
        <div>
          <h4 className={style.NameWeb}>
            <a href="/" style={{ color: "#ff4c29", textDecoration: "none" }}>
              AyHa
            </a>
          </h4>
        </div>
        <div className={style.Option}>
          <a href="/armar_pc" style={{ textDecoration: "none" }}>
            <h4 className={style.HREF}>Armar PC</h4>
          </a>
        </div>
        <div className={style.Option}>
          <a href="/noticias" style={{ textDecoration: "none" }}>
            <h4 className={style.HREF}>Noticias</h4>
          </a>
        </div>
        <div className={style.Option}>
          <a href="/pc_armadas" style={{ textDecoration: "none" }}>
            <h4 className={style.HREF}>PC Armadas</h4>
          </a>
        </div>
        <div className={style.Option}>
          <a href="/login" style={{ textDecoration: "none" }}>
            <h4 className={style.HREF}>Ingresar</h4>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
