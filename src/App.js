import React from 'react';

import './App.css';
import Products from './components/Products';
import  { CartProvider, CartContext }from './contexts/Cart';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Products />
      </div>
    </CartProvider>
    
  );
}

export default App;
