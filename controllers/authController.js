import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/db.js';

export const register = async (req, res) => {
  const { name, email, password, referralCode } = req.body;

  try {
    // Require referral code for registration
    if (!referralCode) {
      return res.status(400).json({ message: 'A referral code is required.' });
    }

    // Validate the referral code (get referrer's ID)
    const [referrers] = await db.query('SELECT id FROM users WHERE referral_code = ?', [referralCode]);
    if (referrers.length === 0) {
      return res.status(400).json({ message: 'Invalid referral code.' });
    }
    const referrerId = referrers[0].id; 

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a new unique referral code
    const newReferralCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    // Insert new user with referral tracking
    await db.query(
      'INSERT INTO users (name, email, password, referral_code, referred_by) VALUES (?, ?, ?, ?, ?)',
      [name, email, hashedPassword, newReferralCode, referrerId]
    );

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
};
