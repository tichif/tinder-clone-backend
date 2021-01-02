import express from 'express';
import dotEnv from 'dotenv';
import Cors from 'cors';

dotEnv.config();

import connectDB from './utils/db.js';
import cardsRoute from './routes/cards.js';

const app = express();

connectDB();

app.use(express.json());
app.use(Cors());

app.use('/api/cards', cardsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
