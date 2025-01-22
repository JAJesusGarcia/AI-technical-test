import { Request, Response } from 'express';

let users: { username: string; password: string }[] = [];

export const registerUser = (req: Request, res: Response): void => {
  const { username, password } = req.body;
  console.log(`Intento de registro: ${username}`);
  if (users.some((user) => user.username === username)) {
    console.log(`Registro fallido: Usuario ${username} ya existe.`);
    res.status(400).json({ message: 'Username already exists' });
    return;
  }
  users.push({ username, password });
  console.log(`Usuario registrado: ${username}`);
  res.status(201).json({ message: 'User registered successfully' });
};

export const loginUser = (req: Request, res: Response): void => {
  const { username, password } = req.body;
  console.log(`Intento de login: ${username}`);
  const user = users.find(
    (user) => user.username === username && user.password === password,
  );
  if (!user) {
    console.log(`Login fallido: Credenciales inválidas para ${username}.`);

    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }
  console.log(`Login exitoso: ${username}`);
  res.status(200).json({ message: 'Login successful', token: 'mock-token' });
};
