import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actionCreaton.js";
import axios from "axios";
import style from "./login.module.css";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //Iniciamos un estado para poder guardar los datos de los inputs y damos estado de inicio con UseState
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  //Función encargada de hacer la peticion de Login al server
  const getLogin = () => {
    //Axios es el encargado de hacer petición, especificamos la ruta y mandamos los valores del estado
    axios.post("http://localhost:5000/auth/login", input).then((data) => {
      data.status === 200 && successLogin(data.data);
    });
  };

  const successLogin = (data) => {
    dispatch(login(data));
    history.push("/");
  };

  return (
    <div className={style.container}>
      <ValidatorForm
        onError={() => alert("No puede hacer esto")}
        onSubmit={() => getLogin()}
      >
        <TextValidator
          style={{ margin: "20px" }}
          label="Email"
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          validators={["required", "isEmail"]}
          errorMessages={["Es un valor requerido", "Ingrese un mail valido"]}
        />
        <TextValidator
          style={{ margin: "20px" }}
          label="Password"
          name="password"
          type="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          validators={["required"]}
          errorMessages={["Es un valor requerido"]}
        />
        <Button
          style={{ margin: "20px" }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Ingresar
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default Login;
