import React, { useState, useEffect } from "react";
import style from "./software.module.css";
import axios from "axios";

const Software = ({ setearSoftware }) => {
  const [state, setState] = useState("");

  useEffect(async () => {
    await axios
      .get("http://localhost:5000/part/software")
      .then(({ data }) => setState(data));
  });

  return (
    <>
      {state && (
        <div className={style.Container}>
          <h1 className={style.Field}>Software de referencia a utilizar</h1>
          <div className={style.Row}>
            <div
              className={style.PCS}
              onClick={() => setearSoftware(state.software[0])}
            >
              <p className={style.Field}>{state.software[0].name}</p>
            </div>
            <div
              className={style.PCS}
              onClick={() => setearSoftware(state.software[1])}
            >
              <p className={style.Field}>{state.software[1].name}</p>
            </div>
          </div>
          <div className={style.Row}>
            <div
              className={style.PCS}
              onClick={() => setearSoftware(state.software[2])}
            >
              <p className={style.Field}>{state.software[2].name}</p>
            </div>
            <div
              className={style.PCS}
              onClick={() => setearSoftware(state.software[3])}
            >
              <p className={style.Field}>{state.software[3].name}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Software;
