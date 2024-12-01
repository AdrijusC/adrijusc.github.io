import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () =>{
  return (
    <header className="header">
      <h1>Dog Breed Finder</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </nav>
    </header>
  );
}

export default Header;