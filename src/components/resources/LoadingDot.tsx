import * as React from 'react';

import { cn } from '@/lib/utils';

export const LoadingDot = () => {
  return (
    <div className="flex h-full items-center justify-center gap-x-2">
      {Array.from({ length: 3 }).map((_, key) => (
        <div
          key={key}
          className={cn('h-[3px] w-[3px] animate-scale rounded-full bg-white')}
          style={{
            animationDelay: `${key * 200}ms`,
          }}
        />
      ))}
    </div>
  );
};
