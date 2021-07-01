import React, { useState } from "react";

import Cpu from "./cpu/cpu.js";
import Gpu from "./gpu/gpu.js";
import Memories from "./memories/memories.js";
//import Motherboard from "./motheboard/motherboard.js";

const Pcparts = () => {
  const [parts, setParts] = useState({
    cpu: "",
    gpu: "",
    ram: "",
    motherboard: "",
    disk: "",
  });

  const handleSetPart = (part, type) => {
    console.log(part, type);
    setParts({
      ...parts,
      [type]: part,
    });
  };
  return (
    <div>
      {!parts.cpu && <Cpu handleSetPart={handleSetPart} />}
      {parts.cpu && !parts.gpu && <Gpu handleSetPart={handleSetPart} />}
      {!parts.ram && parts.gpu && <Memories setParts={handleSetPart} />}
      {/*       {!parts.disk && <Motherboard setParts={handleSetPart} />}  */}
    </div>
  );
};

export default Pcparts;
