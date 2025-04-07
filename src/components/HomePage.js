import React from 'react';
import { Link } from "react-router-dom";
import Car from './folder/images/car.png';
import Home from './folder/assets/home.jpg';
import Home1 from './folder/assets/home1.jpg';
import Home2 from './folder/assets/home2.jpg';
import Home3 from './folder/assets/home3.png';
import '../styles.css';
import '../css/home.css';

const HomePage = () => {
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


            <main className="main-content">
                <section className="about-us">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Home} className="d-block w-100" alt="Car Service 1" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 style={{ textTransform: 'uppercase', color: 'white', fontWeight: 'bold' }}>Looking for car service?</h3>
                                    <p>Get a free quote and let the professionals do all the work</p>
                                    <button className="explore-btn">
                                        <Link to="/services" className="explore-btn">Explore More</Link>

                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={Home1} className="d-block w-100" alt="Car Service 2" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 style={{ textTransform: 'uppercase', color: 'white', fontWeight: 'bold' }}>Looking for car service?</h3>
                                    <p>Get a free quote and let the professionals do all the work</p>
                                    <button className="explore-btn">
                                        <Link to="/services" className="explore-btn">Explore More</Link>                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={Home2} className="d-block w-100" alt="Car Service 3" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 style={{ textTransform: 'uppercase', color: 'white', fontWeight: 'bold' }}>Looking for car service?</h3>
                                    <p>Get a free quote and let the professionals do all the work</p>
                                    <button className="explore-btn">
                                        <Link to="/services" className="explore-btn">Explore More</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>

                <section>
                    <p style={{ width: '50%', textAlign: 'center', margin: '0 auto', marginTop: '5%' }}>
                        At AutoMob-Mechanic, we aim to make the car repair and service experience straightforward by providing services for repairing, servicing, and maintaining - lending our expertise in all forms.
                    </p>

                    <div className="homepage">
                        <div>
                            <img src={Home3} height="400px" width="500px" style={{ marginRight: '70px' }} alt="Car Service" />
                        </div>
                        <div className='content' style={{ width: '40%', marginTop: '20px' }}>
                            <p>Enjoy convenient car repair and maintenance at your home or office. It's as easy as 1-2-3.</p>
                            <ul>
                                <li><span className="circle">1</span> Choose a service</li>
                                <p>Choose the perfect service for your car.</p>
                                <li><span className="circle">2</span> Book an appointment</li>
                                <p>Book your appointment with us on your convenient date.</p>
                                <li><span className="circle">3</span> Get your car fixed</li>
                                <p>No more waiting needed, our representative will take care of everything on their own</p>
                            </ul>
                            <button className="explore-btn" >
                                <Link to="/booking" className="explore-btn">Book Service</Link>
                            </button>
                            {/* <button className="explore-btn" style={{paddingLeft: "20px"}}>
                                <Link to="/services" className="explore-btn">View Service</Link>
                            </button> */}
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

export default HomePage;
