import React, { useState } from "react";
import style from "./Memories.module.css";
import Disk from "../../../assets/pngwing.png";
import Ram from "../../../assets/memoriaRam.png";

const Memories = (setearMemories) => {
  const [memories, setMemories] = useState({
    ram: 0,
    disk: {
      type: "",
      size: 0,
    },
  });

  const handleClick = (name) => {
    setMemories({
      ...memories,
      disk: { ...memories.disk, type: name },
    });
  };

  const handleChangeSize = (value, name) => {
    setMemories({
      ...memories,
      disk: { ...memories.disk, size: value },
    });
  };

  return (
    <div className={style.Container}>
      <div className={style.ContainerDisk}>
        <div className={style.Disk}>
          <img src={Disk} alt="Disk" />
        </div>
        <div className={style.ContainerButton}>
          <button
            className={
              memories.disk.type === "M2" ? style.ButtonActive : style.Button
            }
            name="M2"
            onClick={(e) => handleClick(e.target.name)}
          >
            M2
          </button>
          <button
            className={
              memories.disk.type === "SSD" ? style.ButtonActive : style.Button
            }
            name="SSD"
            onClick={(e) => handleClick(e.target.name)}
          >
            SSD
          </button>
          <button
            className={
              memories.disk.type === "HDD" ? style.ButtonActive : style.Button
            }
            name="HDD"
            onClick={(e) => handleClick(e.target.name)}
          >
            HDD
          </button>
        </div>
      </div>
      <div className={style.DivInput}>
        <input
          type="range"
          min="0"
          max="1032"
          onChange={(e) => handleChangeSize(e.target.value)}
        />
      </div>
      <p className={style.Size}>{memories.disk.size} GB</p>
      <div className={style.Ram}>
        <div className={style.DiskRam}>
          <img src={Ram} alt="Ram" />
        </div>
        <div className={style.DivInput}>
          <input
            type="range"
            min="0"
            max="64"
            name="ram"
            onChange={(e) =>
              setMemories({
                ...memories,
                ram: e.target.value,
              })
            }
          />
        </div>
        <p className={style.Size}>{memories.ram} GB</p>
      </div>
      <button
        className={style.ButtonFinish}
        onClick={() => setearMemories.setearMemories(memories)}
      >
        Aceptar
      </button>
    </div>
  );
};

export default Memories;
