import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import Car from './folder/images/car.png';
import Pre from './folder/images/preventive-maintenance-service.jpg';
import '../styles.css';
import '../css/main1.css';

const PreventiveMaintenance = () => {
  return (
    <div>
      <header className="header">
                <Link to="/" className="logo">
                    <img src={Car} height="40px" width="40px" alt="AutoMob Logo" /> AutoMob-Mechanic
                </Link>
                <br />
                <nav>
                    <ul className="nav-list">
                        <li><Link to="/services" style={{textDecoration: 'none', textDecorationLine: 'none'}}>Services</Link></li>
                        <li><Link to="/booking" style={{textDecoration: 'none', textDecorationLine: 'none'}}>Booking</Link></li>
                        <li><Link to="mailto:contact@automob.co.in" style={{textDecoration: 'none', textDecorationLine: 'none'}}>contact@automob.co.in <span>&#x2709;</span></Link></li>
                        <li>999 999 9999 ☎</li>
                    </ul>
                </nav>
            </header>

      <main>
        <section>
          <div className="maintainance">
            <div>
              <img src={Pre} alt="Preventive Maintenance" className="about-image" />
            </div>
            <div className="about-text">
              <p>
                <Link to="/">Home</Link> /
                <Link to="/services">Services</Link> /
                Preventive Maintenance Service
              </p>
              <h3>Preventive Maintenance Service</h3>
              <i style={{ color: 'orange', marginBottom: '10px' }}>Save: 35%</i>
              <p>
                Looking to keep your car functioning smoothly? Save money and opt for
                AutoMob-Mechanic's periodic maintenance service. This service aims at:
              </p>
              <ul>
                <li>Air filter replacement</li>
                <li>Engine oil replacement</li>
                <li>Brake pad cleaning</li>
              </ul>
              <p><b>Offer Price:</b> <strike>₹15000</strike> <span style={{ color: 'orange' }}>₹9750</span></p>
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

export default PreventiveMaintenance;
