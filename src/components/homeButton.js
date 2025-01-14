import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
      <button onClick={()=> navigate("/")}>Volver a Home</button>
  );
}

export default HomeButton;