import dotenv from 'dotenv';

dotenv.config();

export const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error('SECRET_KEY is not defined in the environment variables');
}
