import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

//Middleware
app.use(express.json());

//localhost:3001/api/users
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({message: 'Internal Server Error'});
});

export default app;