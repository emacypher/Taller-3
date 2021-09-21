import React, { useState } from "react";
import axios from "axios";
import style from "./register.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import ShowPassword from "../../assets/remove_red_eye.png";

const Register = () => {
  const [state, setState] = useState({
    confirmPassword: true,
    password: true,
  });

  const schema = yup.object().shape({
    name: yup
      .string()
      .required()
      .matches(/^[a-z ,.'-]+$/i, "Is not in correct format"),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(15).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password", undefined)])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    handleRegister(data);
  };

  const handleRegister = async (data) => {
    //Axios es el encargado de hacer petición, especificamos la ruta y mandamos los valores del estado
    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
        name: data.name,
        password: data.password,
        email: data.email,
      });
      if (response.status === 200) window.location = "/success_register";
      if (response.status !== 200) return alert("Error revise los datos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.Container}>
      <form
        onSubmit={handleSubmit(submitForm)}
        style={{ width: "100%", marginTop: "4em" }}
      >
        <div className={style.ContainerInput}>
          <label className={style.Labels}>NOMBRE</label>
          <input
            className={style.Inputs}
            {...register("name", { required: true })}
            type="text"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => (
              <p style={{ color: "#FF2626" }}>Verificar este campo</p>
            )}
          />
        </div>
        <div className={style.ContainerInput}>
          <label className={style.Labels}>EMAIL</label>
          <input
            {...register("email", { required: true })}
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
        </div>
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
        <label className={style.Labels}>REPETIR PASSWORD</label>
        <div className={style.ContainerInputPassword}>
          <input
            {...register("confirmPassword", { required: true })}
            className={style.InputPassword}
            type={state.confirmPassword ? "password" : "text"}
          />
          <img
            className={style.ButtonPassword}
            src={ShowPassword}
            alt="Showpassword"
            onClick={() =>
              setState({
                ...state,
                confirmPassword: !state.confirmPassword,
              })
            }
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="confirmPassword"
          render={({ message }) => (
            <p style={{ color: "#FF2626" }}>Verificar este campo</p>
          )}
        />
        <button type="submit" className={style.Button}>
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;
