import express from 'express';
import { createReferral, getUserReferrals } from '../controllers/referralController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a referral
router.post('/', authMiddleware, createReferral);

// Get all referrals for the authenticated user
router.get('/', authMiddleware, getUserReferrals);

export default router;
