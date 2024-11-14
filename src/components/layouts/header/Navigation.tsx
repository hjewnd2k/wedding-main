'use client';

import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';
import { useDevices, useElementVisibility } from '@/hooks';
import { cn } from '@/lib/utils';
import { TabType } from '@/types';

import Logo from '/public/images/logo.png';

const links: { label: string; id: TabType }[] = [
  {
    label: 'Thời gian',
    id: 'saveTheDate',
  },
  {
    label: 'Cô dâu & Chú rể',
    id: 'brideAndGroom',
  },
  {
    label: 'Câu chuyện tình yêu',
    id: 'loveStory',
  },
  {
    label: 'Album',
    id: 'album',
  },
  {
    label: 'Gửi lời chúc',
    id: 'sendWishes',
  },
  {
    label: 'Sự kiện',
    id: 'event',
  },
];

export const Navigation = () => {
  const { isMedium } = useDevices();
  const [tab, setTab] = useState<TabType>('saveTheDate');

  const { isVisible: isSaveTheDate } = useElementVisibility('saveTheDate');
  const { isVisible: isBrideAndGroom } = useElementVisibility('brideAndGroom');
  const { isVisible: isLoveStory } = useElementVisibility('loveStory');
  const { isVisible: isAlbum } = useElementVisibility('album');
  const { isVisible: isSendWishes } = useElementVisibility('sendWishes');
  const { isVisible: isEvent } = useElementVisibility('event');

  useEffect(() => {
    if (isSaveTheDate) {
      setTab('saveTheDate');
    }
    if (isBrideAndGroom) {
      setTab('brideAndGroom');
    }
    if (isLoveStory) {
      setTab('loveStory');
    }
    if (isAlbum) {
      setTab('album');
    }
    if (isSendWishes) {
      setTab('sendWishes');
    }
    if (isEvent) {
      setTab('event');
    }
  }, [
    isSaveTheDate,
    isBrideAndGroom,
    isLoveStory,
    isAlbum,
    isSendWishes,
    isEvent,
  ]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: TabType,
  ) => {
    e.preventDefault();

    const targetElement = document.getElementById(id);

    if (targetElement) {
      const yOffset = isMedium ? -152 : -100;
      const yPosition =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav className="hidden md:flex">
        {links.map(({ label, id }) => (
          <div key={id} className="group relative">
            <Button
              variant="link"
              size="lg"
              className="px-3.5 hover:no-underline"
              asChild
            >
              <Link href={`#${id}`} onClick={(e) => handleClick(e, id)}>
                {label}
              </Link>
            </Button>
            <div
              className={cn(
                'absolute inset-x-1/2 bottom-0 size-0.5 -translate-x-1/2 bg-primary opacity-0 duration-200 group-hover:w-full group-hover:opacity-100',
                tab === id && 'w-full opacity-100',
              )}
            />
          </div>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger className="flex md:hidden" asChild>
          <Button name="open-menu" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="w-full focus-visible:outline-none">
            <Image
              src={Logo}
              alt="Wedding Logo"
              className="rounded-md object-cover"
              priority
            />
          </Link>
          <SheetHeader className="mt-1.5 items-center">
            <SheetTitle>Phan Điện ❤️ Vũ Anh</SheetTitle>
            <SheetDescription />
          </SheetHeader>
          <div className="mt-2 flex flex-col">
            {links.map(({ label, id }, index) => (
              <Button
                key={index}
                variant={tab === id ? 'default' : 'ghost'}
                size="lg"
                asChild
              >
                <Link href={`#${id}`} onClick={(e) => handleClick(e, id)}>
                  {label}
                </Link>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
