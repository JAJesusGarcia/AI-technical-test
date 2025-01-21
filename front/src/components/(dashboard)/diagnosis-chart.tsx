'use client';

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const monthlyData = [
  { month: 'Ene', mamaCancer: 45, prostataCancer: 35 },
  { month: 'Feb', mamaCancer: 52, prostataCancer: 38 },
  { month: 'Mar', mamaCancer: 48, prostataCancer: 42 },
  { month: 'Abr', mamaCancer: 55, prostataCancer: 40 },
  { month: 'May', mamaCancer: 60, prostataCancer: 45 },
  { month: 'Jun', mamaCancer: 58, prostataCancer: 48 },
];

const accuracyData = [
  { month: 'Ene', precision: 92 },
  { month: 'Feb', precision: 93 },
  { month: 'Mar', precision: 94 },
  { month: 'Abr', precision: 95 },
  { month: 'May', precision: 96 },
  { month: 'Jun', precision: 97 },
];

export function DiagnosisChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Diagnósticos Mensuales</CardTitle>
        <CardDescription>
          Número de diagnósticos realizados por tipo de cáncer
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            mamaCancer: {
              label: 'Cáncer de Mama',
              color: 'hsl(var(--chart-1))',
            },
            prostataCancer: {
              label: 'Cáncer de Próstata',
              color: 'hsl(var(--chart-2))',
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="mamaCancer"
                fill="var(--color-mamaCancer)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="prostataCancer"
                fill="var(--color-prostataCancer)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function AccuracyChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Precisión del Diagnóstico</CardTitle>
        <CardDescription>
          Precisión promedio de los diagnósticos por IA
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            precision: {
              label: 'Precisión',
              color: 'hsl(var(--chart-3))',
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={accuracyData}>
              <XAxis dataKey="month" />
              <YAxis domain={[90, 100]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="precision"
                stroke="var(--color-precision)"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
