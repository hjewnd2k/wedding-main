'use client';

import { useState } from 'react';
import Snowfall from 'react-snowfall';

import { AudioPlayer } from '@/components/common';
import { useDevices, useIsomorphicLayoutEffect } from '@/hooks';

import { Album } from './Album';
import { BrideAndGroom } from './BrideAndGroom';
import { Event } from './Event';
import { LoveStory } from './LoveStory';
import { SaveTheDate } from './SaveTheDate';
import { SendWishes } from './SendWishes';
import { VideoWedding } from './VideoWedding';
import Snow1 from '/public/images/snow/1.webp';
import Snow2 from '/public/images/snow/2.webp';
import Snow3 from '/public/images/snow/3.webp';
import Snow4 from '/public/images/snow/4.webp';
import Snow5 from '/public/images/snow/5.webp';
import Snow6 from '/public/images/snow/6.webp';
import Snow7 from '/public/images/snow/7.webp';
import Snow8 from '/public/images/snow/8.webp';
import Snow9 from '/public/images/snow/9.webp';

export const Home = () => {
  const { isSmall } = useDevices();

  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useIsomorphicLayoutEffect(() => {
    const loadedImages = [
      Snow1,
      Snow2,
      Snow3,
      Snow4,
      Snow5,
      Snow6,
      Snow7,
      Snow8,
      Snow9,
    ].map((image, index) => {
      const img = document.createElement('img');
      img.src = image.src;
      img.width = image.width;
      img.height = image.height;
      img.alt = `Snow ${index}`;

      return img;
    });
    setImages(loadedImages);
  }, []);

  return (
    <>
      <div className="space-y-16 sm:space-y-24 xl:space-y-32">
        <SaveTheDate />
        <BrideAndGroom />
        <VideoWedding />
        <LoveStory />
        <Album />
        <SendWishes />
        <Event />
      </div>
      <AudioPlayer />
      <Snowfall
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
        }}
        snowflakeCount={isSmall ? 80 : 60}
        images={images}
        radius={isSmall ? [16, 20] : [15, 30]}
        wind={isSmall ? [-0.5, 1] : [0, 0.25]}
      />
    </>
  );
};
