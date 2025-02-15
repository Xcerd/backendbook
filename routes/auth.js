import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/db.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
  res.json({ message: 'User registered' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  if (users.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

  const isValid = await bcrypt.compare(password, users[0].password);
  if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: users[0].id }, 'secretkey', { expiresIn: '1h' });
  res.json({ token });
});

export default router;
