import React from 'react';
import { Link } from 'react-router-dom';
import Car from './folder/images/car.png';
import Prebg from './folder/images/preventive-maintenance-bg.png';
import Carebg from './folder/images/car-care-bg.png';
import Bodybg from './folder/images/body-repair-bg.png';
import '../styles.css';
import '../css/services.css';

const ServicesPage = () => {
    return (
        <div>
            {/* Header Section */}
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

            {/* Main Content */}
            <main className="main-content">
                <section className="about-us">
                    <u style={{ color: 'rgb(30, 30, 97)', textUnderlineOffset: '7px' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '3%' }}>
                            <span style={{ color: 'black' }}>Our</span>
                            <span style={{ color: 'rgb(232, 96, 118)' }}>Services</span>
                        </h3>
                    </u>
                    <div className="about-text">
                        <p>Our representatives are professionally trained and skilled with the latest and futuristic techniques to provide the best quality service.</p>
                        <p>At AutoMob-Mechanic, we provide high-class service to customers for their happy and memorable driving experience.</p>
                    </div>
                    <div className="img-row">
                        {/* Preventive Maintenance Service */}
                        <div>
                            <div className="card">
                                <Link to="/preventive-maintenance-service" style={{ textDecoration: "none", color: "black" }} className='link'>
                                    <div className='servicecard'>
                                        <img src={Prebg} alt="Maintenance" className="about-image" style={{ height: 'auto', width: '270px', marginTop: '20px' }} />
                                    </div>
                                    <div className='card2'>
                                    <h4>Preventive Maintenance</h4>
                                    <p>Periodically check and keep your car running</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* Body Repair Service */}
                        <div>
                            <div className="card">
                                <Link to="/body-repair-service" style={{ textDecoration: "none", color: "black" }} className='link'>
                                    <div className='servicecard'>
                                        <img src={Bodybg} alt="Repair" className="about-image" style={{ height: 'auto', width: '250px', marginTop: '20px' }} />
                                    </div>
                                    <div className='card2'>
                                        <h4>Body Repair Service</h4>
                                        <p>Full chassis body repair provided by the experts</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* Car Care Service */}
                        <div>
                            <div className="card">
                                <Link to="/car-care-service" style={{ textDecoration: "none", color: "black" }} className='link'>
                                    <div className='servicecard'>
                                        <img src={Carebg} alt="Car Care" className="about-image" style={{ marginTop: '20px' }} />
                                    </div>
                                    <div className='card2'>
                                    <h4>Car Care Service</h4>
                                    <p>Get your car sparkling clean in just minutes</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>Copyright &copy; 2020 AutoMob-Mechanic. All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default ServicesPage;
