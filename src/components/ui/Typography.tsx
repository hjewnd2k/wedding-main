import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const TextElementMap = {
  default: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  sub: 'p',
};

const typographyVariants = cva('', {
  variants: {
    variant: {
      default: 'text-sm sm:text-base',
      h1: 'text-5xl sm:text-6xl lg:text-7xl font-extrabold',
      h2: 'text-4xl sm:text-5xl lg:text-6xl font-bold',
      h3: 'text-3xl sm:text-4xl lg:text-5xl font-bold',
      h4: 'text-2xl sm:text-3xl lg:text-4xl font-semibold',
      h5: 'text-xl sm:text-2xl lg:text-3xl font-semibold',
      h6: 'text-lg sm:text-xl lg:text-2xl font-semibold',
      sub: 'text-base sm:text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface TypographyProps
  extends React.ParamHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : TextElementMap[variant || 'default'];

    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
