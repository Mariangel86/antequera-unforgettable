import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import NavBar from './Componentes/Navbar';

const App=()=> {
   
       return (
    <div className="div">
      <NavBar/>
      <ItemListContainer text='Lista de productos'/>
      
    </div>
  );
}

export default App;