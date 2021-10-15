import React from "react";
import style from "./cardComponent.module.css";
import backArrow from "../../../../assets/arrowBack.png";
import nextArrow from "../../../../assets/arrowNext.png";
import GpuCard from "../gpuCard/gpuCard";

const CardComponent = ({ list, next, back, toBack, index, handleSetPart }) => {
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
      title: "MEMORIA",
      dataIndex: "Socket",
      key: "Socket",
      width: 100,
    },
    {
      title: "CLOCK",
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
                <>
                  <GpuCard
                    handleSetPart={handleSetPart}
                    style={style}
                    data={data}
                    index={index}
                  />
                </>
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
