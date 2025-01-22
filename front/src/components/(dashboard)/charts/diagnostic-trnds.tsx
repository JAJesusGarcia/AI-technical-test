'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

// Interfaces
interface DataPoint {
  date: string;
  mama: number;
  prostata: number;
}

interface ChartConfig {
  grid: {
    stroke: string;
  };
  axis: {
    stroke: string;
    text: string;
  };
}

interface CustomDotProps {
  cx: number;
  cy: number;
  stroke: string;
}

const data: DataPoint[] = [
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

const chartConfig: ChartConfig = {
  grid: {
    stroke: '#e2e8f0',
  },
  axis: {
    stroke: '#64748b',
    text: '#334155',
  },
};

// Tipo para los datos del tooltip
// type TooltipPayload = {
//   value: number;
//   name: string;
//   color: string;
// };

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
        <p className="text-gray-600 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value?.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CustomizedDot: React.FC<CustomDotProps> = ({ cx, cy, stroke }) => {
  return (
    <circle cx={cx} cy={cy} r={4} stroke={stroke} strokeWidth={2} fill="#fff" />
  );
};

const DiagnosticTrends: React.FC = () => {
  return (
    <Card className="col-span-2 bg-white">
      <CardHeader>
        <CardTitle className="text-gray-900">
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
                stroke={chartConfig.grid.stroke}
              />
              <XAxis
                dataKey="date"
                stroke={chartConfig.axis.stroke}
                tick={{ fill: chartConfig.axis.text }}
              />
              <YAxis
                stroke={chartConfig.axis.stroke}
                tick={{ fill: chartConfig.axis.text }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="mama"
                stroke="#ec4899"
                name="Cáncer de Mama"
                dot={<CustomizedDot cx={0} cy={0} stroke={''} />}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="prostata"
                stroke="#3b82f6"
                name="Cáncer de Próstata"
                dot={<CustomizedDot cx={0} cy={0} stroke={''} />}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiagnosticTrends;
