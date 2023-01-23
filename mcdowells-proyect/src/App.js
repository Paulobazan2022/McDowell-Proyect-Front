import './assets/App.css'
import React from 'react';
import ClientsHome from "./components/clients/ClientsHome";
import Menus from './components/clients/Menus';
import Cart from './components/clients/Cart';
import ProductDetails from './components/clients/ProductDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ClientsHome/>}/>
      <Route path='/menus' element={<Menus/>}/>
      {/*
      En la ruta de los detalles del producto habría que meterle en la url el id dinámico y usar useParams después
      en el componente que le corresponde, ya que esta página se va a ver en función del id del producto al que demos
       */}
      <Route path='/details' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
