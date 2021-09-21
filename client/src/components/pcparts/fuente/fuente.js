import React, { useState } from "react";
import style from "./fuente.module.css";

const Fuente = ({ handleSetPart }) => {
  const [state, setState] = useState("");
  return (
    <>
    
      <div className={style.Container}>
      <h1 className={style.Field}>Fuentes Semi Modulares 80+</h1>
        <div className={style.Row}>
        
          <div
          
            className={style.PCS}
            onClick={() => handleSetPart("500W", "fuente")}
          >
            <p className={style.Field}>500W</p>
          </div>
          <div
            className={style.PCS}
            onClick={() => handleSetPart("650W", "fuente")}
          >
            <p className={style.Field}>650W</p> 
          </div>
        </div>
        <div
          className={style.Row}
          onClick={() => handleSetPart("700W", "fuente")}
        >
          <div className={style.PCS}>
            <p className={style.Field}>700W</p>
          </div>
          <div
            className={style.PCS}
            onClick={() => handleSetPart("1000W", "fuente")}
          >
            <p className={style.Field}>1000W</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fuente;
