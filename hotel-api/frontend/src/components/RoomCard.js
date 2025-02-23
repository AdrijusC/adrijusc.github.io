import { Link } from "react-router-dom";
import './RoomCard.css'

const RoomCard = ({ room }) => {
  if (!room) {
    return <p>No room details available</p>;
  }

  console.log("Navigating to room:", room._id);

  return (
    <div className="room-card">
      <h3 className="room-heading">Room {room.number}</h3>
      <p>Capacity: {room.capacity}</p>
      <p>WiFi: {room.wifi ? "Yes" : "No"}</p>
      <Link to={`/room/${room._id}`} className="info-button">
        More Info
      </Link>
    </div>
  );
};

export default RoomCard;