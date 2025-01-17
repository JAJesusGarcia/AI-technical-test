'use client';

import { createContext, useContext, useState } from 'react';
import type { AuthStatus, User } from '@/types/auth';

type AuthContextType = {
  auth: AuthStatus;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthStatus>({
    isAuthenticated: false,
    user: null,
  });

  const login = (user: User) => {
    setAuth({
      isAuthenticated: true,
      user,
    });
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
