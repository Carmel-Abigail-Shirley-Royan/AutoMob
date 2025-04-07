import React from "react";
import TQ from './folder/images/thank-you.jpg';
import '../styles.css';
import Car from './folder/images/car.png';
import { Link } from "react-router-dom";

const BookingSuccess = () => {
  return (
    <>
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
      <main className="main-content">
        <section className="about-us">
          <div className="content-wrapper">
            <div>
              <img src={TQ} alt="thank-you" className="about-image" />
              <h3>Thanks for booking our service &#128077;</h3>
            </div>
            <div className="about-text">
              <p>We will get back to you soon with the details via email/phone</p>
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

export default BookingSuccess;
