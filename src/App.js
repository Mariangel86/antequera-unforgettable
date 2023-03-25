import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Componentes/Navbar';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import InicioSesion from './Componentes/InicioSesion';
import ItemListContainer from './Componentes/ItemListContainer';
import Cart from './Componentes/Cart';
import CartProvider from './Componentes/Contexts/CartContext';


const App=()=> {
   
       return (
       <BrowserRouter>
       <CartProvider>
    <div className="div">
      <NavBar/>

      
      <Routes>
        <Route path='/' element={<ItemListContainer text="Lista de Productos"/>}/>
      <Route path='/categoria/:id' element= {<ItemListContainer text1="Productos por Categoria"/>}/>
      <Route path='/:detalleId' element= {<ItemDetailContainer/>}/>
      <Route path='/iniciarSesion' element={<InicioSesion/>}></Route>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
    </div>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;