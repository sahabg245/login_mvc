// src/main/index.js
import express from 'express';
import { connectDB } from '../mongodb/mongodb_conn.js';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from '../routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = 8000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/user', userRoute);

// Database connection + Server start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
