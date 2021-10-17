import React, { useState } from "react";
import Arrow from "../../../../assets/Arrow.png";

const CpuCard = ({ style, data, index, handleSetPart }) => {
  const [state, setState] = useState(style.Desactive);

  /*Encargado del boton MAS */
  const mostrarDescripcion = () => {
    /* Cambiamos el css del boton para mostrarlo */
    setState(state === style.Active ? style.Desactive : style.Active);
  };

  return (
    <>
    {/* Renderizado de componente*/}
      <tr key={index} className={style.Fields}>
        <td className={style.FirstField}>{data.Name}</td>
        <td className={style.Field}>{data.Released}</td>
        <td className={style.Field}>{data.Socket}</td>
        <td className={style.Field}>{data.Cores}</td>
        {/* Encargado de accionar la muestra de descripción*/}
        <td className={style.LastField} onClick={() => mostrarDescripcion()}>
          MAS
        </td>
        <button
          key={index}
          className={style.Select}
          onClick={() => handleSetPart(data, "cpu")}
        >
          <img src={Arrow} />
        </button>
      </tr>
      {/* Renderizado de la descripción */}
      <tr className={state}>
        {/* <img src={} alt="imageIlustrator"/> */}
        <th className={style.Description}>
          <td>Clock : {data.Clock}</td>
          <td>Codename : {data.Codename}</td>
          <td>Process : {data.Process}</td>
          <td>TDP : {data.TDP}</td>
        </th>
      </tr>
    </>
  );
};

export default CpuCard;
