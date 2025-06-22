import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  appointmentDate: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  notification: {
    email: {
      type: Boolean,
      default: false
    },
    sms: {
      type: Boolean,
      default: false
    }
  },
}, { timestamps: true });

const Booking = mongoose.model('Booking', BookingSchema);
export default Booking;
