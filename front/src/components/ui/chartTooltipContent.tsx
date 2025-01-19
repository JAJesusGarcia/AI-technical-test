import React from 'react';

interface ChartPayload {
  color: string;
  name: string;
  value: number | string;
}

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
