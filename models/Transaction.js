import db from '../config/db.js';

export default class Transaction {
  static async createTransaction(userId, amount, type, status) {
    await db.query('INSERT INTO transactions (user_id, amount, type, status) VALUES (?, ?, ?, ?)', [
      userId,
      amount,
      type,
      status,
    ]);
  }

  static async getUserTransactions(userId) {
    const [rows] = await db.query('SELECT * FROM transactions WHERE user_id = ?', [userId]);
    return rows;
  }
}
