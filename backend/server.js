import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js';
import leaderboardRouter from './routes/leaderboardRoute.js';
import claimRouter from './routes/claimRoute.js';
import historyRouter from './routes/historyRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// API Endpoints
app.use('/api/users', userRouter)
app.use('/api/claim', claimRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/history', historyRouter);

app.get('/', (req,res) => {
    res.send("Hare Krishna! API Working");
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});