import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import servicesRoutes from './routes/services.js';
import bookingRoutes from './routes/bookings.js';

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Compass connection string (Local MongoDB)
const MONGO_URI = 'mongodb://127.0.0.1:27017/automob'; // Replace 'automob' with your DB name if needed

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/services', servicesRoutes);
app.use('/api/bookings', bookingRoutes);

// Connect to MongoDB Compass
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB Compass');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => {
  console.error('❌ Failed to connect to MongoDB Compass:', err);
});
