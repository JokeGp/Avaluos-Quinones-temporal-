import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className='dashboardSection'>
      <div className='dash_Container'>
        <h1>Sistema de Avalúos</h1>
        <div>
        <button onClick={()=> navigate("/avaluo-comercial")}>Avaluo comercial</button>
        <button onClick={()=> navigate("/avaluo-2")}>Avaluo 2</button>
        <button onClick={()=> navigate("/avaluo-3")}>Avaluo 3</button>
        </div>
      </div>

    </section>
  );
}

export default Home;