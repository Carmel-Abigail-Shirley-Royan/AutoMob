const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  carMake: { type: String, required: true },
  fuel: { type: String, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);
