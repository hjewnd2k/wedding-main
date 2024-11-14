'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { useResizeObserver } from '@/hooks';
import { cn } from '@/lib/utils';

import { Navigation } from './Navigation';
import ShadeLeft from '/public/images/header/shade-left.png';
import ShadeRight from '/public/images/header/shade-right.png';
import Logo from '/public/images/logo.png';

type Props = {
  className?: string;
};
export const Header = ({ className }: Props) => {
  const ref = useRef<HTMLElement>(null);

  const { height = 0 } = useResizeObserver({
    ref,
    box: 'border-box',
  });

  const [active, setActive] = useState<boolean>(false);
  const [activeSub, setActiveSub] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const triggerPosition = height + 100;
      const triggerPositionSub = height + 60;

      if (scrollPosition > triggerPosition) {
        setActive(true);
      } else {
        setActive(false);
      }
      if (scrollPosition > triggerPositionSub) {
        setActiveSub(true);
      } else {
        setActiveSub(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, [height]);

  return (
    <header ref={ref} className={cn('h-20 py-2 md:h-32', className)}>
      <div
        className={cn(
          'z-30 flex lg:justify-between',
          activeSub &&
            'fixed -top-52 left-0 z-30 h-20 w-full bg-background py-2 shadow-md duration-500 md:h-32',
          active && 'translate-y-52',
        )}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="z-10 hidden w-40 will-change-transform-opacity lg:block"
        >
          <Image src={ShadeLeft} alt="Wedding Shade Left" priority />
        </motion.div>
        <div className="flex h-full w-full items-center justify-between px-5 sm:px-10 md:flex-col">
          <Link href="/" className="w-52 focus-visible:outline-none md:w-64">
            <Image
              src={Logo}
              alt="Wedding Logo"
              className="object-cover"
              priority
            />
          </Link>
          <Navigation />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="z-10 hidden w-40 will-change-transform-opacity lg:block"
        >
          <Image src={ShadeRight} alt="Wedding Shade Left" priority />
        </motion.div>
      </div>
    </header>
  );
};
