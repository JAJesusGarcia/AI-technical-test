'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useToast } from '@/hooks/use-toast';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

// Schema de validación con Zod
const loginSchema = z.object({
  email: z
    .string()
    .email('Introduce un email válido.')
    .nonempty('El email es obligatorio.'),
  password: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres.')
    .nonempty('La contraseña es obligatoria.'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    // Simular inicio de sesión
    toast({
      title: 'Inicio de sesión exitoso',
      description: `Bienvenido, ${data.email}!`,
    });
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
      >
        <h1 className="mb-6 text-2xl font-bold text-center">Iniciar Sesión</h1>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <Input
            type="email"
            id="email"
            {...register('email')}
            placeholder="Ingresa tu email"
            className="w-full"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-medium">
            Contraseña
          </label>
          <Input
            type="password"
            id="password"
            {...register('password')}
            placeholder="Ingresa tu contraseña"
            className="w-full"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Iniciar Sesión
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
