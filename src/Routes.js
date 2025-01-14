import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/home';
import AvaluoComercial from './components/AvaluoComercial';
import Avaluo2 from './components/Avaluo-2';
import Avaluo3 from './components/Avaluo-3';
import NuevoAvaluo from './components/NuevoAvaluo';
import VerAvaluo from './components/VerAvaluo';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/avaluo-comercial" element={<AvaluoComercial/>}/>
        <Route path="/avaluo/:tipo/nuevo" element={<NuevoAvaluo/>}/> 
        <Route path="/avaluo/:tipo/ver" element={<VerAvaluo/>}/>
        <Route path="/avaluo-2" element={<Avaluo2/>}/>
        <Route path="/avaluo-3" element={<Avaluo3/>}/>
      </Routes>
  );
}

export default App;
