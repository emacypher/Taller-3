import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./cardComponent/cardComponent";
import style from "./gpu.module.css";
const Gpu = ({ handleSetPart }) => {
  const [gpu, setGpu] = useState({
    list: [],
    index: 0,
  });

  useEffect(async () => {
    await axios.get("http://localhost:5000/part/gpu").then(({ data }) => {
      setGpu({
        ...gpu,
        list: data.gpu,
      });
    });
  }, []);

  const next = () => {
    setGpu({
      ...gpu,
      index: gpu.index + 20,
    });
  };

  const back = () => {
    if (gpu.index === 0) return null;
    setGpu({
      ...gpu,
      index: gpu.index - 20,
    });
  };

  return (
    <div className={style.container}>
      <CardComponent
        list={gpu.list.slice(gpu.index, gpu.index + 20)}
        next={next}
        back={back}
        index={gpu.index}
        handleSetPart={handleSetPart}
      />
    </div>
  );
};

export default Gpu;
