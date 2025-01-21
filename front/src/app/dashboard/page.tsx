'use client';

import React from 'react';
import { AnimatedStat } from '@/components/dashboard/animated-stat';
import { PlatformUsage } from '@/components/dashboard/charts/platform-usage';
import { DiagnosticDistribution } from '@/components/dashboard/charts/diagnostic-distribution';
import { DiagnosticTrends } from '@/components/dashboard/charts/diagnostic-trnds';
import { Activity, Brain, Clock, Users, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface StatData {
  title: string;
  value: number;
  unit?: string;
  icon: React.ReactNode;
  trend: {
    value: number;
    isPositive: boolean;
  };
  description: string;
}

const stats: StatData[] = [
  {
    title: 'Diagnósticos Totales',
    value: 1234,
    icon: <Activity className="h-4 w-4 text-muted-foreground" />,
    trend: { value: 12, isPositive: true },
    description: '245 esta semana',
  },
  {
    title: 'Precisión de IA',
    value: 97.5,
    unit: '%',
    icon: <Brain className="h-4 w-4 text-muted-foreground" />,
    trend: { value: 2.5, isPositive: true },
    description: 'Promedio últimos 30 días',
  },
  {
    title: 'Pacientes Atendidos',
    value: 856,
    icon: <Users className="h-4 w-4 text-muted-foreground" />,
    trend: { value: 8, isPositive: true },
    description: '156 pacientes nuevos',
  },
  {
    title: 'Tiempo Promedio',
    value: 24,
    unit: 'min',
    icon: <Clock className="h-4 w-4 text-muted-foreground" />,
    trend: { value: 15, isPositive: false },
    description: 'Por diagnóstico',
  },
];

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard
          </h2>
          <p className="text-muted-foreground mt-1">
            Análisis en tiempo real del rendimiento del sistema
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="hidden md:flex">
            Últimos 30 días
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button className="hidden md:flex">Descargar Reporte</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
          >
            <AnimatedStat
              {...stat}
              className="p-6 bg-gradient-to-br from-white to-gray-50"
            />
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 lg:col-span-2 p-6 hover:shadow-lg transition-shadow duration-200">
          <h3 className="font-semibold mb-4">Tendencia de Diagnósticos</h3>
          <DiagnosticTrends />
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
          <h3 className="font-semibold mb-4">Distribución de Diagnósticos</h3>
          <DiagnosticDistribution />
        </Card>

        <Card className="col-span-1 lg:col-span-3 p-6 hover:shadow-lg transition-shadow duration-200">
          <h3 className="font-semibold mb-4">Uso de la Plataforma</h3>
          <PlatformUsage />
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Card className="p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100/50">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-blue-500/10">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">Nuevo Análisis</h3>
              <p className="text-sm text-muted-foreground">
                Iniciar diagnóstico con IA
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100/50">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-purple-500/10">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold">Gestionar Pacientes</h3>
              <p className="text-sm text-muted-foreground">
                Ver historial y registros
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-pink-50 to-pink-100/50">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-pink-500/10">
              <Activity className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h3 className="font-semibold">Ver Estadísticas</h3>
              <p className="text-sm text-muted-foreground">
                Análisis detallado
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
