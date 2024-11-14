import * as React from 'react';

import { cn } from '@/lib/utils';

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement>;

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, ...props }, ref) => {
    const leaves = Array.from({ length: 8 }).map((_, key) => (
      <span
        key={key}
        className="absolute left-[calc(50%-12.5%/2)] top-0 h-full w-[12.5%] animate-spinner-leaf-fade"
        style={{
          transform: `rotate(${key * 45}deg)`,
          animationDelay: `calc(-${
            8 - key
          } / 8 * var(--spinner-animation-duration))`,
        }}
      >
        <span className="block h-[30%] w-full rounded-[var(--radius-1)] bg-current" />
      </span>
    ));

    return (
      <span
        ref={ref}
        className={cn(
          'relative block size-6 rounded-full opacity-[var(--spinner-opacity)]',
          className,
        )}
        {...props}
      >
        {leaves}
      </span>
    );
  },
);

Spinner.displayName = 'Spinner';

export { Spinner };
