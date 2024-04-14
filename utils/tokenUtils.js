import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


export const createJWT = (payload) => {
  const secret = process.env.JWT_TOKEN;
  if (!secret) {
    throw new Error('JWT_TOKEN is not set in .env file');
  }
  const token = jwt.sign(payload, secret, { expiresIn: '100d' });
  return token;
};

export const verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

