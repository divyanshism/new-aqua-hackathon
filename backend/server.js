const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load env variables
dotenv.config();

// Import MongoDB connection
const connectDB = require('./config/db');

// Import routes
const authRoutes = require('./routes/authRoutes');

// Create app
const app = express();


const hackathonRoutes = require('./routes/hackathonRoutes');
app.use('/api/hackathons', hackathonRoutes);

const participationRoutes = require('./routes/participationRoutes');
app.use('/api/participation', participationRoutes);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Start server after DB connection
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
