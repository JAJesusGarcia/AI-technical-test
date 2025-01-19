import React from 'react';
import { cn } from '@/lib/utils';

interface ChartContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ChartContainer = ({
  children,
  className,
}: ChartContainerProps) => {
  return <div className={cn('relative w-full', className)}>{children}</div>;
};
