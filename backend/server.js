const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const gamificationRoutes = require('./routes/gamification.routes');
// Import database connections
const { testConnection } = require('../database/postgres');
const { connectDB } = require('./config/database');

require('dotenv').config();

// Connect to MongoDB
// Temporarily commented out while checking authentication
// connectDB();

// Connect to PostgreSQL
testConnection();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5001;

// Admin routes
const adminRoutes = require('./routes/admin.routes');

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/gamification', gamificationRoutes);


// Admin routes
app.use('/api/admin', adminRoutes);

// Create folder structure
// These will be created manually in steps below
// - /routes
// - /controllers
// - /models
// - /middleware
// - /config
// - /services

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'BoysToLeaders API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});