'use client';

import React, { JSX } from 'react';
import colors from 'tailwindcss/colors';
import { cn } from '@/lib/utils';

const chartColors = {
  primary: colors.blue[500],
  secondary: colors.pink[500],
  tertiary: colors.green[500],
  quaternary: colors.purple[500],
  background: colors.gray[900],
  text: colors.gray[100],
  grid: colors.gray[800],
};

export const chartConfig = {
  style: {
    background: chartColors.background,
    color: chartColors.text,
  },
  theme: {
    axis: {
      domain: {
        line: {
          stroke: chartColors.grid,
        },
      },
      ticks: {
        line: {
          stroke: chartColors.grid,
          strokeWidth: 1,
        },
        text: {
          fill: chartColors.text,
          fontSize: 12,
        },
      },
    },
    grid: {
      line: {
        stroke: chartColors.grid,
        strokeWidth: 1,
      },
    },
  },
};

interface ChartContainerProps {
  children: React.ReactNode;
  className?: string;
  config?: Record<
    string,
    {
      label: string;
      color: string;
    }
  >;
}

export const ChartContainer = ({
  children,
  className,
}: ChartContainerProps) => {
  return <div className={cn('relative w-full', className)}>{children}</div>;
};

interface ChartPayload {
  color: string;
  name: string;
  value: number | string;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: ChartPayload[];
  label?: string;
  content?: JSX.Element;
}

export const ChartTooltip = ({
  active,
  payload,
  label,
  content,
}: ChartTooltipProps) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return content ? (
    content
  ) : (
    <div className="rounded-lg border border-gray-800 bg-gray-900 p-2 shadow-lg">
      <p className="text-sm text-gray-200">{label}</p>
      {payload.map((entry, index) => (
        <p
          key={index}
          className="text-sm font-semibold"
          style={{ color: entry.color }}
        >
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  );
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    color: string;
    name: string;
    value: number | string;
  }[];
  label?: string | number;
}

interface CustomizedDotProps {
  cx?: number; // Coordenada X del punto
  cy?: number; // Coordenada Y del punto
  value?: number | string; // Valor del dato
}

export const CustomizedDot = ({ cx, cy }: CustomizedDotProps) => (
  <circle
    cx={cx}
    cy={cy}
    r={4}
    fill="hsl(var(--chart-primary))" // Color principal (personalizable)
    stroke="hsl(var(--chart-background))" // Color del borde (personalizable)
    strokeWidth={2}
  />
);

export const CustomTooltip = ({
  active,
  payload,
  label,
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-2 shadow-lg">
        <p className="text-sm text-gray-200">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p
            key={index}
            className="text-sm font-semibold"
            style={{ color: entry.color }}
          >
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

interface ChartTooltipContentProps {
  payload?: ChartPayload[];
}

export const ChartTooltipContent = ({ payload }: ChartTooltipContentProps) => {
  if (!payload || !payload.length) {
    return null;
  }

  return (
    <div className="p-2 bg-white shadow-md border rounded-md">
      {payload.map((entry, index) => (
        <div key={index} className="text-sm">
          <span
            style={{
              color: entry.color,
              marginRight: 4,
            }}
          >
            ●
          </span>
          {entry.name}: {entry.value}
        </div>
      ))}
    </div>
  );
};
