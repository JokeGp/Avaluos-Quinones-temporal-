import React from "react";
import Home from "../components/homeButton";
import { useNavigate } from "react-router-dom";

function Avaluo3() {
  const navigate = useNavigate();
  return (
    <>
    <section className='Avaluo3-Container'>
        <div className='Avaluo3-title'>
          <h1>Avaluo3</h1>
          <div>
          <button onClick={()=> navigate("/")}>Nuevo Avaluo</button>
          <button onClick={()=> navigate("/")}>Ver avaluos</button>
          </div>
        </div>
  
      </section>
      <Home />
    </>
  );
}

export default Avaluo3;
