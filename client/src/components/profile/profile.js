import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actionCreaton.js";
import style from "./profile.module.css";
import UserPhoto from "../../assets/userPhoto.png";
import Pen from "../../assets/create.png";
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
        history.push("/");
        return alert("Cambios guardados");
      }
      if (response.status !== 200) return alert("Error revise los datos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.Container}>
      <div className={style.Profile}>
        <div className={style.Left}>
          <div className={style.BackgroundPhoto}>
            <img src={UserPhoto} alt="ProfileUser" />
          </div>
          <button className={style.Button}> EDITAR INFO</button>
        </div>
        <div className={style.Right}>
          <div className={style.ContainerInputs}>
            <input className={style.Inputs} type="text" />
            <img src={Pen} alt="Edit" className={style.Pencil} />
          </div>
          <div className={style.ContainerInputs}>
            <input className={style.Inputs} type="text" />
            <img src={Pen} alt="Edit" className={style.Pencil} />
          </div>
          <div className={style.ContainerInputs}>
            <input className={style.Inputs} type="text" />
            <img src={Pen} alt="Edit" className={style.Pencil} />
          </div>
        </div>
      </div>
      <div className={style.PC}>
        <h4 className={style.Title}>PC ARMADAS</h4>
        <div className={style.ContainerPC}>
          <div className={style.PCs}>
            <p>PC 1</p>
          </div>
          <div className={style.PCs}>
            <p>PC 2</p>
          </div>
          <div className={style.PCs}>
            <p>PC 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
