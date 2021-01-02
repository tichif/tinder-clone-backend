import express from 'express';

import { addCard, getCards } from '../controllers/cards.js';

const router = express.Router();

router.get('/', getCards);

router.post('/', addCard);

export default router;
