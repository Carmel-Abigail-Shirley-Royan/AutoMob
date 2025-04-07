import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import Car from './folder/images/car.png';
import CarCare from './folder/images/car-care-service.jpg';
import '../styles.css';
import '../css/main2.css';

const CarCareService = () => {
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
              <img src={CarCare} alt="Car Care Service" className="about-image" />
            </div>
            <div className="about-text">
              <p>
                <Link to="/">Home</Link> /
                <Link to="/services">Services</Link> /
                Car Care Service
              </p>
              <h3>Car Care Service</h3>
              <i style={{ color: 'rgb(178, 53, 34)', marginBottom: '10px' }}>Save: 20%</i>
              <p>
                Looking to keep your car clean and shiny? Save money and opt for
                AutoMob-Mechanic's car service. We offer an extensive range of car wash and cleaning services such as:
              </p>
              <ul>
                <li>Basic car washing and vacuuming</li>
                <li>Detailed interior and upholstery cleaning</li>
                <li>Protective coating</li>
                <li>Dashboard polishing</li>
              </ul>
              <p><b>Offer Price:</b> <strike>₹5000</strike> <span style={{ color: 'orange' }}>₹4000</span></p>
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

export default CarCareService;
