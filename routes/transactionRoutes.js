import express from 'express';
import { createTransaction, getUserTransactions } from '../controllers/transactionController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a new transaction
router.post('/', authMiddleware, createTransaction);

// Get all transactions for the authenticated user
router.get('/', authMiddleware, getUserTransactions);

export default router;
