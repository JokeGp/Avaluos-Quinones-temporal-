import React from "react";
import { useParams } from "react-router-dom";

const VerAvaluo = () => {
  const { tipo } = useParams();

  const validTypes = ["comercial", "industrial", "residencial"];

  if(!validTypes.includes(tipo)){
    return <h1>El tipo de avalúo no es válido</h1>
  }

  return (
    <div>
      <h1>Ver Avalúos - {tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h1>
      <p>Aquí se mostrarán los avalúos de tipo: {tipo}</p>
      {/* Agrega aquí lógica para obtener y mostrar los avalúos */}
    </div>
  );
};

export default VerAvaluo;

