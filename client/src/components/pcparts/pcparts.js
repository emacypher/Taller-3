import React, { useState } from "react";
import { connect } from "react-redux";
import Cpu from "./cpu/cpu.js";
import Gpu from "./gpu/gpu.js";
import Memories from "./memories/memories.js";
import Motherboard from "./motherboard/motherboard.js";
import Fuente from "./fuente/fuente.js";
import Software from "./software/software.js";
import Perfomance from "./perfomance/perfomance.js";

const mapStateToProps = (state) => {
  return { store: state };
};

const Pcparts = ({ store }) => {
  const [parts, setParts] = useState({
    cpu: store.pc_select ? store.pc_select.cpu : "",
    gpu: store.pc_select ? store.pc_select.gpu : "",
    ram: store.pc_select ? store.pc_select.ram : "",
    motherboard: store.pc_select ? store.pc_select.motherboard : "",
    disk: store.pc_select ? store.pc_select.disk : "",
    fuente: store.pc_select ? store.pc_select.fuente : "",
  });

  const [software, setSoftware] = useState("");

  const [type, setType] = useState("");

  const handleSetPart = (part, type) => {
    setParts({
      ...parts,
      [type]: part,
    });
  };

  const setearMemories = (data) => {
    setParts({
      ...parts,
      disk: data.disk,
      ram: data.ram,
    });
  };

  const setTypeCPU = (type) => {
    setType(type);
  };

  const setearSoftware = (data) => {
    setSoftware(data);
  };
  return (
    <div>
      {!parts.cpu && (
        <Cpu handleSetPart={handleSetPart} setTypeCPU={setTypeCPU} />
      )}
      {!parts.gpu && parts.cpu && <Gpu handleSetPart={handleSetPart} />}
      {!parts.motherboard && parts.gpu && (
        <Motherboard handleSetPart={handleSetPart} type={type} />
      )}
      {!parts.ram && parts.motherboard && (
        <Memories setearMemories={setearMemories} />
      )}
      {!parts.fuente && parts.ram && <Fuente handleSetPart={handleSetPart} />}
      {!software && parts.fuente && (
        <Software setearSoftware={setearSoftware} />
      )}
      {software && <Perfomance software={software} parts={parts} type={type} />}
    </div>
  );
};

export default connect(mapStateToProps, null)(Pcparts);
