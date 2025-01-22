'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AreaChart,
  Area,
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
  desktop: number;
  mobile: number;
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

const data: DataPoint[] = [
  { date: 'Abr 5', desktop: 2341, mobile: 2841 },
  { date: 'Abr 11', desktop: 2583, mobile: 2941 },
  { date: 'Abr 17', desktop: 2483, mobile: 2842 },
  { date: 'Abr 23', desktop: 2553, mobile: 2940 },
  { date: 'Abr 29', desktop: 2604, mobile: 2945 },
  { date: 'May 5', desktop: 2583, mobile: 2948 },
  { date: 'May 11', desktop: 2623, mobile: 2950 },
  { date: 'May 17', desktop: 2645, mobile: 2952 },
  { date: 'May 23', desktop: 2633, mobile: 2955 },
  { date: 'May 29', desktop: 2683, mobile: 2957 },
  { date: 'Jun 4', desktop: 2703, mobile: 2958 },
  { date: 'Jun 10', desktop: 2723, mobile: 2960 },
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

const PlatformUsage: React.FC = () => {
  const totalDesktop = data.reduce((sum, item) => sum + item.desktop, 0);
  const totalMobile = data.reduce((sum, item) => sum + item.mobile, 0);

  return (
    <Card className="col-span-2 bg-white">
      <CardHeader>
        <CardTitle className="text-gray-900">Uso por Plataforma</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
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
              <Area
                type="monotone"
                dataKey="desktop"
                stroke="#ec4899"
                fillOpacity={1}
                fill="url(#colorDesktop)"
                name="Desktop"
              />
              <Area
                type="monotone"
                dataKey="mobile"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorMobile)"
                name="Mobile"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center justify-between rounded-md border border-gray-200 bg-white p-3">
            <div className="text-gray-600">Desktop</div>
            <div className="text-xl font-bold text-pink-500">
              {totalDesktop.toLocaleString()}
            </div>
          </div>
          <div className="flex items-center justify-between rounded-md border border-gray-200 bg-white p-3">
            <div className="text-gray-600">Mobile</div>
            <div className="text-xl font-bold text-blue-500">
              {totalMobile.toLocaleString()}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformUsage;
