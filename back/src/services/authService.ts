import { Request, Response } from 'express';

export const loginUser = (req: Request, res: Response): void => {
  const { email, password } = req.body;

  console.log(`Intento de login: ${email}`);

  // Buscar el usuario por email y contraseña
  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!user) {
    console.log(`Login fallido: Credenciales inválidas para ${email}.`);
    res.status(401).json({ message: 'Credenciales inválidas' });
    return;
  }

  console.log(`Login exitoso: ${email}`);
  res.status(200).json({
    message: 'Inicio de sesión exitoso',
    token: 'mock-token', // Puedes reemplazar esto con un JWT si lo deseas
  });
};

interface User {
  name: string;
  email: string;
  password: string;
}

let users: User[] = [];

export const registerUser = (req: Request, res: Response): void => {
  const { name, email, password } = req.body;

  // Validación de campos vacíos
  if (!name || !email || !password) {
    res.status(400).json({ message: 'Todos los campos son obligatorios' });
    return;
  }

  // Verificar si el email ya está registrado
  if (users.some((user) => user.email === email)) {
    res
      .status(400)
      .json({ message: 'El correo electrónico ya está registrado' });
    return;
  }

  // Registrar al usuario
  users.push({ name, email, password });
  console.log(`Usuario registrado: ${email}`);
  res.status(201).json({ message: 'Registro exitoso' });
};
