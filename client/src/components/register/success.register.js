import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "./register.module.css";

const SuccessRegister = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  });
  return (
    <div className={style.Container}>
      <h1 style={{ color: "white" }}>Registro exitoso</h1>
    </div>
  );
};

export default SuccessRegister;
