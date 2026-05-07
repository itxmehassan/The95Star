const express = require('express');
const router = express.Router();

// Mock Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Admin mock logic
  if (email === 'admin@95star.com' && password === 'admin') {
    return res.json({
      message: 'Login successful',
      token: 'mock-jwt-token-admin-12345',
      user: {
        id: '1',
        name: 'Admin User',
        email: 'admin@95star.com',
        role: 'admin'
      }
    });
  }

  // Normal user mock logic (accept any other valid email/pass)
  return res.json({
    message: 'Login successful',
    token: 'mock-jwt-token-user-67890',
    user: {
      id: '2',
      name: 'Standard User',
      email: email,
      role: 'user'
    }
  });
});

// Mock Signup Route
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  // Simulate user creation
  return res.status(201).json({
    message: 'User registered successfully',
    token: 'mock-jwt-token-user-67890',
    user: {
      id: 'new-user-id-' + Date.now(),
      name,
      email,
      role: 'user'
    }
  });
});

module.exports = router;
