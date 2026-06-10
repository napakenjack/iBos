import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 uppercase tracking-wider",
        {
          "bg-slate-100 text-slate-600": variant === 'default' || variant === 'secondary',
          "bg-rose-100 text-rose-700": variant === 'destructive',
          "text-slate-950 border border-slate-200": variant === 'outline',
          "bg-emerald-100 text-emerald-700": variant === 'success',
          "bg-amber-100 text-amber-700": variant === 'warning',
          "bg-sky-100 text-sky-700": variant === 'info',
        },
        className
      )}
      {...props}
    />
  );
}
