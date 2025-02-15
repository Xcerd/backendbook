import Transaction from '../models/Transaction.js';

export const createTransaction = async (req, res) => {
  try {
    const { amount, type, status } = req.body;
    await Transaction.createTransaction(req.user.id, amount, type, status);
    res.status(201).json({ message: 'Transaction created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating transaction' });
  }
};

export const getUserTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.getUserTransactions(req.user.id);
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching transactions' });
  }
};
