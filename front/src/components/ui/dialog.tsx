'use client';

import * as React from 'react';
import { cn } from '@/lib/utils'; // Puedes ajustar esta función si tienes una utilitaria para manejar clases CSS.

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function Dialog({
  open,
  onOpenChange,
  children,
  className,
}: DialogProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center transition-opacity',
        open ? 'opacity-100 visible' : 'opacity-0 invisible',
        className,
      )}
      role="dialog"
      aria-hidden={!open}
    >
      <div
        className="fixed inset-0 bg-black/50"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div
        className="relative z-10 bg-white rounded-lg shadow-lg w-full max-w-2xl p-6"
        role="document"
      >
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children, className }: DialogHeaderProps) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function DialogTitle({ children, className }: DialogTitleProps) {
  return <h2 className={cn('text-xl font-bold', className)}>{children}</h2>;
}

export function DialogDescription({
  children,
  className,
}: DialogDescriptionProps) {
  return <p className={cn('text-sm text-gray-500', className)}>{children}</p>;
}

export function DialogContent({ children, className }: DialogContentProps) {
  return <div className={cn('space-y-4', className)}>{children}</div>;
}
