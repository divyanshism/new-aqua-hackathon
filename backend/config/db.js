const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Read MONGO_URI from your .env
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error('MONGO_URI is not defined in .env');
    }

    await mongoose.connect(uri);

    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // stop the server
  }
};

module.exports = connectDB;
