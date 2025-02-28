const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/students', require('./routes/studentRoutes'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
