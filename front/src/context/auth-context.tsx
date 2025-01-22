'use client';

import { createContext, useContext, useState, useEffect } from 'react';
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

  useEffect(() => {
    // Check localStorage for user data on mount
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setAuth({
          isAuthenticated: true,
          user,
        });
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = (user: User) => {
    setAuth({
      isAuthenticated: true,
      user,
    });
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
    });
    localStorage.removeItem('user');
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
