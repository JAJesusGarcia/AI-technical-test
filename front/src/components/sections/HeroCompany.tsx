import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function HeroCompany() {
  return (
    <div className="relative py-24 w-full px-4 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 w-96 bg-primary/5 blur-3xl -left-48 transform rotate-12" />
        <div className="absolute inset-y-0 w-96 bg-primary/5 blur-3xl -right-48 transform -rotate-12" />
      </div>

      <div className="relative text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
          Revolucionando la Detección{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-pink-200">
            del Cancer
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100">
          Combinamos la experiencia médica con inteligencia artificial avanzada
          para mejorar la precisión y velocidad en el diagnóstico del cáncer.
        </p>
        <div className="flex justify-center gap-4 pt-8">
          <Button size="lg" className="gap-2">
            <a href="/tecnologias">Conoce Nuestra Tecnología</a>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            <a href="/soporte">Contactar</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
