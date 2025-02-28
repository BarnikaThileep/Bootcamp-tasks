const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/students');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB connection
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/barnika')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));


// Routes
app.use('/students', studentRoutes);

// Start the server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
