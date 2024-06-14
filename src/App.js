import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Products from './Pages/Products'
import Error404 from './Pages/Error404'
import Container from './Components/Container'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <div >
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:category_id" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App