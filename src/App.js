import logo from './assets/provisional.png';
import './App.css';

function App() {
  return (
    <section className='dashboardSection'>
      <div className='dash_Container'>
        <img src={logo} className='App-logo' alt='logo'/>
        <div>
        <button>Realizar nuevo avalúo</button>
        <button>Ver avalúos</button>
        </div>
      </div>

    </section>
  );
}

export default App;
