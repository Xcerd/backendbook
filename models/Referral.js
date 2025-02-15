import db from '../config/db.js';

export default class Referral {
  static async createReferral(referrerId, referredId) {
    await db.query('INSERT INTO referrals (referrer_id, referred_id) VALUES (?, ?)', [referrerId, referredId]);
  }

  static async getReferralsByUser(userId) {
    const [rows] = await db.query('SELECT * FROM referrals WHERE referrer_id = ?', [userId]);
    return rows;
  }
}
