import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Componentes/Navbar';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import InicioSesion from './Componentes/InicioSesion';
import ItemListContainer from './Componentes/ItemListContainer';
import Cart from './Componentes/Cart';
import CartProvider from './Componentes/Contexts/CartContext';
import ERROR404 from './Componentes/ERROR404';


const App=()=> {
   
       return (
       <BrowserRouter>
       <CartProvider>
    <div className="div">
      <NavBar/>

      
      <Routes>
        <Route path='/' element={<ItemListContainer text="Lista de Productos"/>}/>
      <Route path='/categoria/:categoriaId' element= {<ItemListContainer text1="Productos por Categoria"/>}/>
      <Route path='/detalle/:detalleId' element= {<ItemDetailContainer/>}/>
      <Route path='/iniciarSesion' element={<InicioSesion/>}></Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path= '*' element={<ERROR404/>}/>
      </Routes>
      
    </div>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;