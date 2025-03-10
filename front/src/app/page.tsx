'use client';

import {
  Brain,
  Search,
  LineChart,
  Activity,
  Trophy,
  Users,
  Clock,
  Shield,
  LucideIcon,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/sections/Hero';
import React, { useState, useEffect, useRef } from 'react';

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

interface StatProps {
  icon: React.ComponentType<{ size: number; className?: string }>;
  finalValue: number | string;
  label: string;
  duration?: number;
  isPercentage?: boolean;
}

const AnimatedStat: React.FC<StatProps> = ({
  icon: Icon,
  finalValue,
  label,
  duration = 2000,
  isPercentage = false,
}) => {
  const [value, setValue] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentStatRef = statRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (currentStatRef) {
      observer.observe(currentStatRef);
    }

    return () => {
      if (currentStatRef) {
        observer.unobserve(currentStatRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericFinalValue =
      typeof finalValue === 'string'
        ? parseFloat(finalValue.replace(/[^0-9.-]/g, ''))
        : finalValue;

    const startTime = Date.now();
    const updateValue = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      const currentValue = progress * numericFinalValue;

      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };

    requestAnimationFrame(updateValue);
  }, [finalValue, duration, isVisible]);

  const formatValue = () => {
    if (typeof finalValue === 'string' && finalValue.includes('<'))
      return finalValue;

    const displayValue = isPercentage
      ? value.toFixed(1) + '%'
      : value.toLocaleString().split('.')[0] + '+';

    return displayValue;
  };

  return (
    <div
      ref={statRef}
      className="flex flex-col items-center space-y-2 p-6 text-center"
    >
      <Icon size={32} className="text-primary" />
      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        {formatValue()}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />

      {/* How Our AI Works Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto">
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Nuestro Impacto en Números
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados que demuestran nuestro compromiso con la excelencia en
              el diagnóstico médico
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedStat
              icon={Users}
              finalValue={10000}
              label="Pacientes Atendidos"
            />
            <AnimatedStat
              icon={Trophy}
              finalValue={99.8}
              label="Precisión Diagnóstica"
              isPercentage={true}
            />
            <AnimatedStat
              icon={Clock}
              finalValue="<24h"
              label="Tiempo de Respuesta"
            />
            <AnimatedStat
              icon={Shield}
              finalValue={100}
              label="Datos Protegidos"
              isPercentage={true}
            />
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
            >
              Conoce Más Sobre Nuestros Resultados
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
