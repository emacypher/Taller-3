import React, { useState } from "react";
import style from "./cpu.module.css";
import axios from "axios";
import CardComponent from "./cardComponent/cardComponent";

const Cpu = ({ handleSetPart, setTypeCPU }) => {
  const [showButton, setShowButton] = useState(true);
  const [cpu, setCpu] = useState({
    list: "",
    type: "",
    index: 0,
  });

  const changeToIntel = async () => {
    setTypeCPU("intel");
    await axios.get("http://localhost:5000/part/intel").then(({ data }) =>
      setCpu({
        ...cpu,
        list: data.intel_cpu,
        type: "intel",
      })
    );

    setShowButton(false);
  };

  const changeToAmd = async () => {
    setTypeCPU("amd");
    await axios.get("http://localhost:5000/part/amd").then(({ data }) =>
      setCpu({
        ...cpu,
        list: data.amd_cpu,
        type: "amd",
      })
    );

    setShowButton(false);
  };

  const next = () => {
    setCpu({
      ...cpu,
      index: cpu.index + 20,
    });
  };
  const back = () => {
    if (cpu.index === 0) return null;
    setCpu({
      ...cpu,
      index: cpu.index - 20,
    });
  };
  const comeBack = () => {
    setShowButton(true);
    setCpu({
      ...cpu,
      list: "",
      type: "",
    });
  };
  return (
    <div className={style.container}>
      {showButton ? (
        <div className={style.buttons}>
          <button className={style.button} onClick={() => changeToIntel()}>
            INTEL
          </button>
          <button className={style.button} onClick={() => changeToAmd()}>
            AMD
          </button>
        </div>
      ) : (
        <CardComponent
          list={cpu.list.slice(cpu.index, cpu.index + 20)}
          comeBack={comeBack}
          next={next}
          back={back}
          index={cpu.index}
          handleSetPart={handleSetPart}
          length={cpu.list.length}
        />
      )}
    </div>
  );
};

export default Cpu;
