import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage'; // Import the Home component
import Booking from './components/Booking';
import ServicesPage from "./components/ServicesPage";
import PreventiveMaintenance from "./components/PreventiveMaintenance";
import CarCareService from "./components/CarCareService";
import BodyRepairService from "./components/BodyRepairService";
import BookingSuccess from './components/BookingSuccess';
import Appointment from "./components/Appointment";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route (Home) */}
        <Route path="/" element={<HomePage />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/preventive-maintenance-service" element={<PreventiveMaintenance />} />
        <Route path="/body-repair-service" element={<CarCareService />} />
        <Route path="/car-care-service" element={<BodyRepairService />} />

        <Route path="/booking" element={<Booking />} />
        <Route path="/appointment" element={<Appointment />} />

        <Route path="/success" element={<BookingSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
