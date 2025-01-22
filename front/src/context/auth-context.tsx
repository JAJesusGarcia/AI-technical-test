'use client';

import React, { createContext, useState, useEffect } from 'react';

interface UserSession {
  token: string;
  email: string;
  // Agrega más propiedades según tu backend
}

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  user: UserSession | null;
  setUser: (user: UserSession | null) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userState, setUserState] = useState<UserSession | null>(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      return storedUser ? (JSON.parse(storedUser) as UserSession) : null;
    }
    return null;
  });

  const setUser = (newUser: UserSession | null) => {
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser));
    } else {
      localStorage.removeItem('user');
    }
    setUserState(newUser);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUserState(null);

    // Notificar otros componentes que dependan del estado del usuario
    window.dispatchEvent(new Event('userLogout'));
  };

  useEffect(() => {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: userState, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
