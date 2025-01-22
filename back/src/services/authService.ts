import { Request, Response } from 'express';

let users: { email: string; password: string }[] = [];

export const registerUser = (req: Request, res: Response): void => {
  const { email, password } = req.body;
  console.log(`Intento de registro: ${email}`);
  if (users.some((user) => user.email === email)) {
    console.log(`Registro fallido: Usuario ${email} ya existe.`);
    res.status(400).json({ message: 'Username already exists' });
    return;
  }
  users.push({ email, password });
  console.log(`Usuario registrado: ${email}`);
  res.status(201).json({ message: 'User registered successfully' });
};

export const loginUser = (req: Request, res: Response): void => {
  const { email, password } = req.body;
  console.log(`Intento de login: ${email}`);
  const user = users.find(
    (user) => user.email === email && user.password === password,
  );
  if (!user) {
    console.log(`Login fallido: Credenciales inválidas para ${email}.`);

    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }
  console.log(`Login exitoso: ${email}`);
  res.status(200).json({ message: 'Login successful', token: 'mock-token' });
};
