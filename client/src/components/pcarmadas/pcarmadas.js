import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { PC } from "../../redux/actionCreaton.js";
import axios from "axios";
import Navbar from "../navbar/navbar";
import style from "./pcarmadas.module.css";

const PcArmadas = () => {

  const [state, setState] = useState({
    PCS: null,
  });

  /* Aquí inicializamos history para redireccionar al usuario */
  const history = useHistory();
    /* Aquí inicializamos dispatch para despachar las acciones de seteo al store */
  const dispatch = useDispatch();

  useEffect(() => {
    /* Solicitamos las pc armadas a la API Rest */
    axios.get("http://localhost:5000/part/pc_armadas").then(({ data }) =>
      setState({
        ...state,
        PCS: data.pc_armadas,
      })
    );
  }, []);

  const selectPc = (item) => {
    /* Guardamos la pc que se seleccione al store */
    dispatch(PC(item));
    /* Redirigiamos al usuario al armado de pc */
    /* En este caso a elegir el software */
    history.push(`/armar_pc`);
  };
  
  return (
    <>
      <Navbar />
      <div className={style.Container}>
        <div className={style.Row}>
        {/* Renderizamos las pc armadas que pedimos a la API Rest */}
          {state.PCS &&
            state.PCS.map((item, index) => {
              return (
                <div
                  className={style.PCS}
                  key={index}
                  onClick={() => selectPc(item)}
                >
                  <p>{item.arquitectura.cpu.Name}</p>
                  <p>
                    {item.arquitectura.disk.type} {item.arquitectura.disk.size}
                    GB
                  </p>
                  <p>{item.arquitectura.ram} GB</p>
                  <p>{item.arquitectura.gpu.Product_Name}</p>
                  <p>{item.arquitectura.fuente}</p>
                  <p>{item.arquitectura.type.toUpperCase()}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PcArmadas;
