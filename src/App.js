import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { CartProvider } from "./utils/cartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
