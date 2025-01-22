import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Clock,
  Globe2,
  Microscope,
  Brain,
  Target,
  Heart,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/80 to-muted/20">
      {/* Hero Section Mejorado */}
      <div className="relative py-24 container mx-auto px-4 inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90">
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
          <p className="text-xl md:text-2xl  text-gray-100">
            Combinamos la experiencia médica con inteligencia artificial
            avanzada para mejorar la precisión y velocidad en el diagnóstico del
            cáncer.
          </p>
          <div className="flex justify-center gap-4 pt-8">
            <Button size="lg" className="gap-2">
              Conoce Nuestra Tecnología
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Contactar
            </Button>
          </div>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-lg transition-shadow bg-background/60 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Nuestra Misión</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Democratizar el acceso a diagnósticos precisos de cáncer
                  mediante tecnología de vanguardia, permitiendo a los
                  profesionales de la salud tomar decisiones más informadas y
                  rápidas.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-8 hover:shadow-lg transition-shadow bg-background/60 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Nuestra Visión</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ser líderes globales en soluciones de IA para la detección
                  temprana del cáncer, contribuyendo a salvar vidas a través de
                  diagnósticos más precisos y accesibles.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Características Clave */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Precisión Avanzada',
              description:
                'Algoritmos de IA entrenados con millones de muestras histológicas para garantizar resultados precisos.',
              icon: <Microscope className="h-6 w-6" />,
            },
            {
              title: 'Rapidez',
              description:
                'Resultados en minutos, no días, permitiendo iniciar tratamientos más rápidamente.',
              icon: <Clock className="h-6 w-6" />,
            },
            {
              title: 'Tecnología Inteligente',
              description:
                'Interfaz intuitiva diseñada por y para profesionales médicos.',
              icon: <Brain className="h-6 w-6" />,
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 bg-background/60 backdrop-blur"
            >
              <CardContent className="space-y-4 p-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Historia de la Empresa */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Nuestra Historia
        </h2>
        <div className="space-y-24">
          {[
            {
              year: '2018',
              title: 'Los Inicios',
              description:
                'Fundada por un equipo de médicos y expertos en IA, nuestra empresa nació de la visión de revolucionar la detección del cáncer utilizando tecnología de vanguardia.',
            },
            {
              year: '2020',
              title: 'Primer Producto',
              description:
                'Lanzamos nuestra primera solución de IA para la detección de cáncer de mama, marcando un hito en la industria médica.',
            },
            {
              year: '2022',
              title: 'Expansión Global',
              description:
                'Expandimos nuestras operaciones a nivel internacional, llevando nuestra tecnología a hospitales y clínicas en todo el mundo.',
            },
          ].map((milestone, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-12`}
            >
              <div className="md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-primary">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl font-bold">{milestone.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/home2.webp"
                    alt={milestone.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Futuro */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Mirando al Futuro
          </h2>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-background border-none">
            <CardContent className="space-y-6 p-0">
              <div className="flex justify-center mb-8">
                <Globe2 className="h-12 w-12 text-primary" />
              </div>
              <p className="text-lg text-center leading-relaxed">
                Continuamos innovando y expandiendo nuestras soluciones de IA
                para abordar más tipos de cáncer y mejorar constantemente la
                precisión de nuestros diagnósticos. Nuestro objetivo es seguir
                siendo líderes en la intersección de la IA y la atención médica,
                contribuyendo a un futuro donde el diagnóstico temprano y
                preciso del cáncer sea accesible para todos.
              </p>
              <div className="flex justify-center pt-6">
                <Button className="gap-2">
                  Únete a Nuestro Futuro
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
