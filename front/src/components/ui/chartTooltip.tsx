import React from 'react';

interface ChartPayload {
  color: string;
  name: string;
  value: number | string;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: ChartPayload[];
  label?: string;
}

export const ChartTooltip = ({ active, payload, label }: ChartTooltipProps) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
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
