import { ReactNode, useState } from 'react';

import { cn } from '@/lib/utils';

import Welcome from './Welcome';
import { Footer } from './footer';
import { Header } from './header';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isStart, setIsStart] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleStart = () => {
    setIsStart(true);
    setTimeout(() => {
      setIsHidden(true);
      document.dispatchEvent(
        new CustomEvent('AUDIO_PLAY', {
          detail: {
            isPlay: true,
          },
        }),
      );
    }, 3000);
  };

  return (
    <>
      {!isHidden && (
        <Welcome
          onClick={handleStart}
          className={cn(isStart && 'animate__fadeOutUp')}
        />
      )}
      <Header className={cn(!isHidden ? 'hidden' : 'animate__fadeInUp')} />
      <main
        className={cn(
          isStart
            ? `animated ${!isHidden ? 'animate__fadeInUp' : ''}`
            : 'hidden',
        )}
      >
        {children}
      </main>
      <Footer className={cn(!isHidden ? 'hidden' : 'animate__fadeInUp')} />
    </>
  );
};
