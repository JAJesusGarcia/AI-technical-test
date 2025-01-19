import { AnimatedStat } from '@/components/dashboard/animated-stat';
import { PlatformUsage } from '@/components/dashboard/charts/platform-usage';
import { DiagnosticDistribution } from '@/components/dashboard/charts/diagnostic-distribution';
import { DiagnosticTrends } from '@/components/dashboard/charts/diagnostic-trnds';
import { Activity, Brain, Clock, Users } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      {/* Estadísticas Animadas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AnimatedStat
          title="Diagnósticos Totales"
          value={1234}
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 12, isPositive: true }}
          description="245 esta semana"
        />
        <AnimatedStat
          title="Precisión de IA"
          value={97.5}
          unit="%"
          icon={<Brain className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 2.5, isPositive: true }}
          description="Promedio últimos 30 días"
        />
        <AnimatedStat
          title="Pacientes Atendidos"
          value={856}
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 8, isPositive: true }}
          description="156 pacientes nuevos"
        />
        <AnimatedStat
          title="Tiempo Promedio"
          value={24}
          unit="min"
          icon={<Clock className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 15, isPositive: false }}
          description="Por diagnóstico"
        />
      </div>

      {/* Gráficos */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        <DiagnosticTrends />
        <DiagnosticDistribution />
        <PlatformUsage />
      </div>
    </div>
  );
}
