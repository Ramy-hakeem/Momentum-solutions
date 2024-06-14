import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductProvider } from './Context/ProductContext'
import { CartProvider } from './Context/CartContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

