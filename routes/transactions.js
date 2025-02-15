import express from 'express';
import { createTransaction, getUserTransactions } from '../controllers/transactionController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createTransaction);
router.get('/', authMiddleware, getUserTransactions);

export default router;
