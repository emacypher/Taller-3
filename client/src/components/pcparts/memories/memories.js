import React, { useState } from "react";
import style from "./Memories.module.css";
import Button from "@material-ui/core/Button";

const Memories = () => {
  const [memories, setMemories] = useState({
    ram: "",
    disk: {
      type: "",
      size: "",
    },
  });
  return (
    <>
      <div>
        <div className={style.disk}>
          <p>Aquí puedes elejir el tipo de almacenamiento interno</p>
          <Button
            size="small"
            variant="contained"
            color="primary"
            /*  onClick={() => comeBack()} */
          >
            Solido
          </Button>
          <Button
            size="small"
            variant="contained"
            color="primary"
            /*  onClick={() => comeBack()} */
          >
            Rigido
          </Button>
        </div>
        <div className={style.ram}>
          <p>Aquí puedes elejir tu almacenamiento volatil (RAM)</p>
        </div>
      </div>
    </>
  );
};

export default Memories;
