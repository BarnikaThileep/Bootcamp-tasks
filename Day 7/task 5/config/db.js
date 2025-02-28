const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // No need for deprecated options
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit on connection failure
  }
};

module.exports = connectDB;
