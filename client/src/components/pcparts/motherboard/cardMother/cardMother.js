import React, { useState } from "react";
import Arrow from "../../../../assets/Arrow.png";

const CardMother = ({ style, data, index, handleSetPart }) => {
  const [state, setState] = useState(style.Desactive);
  const mostrarDescripcion = () => {
    setState(state === style.Active ? style.Desactive : style.Active);
  };
  return (
    <>
      <tr key={index} className={style.Fields}>
        <td className={style.FirstField}>{data.name}</td>
        <td className={style.Field}>{data["Socket(s)"]}</td>
        <td className={style.Field}>{data["Release Year"]}</td>
        <td className={style.Field}>{data["Form Factor"]}</td>
        <td className={style.LastField} onClick={() => mostrarDescripcion()}>
          MAS
        </td>
        <button
          key={index}
          className={style.Select}
          onClick={() => handleSetPart(data, "motherboard")}
        >
          <img src={Arrow} />
        </button>
      </tr>
      <tr className={state}>
        {/* <img src={} alt="imageIlustrator"/> */}
        <th className={style.Description}>
          <td>Audio Chip : {data["Audio Chip"]}</td>
          <td>Chipset : {data.Chipset}</td>
          <td>SATA3 : {data.SATA3}</td>
          <td>RAM : {data.RAM}</td>
        </th>
      </tr>
    </>
  );
};

export default CardMother;
