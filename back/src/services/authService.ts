import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error('SECRET_KEY is not defined in environment variables');
}

// Estructura de usuarios
interface User {
  username: string;
  password: string;
  name: string; // Agregamos el nombre
}

let users: User[] = [];

// Registrar usuario
export const registerUser = (req: Request, res: Response): void => {
  const { username, password, name } = req.body;

  // Verificar que los datos necesarios están presentes
  if (!username || !password || !name) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }

  // Verificar si el usuario ya existe
  if (users.some((user) => user.username === username)) {
    res.status(400).json({ message: 'Username already exists' });
    return;
  }

  // Agregar nuevo usuario
  users.push({ username, password, name });
  res.status(201).json({ message: 'User registered successfully' });
};

// Iniciar sesión y emitir token
export const loginUser = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (!user) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  // Generar token JWT
  const token = jwt.sign(
    { username, name: user.name }, // Agregamos el nombre al token
    SECRET_KEY,
    { expiresIn: '1h' },
  );

  res.status(200).json({ message: 'Login successful', token });
};
