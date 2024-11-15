import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';
import Image from 'next/image';

import { SectionTitle } from '@/components/common';
import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

import LoveHistory1 from '/public/images/home/love-history/1.jpg';
import LoveHistory2 from '/public/images/home/love-history/2.jpg';
import LoveHistory3 from '/public/images/home/love-history/3.jpg';
import ShapeLeft from '/public/images/home/love-history/shape-left.png';
import ShapeRight from '/public/images/home/love-history/shape-right.png';

const data = [
  {
    title: 'Chúng tôi gặp nhau thế nào',
    description:
      'Từ những ngày đầu bước vào giảng đường đại học, chúng tôi gặp nhau tại khóa học quân sự của trường. Từ đó, chúng tôi đã đồng hành cùng nhau qua từng bước ngoặt của cuộc sống. Sáu năm trôi qua, tình yêu giữa chúng tôi không ngừng lớn dần, ngày càng nồng nàn và vững bền. Giờ đây, chúng tôi sẵn sàng cùng nhau bước tiếp trên hành trình hạnh phúc, tiến tới một tương lai đầy hy vọng và những ước mơ chung.',
    image: LoveHistory1,
    shade: (
      <div className="absolute -left-14 -top-14">
        <Image src={ShapeLeft} alt="Shape" priority className="w-56" />
      </div>
    ),
  },
  {
    title: 'Tôi đã cầu hôn, Cô ấy đã đồng ý',
    description: 'Đó là một buổi tối tuyệt vời vào ngày 28 tháng 9 năm 2024.',
    image: LoveHistory2,
    shade: (
      <div className="absolute -right-16 -top-16">
        <Image src={ShapeRight} alt="Shape" priority className="w-56" />
      </div>
    ),
  },
  {
    title: 'Ngày đính hôn của chúng tôi',
    description:
      'Ngày đính hôn của chúng tôi sẽ được tổ chức vào ngày 21 tháng 12 năm 2024. Khoảnh khắc ngọt ngào mở đầu cho hành trình yêu thương, trước khi chúng tôi cùng nhau bước vào lễ cưới tuyệt đẹp, đánh dấu một chương mới trong câu chuyện tình yêu trọn đời.',
    image: LoveHistory3,
    shade: (
      <div className="absolute -left-24 -top-16">
        <Image src={ShapeLeft} alt="Shape" priority className="w-56" />
      </div>
    ),
  },
];

export const LoveStory = () => {
  return (
    <section id="loveStory" className="container overflow-hidden">
      <SectionTitle title="STORY" description="Câu chuyện tình yêu" />
      <div className="relative mx-auto mt-16 flex max-w-[1200px] flex-col gap-y-20 sm:mt-12 md:gap-y-6 md:py-20 xl:mt-20">
        {data.map(({ title, description, image, shade }, index) => (
          <div
            key={index}
            className={cn(
              'relative flex flex-col items-center justify-center gap-x-0 gap-y-6 md:flex-row md:gap-x-28 md:gap-y-0 lg:gap-x-40',
              index % 2 !== 0 && 'md:flex-row-reverse',
            )}
          >
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="absolute left-1/2 top-1/2 z-[1] hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-beige-rose bg-white will-change-opacity md:flex"
            >
              <HeartIcon className="text-beige-rose" />
            </motion.div>
            <div
              className={cn(
                'flex w-full flex-1 justify-center md:justify-end',
                index % 2 !== 0 && 'md:justify-start',
              )}
            >
              <motion.div
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
                className="relative aspect-square w-full max-w-[280px] will-change-transform-opacity lg:max-w-[300px]"
              >
                <Image
                  src={image}
                  alt={title}
                  className="h-full w-full overflow-hidden rounded-full object-cover"
                />
                <div className="absolute left-1/2 top-1/2 size-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border" />
                {shade}
              </motion.div>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                x: index % 2 !== 0 ? 30 : -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.75,
              }}
              viewport={{ once: true }}
              className={cn(
                'w-full flex-1 space-y-4 bg-secondary px-8 py-8 text-center will-change-transform-opacity sm:px-16 sm:py-10 md:bg-transparent md:px-0 md:py-0 md:text-left',
                index % 2 !== 0 && 'md:text-right',
              )}
            >
              <Typography variant="h5" className="font-sail">
                {title}
              </Typography>
              <Typography variant="sub" className="text-steel-gray">
                {description}
              </Typography>
            </motion.div>
          </div>
        ))}
        {/* ----- */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.25,
          }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 rounded bg-beige-rose will-change-opacity md:block"
        />
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.25,
          }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-0 hidden size-6 -translate-x-1/2 rounded-full border-[5px] border-beige-rose bg-white will-change-opacity md:block"
        />
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.25,
          }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-1/2 hidden size-6 -translate-x-1/2 rounded-full border-[5px] border-beige-rose bg-white will-change-opacity md:block"
        />
      </div>
    </section>
  );
};
