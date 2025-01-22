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
  email: string;
  password: string;
  name: string; // Agregamos el nombre
}

let users: User[] = [];

// Registrar usuario
export const registerUser = (req: Request, res: Response): void => {
  const { email, password, name } = req.body;

  console.log('Attempting to register user:', { email, name });

  // Verificar que los datos necesarios están presentes
  if (!email || !password || !name) {
    console.log('Registration failed: Missing required fields');
    res.status(400).json({ message: 'All fields are required' });
    return;
  }

  // Verificar si el usuario ya existe
  if (users.some((user) => user.email === email)) {
    console.log('Registration failed: Username already exists');
    res.status(400).json({ message: 'Username already exists' });
    return;
  }

  // Agregar nuevo usuario
  users.push({ email, password, name });
  console.log('User registered successfully:', { email, name });
  res.status(201).json({ message: 'User registered successfully' });
};

// Iniciar sesión y emitir token
export const loginUser = (req: Request, res: Response): void => {
  const { email, password } = req.body;

  console.log('Attempting login:', { email });

  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!user) {
    console.log('Login failed: Invalid credentials');
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  // Generar token JWT
  const token = jwt.sign(
    { email, name: user.name }, // Agregamos el nombre al token
    SECRET_KEY,
    { expiresIn: '1h' },
  );

  console.log('Login successful:', { email, token });
  res.status(200).json({ message: 'Login successful', token });
};
