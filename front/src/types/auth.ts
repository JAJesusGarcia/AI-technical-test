export type User = {
  id: string;
  name: string;
  email: string;
  role: 'pathologist';
};

export type AuthStatus = {
  isAuthenticated: boolean;
  user: User | null;
};
