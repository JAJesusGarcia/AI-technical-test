'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from 'recharts';

// Interfaces
interface DataPoint {
  name: string;
  value: number;
}

// Tipo para los datos del tooltip
type TooltipPayload = {
  name: string;
  value: number;
  payload: DataPoint;
  color: string;
};

const data: DataPoint[] = [
  { name: 'Mama - Positivo', value: 187 },
  { name: 'Mama - Negativo', value: 536 },
  { name: 'Próstata - Positivo', value: 142 },
  { name: 'Próstata - Negativo', value: 369 },
];

const COLORS: string[] = ['#ec4899', '#db2777', '#3b82f6', '#2563eb'];

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    const data = payload[0] as unknown as TooltipPayload;
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
        <p className="text-gray-600">{data.name}</p>
        <p className="text-sm font-semibold" style={{ color: data.color }}>
          {data.value.toLocaleString()} casos
        </p>
      </div>
    );
  }
  return null;
};

const DiagnosticDistribution: React.FC = () => {
  const totalDiagnostics = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="col-span-1 bg-white">
      <CardHeader>
        <CardTitle className="text-gray-900">
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
              <div className="text-3xl font-bold text-gray-900">
                {totalDiagnostics.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600">Total Diagnósticos</div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <div className="flex flex-col">
                <span className="text-sm text-gray-600">{item.name}</span>
                <span className="text-sm font-semibold text-gray-900">
                  {item.value.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DiagnosticDistribution;
