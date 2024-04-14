// idRouter.js
import { Router } from 'express';
import {
    getReview,
    updateReview,
    deleteReview,
} from '../controllers/reviewController.js';
import {
    validateReviewInput,
    validateIdParam,
} from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

const idRouter = Router({ mergeParams: true });

idRouter
    .get('/', validateIdParam, getReview)
    .patch('/', checkForTestUser, validateReviewInput, validateIdParam, updateReview)
    .delete('/', checkForTestUser, validateIdParam, deleteReview);

export default idRouter;