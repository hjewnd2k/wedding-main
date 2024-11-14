import { useMediaQuery } from './useMediaQuery';

export const useDevices = () => {
  const isSmall = useMediaQuery('(min-width: 640px)');
  const isMedium = useMediaQuery('(min-width: 768px)');
  const isLarge = useMediaQuery('(min-width: 1024px)');

  return {
    isSmall,
    isMedium,
    isLarge,
  };
};
