import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:pointer-events-none disabled:opacity-50 tracking-tight",
          {
            "bg-sky-500 text-white shadow-lg shadow-sky-500/20 hover:bg-sky-400": variant === 'default',
            "bg-rose-500 text-white shadow-lg shadow-rose-500/20 hover:bg-rose-400": variant === 'destructive',
            "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900": variant === 'outline',
            "bg-slate-100 text-slate-700 hover:bg-slate-200": variant === 'secondary',
            "hover:bg-slate-100 text-slate-600 hover:text-slate-900": variant === 'ghost',
            "text-sky-600 underline-offset-4 hover:underline": variant === 'link',
            "h-10 px-4 py-2": size === 'default',
            "h-8 rounded-md px-3 text-xs": size === 'sm',
            "h-12 rounded-xl px-8": size === 'lg',
            "h-10 w-10": size === 'icon',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
