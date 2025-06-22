import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

// POST /api/bookings
router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(200).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Failed to save appointment' });
  }
});

export default router;
