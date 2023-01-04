import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";
const Header = () => {
  return (
    <header className="shadow-xl">
      <div className="flex justify-between max-w-5xl mx-auto md:py-4 px-4 py-2  lg:px-0">
        <Link to="/products">
          <h1 className="font-Lato md:text-2xl text-xl">Tuyitech</h1>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="cart" className="w-8" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
