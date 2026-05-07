const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Vehicle = require('../models/Vehicle');

// Mock data for fleet if DB is empty
const mockFleet = [
  {
    _id: "1",
    name: "Mercedes-Benz S-Class",
    type: "Sedan",
    capacity: { passengers: 3, luggage: 2 },
    pricePerHour: 120,
    features: ["Leather Seats", "Free Wi-Fi", "Bottled Water"],
    imageUrl: "/images/s-class.jpg",
    description: "The ultimate luxury sedan for executive travel."
  },
  {
    _id: "2",
    name: "Cadillac Escalade",
    type: "SUV",
    capacity: { passengers: 6, luggage: 6 },
    pricePerHour: 150,
    features: ["Extra Legroom", "Tinted Windows", "Climate Control"],
    imageUrl: "/images/escalade.jpg",
    description: "Spacious and imposing luxury SUV for groups."
  },
  {
    _id: "3",
    name: "Lincoln Stretch Limo",
    type: "Limo",
    capacity: { passengers: 8, luggage: 4 },
    pricePerHour: 200,
    features: ["Mini Bar", "Mood Lighting", "Privacy Partition"],
    imageUrl: "/images/limo.jpg",
    description: "Classic stretch limousine for special events."
  }
];

// --- FLEET ROUTES ---
router.get('/fleet', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    if (vehicles.length === 0) {
      return res.json(mockFleet); // Return mock data if DB is empty
    }
    res.json(vehicles);
  } catch (err) {
    // Fallback to mock data if DB isn't connected
    res.json(mockFleet);
  }
});

// --- BOOKING ROUTES ---
router.post('/bookings', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    // Don't save to DB if connection fails, just mock success
    if (mongoose.connection.readyState === 1) {
      const savedBooking = await newBooking.save();
      res.status(201).json(savedBooking);
    } else {
      res.status(201).json({ ...req.body, _id: "mock-id-" + Date.now(), status: 'pending' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// --- CONTACT ROUTES ---
router.post('/contact', (req, res) => {
  res.status(200).json({ message: "Contact request received successfully." });
});

module.exports = router;
