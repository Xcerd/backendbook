import Referral from '../models/Referral.js';

export const createReferral = async (req, res) => {
  try {
    const { referrerId, referredId } = req.body;
    await Referral.createReferral(referrerId, referredId);
    res.status(201).json({ message: 'Referral added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating referral' });
  }
};

export const getUserReferrals = async (req, res) => {
  try {
    const referrals = await Referral.getReferralsByUser(req.user.id);
    res.json(referrals);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching referrals' });
  }
};
