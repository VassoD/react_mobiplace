import React from "react";
import "./App.css";
// import Header from "./components/header";
import Home from "./Home";
import Footer from "./components/footer";
// import Cart from "./components/Cart";
// import {CartProvider} from "react-use-cart";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/products";
import Contact from "./components/contact";
// import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    // <div className="container">
    /* <Header /> */
    /* <CartProvider>
        <Cart />
      </CartProvider> */

    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/Contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
