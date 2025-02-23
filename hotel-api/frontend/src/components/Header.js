import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => (
  <div className="hotel-app-div">
    <div className="left-side">
      <h2>Hotel app</h2>
    </div>
    <Link to="/" className="web-dev-div">WEB &lt;dev/&gt; Hotel Reservation</Link>
    <div className="right-side">
      <a href="/reservations" className="reservations">Already reserved?</a>
      <Link to="/" className="reservation-list-button">Reservation list</Link>
    </div>

  </div>
);

export default Header;
