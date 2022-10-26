import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="leftside">
        <div className="logo">Mobiplace</div>
      </div>
      <div className="rightside">
        <Link to="/">Home🏠</Link>
        <Link to="/products">Products📱</Link>
        <Link to="/contact">Contact📝</Link>
      </div>
    </div>
  );
}

export default NavBar;
