'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';

import { useAuth } from '@/context/auth-context';
import { loginSchema, type LoginInput } from '@/lib/validations/auth';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '../ui/use-toast';
import { TestimonialsCarousel } from '../testimonials-carrusel';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();
  const { toast } = useToast();

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: LoginInput) {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      login({
        id: '1',
        name: 'Dr. Patólogo',
        email: data.email,
        role: 'pathologist',
      });

      toast({
        title: '¡Bienvenido!',
        description: 'Has iniciado sesión correctamente.',
      });

      router.push('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description:
          'Hubo un error al iniciar sesión. Por favor, intenta nuevamente.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Carrusel con testimonios */}
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
        <div className="absolute inset-0 bg-primary opacity-90" />
        <div className="relative z-20">
          <h2 className="mb-6 text-lg font-medium text-white">Testimonios</h2>
          <TestimonialsCarousel />
        </div>
      </div>

      {/* Formulario de inicio de sesión */}
      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Bienvenido de nuevo</h1>
            <p className="text-sm text-muted-foreground">
              Ingresa tus credenciales para acceder a tu cuenta
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="doctor@hospital.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Iniciar sesión
              </Button>
            </form>
          </Form>
          <p className="text-center text-sm text-muted-foreground">
            ¿No tienes una cuenta?{' '}
            <Link
              href="/register"
              className="underline underline-offset-4 hover:text-primary"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
