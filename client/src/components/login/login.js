import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actionCreaton.js";
import axios from "axios";
import style from "./login.module.css";
import UserPhoto from "../../assets/userPhoto.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import ShowPassword from "../../assets/remove_red_eye.png";

const Login = () => {
  /* Controlar si se muestra o no la password */
  const [state, setState] = useState({
    password: true,
  });
  /* Iniciamos history para poder redireccionar */
  const history = useHistory();
  /* Iniciamos dispatch para actualizar el store de redux */
  const dispatch = useDispatch();
  //Iniciamos un estado para poder guardar los datos de los inputs y damos estado de inicio con UseState
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(15).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //Función encargada de hacer la peticion de Login al server
  const getLogin = (data) => {
    //Axios es el encargado de hacer petición, especificamos la ruta y mandamos los valores del estado
    axios.post("http://localhost:5000/auth/login", data)
    .then((data) => {
      data.status === 200 && successLogin(data.data)
    })
    .catch((error) => {
      alert("Verifique sus credenciales")
    })
  };

  const successLogin = (data) => {
    /* Despachamos a la store los datos */
    dispatch(login(data));
    /* Volvemos al home */
    history.push("/");
  };

  const submitForm = (data) => {
    getLogin(data);
  };
  
  return (
    <div className={style.Container}>
      <div className={style.UserPhoto}>
        <img src={UserPhoto} className={style.PhotoUser} alt="UserPhoto" />
      </div>
      <form onSubmit={handleSubmit(submitForm)} style={{ width: "100%" }}>
        <label className={style.Labels}>EMAIL</label>
        <input
          {...register("email", { required: true })}
          autoComplete="off"
          className={style.Inputs}
          type="text"
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <p style={{ color: "#FF2626" }}>Verificar este campo</p>
          )}
        />
        <label className={style.Labels}>PASSWORD</label>
        <div className={style.ContainerInputPassword}>
          <input
            className={style.InputPassword}
            {...register("password", { required: true })}
            type={state.password ? "password" : "text"}
          />
          <img
            className={style.ButtonPassword}
            src={ShowPassword}
            onClick={() =>
              setState({
                ...state,
                password: !state.password,
              })
            }
            alt="Showpassword"
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => (
            <p style={{ color: "#FF2626" }}>Verificar este campo</p>
          )}
        />
        <button type="submit" className={style.Button}>
          INGRESAR
        </button>
      </form>
      <h4 className={style.Labels}>Olvide mi contraseña</h4>
      <a href="/register" style={{ textDecoration: "none" }}>
        <h4 className={style.Labels}>Registar</h4>
      </a>
    </div>
  );
};

export default Login;
