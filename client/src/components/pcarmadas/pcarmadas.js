import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/navbar";
import style from "./pcarmadas.module.css";


const PcArmadas = () => {
  const [state, setState] = useState({
    PCS: null,
  });

  useEffect(() => {
    axios.get("http://localhost:5000/part/pc_armadas").then(({ data }) =>
      setState({
        ...state,
        PCS: data.pc_armadas,
      })
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className={style.Container}>
        <div className={style.Row}>
          {state.PCS &&
            state.PCS.map((item, index) => {
              return (
                <div className={style.PCS} key={index}>
                  <p>{item.cpu.Name}</p>
                  <p>
                    {item.disk.type} {item.disk.size}GB
                  </p>
                  <p>{item.ram} GB</p>
                  <p>{item.gpu.Product_Name}</p>
                  <p>{item.fuente}</p>
                  <p>{item.type.toUpperCase()}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PcArmadas;
