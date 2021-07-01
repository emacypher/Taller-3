import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button"; //Importacion de botones
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import style from "../login/login.module.css";


const Register = () => {
  const history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
    repeatPassword: "",
  });
  const [state, setState] = useState({
    isLoading: "",
  });
  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== input.password) {
        return false;
      }
      return true;
    });
  });
  const handleRegister = async () => {
    //Axios es el encargado de hacer petición, especificamos la ruta y mandamos los valores del estado
    try {
      setState({ isLoading: true });
      const response = await axios.post("http://localhost:5000/auth/register", {
        name: input.name,
        password: input.password,
        email: input.email,
      });
      if (response.status === 200) history.push("/success_register");
      if (response.status !== 200) return alert("Error revise los datos");
    } catch (error) {
      console.log(error);
    } finally {
      setState({ isLoading: false });
    }
  };
  return (
    <div className={style.container}>
      <ValidatorForm
        onError={() => alert("No puede hacer esto")}
        onSubmit={() => handleRegister()}
      >
        <TextValidator
          style={{ margin: "20px" }}
          label="Ingrese un nombre"
          name="name"
          value={input.name}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          validators={["required"]}
          errorMessages={["Es un valor requerido"]}
        />
        <TextValidator
          style={{ margin: "20px" }}
          label="Ingrese un Email"
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
          label="Ingrese un Password"
          name="password"
          type="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          validators={["required"]}
          errorMessages={["Es un valor requerido"]}
        />
        <TextValidator
          style={{ margin: "20px" }}
          label="Repetir su Password"
          name="repeatPassword"
          type="password"
          value={input.repeatPassword}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          validators={["isPasswordMatch", "required"]}
          errorMessages={[
            "Las contraseñas no son iguales",
            "Es un valor requerido",
          ]}
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

export default Register;
