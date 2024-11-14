import type { Metadata } from 'next';

import { greatVibes, jost, sail } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Huy Hiệu ❤️ Thanh Huyền',
  description: 'We Are Getting Married December 22, 2024',
  openGraph: {
    title: 'Huy Hiệu ❤️ Thanh Huyền',
    description: 'We Are Getting Married December 22, 2024',
    images: '/opengraph-image.png',
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
