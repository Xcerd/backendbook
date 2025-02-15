import express from 'express';
import { createReferral, getUserReferrals } from '../controllers/referralController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createReferral);
router.get('/', authMiddleware, getUserReferrals);

export default router;
