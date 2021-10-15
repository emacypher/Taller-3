import React from "react";
import style from "./cardComponent.module.css";
import backArrow from "../../../../assets/arrowBack.png";
import nextArrow from "../../../../assets/arrowNext.png";
import CpuCard from "../cpuCard/cpuCard";

const CardComponent = ({
  list,
  comeBack,
  next,
  back,
  index,
  handleSetPart,
  length,
}) => {
  const indices = length / 20;
  const columns = [
    {
      title: "MODELO",
      dataIndex: "Name",
      key: "Name",
      width: 100,
    },
    {
      title: "AÑO",
      dataIndex: "Released",
      key: "Released",
      width: 100,
    },
    {
      title: "SOCKET",
      dataIndex: "Socket",
      key: "Socket",
      width: 100,
    },
    {
      title: "CORES",
      dataIndex: "Cores",
      key: "Cores",
      width: 200,
    },
    {
      title: "",
      dataIndex: "",
      key: "operations",
      render: () => <a href="#">Delete</a>,
    },
  ];

  return (
    <div className={style.container}>
      <table>
        <tbody>
          <tr>
            {columns.map((field, index) => {
              return (
                <th key={index} className={style.Columns}>
                  {field.title}
                </th>
              );
            })}
          </tr>
          {list &&
            list.map((data, index) => {
              return (
                <CpuCard
                  handleSetPart={handleSetPart}
                  style={style}
                  data={data}
                  index={index}
                />
              );
            })}
        </tbody>
      </table>
      <div className={style.ContainerButton}>
        <button className={style.Arrow} onClick={() => back()}>
          <img src={backArrow} />
        </button>
        <button className={style.Arrow} onClick={() => next()}>
          <img src={nextArrow} />
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
