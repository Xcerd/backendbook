import db from '../config/db.js';

export const getUsers = async (req, res) => {
  try {
    const [users] = await db.query('SELECT id, name, email FROM users');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Database error' });
  }
};
