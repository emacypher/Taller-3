import React, { useEffect, useState } from "react";
import CardComponent from "./cardComponent/cardComponent";
import style from "./motherboard.module.css";
import axios from "axios";
const Motherboard = ({ handleSetPart, type }) => {
  const [motherboard, setMotherBoard] = useState({ list: [], index: 0 });
  useEffect(async () => {
    await axios
      .get(`http://localhost:5000/part/motherboard/${type}`)
      .then(({ data }) => {
        console.log(data);
        setMotherBoard({
          ...motherboard,
          list: data.motherboard,
        });
      });
  }, []);
  return (
    <div className={style.container}>
      {motherboard.list && (
        <CardComponent
          list={motherboard.list}
          index={motherboard.index}
          handleSetPart={handleSetPart}
          length={motherboard.list.length}
        />
      )}
    </div>
  );
};

export default Motherboard;
