import './assets/App.css'
import React from 'react';
import ClientsHome from "./components/clients/ClientsHome";
import Menus from './components/clients/Menus';
import Cart from './components/clients/Cart';
import ProductDetails from './components/clients/ProductDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shopp, ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/' element={<ClientsHome />} />
            <Route path='/menus' element={<Menus />} />
            <Route path='/menus/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;