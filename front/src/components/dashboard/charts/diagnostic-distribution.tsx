'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomTooltip } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Mama - Positivo', value: 187 },
  { name: 'Mama - Negativo', value: 536 },
  { name: 'Próstata - Positivo', value: 142 },
  { name: 'Próstata - Negativo', value: 369 },
];

const COLORS = ['#ec4899', '#db2777', '#3b82f6', '#2563eb'];

export function DiagnosticDistribution() {
  return (
    <Card className="col-span-1 bg-gray-900">
      <CardHeader>
        <CardTitle className="text-gray-100">
          Distribución de Diagnósticos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-100">1,234</div>
              <div className="text-sm text-gray-400">Total Diagnósticos</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
