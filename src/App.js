import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Componentes/Navbar';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import InicioSesion from './Componentes/InicioSesion';
import ItemListContainer from './Componentes/ItemListContainer';
import ContadorFuncional from './Componentes/Contador';


const App=()=> {
   
       return (
       <BrowserRouter>
    <div className="div">
      <NavBar/>

      
      <Routes>
        <Route path='/' element={<ItemListContainer text="Lista de Productos"/>}/>
      <Route path='/categoria/:id' element= {<ItemListContainer text1="Productos por Categoria"/>}/>
      <Route path='/:detalleId' element= {<ItemDetailContainer/>}/>
      <Route path='/iniciarSesion' element={<InicioSesion/>}></Route>
      </Routes>
      <ContadorFuncional cantidadAincrementar={1} cantidadAdisminuir={1} />
      
    </div>
    </BrowserRouter>
  );
}

export default App;