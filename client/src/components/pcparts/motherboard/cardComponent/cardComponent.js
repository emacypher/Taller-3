import React from "react";
import style from "./cardComponent.module.css";
import Arrow from "../../../../assets/Arrow.png";

const CardComponent = ({ list, handleSetPart }) => {
  const columns = [
    {
      title: "MODELO",
      dataIndex: "Name",
      key: "Name",
      width: 100,
    },
    {
      title: "SOCKET",
      dataIndex: "Socket",
      key: "Socket",
      width: 100,
    },
    {
      title: "AÑO",
      dataIndex: "Released",
      key: "Released",
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
                <>
                  <tr key={index} className={style.Fields}>
                    <td className={style.FirstField}>{data.name}</td>
                    <td className={style.Field}>{data["Socket(s)"]}</td>
                    <td className={style.Field}>{data["Release Year"]}</td>
                    <td className={style.Field}>{data["Form Factor"]}</td>
                    <td className={style.LastField}>MAS</td>
                    <button
                      key={index}
                      className={style.Select}
                      onClick={() => handleSetPart(data, "motherboard")}
                    >
                      <img src={Arrow} />
                    </button>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CardComponent;
