'use client';

import React, { createContext, useState, useEffect } from 'react';

interface UserSession {
  token: string;
  email: string;
}

interface DecodedToken {
  exp: number;
  email?: string;
  roles?: string[];
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

function decodeJWT<T>(token: string): T | null {
  try {
    const payload = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payload)) as T;
    return decodedPayload;
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userState, setUserState] = useState<UserSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const setUser = (newUser: UserSession | null) => {
    if (newUser?.token) {
      const decodedToken = decodeJWT<DecodedToken>(newUser.token);

      if (!decodedToken || decodedToken.exp * 1000 < Date.now()) {
        console.warn('Token has expired');
        logout();
        return;
      }
    }

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
    window.dispatchEvent(
      new CustomEvent('authChange', { detail: { loggedOut: true } }),
    );
  };

  useEffect(() => {
    const fetchUser = () => {
      try {
        const localUser = localStorage.getItem('user');
        if (localUser) {
          const parsedUser = JSON.parse(localUser) as UserSession;
          const decodedToken = decodeJWT<DecodedToken>(parsedUser.token);

          if (!decodedToken || decodedToken.exp * 1000 < Date.now()) {
            console.warn('Token has expired');
            logout();
            return;
          }

          setUserState(parsedUser);
        }
      } catch (error) {
        console.error('Error fetching user from localStorage:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();

    const handleStorageChange = () => {
      const localUser = localStorage.getItem('user');
      setUserState(localUser ? JSON.parse(localUser) : null);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <AuthContext.Provider value={{ user: userState, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
