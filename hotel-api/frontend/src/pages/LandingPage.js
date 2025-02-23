import { useState, useEffect } from "react";
import RoomCard from "../components/RoomCard";
import './LandingPage.css'


const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5001/api/v1";
const LandingPage = () => {
  const [rooms, setRooms] = useState([]);
  const [filters, setFilters] = useState({ checkin: "", checkout: "" });

  useEffect(() => {
    let url = `${API_BASE}/rooms`;
    if (filters.checkin && filters.checkout) {
      url += `?checkin=${filters.checkin}&checkout=${filters.checkout}`;
    }
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.data && Array.isArray(data.data.rooms)) {
          setRooms(data.data.rooms);
        } else {
          console.error("Unexpected response format:", data);
        }
      })
      .catch((error) => console.error("Error fetching rooms:", error));
  }, [filters]);

  return (
    <div className="main-div">
      <h2 className="main-header">Book a room in our wonderful hotel</h2>
      <div className="search-div">
        <input
          type="date"
          className="first-input"
          value={filters.checkin}
          onChange={(e) => setFilters({ ...filters, checkin: e.target.value })}
        />
        <h2 className="check-availability">Check availability</h2>
        <input
          type="date"
          className="second-input"
          value={filters.checkout}
          onChange={(e) => setFilters({ ...filters, checkout: e.target.value })}
        />
        {filters.checkin || filters.checkout ? (
          <button className="clear" onClick={() => setFilters({ checkin: "", checkout: "" })}>
            Clear
          </button>
        ) : null}
      </div>
      <div className="room-div">
        {rooms.length ? rooms.map((room) => <RoomCard key={room.id} room={room} />) : <p>No rooms are matching the current filter criteria.</p>}
      </div>
    </div>
  );
};
export default LandingPage;