import './ReservationPage.css'
import { useNavigate } from 'react-router-dom';

const ReservationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="ReservationPage">
      <h2 className="details">Please enter your details</h2>
      <form className="form">
        <label>Name</label>
        <input type="text" className="input" required />
        <label>Address</label>
        <input type="text" className="input" required />
        <label>City</label>
        <input type="text" className="input" required />
        <label>ZIP Code</label>
        <input type="text" className="input" required />
        <label>Country</label>
        <input type="text" className="input" required />
        <label>From Date</label>
        <input type="date" className="input" required />
        <label>To Date</label>
        <input type="date" className="input" required />
        <button type="submit" className="submit">Reserve</button>
        <button type="button" className="button" onClick={() => navigate("/")}>Change Room</button>
      </form>
    </div>
  );
};
export default ReservationPage;