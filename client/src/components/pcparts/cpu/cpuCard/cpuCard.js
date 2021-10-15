import React, { useState } from "react";
import Arrow from "../../../../assets/Arrow.png";

const CpuCard = ({ style, data, index, handleSetPart }) => {
  const [state, setState] = useState(style.Desactive);
  const mostrarDescripcion = () => {
    setState(state === style.Active ? style.Desactive : style.Active);
  };
  return (
    <>
      <tr key={index} className={style.Fields}>
        <td className={style.FirstField}>{data.Name}</td>
        <td className={style.Field}>{data.Released}</td>
        <td className={style.Field}>{data.Socket}</td>
        <td className={style.Field}>{data.Cores}</td>
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
