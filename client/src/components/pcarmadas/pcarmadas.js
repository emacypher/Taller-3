import React from "react";
import Navbar from "../navbar/navbar";
import style from "./pcarmadas.module.css";

const PcArmadas = () => {
  return (
    <>
      <Navbar />
      <div className={style.Container}>
        <div className={style.Row}>
          <div className={style.PCS}></div>
          <div className={style.PCS}></div>
        </div>
        <div className={style.Row}>
          <div className={style.PCS}></div>
          <div className={style.PCS}></div>
        </div>
      </div>
    </>
  );
};

export default PcArmadas;
