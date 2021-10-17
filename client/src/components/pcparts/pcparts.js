import React, { useState } from "react";
import { connect } from "react-redux";
import Cpu from "./cpu/cpu.js";
import Gpu from "./gpu/gpu.js";
import Memories from "./memories/memories.js";
import Motherboard from "./motherboard/motherboard.js";
import Fuente from "./fuente/fuente.js";
import Software from "./software/software.js";
import Perfomance from "./perfomance/perfomance.js";

/* Inicializamos el store */
const mapStateToProps = (state) => {
  return { store: state };
};
/* Inicializamos el componente el cual es del renderizar los componente */
const Pcparts = ({ store }) => {
  /* El estado del componente en el cual guardamos las partes seleccionadas*/
  /* Si se selecciono un pc desde /pc_armadas */
  /* Se setea aquí y pasamos a elejir un software */
  const [parts, setParts] = useState({
    cpu: store.pc_select ? store.pc_select.cpu : "",
    gpu: store.pc_select ? store.pc_select.gpu : "",
    ram: store.pc_select ? store.pc_select.ram : "",
    motherboard: store.pc_select ? store.pc_select.motherboard : "",
    disk: store.pc_select ? store.pc_select.disk : "",
    fuente: store.pc_select ? store.pc_select.fuente : "",
  });

  /* Aquí guardamos el software que se elije  */
  const [software, setSoftware] = useState("");

  /* Encargado de condicionar si elejimos Intel o AMD */
  const [type, setType] = useState("");

  /* Aquí seteamos las partes que se van seleccionando */
  const handleSetPart = (part, type) => {
    setParts({
      ...parts,
      [type]: part,
    });
  };

  /* Aquí guardandos las memorias Disco/RAM */
  const setearMemories = (data) => {
    setParts({
      ...parts,
      disk: data.disk,
      ram: data.ram,
    });
  };

  /* Esto condiciona el pedido de la API Rest */
  /* Cuando solicitemos las CPU nos traiga las que se selecciono */
  /* Y cuando pasemos a motherboard nos traiga las que correspondan a la seleccionada */
  const setTypeCPU = (type) => {
    setType(type);
  };

  /*Seteamos el software seleccionado en el componente Software que es el Step Final */
  const setearSoftware = (data) => {
    setSoftware(data);
  };

  return (
    <div>
      {/* Aquí condicionamos el renderizado a medida que vamos elegiendo las partes del la PC*/}
      {!parts.cpu && (
        <Cpu 
          handleSetPart={handleSetPart} 
          setTypeCPU={setTypeCPU} 
        />
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
/* Hacemos las conexión manual al Store, en el cual guardamos las partes que seleccionamos */
/* O en el caso que se haya seleccionado una pc armada nos las pueda traer */
export default connect(mapStateToProps, null)(Pcparts);
