import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import NavBar from './Componentes/Navbar';
import ItemDetailContainer from './Componentes/ItemDetailContainer';

const App=()=> {
   
       return (
       <BrowserRouter>
    <div className="div">
      <NavBar/>

      
      <Routes>
      <Route path='/' element= {<ItemListContainer text='Lista de productos'/>}/>
      <Route path='/categoria/:productoDetalle.id' element= {<ItemDetailContainer/>}/>
      <Route path='/iniciarSesion'></Route>
      </Routes>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;