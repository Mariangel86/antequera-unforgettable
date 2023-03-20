import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import NavBar from './Componentes/Navbar';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import InicioSesion from './Componentes/InicioSesion';


const App=()=> {
   
       return (
       <BrowserRouter>
    <div className="div">
      <NavBar/>

      
      <Routes>
      <Route path='/' element= {<ItemListContainer text='Lista de productos'/>}/>
      <Route path='/categoria/:id' element={<ItemListContainer/>}/>
      <Route path='/detalle/:id' element= {<ItemDetailContainer/>}/>
      <Route path='/iniciarSesion' element={<InicioSesion/>}></Route>
      </Routes>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;