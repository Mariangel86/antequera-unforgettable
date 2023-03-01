import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import NavBar from './Componentes/Navbar';
import ContadorFuncional from './Componentes/Contador';

const App=()=> {
   
       return (
    <div className="div">
      <NavBar/>
      <ItemListContainer text='Lista de productos'/>
      <ContadorFuncional cantidadAincrementar={1} cantidadAdisminuir= {1}/>
      
    </div>
  );
}

export default App;