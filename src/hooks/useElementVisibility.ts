import { useCallback, useEffect, useState } from 'react';

import { TabType } from '@/types';

import { useDevices } from './useDevices';

export const useElementVisibility = (id: TabType) => {
  const { isMedium } = useDevices();
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityCheck = useCallback(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const elementTop = element.getBoundingClientRect().top;
    setIsVisible(isMedium ? elementTop <= 153 : elementTop <= 101);
  }, [id, isMedium]);

  useEffect(() => {
    handleVisibilityCheck();
    handleVisibilityCheck();

    window.addEventListener('scroll', handleVisibilityCheck);
    window.addEventListener('resize', handleVisibilityCheck);

    return () => {
      window.removeEventListener('scroll', handleVisibilityCheck);
      window.removeEventListener('resize', handleVisibilityCheck);
    };
  }, [handleVisibilityCheck]);

  return { isVisible };
};
