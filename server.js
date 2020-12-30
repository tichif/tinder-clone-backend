import express from 'express';
import dotEnv from 'dotenv';

dotEnv.config();

import connectDB from './utils/db.js';
import cardsRoute from './routes/cards.js';

const app = express();

connectDB();

app.use('/api/cards', cardsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
