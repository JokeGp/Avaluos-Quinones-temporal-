import React from "react";
import Home from "../components/homeButton";
import { useNavigate } from "react-router-dom";

const AvaluoComercial = () => {
    const navigate = useNavigate();
    return (
        <>
      <section className='AvaluoComercial-Container'>
        <div className='AvaluoComercial-title'>
          <h1>AvaluoComercial</h1>
          <div>
          <button onClick={()=> navigate("/avaluo/comercial/nuevo")}>Nuevo Avaluo</button>
          <button onClick={()=> navigate("/avaluo/comercial/ver")}>Ver avaluos</button>
          </div>
        </div>
  
      </section>
      <Home />
      </>
    );
  }

export default AvaluoComercial;
