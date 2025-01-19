'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { chartConfig, CustomTooltip } from '@/components/ui/chart';

const data = [
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

export function PlatformUsage() {
  return (
    <Card className="col-span-2 bg-gray-900">
      <CardHeader>
        <CardTitle className="text-gray-100">Uso por Plataforma</CardTitle>
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
          <div className="flex items-center justify-between rounded-md border border-gray-800 p-3">
            <div className="text-gray-100">Desktop</div>
            <div className="text-xl font-bold text-pink-500">23,717</div>
          </div>
          <div className="flex items-center justify-between rounded-md border border-gray-800 p-3">
            <div className="text-gray-100">Mobile</div>
            <div className="text-xl font-bold text-blue-500">25,910</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
