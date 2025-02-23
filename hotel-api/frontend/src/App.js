import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import RoomDetails from "./pages/RoomDetails";
import ReservationPage from "./pages/ReservationPage";
import ReservationListPage from "./pages/ReservationListPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/reservation/:roomId" element={<ReservationPage />} />
          <Route path="/reservations" element={<ReservationListPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;