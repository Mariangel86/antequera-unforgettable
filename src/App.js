import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import NavBar from './Componentes/Navbar';

const App=()=> {
   
       return (
       <BrowserRouter>
    <div className="div">
      <NavBar/>

      
      <Routes>
      <Route path='/' element= {<ItemListContainer text='Lista de productos'/>}/>
      <Route path='/categoria' element= {<ItemListContainer text='Lista de productos'/>}/>
      </Routes>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;