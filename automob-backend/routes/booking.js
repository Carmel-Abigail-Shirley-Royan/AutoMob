const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create Booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).send({ message: 'Booking created successfully!', booking });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Get Bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.send(bookings);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
