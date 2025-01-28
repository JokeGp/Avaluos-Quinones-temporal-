import React from "react";
import Home from "../components/homeButton";
import { useNavigate } from "react-router-dom";

const Avaluo2= () => {
    const navigate = useNavigate();
    return (
    <>
    <section className='Avaluo2-Container'>
        <div className='Avaluo2-title'>
          <h1>Avaluo2</h1>
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

export default Avaluo2;
