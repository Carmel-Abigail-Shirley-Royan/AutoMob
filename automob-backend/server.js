const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/automob", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Define schemas and models
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  service: String,
  carMake: String,
  fuel: String,
});

const appointmentSchema = new mongoose.Schema({
  appointmentDate: String,
  address: String,
  city: String,
  state: String,
  notification: { email: Boolean, sms: Boolean },
});

const Booking = mongoose.model("Booking", bookingSchema);
const Appointment = mongoose.model("Appointment", appointmentSchema);

// Routes
app.post("/api/bookings", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).send({ message: "Booking saved successfully!" });
  } catch (error) {
    res.status(500).send({ message: "Error saving booking", error });
  }
});

app.post("/api/appointments", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).send({ message: "Appointment saved successfully!" });
  } catch (error) {
    res.status(500).send({ message: "Error saving appointment", error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
