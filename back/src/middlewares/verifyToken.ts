import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Carga las variables de entorno
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error('SECRET_KEY is not defined in environment variables');
}

// Extender la interfaz de Request para incluir el campo `user`
declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
    }
  }
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.headers.authorization?.split(' ')[1]; // Obtener token del encabezado

  if (!token) {
    res.status(401).json({ message: 'Access denied. No token provided.' });
    return;
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, SECRET_KEY);

    // Adjuntar los datos decodificados al objeto `req`
    req.user = decoded;

    next(); // Continuar con la siguiente función middleware o controlador
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};
