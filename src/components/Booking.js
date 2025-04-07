import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Car from './folder/images/car.png';
import '../styles.css';

import '../css/booking.css';
import Book from './folder/assets/booking.jpg';

import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
    carMake: "",
    fuel: "",
    countryCode: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "bookings"), formData);
      console.log("Document written with ID: ", docRef.id);
      alert("Booking successful!");
      
      // Navigate to the appointment page after successful submission
      navigate("/appointment");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error booking service. Please try again.");
    }
  };

  return (
    <>
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
              <span style={{ color: "black" }}>Book</span>{" "}
              <span style={{ color: "rgb(232, 96, 118)" }}>Your</span>{" "}
              <span style={{ color: "black" }}>Service</span>
            </h4>
          </div>
          <div className="formpage">
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                </div>
                <div>
                  <label htmlFor="email">E-mail:</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your mail" required />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <div className="grp-form">
                    <select id="countryCode" name="countryCode" value={formData.countryCode} onChange={handleChange} required>
                      <option value="" disabled selected>Code</option>
                      <option value="+91">+91 (India)</option>
                      <option value="+1">+1 (USA)</option>
                      <option value="+44">+44 (UK)</option>
                    </select>
                    <input type="number" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter your mobile number" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="service">Choose a Service:</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                    <option value="" disabled selected>Select an option</option>
                    <option value="repair">Car Repair</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="washing">Car Washing</option>
                    <option value="painting">Car Painting</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="carMake">Car Make (Required):</label>
                  <input list="car-makes" id="carMake" name="carMake" value={formData.carMake} onChange={handleChange} placeholder="Select or type a car make" required />
                  <datalist id="car-makes">
                    <option value="Mahindra" />
                    <option value="Honda" />
                    <option value="Hyundai" />
                    <option value="Ford" />
                  </datalist>
                </div>
                <div>
                  <label>Fuel Type:</label>
                  <div className="grp-form small">
                    <input type="radio" id="petrol" name="fuel" value="Petrol" onChange={handleChange} required />
                    <label htmlFor="petrol">Petrol</label>
                    <input type="radio" id="diesel" name="fuel" value="Diesel" onChange={handleChange} required />
                    <label htmlFor="diesel">Diesel</label>
                  </div>
                </div>
                <button type="submit" className="explore-btn" style={{ maxWidth: "200px" }}>Submit</button>
              </form>
            </div>
            <div>
              <img src={Book} alt="booking" width="400px" />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>Copyright &copy; 2020 AutoMob-Mechanic. All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Booking;
