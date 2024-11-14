import { motion } from 'framer-motion';
import Image from 'next/image';
import { Fragment } from 'react';

import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

import Bride from '/public/images/home/bride-and-groom/bride.png';
import Groom from '/public/images/home/bride-and-groom/groom.png';
import QRBride from '/public/images/home/bride-and-groom/qr-bride.png';
import QRGroom from '/public/images/home/bride-and-groom/qr-groom.png';

export const BrideAndGroom = () => {
  const data = [
    {
      name: 'Nguyễn Thị Thanh Huyền',
      label: 'Cô dâu',
      bank: {
        accout: '19034571858013',
        qrCode: QRBride,
      },
    },
    {
      name: 'Phạm Huy Hiệu',
      label: 'Chú rể',
      bank: {
        accout: '106869368789',
        qrCode: QRGroom,
      },
    },
  ];

  const images = [Bride, Groom];

  return (
    <section id="brideAndGroom" className="container">
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        {data.map(({ bank, label, name }, index) => (
          <Fragment key={index}>
            <motion.div
              initial={{
                opacity: 0,
                x: index === 0 ? -30 : 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              viewport={{ once: true }}
              className={cn(
                'flex flex-col items-center will-change-transform-opacity',
                index === 0 ? 'lg:items-end' : 'lg:items-start',
              )}
            >
              <Typography
                variant="h4"
                className="font-greatVibes text-rose-pink"
              >
                {name}
              </Typography>
              <Typography variant="h6" className="mt-4 font-sail">
                {label}
              </Typography>
              <Typography
                variant="sub"
                className="mt-1 font-semibold text-steel-gray"
              >
                STK: {bank.accout}
              </Typography>
              <div className="mt-4 aspect-square w-full max-w-[180px] overflow-hidden sm:max-w-[210px] xl:max-w-[250px]">
                <Image src={bank.qrCode} alt={name} className="w-full" />
              </div>
            </motion.div>
            {index === 0 && (
              <div className="flex w-full max-w-[600px] flex-1 -space-x-8 sm:-space-x-14 xl:max-w-[800px]">
                {images.map((image, subIndex) => (
                  <motion.div
                    key={subIndex}
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.75,
                    }}
                    viewport={{ once: true }}
                    className="relative aspect-square w-full overflow-hidden rounded-full will-change-transform-opacity"
                  >
                    <Image
                      src={image}
                      alt={name}
                      priority
                      className="gride-and-groom-animate h-full w-full object-cover"
                    />
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[calc(100%-1.5rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border sm:w-[calc(100%-3rem)]" />
                  </motion.div>
                ))}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
