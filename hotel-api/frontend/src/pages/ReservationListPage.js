import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReservationListPage.css";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5001/api/v1";

const ReservationList = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!name || !code) {
      setError("All fields are required.");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, code }),
      });

      const data = await response.json();

      if (!response.ok || !data.reservations || data.reservations.length === 0) {
        setError("Could not find reservations.");
        setReservations([]);
      } else {
        setReservations(data.reservations);
      }
    } catch (err) {
      setError("Error occurred while fetching reservations.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this reservation?");
    if (!confirmCancel) return;

    try {
      const response = await fetch(`${API_BASE}/reservations/${id}/cancel`, {
        method: "POST",
      });

      if (response.ok) {
        setReservations(reservations.filter((res) => res.id !== id));
        if (reservations.length === 1) {
          navigate("/");
        }
      } else {
        setError("Failed to cancel the reservation.");
      }
    } catch (err) {
      setError("An error occurred while canceling the reservation.");
    }
  };

  return (
    <div className="reservation-list-container">
      {reservations.length === 0 ? (
        <>
          <h2 className="page-title">Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit} className="reservation-form form-stacked">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input full-width" required />
            <label>Code</label>
            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} className="input full-width" required />
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Searching..." : "Login"}
            </button>
          </form>
        </>
      ) : (
        <>
          <h2 className="Login">Login</h2>
          <div className="reservation-details">
            <h3>Your Details</h3>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Reserved On:</strong> {new Date().toLocaleDateString()}</p>
          </div>
          {reservations.map((res) => (
            <div key={res.id} className="reservation-item">
              <p><strong>Code:</strong> {res.code}</p>
              <p><strong>Room Number:</strong> {res.reservation_information.room.number}</p>
              <p><strong>Check-in:</strong> {new Date(res.reservation_information.checkin).toLocaleDateString()}</p>
              <p><strong>Check-out:</strong> {new Date(res.reservation_information.checkout).toLocaleDateString()}</p>
              <button onClick={() => handleCancel(res.id)} className="cancel-button">
                Cancel Reservation
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ReservationList;