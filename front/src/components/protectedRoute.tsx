'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/auth-context';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/login'); // Redirige al login si el usuario no está autenticado
    }
  }, [user, router]);

  // Renderiza el contenido solo si el usuario está autenticado
  return user ? <>{children}</> : null;
}
