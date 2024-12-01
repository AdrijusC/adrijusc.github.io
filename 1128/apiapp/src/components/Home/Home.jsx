import React from "react";
import Header from "../Header/Header";
import "./Home.css";

const Home = () =>{
  return (
    <div className="home">
      <Header />
      <main>
        <h2>Welcome to my app!</h2>
        <p>Search for different dog breeds</p>
      </main>
    </div>
  );
}

export default Home;