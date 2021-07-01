import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./cardComponent/cardComponent";

const Gpu = ({ handleSetPart }) => {
  const [gpu, setGpu] = useState({
    list: [],
    index: 0,
  });

  useEffect(async () => {
    await axios.get("http://localhost:5000/part/gpu").then(({ data }) => {
      console.log(data);
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
    <>
      <CardComponent
        list={gpu.list.slice(gpu.index, gpu.index + 20)}
        next={next}
        back={back}
        index={gpu.index}
        handleSetPart={handleSetPart}
      />
    </>
  );
};

export default Gpu;
