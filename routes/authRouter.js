// Import all required modules
import {Router} from 'express';
import rateLimiter from 'express-rate-limit';
import {login, logout, register} from '../controllers/authController.js';
import {
    validateRegisterInput,
    validateLoginInput,
} from '../middleware/validationMiddleware.js';

// Define constants
const RATE_LIMIT_CONFIG = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20,
    message: {msg: 'IP rate limit exceeded, retry in 15 minutes.'},
};

// rateLimit middleware for limiting excessive API access
const rateLimiterMiddleware = rateLimiter(RATE_LIMIT_CONFIG);

// router instance
const router = Router();

// define routes
router.post('/register', validateRegisterInput, rateLimiterMiddleware, register);
router.post('/login', validateLoginInput, rateLimiterMiddleware, login);
router.get('/logout', logout);

// export router
export default router;
