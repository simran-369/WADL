import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';


const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET|| 'aeyan123';
console.log("hello",process.env.JWT_SECRET);


// 1. Register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashed });
    await user.save();
    res.status(201).json({ message: 'User registered!' });
  } catch (err) {
    res.status(400).json({ error: 'User already exists or data invalid' });
  }
});

// 2. Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ error: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, user: { username: user.username, email: user.email } });
});

// 3. Get Profile (Protected)
router.get('/profile', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    res.json(user);
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// 4. Update Profile (Protected)
router.put('/profile', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const updated = await User.findByIdAndUpdate(decoded.id, req.body, {
      new: true
    }).select('-password');
    res.json(updated);
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
});


// 5. Get All Users (Unprotected - use with caution)
router.get('/', async (req, res) => {
    try {
      const users = await User.find().select('-password');
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });
  

export default router;
