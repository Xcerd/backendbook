import express from 'express';
import db from '../config/db.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    const [users] = await db.query('SELECT id, name, email FROM users');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Database error' });
  }
});

export default router;
