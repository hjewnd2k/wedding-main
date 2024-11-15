import { motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import ImgsViewer from 'react-images-viewer';
import Gallery from 'react-photo-gallery';

import { Button } from '@/components/ui';
import { useDevices } from '@/hooks';

import Image1 from '/public/images/home/album/1.jpg';
import Image2 from '/public/images/home/album/2.jpg';
import Image3 from '/public/images/home/album/3.jpg';
import Image4 from '/public/images/home/album/4.jpg';
import Image5 from '/public/images/home/album/5.jpg';
import Image6 from '/public/images/home/album/6.jpg';
import Image7 from '/public/images/home/album/7.jpg';
import Image8 from '/public/images/home/album/8.jpg';
import Image9 from '/public/images/home/album/9.jpg';
import Image10 from '/public/images/home/album/10.jpg';
import Image11 from '/public/images/home/album/11.jpg';
import Image12 from '/public/images/home/album/12.jpg';
import Image13 from '/public/images/home/album/13.jpg';
import Image14 from '/public/images/home/album/14.jpg';
import Image15 from '/public/images/home/album/15.jpg';
import Image16 from '/public/images/home/album/16.jpg';
import Image17 from '/public/images/home/album/17.jpg';
import Image18 from '/public/images/home/album/18.jpg';
import Image19 from '/public/images/home/album/19.jpg';

export const Album = () => {
  const { isSmall } = useDevices();
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  const data = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
  ];

  return (
    <section id="album" className="container">
      <Gallery
        photos={data}
        renderImage={(props) => (
          <motion.div
            key={props.index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="group relative m-[2px] will-change-transform-opacity"
          >
            <Image
              src={props.photo.src}
              width={props.photo.width}
              height={props.photo.height}
              alt={`Album Image ${props.index + 1}`}
              priority
            />
            <Button
              name={`preview-image-${props.index + 1}`}
              variant="ghost"
              className="absolute left-1/2 top-1/2 flex size-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-none opacity-0 duration-200 group-hover:bg-accent/50 group-hover:opacity-100"
              onClick={() => {
                setIsOpen(true);
                setCurrImg(props.index);
              }}
            >
              <PlusIcon className="size-10 stroke-[1.5px] opacity-0 duration-200 group-hover:opacity-100" />
            </Button>
          </motion.div>
        )}
        onClick={(_, { index }) => {
          setIsOpen(true);
          setCurrImg(index);
        }}
      />
      <ImgsViewer
        imgs={data}
        currImg={currImg}
        showThumbnails={false}
        spinnerSize={isSmall ? 20 : 40}
        isOpen={isOpen}
        onClickPrev={() => setCurrImg(currImg - 1)}
        onClickNext={() => setCurrImg(currImg + 1)}
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
};
