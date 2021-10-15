import React, { useState } from "react";
import Arrow from "../../../../assets/Arrow.png";

const GpuCard = ({ style, data, index, handleSetPart }) => {
  const [state, setState] = useState(style.Desactive);
  const mostrarDescripcion = () => {
    setState(state === style.Active ? style.Desactive : style.Active);
  };

  return (
    <>
      <tr key={index} className={style.Fields}>
        <td className={style.FirstField}>{data.Product_Name}</td>
        <td className={style.Field}>{data.Released}</td>
        <td className={style.Field}>{data.Memory}</td>
        <td className={style.Field}>{data.GPU_clock}</td>
        <td className={style.LastField} onClick={() => mostrarDescripcion()}>
          MAS
        </td>
        <button
          className={style.Select}
          onClick={() => handleSetPart(data, "gpu")}
        >
          <img src={Arrow} />
        </button>
      </tr>
      <tr className={state}>
        {/* <img src={} alt="imageIlustrator"/> */}
        <th className={style.Description}>
          <td>Bus : {data.Bus}</td>
          <td>GPU Chip : {data.GPU_Chip}</td>
          <td>Memory Clock : {data.Memory_clock}</td>
          <td>Shaders TMUs ROPs : {data.Shaders_TMUs_ROPs}</td>
        </th>
      </tr>
    </>
  );
};

export default GpuCard;
