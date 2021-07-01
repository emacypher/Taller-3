import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actionCreaton.js";
import style from "./profile.module.css";

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //Iniciamos un estado para poder guardar los datos de los inputs y damos estado de inicio con UseState
  const [input, setInput] = useState({
    id: useSelector((state) => state.id),
    name: useSelector((state) => state.name),
    email: useSelector((state) => state.email),
    password: "",
  });


  
  
  const handleProfile = async () => {
    //Axios es el encargado de hacer petición, especificamos la ruta y mandamos los valores del estado
    try {
      
      const response = await axios.put("http://localhost:5000/user/update", {
        id: input.id,
        name: input.name,
        password: input.password,
        email: input.email,
      });
      if (response.status === 200) {
        dispatch(login(input));
        history.push("/")
        return alert("Cambios guardados")
      };
      if (response.status !== 200) return alert("Error revise los datos");
    } catch (error) {
      console.log(error);
    } 
  };
  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== input.password) {
        return false;
      }
      return true;
    });
  });
  

  return (
    <div className={style.container}>
      <ValidatorForm
        onError={() => alert("No puede hacer esto")}
        onSubmit={() => handleProfile()}
      >
          <TextValidator
            style={{ margin: "20px" }}
            label="Cambiar Nombre"
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
          label="Cambiar Email"
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
          label="Cambiar Password"
          name="password"
          type="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
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
          Guardar Cambios
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default Profile;
