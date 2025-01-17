import { Request, Response } from 'express';

let users: { username: string; password: string }[] = [];

export const registerUser = (req: Request, res: Response): void => {
  const { username, password } = req.body;
  if (users.some((user) => user.username === username)) {
    res.status(400).json({ message: 'Username already exists' });
    return;
  }
  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully' });
};

export const loginUser = (req: Request, res: Response): void => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password,
  );
  if (!user) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }
  res.status(200).json({ message: 'Login successful', token: 'mock-token' });
};
