import {
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    throw new UnauthenticatedError('No authentication token provided');
  }

  try {
    const { userId, role } = verifyJWT(token);

    if (isTestUser(userId)) {
      req.user = { userId, role, testUser: true };
    } else {
      req.user = { userId, role, testUser: false };
    }

    next();
  } catch (error) {
    throw new UnauthenticatedError('Invalid authentication token');
  }
};

const isTestUser = (userId) => {
  // Replace with your own logic or list of test user IDs
  const testUserIds = process.env.TEST_USER_IDS?.split(',') || [];
  return testUserIds.includes(userId);
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('Unauthorized to access this route');
    }
    next();
  };
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError('Demo User. Read Only!');
  next();
};
