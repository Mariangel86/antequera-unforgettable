import './App.css';
import NavBar from './Componentes/Navbar';

const App=()=> {
   const handleClick = () => {
    alert("Click");
  };
       return (
    <div>
      <NavBar/>
      <h1>Hola mundo</h1>
      <h2>Mi</h2>
      <h2>Primer</h2>
      <h2>Proyecto</h2>
      <h2>React</h2>
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