import React from 'react';
import './App.css';
import Header from "./components/header";
import Home from "./Home";
import Footer from "./components/footer";
// import Cart from "./components/Cart";
// import {CartProvider} from "react-use-cart";

function App() {
  return (
    
    <div className="container">
      <Header />
      <Home />
      {/* <CartProvider>
        <Cart />
      </CartProvider> */}
      <Footer />
    </div>
  );
}



export default App;

