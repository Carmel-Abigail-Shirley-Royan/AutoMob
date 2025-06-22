import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking saved successfully" });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
