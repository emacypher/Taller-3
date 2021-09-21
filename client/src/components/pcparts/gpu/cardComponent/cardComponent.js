import React from "react";
import style from "./cardComponent.module.css";
import Button from "@material-ui/core/Button";
import Arrow from "../../../../assets/Arrow.png";
import backArrow from "../../../../assets/arrowBack.png";
import nextArrow from "../../../../assets/arrowNext.png";

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
                  <tr key={index} className={style.Fields}>
                    <td className={style.FirstField}>{data.Product_Name}</td>
                    <td className={style.Field}>{data.Released}</td>
                    <td className={style.Field}>{data.Memory}</td>
                    <td className={style.Field}>{data.GPU_clock}</td>
                    <td className={style.LastField}>MAS</td>
                    <button
                      className={style.Select}
                      onClick={() => handleSetPart(data, "gpu")}
                    >
                      <img src={Arrow} />
                    </button>
                  </tr>
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
