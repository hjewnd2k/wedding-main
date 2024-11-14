import Image from 'next/image';

import PreLoader from '/public/gif/preloader.gif';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-olive-gray">
      <Image src={PreLoader} alt="Preloader" priority />
    </div>
  );
}
