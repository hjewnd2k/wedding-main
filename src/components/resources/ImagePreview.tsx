import Image, { ImageProps } from 'next/image';
import * as React from 'react';

import { Spinner } from './Spinner';

const ImagePreview = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ alt, src, ...props }, ref) => {
    const [loading, setLoading] = React.useState(true);

    return (
      <div className="relative h-full w-full">
        <Image
          ref={ref}
          src={src}
          alt={alt}
          {...props}
          onLoad={() => setLoading(false)}
        />
        {loading && (
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
            <Spinner />
          </div>
        )}
      </div>
    );
  },
);

ImagePreview.displayName = 'ImagePreview';

export { ImagePreview };
