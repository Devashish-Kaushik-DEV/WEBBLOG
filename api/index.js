import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import AuthRoute from './routes/Auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use('/api/auth', AuthRoute);

mongoose.connect(process.env.MONGODB_URI, {dbName:'WEBBLOG'})
  .then(() => console.log(`Database connected successfully.`))
  .catch((error) => console.error(`Database connection failed: ${error.message}`));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});