import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from './register.module.css';

const SuccessRegister = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  });
  return (
    <div className={style.container}>
      <h1>Registro exitoso</h1>
    </div>
  );
};

export default SuccessRegister;
