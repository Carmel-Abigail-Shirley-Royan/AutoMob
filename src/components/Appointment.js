import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Axios for backend calls
import '../styles.css';
import Car from './folder/images/car.png';
import '../css/booking.css';
import Appoint from './folder/assets/schedule_appointment.jpg';

const Appointment = () => {
  const [formData, setFormData] = useState({
    appointmentDate: '',
    address: '',
    city: '',
    state: '',
    notification: { email: false, sms: false },
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        notification: { ...prevData.notification, [name]: checked },
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const isFutureDate = (date) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const selected = new Date(date).setHours(0, 0, 0, 0);
    return selected >= today;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFutureDate(formData.appointmentDate)) {
      alert("Please choose a future date for your appointment.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/appointments', formData);
      if (response.status === 200) {
        alert("Appointment booked successfully!");
        navigate('/success');
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Error booking appointment. Please try again.");
    }
  };

  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">
          <img src={Car} height="40px" width="40px" alt="AutoMob Logo" /> AutoMob-Mechanic
        </Link>
        <br />
        <nav>
          <ul className="nav-list">
            <li><Link to="/services" style={{ textDecoration: 'none' }}>Services</Link></li>
            <li><Link to="/booking" style={{ textDecoration: 'none' }}>Booking</Link></li>
            <li><Link to="mailto:contact@automob.co.in" style={{ textDecoration: 'none' }}>contact@automob.co.in <span>&#x2709;</span></Link></li>
            <li>999 999 9999 ☎</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="book">
          <div>
            <h4 style={{ fontSize: "2rem" }}>
              <span style={{ color: "black" }}>Schedule</span>{" "}
              <span style={{ color: "rgb(232, 96, 118)" }}>Your</span>{" "}
              <span style={{ color: "black" }}>Day</span>
            </h4>
          </div>
          <div className="formpage">
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="appointmentDate">Appointment Date:</label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address">Address:</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address here..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city">City:</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Mumbai, Pune..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state">State:</label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a state</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Goa">Goa</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    {/* Add more states if needed */}
                  </select>
                </div>
                <div>
                  <label>Send Notification:</label>
                  <div className="grp-form small">
                    <input
                      type="checkbox"
                      id="email"
                      name="email"
                      checked={formData.notification.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      type="checkbox"
                      id="sms"
                      name="sms"
                      checked={formData.notification.sms}
                      onChange={handleChange}
                    />
                    <label htmlFor="sms">SMS</label>
                  </div>
                </div>
                <button type="submit" className="explore-btn" style={{ maxWidth: "200px" }}>
                  Book
                </button>
              </form>
            </div>
            <div>
              <img src={Appoint} alt="appointment" width="400px" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Copyright &copy; 2020 AutoMob-Mechanic. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Appointment;
