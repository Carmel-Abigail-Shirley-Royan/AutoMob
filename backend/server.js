import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookingRoutes from "./routes/booking.js"; // Ensure .js extension is included if using ES Modules

dotenv.config(); // Load environment variables from .env

const app = express();

// ✅ Middleware
app.use(cors({
  origin: [
    "http://localhost:3000",              // Local React dev
    "https://auto-mob.netlify.app/" // ✅ Replace with your actual Netlify domain
  ],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// ✅ MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Atlas connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// ✅ Routes
app.use("/api/bookings", bookingRoutes);

// ✅ Server Startup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
