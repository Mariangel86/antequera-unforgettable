import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Componentes/Navbar';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import InicioSesion from './Componentes/InicioSesion';
import ItemListContainer from './Componentes/ItemListContainer';


const App=()=> {
   
       return (
       <BrowserRouter>
    <div className="div">
      <NavBar/>

      
      <Routes>
        <Route path='/' element={<h4>Bienvenido a mi pagina</h4>}/>
        <Route path='/categoria' element={<ItemListContainer/>}/>
      <Route path='/categoria/:id' element= {<ItemDetailContainer/>}/>
      <Route path='/iniciarSesion' element={<InicioSesion/>}></Route>
      </Routes>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;