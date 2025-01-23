'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Mail, Lock, User } from 'lucide-react';

import { useToast } from '../ui/use-toast';
import { registerSchema, type RegisterInput } from '@/lib/validations/auth';
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
import { TestimonialsCarousel } from '../testimonials-carrusel';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(data: RegisterInput) {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/auth/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al registrar');
      }

      toast({
        title: '¡Registro exitoso!',
        description: 'Tu cuenta ha sido creada correctamente.',
      });

      router.push('/login');
    } catch (error) {
      console.error('Error al registrar:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description:
          'Hubo un error al crear tu cuenta. Por favor, intenta nuevamente.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container relative min-h-screen bg-muted/5">
      <div className="grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-400 to-pink-300" />
          <div className="relative h-full flex items-center justify-center">
            <div className="w-full max-w-xl p-3">
              <TestimonialsCarousel />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-8 py-16 md:px-16 lg:px-24">
          <div className="mx-auto w-full max-w-md space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight">
                Crear una cuenta
              </h1>
              <p className="text-muted-foreground">
                Ingresa tus datos para registrarte
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          <Input
                            placeholder="Dr. Juan Pérez"
                            className="pl-10"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          <Input
                            placeholder="doctor@hospital.com"
                            className="pl-10"
                            {...field}
                          />
                        </div>
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
                        <div className="relative">
                          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          <Input type="password" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmar Contraseña</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          <Input type="password" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full transition-all hover:scale-[1.02]"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Registrarse
                </Button>
              </form>
            </Form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  O continúa con
                </span>
              </div>
            </div>

            <div className="grid gap-4">
              <Button
                variant="outline"
                className="transition-all hover:scale-[1.02]"
              >
                Registrarse con Google
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              ¿Ya tienes una cuenta?{' '}
              <Link
                href="/login"
                className="font-medium text-primary underline-offset-4 transition-colors hover:underline"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
