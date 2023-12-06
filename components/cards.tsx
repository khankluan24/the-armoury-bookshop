'use client';

import Image from 'next/image';

export default function Cards() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 sm:grid-cols-3">
        <div className="aspect-square rounded-md">
          <Image
            src="/ioann-mark-unsplash-book.jpg"
            width={500}
            height={500}
            priority
            alt="Ioaan Mark Unsplash Book"
            className="h-full w-full rounded-md object-cover object-bottom brightness-50"
          />
        </div>
        <div className="aspect-square rounded-md">
          <Image
            src="/sincerely-media-unsplash-book.jpg"
            width={500}
            height={500}
            priority
            alt="Sincerely Media Unsplash Book"
            className="h-full w-full rounded-md object-cover brightness-50"
          />
        </div>
        <div className="aspect-square rounded-md">
          <Image
            src="/studio-media-unsplash-book.jpg"
            width={500}
            height={500}
            priority
            alt="Studio Media Unsplash Book"
            className="h-full w-full rounded-md object-cover brightness-50"
          />
        </div>
      </div>
    </div>
  );
}
