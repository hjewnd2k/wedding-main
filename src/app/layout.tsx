import type { Metadata } from 'next';

import { greatVibes, jost, sail } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Thiệp cưới Thanh Huyền ❤️ Huy Hiệu',
  description:
    'Thay cho tấm thiệp hồng trao tay. Vợ chồng chúng tôi gửi tới bạn chiếc thiệp online xinh xinh này. Mong bạn bớt chút thời gian quý báu của mình tới dự tiệc, rất cảm ơn và vinh dự khi bạn hiện diện tại lễ cưới của vợ chồng chúng tôi.',
  openGraph: {
    title: 'Thiệp cưới Thanh Huyền ❤️ Huy Hiệu',
    description:
      'Thay cho tấm thiệp hồng trao tay. Vợ chồng chúng tôi gửi tới bạn chiếc thiệp online xinh xinh này. Mong bạn bớt chút thời gian quý báu của mình tới dự tiệc, rất cảm ơn và vinh dự khi bạn hiện diện tại lễ cưới của vợ chồng chúng tôi.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          jost.variable,
          greatVibes.variable,
          sail.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
