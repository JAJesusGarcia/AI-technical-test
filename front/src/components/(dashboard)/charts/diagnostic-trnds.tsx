'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  chartConfig,
  CustomTooltip,
  CustomizedDot,
} from '@/components/ui/chart';

const data = [
  { date: 'Abr 5', mama: 45, prostata: 35 },
  { date: 'Abr 11', mama: 52, prostata: 38 },
  { date: 'Abr 17', mama: 48, prostata: 42 },
  { date: 'Abr 23', mama: 55, prostata: 40 },
  { date: 'Abr 29', mama: 60, prostata: 45 },
  { date: 'May 5', mama: 58, prostata: 48 },
  { date: 'May 11', mama: 62, prostata: 50 },
  { date: 'May 17', mama: 65, prostata: 52 },
  { date: 'May 23', mama: 63, prostata: 55 },
  { date: 'May 29', mama: 68, prostata: 57 },
  { date: 'Jun 4', mama: 70, prostata: 58 },
  { date: 'Jun 10', mama: 72, prostata: 60 },
];

export function DiagnosticTrends() {
  return (
    <Card className="col-span-2 bg-gray-900">
      <CardHeader>
        <CardTitle className="text-gray-100">
          Tendencias de Diagnósticos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={chartConfig.theme.grid.line.stroke}
              />
              <XAxis
                dataKey="date"
                stroke={chartConfig.theme.axis.domain.line.stroke}
                tick={{ fill: chartConfig.theme.axis.ticks.text.fill }}
              />
              <YAxis
                stroke={chartConfig.theme.axis.domain.line.stroke}
                tick={{ fill: chartConfig.theme.axis.ticks.text.fill }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="mama"
                stroke="#ec4899"
                name="Cáncer de Mama"
                dot={<CustomizedDot />}
              />
              <Line
                type="monotone"
                dataKey="prostata"
                stroke="#3b82f6"
                name="Cáncer de Próstata"
                dot={<CustomizedDot />}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
