import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
const Header = ({ setShow, size }) => {
  return (
    <div>
    <nav>
      <div className="container">
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
        <button type="button" id="btnback"className="btn btn-success">Shop</button>
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i> 
          </span>
          <span>{size}</span>
        </div>
 
    <Link className="nav-link active" to="/profile"><button type="button" class="btn btn-success">My Profile</button></Link>
    

      </div>
      </div>
    </nav>
    
    </div>
    
  );
};

export default Header;
