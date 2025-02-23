import React, { useState, useEffect } from "react";
import './RoomDetails.css'

import { useParams, useNavigate } from "react-router-dom";
const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5001/api/v1";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    if (!id) {
      console.error("Room ID is missing from the URL");
      setError("Invalid room ID");
      setLoading(false);
      return;
    }
  
    const url = `${API_BASE}/rooms/${id}`;
    console.log("Fetching room details from:", url);
  
    
    fetch(url)
      .then(async (res) => {
        console.log("Status:", res.status);
        
        const text = await res.text();
        console.log("Response:", text);
        
        if (res.status === 404) {
          setError("Room not found.");
          setLoading(false);
          return null;
        }
  
        if (!res.ok) {
          throw new Error(`Status: ${res.status}`);
        }
  
        const data = JSON.parse(text);
        if (data && data.data && data.data.room) {
          setRoom(data.data.room);
        } else {
          throw new Error("Invalid response format");
        }
      })
      .catch((error) => {
        console.error("Error fetching room:", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [id]);
  
  

  if (loading) return <p>Loading room details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!room) return <p>Room not found.</p>;

  return (
    <div className="room">
      <h2 className="room-details">Room Details</h2>
      <div className="card">
        <p className="capacity">Capacity: {room.capacity}</p>
        <p className="wifi">Wifi: {room.wifi ? "Yes" : "No"}</p>
        <p className="parking">Parking: {room.parking ? "Yes" : "No"}</p>
      </div>
      <button className="reserve-button" onClick={() => navigate(`/reservation/${room._id}`)}>
        Reserve
      </button>
    </div>
  );
};

export default RoomDetails;
