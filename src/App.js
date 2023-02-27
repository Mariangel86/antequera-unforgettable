import './App.css';
import NavBar from './Componentes/Navbar';

const App=()=> {
   const handleClick = () => {
    alert("Click");
  };
       return (
    <div className="div">
      <NavBar number={0}/>
      <h3>Hola mundo</h3>
      <h2>Mi Proyecto React</h2>
      <ul>
        <li>Manzana</li>
        <li>Perá</li>
        <li>Uva</li>
      </ul>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;