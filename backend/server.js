require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/auth');
app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);

// Mock Database Connection (Will connect to real DB if URI provided)
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/luxury-chauffeur';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    // Start server anyway for frontend to get mock data during dev without DB
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} (without DB connection)`);
    });
  });
