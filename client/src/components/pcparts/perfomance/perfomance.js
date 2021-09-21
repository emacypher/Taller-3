import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./perfomance.module.css";
import computer from "../../../assets/computer.png";
import softwareImg from "../../../assets/software.png";
import good from "../../../assets/good.png";

const Perfomance = ({ software, parts, type }) => {
  const [perfomance, setPerfomance] = useState("");
  useEffect(async () => {
    parts.type = type;
    await axios
      .post("http://localhost:5000/perfomance", {
        arquitectura: parts,
        software,
      })
      .then(({ data }) => {
        setPerfomance(data);
      });
  });
  return (
    <>
      <div className={style.Container}>
        <h3 className={style.Title}>Software Descripción</h3>
        <div className={style.Softwarecontainer}>
          <div className={style.Cube}>
            <img className={style.Imagen} src={softwareImg} alt="software" />
          </div>
          <div className={style.Softwaredescription}>
            <p>{software.name}</p>
          </div>
        </div>

        <h3 className={style.Title}>TU PC Descripción</h3>
        <div className={style.PCcontainer}>
          <div className={style.Cube}>
            <img className={style.Imagen} src={computer} alt="computer" />
          </div>
          <div className={style.PCdescripcion}>
            <p>{parts.cpu.Name}</p>
            <p>
              {parts.disk.size}GB {parts.disk.type}
            </p>
            <p>{parts.ram}GB</p>
            <p>{parts.fuente}</p>
            <p>{parts.gpu.Product_Name}</p>
          </div>
        </div>
        <div className={style.PerfomanceContainer}>
          <div className={style.ContainerGood}>
            <img src={good} alt="good" />
          </div>
          {perfomance}
        </div>
      </div>
    </>
  );
};

export default Perfomance;
