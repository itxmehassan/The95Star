const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  pickupLocation: { type: String, required: true },
  dropoffLocation: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
  vehicleType: { type: String }, // Optional if vehicleId isn't provided directly
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  specialRequests: { type: String },
  status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
