import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import AWS from 'aws-sdk';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

// routers
import reviewsRouter from './routes/reviewsRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

// public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.static(path.resolve(__dirname, './public')));
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/v1/test', (req, res) => {
    res.json({ msg: 'test route' });
});

app.use('/api/v1/reviews', authenticateUser, reviewsRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public'));
});

app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server running on PORT ${port}...`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}