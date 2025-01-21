import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Search, LineChart, Activity, LucideIcon } from 'lucide-react';

const NeuralNetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-300/30 via-transparent to-transparent animate-pulse" />
    </div>
  );
};

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ProcessStep = ({ icon: Icon, title, description }: ProcessStepProps) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Card className="relative p-6 bg-white/90 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col items-center space-y-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-center">{description}</p>
        </div>
      </Card>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <NeuralNetworkBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
                Detección temprana de{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-pink-200">
                  cáncer con IA
                </span>
              </h1>
              <p className="text-xl text-gray-100">
                Nuestra tecnología permite que la detección de cáncer sea más
                rápida y precisa. El futuro de la patología es ahora.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-200"
                  >
                    Comenzar ahora
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white/10"
                  >
                    Saber más
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
              <Image
                src="/images/home.webp"
                alt="AI Medical Technology"
                fill
                className="object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Our AI Works Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Cómo Funciona Nuestra IA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso innovador que combina tecnología de punta con precisión
              médica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              icon={Search}
              title="Análisis de Imagen"
              description="Procesamiento avanzado de imágenes médicas con alta resolución"
            />
            <ProcessStep
              icon={Brain}
              title="IA Processing"
              description="Redes neuronales profundas analizan patrones y anomalías"
            />
            <ProcessStep
              icon={Activity}
              title="Detección"
              description="Identificación precisa de áreas de interés y posibles anomalías"
            />
            <ProcessStep
              icon={LineChart}
              title="Resultados"
              description="Informes detallados con visualizaciones claras y recomendaciones"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
