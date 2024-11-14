import { useCallback, useEffect, useState } from 'react';

import { CarouselApi } from '@/components/ui';

export const useCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
  const [canScrollNext, setCanScrollNext] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const handlePrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const handleNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleSelect = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  const onInit = useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    onInit(api);
    onSelect(api);

    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onInit, onSelect]);

  return {
    setApi,
    handleNext,
    handlePrevious,
    canScrollNext,
    canScrollPrev,
    handleSelect,
    selectedIndex,
    scrollSnaps,
  };
};
