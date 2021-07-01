import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import style from "./cpu.module.css";
import axios from "axios";
import CardComponent from "./cardComponent/cardComponent";

const Cpu = ({ handleSetPart }) => {
  const [showButton, setShowButton] = useState(true);
  const [cpu, setCpu] = useState({
    list: "",
    type: "",
    index: 0,
  });

  const changeToIntel = async () => {
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
          <h1>Comencemos eligiendo nuestro procesador</h1>
          <div className={style.button_intel}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => changeToIntel()}
            >
              INTEL
            </Button>
          </div>
          <div className={style.button_amd}>
            <Button
              name="amd"
              variant="contained"
              color="secondary"
              onClick={() => changeToAmd()}
            >
              AMD
            </Button>
          </div>
        </div>
      ) : (
        <CardComponent
          list={cpu.list.slice(cpu.index, cpu.index + 20)}
          comeBack={comeBack}
          next={next}
          back={back}
          index={cpu.index}
          handleSetPart={handleSetPart}
        />
      )}
    </div>
  );
};

export default Cpu;
