import React from 'react';
import '../styles.css';
import '../css/main3.css';
import { Link } from 'react-router-dom';
import Car from './folder/images/car.png';
import Img1 from './folder/images/body-repair-service.jpg';

const BodyRepairService = () => {
  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">
          <img src={Car} height="40px" width="40px" alt="AutoMob Logo" /> AutoMob-Mechanic
        </Link>
        <br />
        <nav>
          <ul className="nav-list">
            <li><Link to="/services" style={{ textDecoration: 'none', textDecorationLine: 'none' }}>Services</Link></li>
            <li><Link to="/booking" style={{ textDecoration: 'none', textDecorationLine: 'none' }}>Booking</Link></li>
            <li><Link to="mailto:contact@automob.co.in" style={{ textDecoration: 'none', textDecorationLine: 'none' }}>contact@automob.co.in <span>&#x2709;</span></Link></li>
            <li>999 999 9999 ☎</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <div className="maintainance">
            <div>
              <img src={Img1} alt="Body Repair Service" className="about-image" />
            </div>
            <div className="about-text">
              <p>
                <a href="/">Home</a> /
                <a href="/services">Services</a> /
                Body Repair Service
              </p>
              <h3>Body Repair Service</h3>
              <i style={{ color: 'orange', marginBottom: '10px' }}>Save: 35%</i>
              <p>Paint scratches and dents degrade the appearance of your car? Opt for AutoMob-Mechanic's body repair service.</p>
              <ul>
                <li>Car dent repair</li>
                <li>Car painting</li>
                <li>Complete car body repair service</li>
              </ul>
              <p>
                <b>Offer Price:</b> <strike>₹15000</strike> <span style={{ color: 'orange' }}>₹9750</span>
              </p>
              <button className="explore-btn">
                <Link to="/booking">Book Service</Link>
              </button>
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

export default BodyRepairService;
