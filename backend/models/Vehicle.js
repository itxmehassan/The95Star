const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // e.g., 'Sedan', 'SUV', 'Limo', 'Van'
  capacity: {
    passengers: { type: Number, required: true },
    luggage: { type: Number, required: true }
  },
  pricePerHour: { type: Number },
  pricePerDay: { type: Number },
  features: [{ type: String }],
  imageUrl: { type: String, required: true },
  description: { type: String }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
